var S$ = require('S$');
var emailAddress = S$.symbol('Email Address', 'hello world');

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
  throw 'This is an email address!';
}
