/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Log from './Utilities/Log';

export default {
    evalBinary: function(op, left, right) {
        switch (op) {
            case "==":
                return (left == right);
            case "===":
                return (left === right);
            case "!=":
                return (left != right);
            case "!==":
                return (left !== right);

            case "<":
                return (left < right);
            case ">":
                return (left > right);
            case "<=":
                return (left <= right);
            case ">=":
                return (left >= right);

            case "+":
                return (left + right);
            case "-":
                return (left - right);
            case "*":
                return (left * right);
            case "/":
                return (left / right);
            case "%":
                return (left % right);

            case ">>":
                return (left >> right);
            case "<<":
                return (left << right);
            case ">>>":
                return (left >>> right);

            case "&&":
                return (left && right);
            case "||":
                return (left || right);
            case "&":
                return (left & right);
            case "|":
                return (left | right);
            case "^":
                return (left ^ right);

            case "instanceof":
                return (left instanceof right);
            case "in":
                return (left in right);

            default:
                Log.log("Unsupported binary operator " + op + " for concrete evaluation.");
                return undefined;
        }
    },

    evalUnary: function(op, left) {
        switch (op) {
            case "!":
                return !left;
            case "~":
                return ~left;
            case "-":
                return -left;
            case "+":
                return +left;
            case "typeof":
                return typeof left;
            default:
                Log.log("Unsupported unary operator " + op + " for concrete evaluation.");
                return undefined;
        }
    }
};
