const {
    spawn,
    fork
} = require('child_process');
const fs = require('fs');

const TARGET_SCRIPT = './test';

const SECONDS = 1000;
const MINUTES = SECONDS * 60;

function DecideCoverage(text, cb) {
    const re_cov = /Total Coverage: ([0-9]+(.[0-9]+)?)%$/m;
    const matched_cov = re_cov.exec(text);
    if (matched_cov) {
        console.log(JSON.stringify(matched_cov));
        cb(null, matched_cov[1]);
    } else {
        cb('Error! could not match coverage with ' + text);
    }
}

function RunCov(target, envChange, done) {
    let output = '';

    let newEnv = JSON.parse(JSON.stringify(process.env));

    newEnv['TESTMODE'] = 'ALL_DEFAULT';

    if (envChange) {
        newEnv[envChange] = '1';
        newEnv['TESTMODE'] = envChange;
    }

    let run = spawn('./test', [target], {
        env: newEnv
    });

    let outData = '';

    run.stdout.on('data', data => {
        outData += ('' + data);
    });

    run.on('exit', () => {
        console.log('Done');
        DecideCoverage(outData, function(err, coverage) {
            if (err) {
                console.log(err);
                done(0);
            } else {
                console.log('Got coverage: ' + Number.parseFloat(coverage));
                done(Number.parseFloat(coverage));
            }
        });
    });
}

function logErr(log, target, err) {
    console.log('Finished stage of ' + target + ' at ' + new Date());
    if (err) {
        console.log('ERROR: ' + target + ' ' + err);
        log.out('ERROR: ' + target);
    }
}

module.exports = function(target, log, done) {
    console.log('Start ' + target);
    RunCov(target, 'ALL', function(coverage_final, r, err) {
        logErr(log, target, err);
        log.out('DONE:' + target + ' ' + '0' + ' ' + '0' + ' ' + '0' + ' ' + coverage_final);
        RunCov(target, 'DISABLE_REGULAR_EXPRESSIONS', function(coverage_no_re, r, err) {
            logErr(log, target, err);
            if (coverage_final - coverage_no_re != 0) {
                    RunCov(target, 'DISABLE_CAPTURE_GROUPS', function(coverage_no_cap, r, err) {
                        logErr(log, target, err);
                        RunCov(target, 'DISABLE_REFINEMENTS', function(coverage_no_ref, r, err) {
                            logErr(log, target, err);
                            log.out('DONE:' + target + ' ' + coverage_no_re + ' ' + coverage_no_cap + ' ' + coverage_no_ref + ' ' + coverage_final);
                            done();
                        });
                    });
            } else {
                log.out('DONE:' + target + ' ' + coverage_no_re + ' ' + '0' + ' ' + '0' + ' ' + coverage_final);
                done();
            }
        });
    });
}
