const child_process = require('child_process');
const Scheduler = require('./Sched.js');

module.exports = function(pkg, fin) {
 const DEFAULT_TIMEOUT = 60 * 1000 * 5;
 let timeout;

 let child = child_process.spawn('./npm-download', [pkg]).on('exit',  function() {
 	//Clear the kill timeout
 	clearTimeout(timeout);
 	fin();
	Scheduler.print();
 });

 //Create a DEFAULT_TIMEOUT SIGKILL timer
 timeout = setTimeout(function() {
	console.log('\nTimed out on ' + pkg);
 	child.kill();
 }, DEFAULT_TIMEOUT);
}
