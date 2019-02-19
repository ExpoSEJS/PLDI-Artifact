/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

export default {
	makeIdent(name) {
		let node = this.startNode();
		node.name = name;
		return this.finishNode(node, 'Identifier');
	},
	wrapStatement(expr) {
        let node = this.startNode();
        node.expression = expr;
        return this.finishNode(node, 'ExpressionStatement');
    }
}
