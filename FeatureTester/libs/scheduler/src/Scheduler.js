function Scheduler(max, dcb) {

	let running = 0;
	let done = 0;
	let lq = [];

	return {

		queue: function(dofn) {
			lq.push(dofn);
		},

		_doneCallback: function() {
			done++;
			running--;
			this.start();
			this._checkDone();
		},

		_checkDone: function() {
			dcb && this.done() && dcb();
		},

		start: function() {
			while (running < max && !this.empty()) {
				running++;
				lq.shift()(this._doneCallback.bind(this));
			}
		},

		empty: function() {
			return lq.length == 0;
		},

		done: function() {
			return this.empty() && !running;
		},

		state: function() {
			return '[Running: ' + running + ', ' + done + ' done and ' + lq.length + ' queued]';
		},

		print: function() {
			console.log(this.state() + '\r');
		}
	}
}

module.exports = Scheduler;
