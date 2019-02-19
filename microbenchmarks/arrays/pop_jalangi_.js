J$.iids = {"8":[14,9,14,22],"9":[3,10,3,17],"10":[6,5,6,18],"16":[18,9,18,22],"17":[3,18,3,22],"18":[8,17,8,28],"24":[6,5,6,18],"25":[3,10,3,23],"26":[12,17,12,28],"33":[3,10,3,23],"34":[12,17,12,46],"41":[3,10,3,23],"42":[12,17,12,57],"49":[4,9,4,11],"50":[14,9,14,22],"57":[4,19,4,22],"58":[18,9,18,22],"65":[4,25,4,29],"73":[4,24,4,30],"81":[4,9,4,31],"83":[4,9,4,18],"89":[4,9,4,31],"97":[4,9,4,31],"105":[6,5,6,6],"113":[6,5,6,13],"121":[6,17,6,18],"129":[8,5,8,12],"137":[8,17,8,24],"145":[8,27,8,28],"153":[8,5,8,29],"155":[8,5,8,16],"161":[8,5,8,30],"169":[10,5,10,6],"177":[10,12,10,17],"185":[10,5,10,18],"187":[10,5,10,11],"193":[10,5,10,19],"201":[12,5,12,12],"209":[12,17,12,24],"217":[12,27,12,28],"225":[12,31,12,46],"233":[12,49,12,50],"241":[12,49,12,57],"249":[12,5,12,58],"251":[12,5,12,16],"257":[12,5,12,59],"265":[14,9,14,10],"273":[14,9,14,17],"281":[14,21,14,22],"289":[15,15,15,30],"297":[15,15,15,30],"305":[15,9,15,31],"313":[18,9,18,10],"321":[18,11,18,12],"329":[18,9,18,13],"337":[18,17,18,22],"345":[19,15,19,30],"353":[19,15,19,30],"361":[19,9,19,31],"369":[22,11,22,22],"377":[22,11,22,22],"385":[22,5,22,23],"393":[1,1,23,2],"401":[1,1,23,2],"409":[1,1,23,2],"417":[14,5,16,6],"425":[18,5,20,6],"433":[6,1,23,2],"441":[1,1,23,2],"449":[1,1,23,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/pop.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/pop_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', ['hi']);\n\nif (x.length == 1) {\n\n    console.log('X is ' + x);\n\n    x.push('vvv');\n\n    console.log('X is ' + x + ' with length ' + x.length);\n\n    if (x.length != 2) {\n        throw 'Unreachable 1';\n    }\n\n    if (x[1] != 'vvv') {\n        throw 'Unreachable 2';\n    }\n\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(393, '/home/blake/artifact/ExpoSE/tests/arrays/pop_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/pop.js');
            J$.N(401, 'S$', S$, 0);
            J$.N(409, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 'hi', 21, false)], 10, false)), x, 3));
            if (J$.X1(433, J$.C(24, J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 1, 22, false), 0)))) {
                J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.T(137, 'X is ', 21, false), J$.R(145, 'x', x, 1), 0)));
                J$.X1(193, J$.M(185, J$.R(169, 'x', x, 1), 'push', 0)(J$.T(177, 'vvv', 21, false)));
                J$.X1(257, J$.M(249, J$.R(201, 'console', console, 2), 'log', 0)(J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.T(209, 'X is ', 21, false), J$.R(217, 'x', x, 1), 0), J$.T(225, ' with length ', 21, false), 0), J$.G(241, J$.R(233, 'x', x, 1), 'length', 0), 0)));
                if (J$.X1(417, J$.C(8, J$.B(50, '!=', J$.G(273, J$.R(265, 'x', x, 1), 'length', 0), J$.T(281, 2, 22, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Unreachable 1', 21, false)));
                }
                if (J$.X1(425, J$.C(16, J$.B(58, '!=', J$.G(329, J$.R(313, 'x', x, 1), J$.T(321, 1, 22, false), 4), J$.T(337, 'vvv', 21, false), 0)))) {
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Unreachable 2', 21, false)));
                }
                throw J$.X1(385, J$.Th(377, J$.T(369, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
