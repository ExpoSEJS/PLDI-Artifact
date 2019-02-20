const keys = require('keys');

let bindings = [];

function bind(pattern, key, ranges) {
    bindings.push({
        p: pattern,
        k: key,
        r: !!ranges
    });
}

let flag_bindings = {};

function flag(symbol, tag) {
    flag_bindings[symbol] = tag;
}

const RANGE_REMOVER = /(?:^|[^\\])(\[.*\])/g;

const TEST_BACKREF = /(^|[^\\])\\[1-9]/;
const TEST_CAPTURE = /(^|[^\\])\([^?].*\)/;
const TEST_NON_RECORD_CAPTURE = /(^|[^\\])\(\?\:.*\)/

const TEST_LOOP_FIXED = /(^|[^\\])\{\d+\}[^?]/;
const TEST_LOOP_MIN = /(^|[^\\])\{\d+,\}[^?]/;
const TEST_LOOP_BETWEEN = /(^|[^\\])\{\d+,\d+\}[^?]/;

const TEST_LOOP_FIXED_LAZY = /(^|[^\\])\{\d+\}\?/;
const TEST_LOOP_MIN_LAZY = /(^|[^\\])\{\d+,\}\?/;
const TEST_LOOP_BETWEEN_LAZY = /(^|[^\\])\{\d+,\d+\}\?/;

const TEST_KPLUS = /(^|[^\\])\+[^?]/;
const TEST_KPLUS_LAZY = /(^|[^\\])\+\?/;
const TEST_KSTAR = /(^|[^\\])\*[^?]/;
const TEST_KSTAR_LAZY = /(^|[^\\])\*\?/;
const TEST_ANY = /(^|[^\\])\./;
const TEST_OR = /(^|[^\\])\|/;
const TEST_CLASS_SUGAR = /(^|[^\\])\\(d|D|f|n|r|s|S|t|v|w|W|n|0)/;
const TEST_UNICODE_CHAR = /(^|[^\\])\\u\d{,4}/;
const TEST_CHARACTER_CLASS = /(^|[^\\])\[.*]/;
const TEST_ONE_OR_NONE = /(^|[^\\])\?/;
const TEST_CUSTOM_RANGE = /(^|[^\\])\[.*.-..*]/;
const TEST_LOOPED_CAPTURE = /(^|[^\\])\([^?].*\)(\+|\*|\{)/;
const TEST_BACKREF_INSIDE_LOOP = /(\(.*[^\\]|\()\\[1-9][0-9]*.*[^\\]\)(\+|\*|\{)/;
const TEST_WORD_BOUNDRY = /(^|[^\\])\\(b|B)/;
const TEST_ASSERT = /(^|[^\\])\(\?\=.*\)/;
const TEST_ASSERT_NOT = /(^|[^\\])\(\?\!.*\)/;

bind(TEST_WORD_BOUNDRY, keys.WORD_BOUNDRY);
bind(TEST_ASSERT, keys.ASSERT);
bind(TEST_ASSERT_NOT, keys.ASSERT_NOT);
bind(TEST_LOOPED_CAPTURE, keys.LOOPED_CAPTURE);
bind(TEST_BACKREF_INSIDE_LOOP, keys.BACKREFERENCE_INSIDE_LOOP);
bind(TEST_BACKREF, keys.REGEX_WITH_BREF);
bind(TEST_CAPTURE, keys.REGEX_WITH_CAPTURE);
bind(TEST_NON_RECORD_CAPTURE, keys.REGEX_WITH_NORE_CAP);
bind(TEST_LOOP_FIXED, keys.REGEX_FIXED_LOOP);
bind(TEST_LOOP_MIN, keys.REGEX_MIN_LOOPS);
bind(TEST_LOOP_BETWEEN, keys.REGEX_BETWEEN_LOOPS);
bind(TEST_LOOP_FIXED_LAZY, keys.REGEX_FIXED_LOOP_LAZY);
bind(TEST_LOOP_MIN_LAZY, keys.REGEX_MIN_LOOPS_LAZY);
bind(TEST_LOOP_BETWEEN_LAZY, keys.REGEX_BETWEEN_LOOPS_LAZY);
bind(TEST_KPLUS, keys.REGEX_KPLUS);
bind(TEST_KSTAR, keys.REGEX_KSTAR);
bind(TEST_KPLUS_LAZY, keys.REGEX_KPLUS_LAZY);
bind(TEST_KSTAR_LAZY, keys.REGEX_KSTAR_LAZY);
bind(TEST_CHARACTER_CLASS, keys.CUSTOM_CHARACTER_CLASS);
bind(TEST_CUSTOM_RANGE, keys.CUSTOM_RANGE, true);
bind(TEST_ANY, keys.ANY_CHAR_WILDCARD);
bind(TEST_OR, keys.LOGICAL_OR);
bind(TEST_CLASS_SUGAR, keys.SUGAR_CLASSES);
bind(TEST_UNICODE_CHAR, keys.UNICODE_CHARS);
bind(TEST_ONE_OR_NONE, keys.ONE_OR_NONE);

flag('m', keys.MULTILINE_TAG);
flag('g', keys.GLOBAL_TAG);
flag('u', keys.UNICODE_TAG);
flag('y', keys.STICKY_TAG);
flag('i', keys.CASE_TAG);

function Traits(pattern, flags) {

    let thisPattern = {
        traits: {},
        flags: []
    };

    let pattern_no_ranges = pattern.replace(RANGE_REMOVER, function(all, a) {
        return all.slice(0, all.length - a.length);
    });

    bindings.forEach(i => {
        let pattern_to_test = i.r ? pattern : pattern_no_ranges;
        thisPattern.traits[i.k] = i.p.test(pattern_to_test);
    });

    for (let i = 0; i < flags.length; i++) {
        thisPattern.flags.push(flag_bindings[flags[i]] ? flag_bindings[flags[i]] : keys.NON_STANDARD_FLAG);
    }

    return thisPattern;
}

module.exports = Traits;