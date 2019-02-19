/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Network from './Network/Network';
import Handler from './Handler';
import MockerUtilities from './MockerUtilities';
import State from './State';
import Polyfills from './Polyfills/Polyfills';

function Mocker(object, index, val) {
	return MockerUtilities.replace(object, index, val);
}

Mocker.Utilities = MockerUtilities;
Mocker.Network = Network;
Mocker.Handler = Handler;
Mocker.State = State;
Mocker.Polyfills = Polyfills;

export default Mocker;
module.exports = Mocker;
