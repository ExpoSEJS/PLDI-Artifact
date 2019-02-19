/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Log from './Utilities/Log';
import ObjectHelper from './Utilities/ObjectHelper';
import {WrappedValue, ConcolicValue} from './Values/WrappedValue';
import NotAnErrorException from './NotAnErrorException';
import {MarkSafeNative} from './Utilities/IsNative';

export default {
    wrapSymbolic: function(state, args) {
        return new ConcolicValue(args[0], this.state.asSymbolic(args[0]));
    },

    makeSymbolic: function(state, args) {
        return state.createSymbolicValue(args[0], args[1]);
    },

    wrap: function(state, args) {
        return WrappedValue.wrap(args[0]);
    },

    notAnErrorException: function(state, args) {
        return NotAnErrorException;
    },

    markSafeNative: function(state, args) {
        MarkSafeNative(args[0]);
    },
    
    clone: function(state, args) {
        return WrappedValue.clone(args[0]);
    },

    getRider: function(state, args) {
        let val = args[0];

        if (!val || !val instanceof WrappedValue) {
            Log.log('Could not get rider of unwrapped value (' + ObjectHelper.asString(val) + ')');
            return;
        }

        return val.rider;
    },

    setRider: function(state, args) {
        let val = args[0];
        let rider = args[1];

        if (!val instanceof WrappedValue) {
            Log.log('Could not set rider of unwrapped value (' + ObjectHelper.asString(val) + ')');
            return;
        }

        val.rider = rider;
    }
};
