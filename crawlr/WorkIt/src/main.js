if (process.argv.length != 4) {
	console.log('Incorrect number of args');
	process.exit(1);
	return;
}

const target = process.argv[process.argv.length - 2];
const ofile = process.argv[process.argv.length - 1];

const Walker = require('walker');
const Keys = require('keys');
const Stats = require('stats').from_keys(Keys);

const Screen = require('./screen')(function() {
	console.log(JSON.stringify(Stats.results()));
});

const log = require('./log').open(ofile);

let statsInterval;

function LogStats() {
	log.out(JSON.stringify(Stats.results()));
}

statsInterval = setInterval(LogStats, 1000 * 60 * 5);

const Scheduler = require('scheduler')(24, function() {
	clearInterval(statsInterval);
	LogStats();
	log.done();
});

const Module = require('./module')(Screen, Stats, log, Scheduler);

Screen.draw();

Walker(target, false, function(err, list) {
  list.forEach(item => Scheduler.queue(Module.bind(this, item)));
  Screen.draw();
});
