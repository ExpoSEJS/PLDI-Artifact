function Stats() {

	let r = {
		tag: 'stat'
	};

	return {

		register(key) {
			r[key] = 0;
		},

		found(key) {
			r[key] ? r[key]++ : r[key] = 1;
		},

		regex: function() {
			r.regexs++;
		},

		results: function() {
			return r;
		},

		from_keys: function(keys) {
			for (let i in keys) {
				this.register(keys[i]);
			}
			return this;
		},

		merge: function(o) {
			for (let i in o) {
				if (typeof o[i] === 'number') {
					//Add if exists, replace if not exist
					r[i] ? r[i] += o[i] : r[i] = o[i];
				}
			}
		},

		as_text: function() {
			let s = '';
			let c = 0;
			for (let i in r) {
				if (typeof r[i] === 'number') {
					s += (c == 0 ? '' : ', ') + i + ': ' + r[i];
					c++;
				}
			}
			return s;
		}
	};
}

module.exports = Stats();