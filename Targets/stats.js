var fs = require('fs');
var data = '' + fs.readFileSync('./listzz');

var final = new Set();

data = data.split('\n');
data.filter(item => item.indexOf('DONE:') != -1).map(item => item.split(' ')).forEach(item => final.add(item));

let ttl = 0;

let scores = [0, 0, 0];
let avg_cov = [1, 1, 1];

final.forEach(item => {
	let bt_nfa = item[2] > item[1];
	let bt_cap = item[3] > item[2] && item[3] > item[1];
	let bt_ref = item[4] > item[3] && item[4] > item[2] && item[4] > item[1];
	
	if (bt_nfa) {
		console.log('BT_NFA:' + JSON.stringify(item));
		scores[0] += 1;
		avg_cov[0] += Math.log(Number.parseInt(item[2]) - Number.parseInt(item[1]));
	}

	if (bt_cap) {
		console.log('BT_CAP:' + JSON.stringify(item));
		scores[1] += 1;
		avg_cov[1] += Math.log(Number.parseInt(item[3]) - Number.parseInt(item[2]));
	}

	if (bt_ref) {
		console.log('BT_REF:' + JSON.stringify(item));
		scores[2] += 1;
		avg_cov[2] += Math.log((Number.parseInt(item[4]) - Number.parseInt(item[3])));
	}
	ttl++;
});

for (let i in avg_cov) {
	avg_cov[i] = happy_mean(avg_cov[i], scores[i]);
}

function happy_mean(lnsum, count) {
	return Math.exp((1/count) * lnsum);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function pc(i) {
	return (scores[i] / ttl * 100);
}

function pcs(v) {
	let r = [];
	
	for (let i in v) {
		r[i] = round(v[i], 2) + '%';
	}

	return r;
}

function highest(item) {
	return Math.max(item[1], item[2], item[3], item[4]);
}

function base(item) {
	return item[1];
}

function total_covg_delta() {
	let ttl_improved = 0;
	let total_improv = 1;

	final.forEach(item => {
		if (highest(item) > item[1]) {
			ttl_improved++;
			total_improv += Math.log(highest(item) - item[1]);
		}
	});

	return {
		improved: ttl_improved,
		p_improved: (ttl_improved / ttl) * 100,
		avg_improv: happy_mean(total_improv, ttl_improved)
	}
}

function avg_program_coverage() {
	let t = 0;
	let v = 1;

	final.forEach(item => {
		//console.log(item.slice(1) + ' ' +  Math.max.apply(null, item.slice(1)));
		v += Math.log(Math.max.apply(null, item.slice(1)));
		//console.log(v);
		t++;
	});

	return happy_mean(v, t);
}

let scores_avg = [pc(0), pc(1), pc(2)];

console.log('Total number of libraries tested:' + ttl);
console.log('Number of libraries improved:' + scores);
console.log('Percentage of targets improved:' + pcs(scores_avg));
console.log('Average Coverage Increase:' + pcs(avg_cov));
console.log('Total libraries improved: ' + total_covg_delta().improved + ' (' + pcs([total_covg_delta().p_improved]) + ')');
console.log('Average Improved Library delta% coverage: ' + pcs([total_covg_delta().avg_improv]));
console.log('Average Program Coverage:' + pcs([avg_program_coverage()]));