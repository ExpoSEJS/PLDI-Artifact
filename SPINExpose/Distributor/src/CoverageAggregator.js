/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class Coverage {

	constructor() {
		this._current = {};
	}

	_getFile(file) {
		if (!this._current[file]) {
			this._current[file] = {
				smap: [],
				branches: []
			};
		}
		return this._current[file];
	}

	_addSMap(f, smap) {
		f.smap = smap;
	}

	_mergeBranches(f, branches) {
		for (let i in branches) {
			f.branches[i] = 1;
		}
	}

	/**
	 * Merges new coverage data from a path with existing data
	 */
	add(coverage) {
		for (let i in coverage) {
			let file = this._getFile(i);
			this._addSMap(file, coverage[i].smap);
			this._mergeBranches(file, coverage[i].branches);
		}
	}

	_results(file) {
		let found = 0;
		let total = 0;

		for (let i in file.smap) {
			total++;
			found = file.branches[i] ? found + 1 : found;
		}

		return {
			found: found,
			total: total,
			coverage: found / total
		}
	}

	final() {
		let results = [];

		for (let fidx in this._current) {
			let file = this._getFile(fidx);
			results.push({
				file: fidx,
				data: this._results(file)
			});
		}

		return results;
	}
}

export default Coverage;
