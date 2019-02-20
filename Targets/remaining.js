var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('out_3'),
    lr2 = new LineByLineReader('scan_list');

let doubles = [];
let seen = [];
let seen_sl = [];

function exists(name) {
	
	if (seen.find(x => x == name)) {
		return true;
	}

	seen.push(name.trim());
	//console.log('Seen ' + name.trim());
	return false;
}

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	if (exists(line.split(' ')[0].slice(5))) {
		//console.log('DOUBLE: ' + line);
	} else {
		//console.log(line);
	}
});

lr2.on('line', function(line) {
	seen_sl.push(line);
});

let fin = 0;

function d() {
	fin++;
	if(fin == 2) {
		seen_sl.filter(x => !seen.find(y => y == x)).forEach(x => console.log(x));
	}
}

lr2.on('end', function() {
	d();
});

lr.on('end', function () {
	d();
});