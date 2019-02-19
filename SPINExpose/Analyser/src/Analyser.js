/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT
//
// Symbolic execution analyser entry point

import SymbolicExecution from './SymbolicExecution';
import ObjectHelper from './Utilities/ObjectHelper';
import {ConcolicValue, WrappedValue} from './Values/WrappedValue';
import NotAnErrorException from './NotAnErrorException';
import Log from './Utilities/Log';
import Z3 from 'z3javascript';
import fs from 'fs';

/**
 * Set up the methods and classes which ObjectHelper considers safe to string
 */

ObjectHelper.safe(Z3.Expr.prototype);
ObjectHelper.safe(Z3.Model.prototype);
ObjectHelper.safe(Z3.Context.prototype);
ObjectHelper.safe(WrappedValue.prototype);
ObjectHelper.safe(ConcolicValue.prototype)
ObjectHelper.safe(NotAnErrorException.prototype);

/**
 * End the SafeToString table
 */

const OUT_PATH = 'EXPOSE_OUT_PATH';
const COVERAGE_PATH = 'EXPOSE_COVERAGE_PATH';

function Default(i, d) {
	return process.env[i] || d;
}

let outFilePath = Default(OUT_PATH, undefined);
let outCoveragePath = Default(COVERAGE_PATH, undefined);

let input = process.argv[process.argv.length - 1];

Log.logHigh('Built with VERY logging enabled');
Log.logMid('Built with FINE logging enabled');
Log.log('Built with BASE logging enabled');
Log.log('Intial Input' + input);

process.title = 'ExpoSE Play ' + input;

process.on('disconnect', function() {
  Log.log('Premature termination - Parent exit')
  process.exit();
});

J$.analysis = new SymbolicExecution(J$, JSON.parse(input), (state, coverage) => {
    Log.log("Finished play with PC " + state.pathCondition.map(x => x.ast));

    let finalOut = {
        pc: state.finalPC(),
        input: state.finalInput(),
        errors: state.errors,
        alternatives: state.alternatives()
    };

    if (outCoveragePath) {
		fs.writeFileSync(outCoveragePath, JSON.stringify(coverage.end()));
		Log.log('Wrote final coverage to ' + outCoveragePath);
    } else {
    	Log.log('No final coverage path supplied');
	}

	if (outFilePath) {
		fs.writeFileSync(outFilePath, JSON.stringify(finalOut));
        Log.log('Wrote final output to ' + outFilePath);
	} else {
    	Log.log('No final output path supplied');
	}
});
