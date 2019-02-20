module.exports = function() {
	let unique_list = {};
	let totalcnt = 0;

	return {
		add: function(pattern) {
			totalcnt++;
			unique_list[pattern] = unique_list[pattern] ? unique_list[pattern] + 1 : 1;
		},

		final: function() {
			return unique_list;
		},

		total: function() {
			return totalcnt;
		}
	};
};