/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

//Some code is from https://gist.github.com/jdalton/5e34d890105aca44399f by John-David Dalton

const toString = Object.prototype.toString;
const fnToString = Function.prototype.toString;
const reHostCtor = /^\[object .+?Constructor\]$/;
const SECRET_CACHE_STR = '__checked_isNative__before__';

var reNative = RegExp('^' +
    String(toString)
    .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
    .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

function isNative(value) {
    var type = typeof value;
    return type == 'function' ? reNative.test(fnToString.call(value)) :
        (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
}

let nativeCache = {};

/**
 * Override a method in the nativeCache to a specific state (safe, not safe)
 * TODO: Now that FunctionModels exists, that would probably be a better place
 */
function MarkSafeNative(fn, safe) {
    nativeCache[fn] = safe;
}

/**
 * Check nativeCache to see if method has been cached
 * If miss, isNative, store, return
 * Else return cache
 */
function IsNativeCached(value) {
    if (nativeCache[value] !== undefined) {
        return nativeCache[value];
    } else {
        let result = isNative(value);
        nativeCache[value] = result;
        return result;
    }
}

export {MarkSafeNative, IsNativeCached};
