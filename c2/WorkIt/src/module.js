const fork = require('child_process').fork;
const Keys = require('keys');

const MODULE_PATH = 'libs/modalyzer/src/main.js';

const SECONDS = 1000;
const MINUTES = SECONDS * 60;

module.exports = function(screen, stats, log, scheduler) {

    let last_mods_done = 0;
    let last_files = 0;
    let startTime = (new Date()).getTime();

    setInterval(function() {
        
        let endTime = (new Date()).getTime();
        let time_delta_seconds = (endTime - startTime) / 1000;

        function Done(total) {
            return total / time_delta_seconds;
        }

        stats.results()[Keys.MODULES_PER_SECOND] = Done(last_mods_done);

        let current_files = stats.results()[Keys.FILE_TAG];
        stats.results()[Keys.FILES_PER_SECOND] = Done(current_files - last_files);
        
        last_mods_done = 0;
        last_files = current_files;
        startTime = endTime;
        screen.draw();
    }, 1 * SECONDS);

    return function(item, done) {
        
        let timeoutHandle;
        
        let prc = fork(MODULE_PATH, [item]);

        prc.on('message', (stat) => {
            if (stat.tag === 'stat') {
                stats.merge(stat);
                screen.stats(stats.as_text());
                prc.send({ tag: 'ack' });
            } else {
                log.out(JSON.stringify(stat));
            }
        }).on('exit', function() {
            last_mods_done++;
            clearTimeout(timeoutHandle);
            done();
            screen.state(scheduler.state());
        });

        timeoutHandle = setTimeout(function() {
            stats.found(Keys.MODULE_TIMEOUTS);
            prc.kill();
        }, 3 * MINUTES);
    };
}