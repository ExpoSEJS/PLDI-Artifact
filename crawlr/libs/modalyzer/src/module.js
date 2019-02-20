
const fs = require('fs');
const Walker = require('walker');
const stats = require('stats');
const ParseFile = require('./file.js');
const keys = require('keys');

let cmod = '';

function extractRegex(filename, done) {
    stats.found(keys.FILE_TAG);

    fs.readFile(filename, 'utf8', function(err, data) {

        if (err) {
            stats.found(keys.READ_ERRORS);
            process.send({
                tag: 'error',
                e: '' + err + ' in ' + filename
            });
            done();
            return;
        }

        let nFound;

        try {
            nFound = ParseFile(data, cmod, filename);
            nFound && stats.found(keys.REGEX_IN_TAG);
        } catch (e) {
            stats.found(keys.ACORN_ERROR_COUNT);
            process.send({
                tag: 'error',
                e: '' + e + ' in ' + filename
            });
        }

        done();
    });
}

function filter(file) {
    return file && file.endsWith('.js');
}

function finishedCallback(done) {
    stats.results()[keys.REGEX_WITH_CAPTURE] && stats.found(keys.MODULES_WITH_CAPTURES);
    stats.results()[keys.REGEX_WITH_BREF] && stats.found(keys.MODULES_WITH_BREF);
    stats.results()[keys.REGEX_TAG] && stats.found(keys.MODULES_WITH_RE_TAG);
    stats.results()[keys.BACKREFERENCE_INSIDE_LOOP] && stats.found(keys.MODULES_WITH_LOOPED_BREF);
    done();
}

function readDir(dir, done) {
    stats.found(keys.MODULES_TAG);

    Walker(dir, true, function(err, list) {


        if (err) {
            stats.found(keys.MODULE_READ_ERRORS);
            process.send({
                tag: 'err',
                e: 'Error ' + err
            });
            done();
            return;
        }

        let finished = 0;
        let found = 0;

        if (list.length == 0) {
            stats.found(keys.COMPLETELY_EMPTY_MODULE);
            process.send({
                tag: 'nofi',
                e: 'No files in ' + dir
            });
        }

        list = list.filter(filter);

        if (list.length == 0) {
            stats.found(keys.EMPTY_MODULES);
            process.send({
                tag: 'nojs',
                e: 'No JS in ' + dir
            });
            done();
            return;
        }

        list.forEach(item => extractRegex('' + item, () => {
            if (++finished == list.length) {
                finishedCallback(done);
            }
        }));
    }, function(err) {
        stats.found(keys.PARTIAL_MODULE_READ_ERRORS);
        process.send({
            tag: 'err',
            e: 'Error ' + err
        });
    });

    return;
}

module.exports = function(dir, done) {

    cmod = dir;

    let statinf = fs.statSync(dir);

    if (!statinf || !statinf.isDirectory()) {
        stats.found(keys.MODULE_READ_ERRORS);
        done();
        return;
    }

    readDir(dir, done);
};