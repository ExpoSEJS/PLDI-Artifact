/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import walk from 'walk';
import path from 'path';

class Walker {
    constructor(dir) {
        this.cbs = [];
        this.dir = dir;
    }

    start() {
        let absTestFilePath = path.resolve(this.dir + 'test_list');
        let fileList = require(absTestFilePath);
        
        this.files = fileList.map(f => ({
            path: this.dir + f.path,
            expectErrors: f.expectErrors,
            expectPaths: f.expectPaths
        }));

        this.doneSearching();
        return this;
    }

    doneSearching() {
        this.cbs.forEach(cb => cb(this.files));
    }

    done(cb) {
        this.cbs.push(cb);
        return this;
    }
}

export default Walker;
