const fs = require('fs');
const Download = require('./Download.js');
const Arbitrator = require('./Arbitrator.js');
const stream = require('clarinet').createStream();

let next = false;

//stream.on('openobject', function() { depth++; });
//stream.on('closeobject', function() { depth--; });

stream.on("key", function(node) {
	if (node == 'name') {
		next = true; 
	}
});

let i = 0;

stream.on('value', function(node) {
	if (i < 2000000 && next && typeof node == "string") { 
		Arbitrator(node);
		i++;
		next = false;
	}

	Arbitrator.Scheduler.print();
});

const dbPath = process.argv[process.argv.length - 1];

console.log('Scanning Database ' + dbPath);

fs.createReadStream(dbPath).pipe(stream);
