/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

const {app, Menu, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

app.setName('ExpoSE Dashboard');

let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../content/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', function() {
  const menu = Menu.buildFromTemplate([]);
  //Menu.setApplicationMenu(menu);
  createWindow();
});

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})
