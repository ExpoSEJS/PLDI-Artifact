/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

function flowTest(lo, hi) {

    console.log("Inputs: Hi:", hi, "Lo:", lo);

    var result = lo * 42;

    if (lo > 4) {
        console.log("Branch A-then");
        result -= lo;
    } else {
        console.log("Branch A-else");
        if (hi == 777) {
            result = -result;
        }
    }

    if (hi > 0) {
        console.log("Branch B-then");
    } else {
        console.log("Branch B-else");
    }

    console.log("Low output:", result);

    return result;
}

function verify(f) {

    var loInput = symbolic LO initial 0;
    var hiInput1 = symbolic HI1 initial 10;
    var hiInput2 = symbolic HI2 initial 10;

    var loOutput1 = f(loInput, hiInput1);
    var loOutput2 = f(loInput, hiInput2);

    if (hiInput1 !== 777 && hiInput2 !== 777) {
        assert loOutput1 === loOutput2;;
    }
}

verify(flowTest);
