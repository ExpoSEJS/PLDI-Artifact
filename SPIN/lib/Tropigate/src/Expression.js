/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Utils from './Utils';
import Generator from './Generator';
import InjectHelper from './InjectHelper';
import TypeParser from './TypeParser';

export default function(acorn, doInjection, instance, opts) {
	let tt = acorn.tokTypes;

    function ParseExprAtom(inner) {
        return function(refDestructuringErrors) {
            if (this.eat(tt.symbolic)) {
                let name = this.parseIdent();
                let exprFollows = undefined;

                if (this.eatContextual('initial')) {
                    exprFollows = this.parseMaybeConditional(true, refDestructuringErrors);
                }

                if (doInjection) {
                    return exprFollows ? Generator.genSymbol.call(this, name, exprFollows) : Generator.genPureSymbol.call(this, name);
                } else {
                    return exprFollows;
                }
            } else {
                return inner.call(this, refDestructuringErrors);
            }
        }
    }

    instance.extend('parseExprAtom', ParseExprAtom);
}
