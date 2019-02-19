/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import {spawn} from 'child_process';
import microtime from 'microtime';

let StringDecoder = require('string_decoder').StringDecoder;
let tmp = require('tmp');
let decoder = new StringDecoder('utf8');
const fs = require('fs');

//Some number non zero to say process was killed
const PROCESS_KILLED = 999999;
const EXPOSE_REPLAY_PATH = 'NO_COMPILE=1 expoSE replay';

class Spawn {

    constructor(script, file, opts) {
        this.script = script;
        this.file = file;
        this.options = opts;
        this.args = [this.file.path, JSON.stringify(this.file.input)];
        this.tmpCoverageFile = tmp.fileSync();
        this.tmpOutFile = tmp.fileSync();

        this.env = JSON.parse(JSON.stringify(process.env));
        this.env.EXPOSE_OUT_PATH = this.tmpOutFile.name;
        this.env.EXPOSE_COVERAGE_PATH = this.tmpCoverageFile.name;
    }

    _tryParse(data, type, errors) {
        try {
            return JSON.parse(data);
        } catch (e) {
            errors.push({error: 'Exception E: ' + e + ' of ' + type + ' on ' + data});
            return null;
        }
    }

    startTime() {
        return this._startTime;
    }

    endTime() {
        return this._endTime;
    }

    time() {
        return this._endTime - this._startTime;
    }

    _recordEndTime() {
        this._endTime = microtime.now();
    }

    _processKilled(done) {
        this._recordEndTime();
        done(PROCESS_KILLED, this, null, null, ['Process terminated due to duration hitting timeout']);
    }

    _processEnded(code, done) {

        this._recordEndTime();

        let errors = [];
        let coverage = null;
        let finalOut = null;
        let count = 0;
        let test = this;

        function cb(err) {

            count++;

            if (err) {
                errors.push({error: err});
            }

            if (count == 2) {
                test.tmpOutFile.removeCallback();
                test.tmpCoverageFile.removeCallback();
                done(code, test, finalOut, coverage, errors);
            }
        }

        fs.readFile(this.tmpOutFile.name, {encoding: 'utf8'}, function(err, data) {
            if (!err) {
                finalOut = test._tryParse(data, 'test data', errors);
            }
            cb(err);
        });

        fs.readFile(this.tmpCoverageFile.name, {encoding: 'utf8'}, function(err, data) {
            if (!err) {
                coverage = test._tryParse(data, 'coverage data', errors);
            }
            cb(err);
        });
    }

    shellescape(a) {
      let ret = [];

      a.forEach(function(s) {
        if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
          s = "'" + s.replace(/'/g,"'\\''") + "'";
        }
        ret.push(s);
      });

      return ret.join(' ');
    }

    makeReplayString() {
        return EXPOSE_REPLAY_PATH + ' ' + this.shellescape(this.args);
    }

    _buildTimeout(prc, done) {
        return setTimeout(() => {
          prc.stdin.pause();
          prc.kill();
          this._processKilled(done);
        }, this.options.timeout);
    }

    start(done) {

        function insertData(data) {
            data = decoder.write(data);
            if (this.options.log) {
                process.stdout.write(data);
            }
        }

        let prc = spawn(this.script, this.args, {
            env: this.env,
            disconnected: false
        });

        this._startTime = microtime.now();

        this._killTimeout = this._buildTimeout(prc, done);
        
        prc.stdout.on('data', insertData.bind(this));
        prc.stderr.on('data', insertData.bind(this));

        prc.stdout.on('close', code => {
            clearTimeout(this._killTimeout);
            this._processEnded(code, done);
        });
    }
}

export default Spawn;
