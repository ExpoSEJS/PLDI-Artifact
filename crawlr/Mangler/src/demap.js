module.exports = function(construct_new) {

	let map = {};

	return {
		get: function(name) {
			let n;

			if (map[name]) {
				n = map[name];
			} else {
				n = construct_new();
				map[name] = n;
			}

			return n;
		},
		all: function() {
			return map;
		}
	};
}
