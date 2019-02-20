const LineByLineReader = require('line-by-line');
const Unique = require('./unique');
const Keys = require('keys');
const Regex = require('regex');
const fs = require('fs');

const lr = new LineByLineReader(process.argv[process.argv.length - 2]);
const out_dir = process.argv[process.argv.length - 1];

const Demap = require('./demap')(function() {
	return Unique();
});

lr.on('error', function (err) {
	console.log('Err: ' + err);
});

let line_errors = 0;
let total = 0;

lr.on('line', function (line) {
	try {
		line = JSON.parse(line);

		if (line.regex) {
			Demap.get('default').add(line.regex);
			let info = Regex(line.regex, line.flags);

			for (let i in info.traits) {
				if (info.traits[i]) {
					Demap.get(i).add(line.regex);
				}
			}

			for (let i of info.flags) {
				Demap.get(i).add(line.regex);
			}
		}
	} catch (e) {
		console.log(e);
		line_errors++;
	}
});

function PrintRes(fname, unique) {
	let os = fs.createWriteStream(fname);
	let cnt = 0;

	for (let i in unique.final()) {
		os.write(i + '\n');
		cnt++;
	}

	os.write('Total Regexs: ' + unique.total() + '\n');
	os.write('Unique Regexs: ' + cnt + '\n');
}

lr.on('end', function () {

	for (let i in Demap.all()) {
		console.log('Printing ' + i);
		PrintRes(out_dir + '/' + i, Demap.all()[i]);
	}

	console.log('Line errors: ' + line_errors);
});
