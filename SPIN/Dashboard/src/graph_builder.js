/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

let spawn = require('child_process').spawn;

const REPLOTTER = './scripts/replot';

function BuildGraph(outFile, outType, inCoverage, inRate, done) {
	let args = [inCoverage, inRate, outFile, "", "", "", outType];

	console.log('Calling replot with ' + args);

	let prc = spawn(REPLOTTER, args, {
        disconnected: false
    });

    prc.stdout.on('close', function(c) {
    	this.running = false;
    	done(c);
    }.bind(this));
}

module.exports = BuildGraph;
