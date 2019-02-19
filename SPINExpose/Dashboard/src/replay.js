/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')

let replays = [];

function createReplay(file, input) {
	let i = replays.length;

	let replay = new BrowserWindow({
	    width: 400,
	    height: 800
 	});

 	replay.replayFile = file;
 	replay.replayInput = input;

  // and load the index.html of the app.
  replay.loadURL(url.format({
    pathname: path.join(__dirname, '../content/replay.html'),
    protocol: 'file:',
    slashes: true
  }))

  replay.on('closed', function () {
    replays[i] = null;
  });

  replays[i] = replay;

  replay.webContents.on('did-finish-load', function() {
    replay.webContents.executeJavaScript("");
  });
}

module.exports = createReplay;
