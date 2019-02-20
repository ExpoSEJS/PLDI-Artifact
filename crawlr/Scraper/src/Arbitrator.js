const Scheduler = require('./Sched.js');
const Download = require('./Download.js');

let found = {};
let i = 0;

module.exports = function(pkgname) {
	let local_name = pkgname.split('@')[0];
	
	if (i < 2000000 && local_name && !found[local_name]) {
//		console.log('Scheduling ' + local_name);
		Scheduler.queue(Download.bind(this, local_name));
		found[local_name] = true;
		i++;
	}

	Scheduler.print();

	next = false;
}

module.exports.Scheduler = Scheduler;
