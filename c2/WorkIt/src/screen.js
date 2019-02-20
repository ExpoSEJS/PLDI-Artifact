const blessed = require('blessed');

module.exports = function(onds) {

	// Create a screen object.
	var screen = blessed.screen({
	  smartCSR: true
	});

	// Create a box perfectly centered horizontally and vertically.
	var state_box = blessed.box({
	  top: '0%',
	  left: 'center',
	  width: '90%',
	  height: '15%',
	  content: '',
	  tags: true,
	  border: {
	    type: 'line'
	  },
	  style: {
	    fg: 'white',
	    bg: 'magenta',
	    border: {
	      fg: '#f0f0f0'
	    }
	  }
	});

	var stats_box = blessed.box({
	  top: '15%',
	  left: 'center',
	  width: '100%',
	  height: '85%',
	  content: '',
	  tags: true,
	  border: {
	    type: 'line'
	  },
	  style: {
	    fg: 'white',
	    bg: 'black',
	    border: {
	      fg: '#f0f0f0'
	    }
	  }
	});

	screen.append(state_box);
	screen.append(stats_box);

	screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	  return process.exit(0);
	});

	screen.on('destroy', onds);

	return {
		state: function(s) {
			state_box.content = '' + s;
		},
		stats: function(s) {
			stats_box.content = '' + s;
		},
		destroy: function() {
			if (!screen.destroyed) {
				screen.destroy();
			}
		},
		draw: function() {
			screen.render();
		}
	};
}
