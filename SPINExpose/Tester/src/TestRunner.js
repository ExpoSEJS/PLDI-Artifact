/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Runner from './Runner';

process.title = 'ExpoSE Test Runner';

function getTarget() {
	return process.argv[process.argv.length - 1];
}

function getArgument(name, dResult) {
	for (let i = 0; i < process.argv.length - 1; i++) {
		if (process.argv[i] === name) {
			return process.argv[i+1];
		}
	}

	return dResult;
}

if (process.argv.length >= 3) {
	let target = getTarget();
    
    console.log('Test runner searching ' + target);

    let concurrent = getArgument('--concurrent', 10);

    console.log('Launching with max concurrent of ' + concurrent);

    new Runner(concurrent).done(errors => process.exit(errors)).start(target);
} else {
    console.log('Wrong number of arguments');
    console.log('Usage ./TestRunner --concurrent XX Directory');
}
