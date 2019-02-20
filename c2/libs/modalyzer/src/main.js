const Module = require('./module.js');
const stats = require('stats');

const targetPath = process.argv[process.argv.length - 1];

Module(targetPath, function() {
	process.send(stats.results())
});

let end = false;
process.on('message', v => end = true);
setInterval(() => end && process.exit(0), 250);