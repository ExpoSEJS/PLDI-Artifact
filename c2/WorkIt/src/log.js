const fs = require('fs');

function Log() {
	let file;
	let fraw;

	return {
		open: function(f) {
			file = fs.openSync(f, 'w');
			return this;
		},

		out: function(d) {
			fs.write(file, d + '\n', function(err) {});
		},

		done: function() {
			fs.closeSync(file);
		}
	}
}

module.exports = Log();