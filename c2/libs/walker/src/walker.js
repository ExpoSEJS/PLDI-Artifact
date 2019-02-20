const fs = require('fs');

function Walker(dir, recursive, done, errcb) {
    let results = [];

    fs.readdir(dir, function(err, list) {

        if (err) {
            return done(err);
        }

        let done_count = 0;

        if (!list.length) {
            return done(null, results);
        }

        function cb() {
            if (++done_count >= list.length) {
                done(null, results);
            }
        }

        list.forEach(file => {
            const path = dir + '/' + file;
            fs.stat(path, function(err, stat) {

                if (err) {
                    errcb && errcb(err);
                    return;
                }

                if (recursive && stat.isDirectory()) {
                    Walker(path, recursive, function(err, res) {
                        results = results.concat(res);
                        cb();
                    }, errcb);
                } else {
                    results.push(path);
                    cb();
                }
            });
        });
    });
}

module.exports = Walker;