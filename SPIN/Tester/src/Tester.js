/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import {spawn} from 'child_process';

const EXPOSE_TEST_SCRIPT = './scripts/analyse';

class Tester {

    constructor(file) {
        this.file = file;
        this.out = "";
    }

    build(done) {

        let env = process.env;
        env.EXPOSE_EXPECTED_PC = this.file.expectPaths;

        let prc = spawn(EXPOSE_TEST_SCRIPT, [this.file.path], {
            env: env
        });

        prc.stdout.setEncoding('utf8');
        prc.stderr.setEncoding('utf8');
        prc.stdout.on('data', data => this.out += data.toString());
        prc.stderr.on('data', data => this.out += data.toString());

        prc.on('close', code => done(code));
    }
}

export default Tester;
