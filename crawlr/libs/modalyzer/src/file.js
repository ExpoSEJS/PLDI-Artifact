const acorn = require('acorn');
const stats = require('stats');
const keys = require('keys');
const Traits = require('regex');

//Global counters used to do stats about found regexs and combined regexs (Methods that appear in the same scope)
let found;
let scope = [];

function c_scope() {
	return scope[scope.length - 1];
}

function p_scope() {
	return scope[scope.length - 2] || {};
}

function found_scope(v) {
	const current_scope = c_scope();
	current_scope[v] = current_scope[v] ? current_scope[v] + 1 : 1;
}

function get_scope(v, s) {
	const current_scope = s || c_scope();
	return current_scope[v] || 0;
}

let fn_bindings = [];

function bind_fn(name, stat, lregex, first_arg_regex) {
    fn_bindings.push({
        n: name,
        s: stat,
        regex: !!lregex,
        faregex: !!first_arg_regex
    });
}

let scope_bindings = [];

function bind_scope(n1, n2, k) {
	const k_same = k;
	const k_near = k + ' (Near Scope)';

    //Have to register these guys as they don't live in Keys
    stats.register(k_same);
    stats.register(k_near);

	scope_bindings.push({
		n1: n1,
		n2: n2,
		same: k_same,
		near: k_near
	});
}

let cmod = '';
let cfile = '';

bind_fn('indexOf', keys.INDEX_OF);
bind_fn('exec', keys.EXEC);
bind_fn('exec', keys.EXEC_EXACT, true);
bind_fn('match', keys.MATCH);
bind_fn('match', keys.MATCH_REGEX_LITERAL, false, true);
bind_fn('test', keys.TEST);
bind_fn('test', keys.TEST_EXACT, true);
bind_fn('substring', keys.SUBSTRING);
bind_fn('substr', keys.SUBSTRING);
bind_fn('replace', keys.REPLACE);
bind_fn('replace', keys.REPLACE_REGEX_LITERAL, false, true);

bind_fn('search', keys.SEARCH);
bind_fn('search', keys.SEARCH_REGEX_LITERAL, false, true);

bind_fn('split', keys.SPLIT);
bind_fn('split', keys.SPLIT_REGEX_LITERAL, false, true);

bind_scope('indexOf', 'match', keys.MATCH_AND_INDEX);
bind_scope('indexOf', 'replace', keys.REPLACE_AND_INDEX);
bind_scope('indexOf', 'exec', keys.EXEC_AND_INDEX);

function regexTraits(pattern, flags, v) {
    stats.found(keys.REGEX_TAG);
    
    process.send({
    	tag: 'regex',
    	regex: pattern,
	    cmod: cmod,
	    cfile: cfile,
    	flags: flags,
    	v: v
    });

    let patternTraits = Traits(pattern, flags, v);

    for (let i in patternTraits.traits) {
        patternTraits.traits[i] && stats.found(i);
    }

    patternTraits.flags.forEach(i => stats.found(i));
}

function inject(acorn) {
    acorn.plugins.regexinfo = function(instance, opts) {
        let tt = acorn.tokTypes;
        let tc = acorn.tokContexts;

        instance.extend('readToken', function(inner) {
            return function(code) {

                let nextTok = inner.call(this, code);

                if (this.type.label == 'regexp') {
                    regexTraits(this.value.pattern, this.value.flags, this.value);
                    found++;
                }

                return nextTok;
            };
        });

        instance.extend('parseSubscripts', function(inner) {
                return function(base, startPos, startLoc, noCalls) {
                    let next = inner.call(this, base, startPos, startLoc, noCalls);
                    
                    if (next.type === 'CallExpression' && next.callee && next.callee.type === 'MemberExpression' && next.callee.property) {
                        const NN = next.callee.property.name;
                        fn_bindings.forEach(i => {
                            let fine = true;

                            if (i.regex) {
                            	fine = !!next.callee.object.regex;
                            }

                            if (i.faregex) {
                            	fine = !!next.arguments[0] && !!next.arguments[0].regex;
                            }

                            if (fine && NN == i.n) {
                            	found_scope(i.n);
                                stats.found(i.s);
                            }
                        });
                    }
            
                	return next;
            	}
        });

        instance.extend('parseFunction', function(inner) {
        	return function(node, isStatement, allowExpressionBody, isAsync) {
        		
        		scope.push({});

        		let next = inner.call(this, node, isStatement, allowExpressionBody, isAsync);

        		scope_bindings.forEach(i => {
        			const c_n1 = get_scope(i.n1);
        			const c_n2 = get_scope(i.n2);
        			c_n1 && c_n2 && stats.found(i.same);

        			const near_n1 = get_scope(i.n1, p_scope());
        			const near_n2 = get_scope(i.n2, p_scope());
        			((c_n1 && near_n2) || (c_n2 && near_n1)) && stats.found(i.near);
        		});

        		scope.pop();

        		return next;
        	}
        });
    };
}

inject(acorn);

function convert(src, mod, file) {

    cmod = mod;
    cfile = file;

    found = 0;

    let comments = [],
        tokens = [],
        opts = {
            sourceType: 'module',
            plugins: {
                regexinfo: true
            }
        };

    opts.onComment = comments;
    opts.onToken = tokens;

    let ast = acorn.parse(src, opts);

    return found;
}

module.exports = convert;
