if (process.argv.length != 4) {
	console.log('Incorrect number of args');
	process.exit(1);
	return;
}

const target = process.argv[process.argv.length - 2];
const ofile = process.argv[process.argv.length - 1];

const Module = require('./module');

function resumeFrom(filename, done) {
	let walk = new (require('line-by-line'))(filename);
	
	let doneList = [];

	walk.on('line', function(line) {
		if (line.indexOf('DONE:') != -1) {
			let match = line.match(/^DONE:([^ ]+) /);
			if (match) {
				let name = match[1];
				doneList.push(name);
			}
		}
	});

	walk.on('end', function() {
		console.log('END');
		done(doneList);
	});
}

resumeFrom(ofile, function(doneList) {
	const log = require('./log').open(ofile);
	const Walker = new (require('line-by-line'))(target);

	console.log('Walker: ' + target);

	function RunTest(test, done) {
		console.log('Starting ' + test + ' ' + (new Date()));
		Module(test, log, done);
	}

	const Scheduler = require('scheduler')(process.env.FEATURETESTER_NUM_CONC, function() {});

	Walker.on('line', function(line) {
	  console.log(line);
	  let item = line.split(', ')[0].split('/');
	  item = item[item.length - 1];

	  if (!doneList.find(x => x === item)) {
	  	Scheduler.queue(RunTest.bind(this, item));
	  } else {
		//console.log('Skipping ' + item);
	  }
	});

	Walker.on('end', function() {
		console.log('END');
		Scheduler.start();
	});
});
