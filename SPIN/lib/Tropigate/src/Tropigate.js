/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Tokens from './Tokens';
import Unary from './Unary';
import FunctionSignatures from './FunctionSignatures';
import Statements from './Statements';
import Expression from './Expression';

export default function(acorn, doInjection) {
    acorn.plugins.tropigate = function(instance, opts) {
        Tokens(acorn, doInjection, instance, opts);
        Unary(acorn, doInjection, instance, opts);
        FunctionSignatures(acorn, doInjection, instance, opts);
        Statements(acorn, doInjection, instance, opts);
        Expression(acorn, doInjection, instance, opts);
    }
};
