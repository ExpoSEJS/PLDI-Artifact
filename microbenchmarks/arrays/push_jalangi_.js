J$.iids = {"8":[14,9,14,22],"9":[3,10,3,17],"10":[6,5,6,18],"16":[6,5,6,18],"17":[3,18,3,22],"18":[8,17,8,28],"25":[3,10,3,23],"26":[12,17,12,28],"33":[3,10,3,23],"34":[12,17,12,46],"41":[3,10,3,23],"42":[12,17,12,57],"49":[4,9,4,11],"50":[14,9,14,22],"57":[4,19,4,22],"65":[4,25,4,29],"73":[4,24,4,30],"81":[4,9,4,31],"83":[4,9,4,18],"89":[4,9,4,31],"97":[4,9,4,31],"105":[6,5,6,6],"113":[6,5,6,13],"121":[6,17,6,18],"129":[8,5,8,12],"137":[8,17,8,24],"145":[8,27,8,28],"153":[8,5,8,29],"155":[8,5,8,16],"161":[8,5,8,30],"169":[10,5,10,6],"177":[10,5,10,12],"179":[10,5,10,10],"185":[10,5,10,13],"193":[12,5,12,12],"201":[12,17,12,24],"209":[12,27,12,28],"217":[12,31,12,46],"225":[12,49,12,50],"233":[12,49,12,57],"241":[12,5,12,58],"243":[12,5,12,16],"249":[12,5,12,59],"257":[14,9,14,10],"265":[14,9,14,17],"273":[14,21,14,22],"281":[15,15,15,30],"289":[15,15,15,30],"297":[15,9,15,31],"305":[18,11,18,22],"313":[18,11,18,22],"321":[18,5,18,23],"329":[1,1,19,2],"337":[1,1,19,2],"345":[1,1,19,2],"353":[14,5,16,6],"361":[6,1,19,2],"369":[1,1,19,2],"377":[1,1,19,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/push.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/push_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', ['hi']);\n\nif (x.length == 1) {\n\n    console.log('X is ' + x);\n\n    x.pop();\n\n    console.log('X is ' + x + ' with length ' + x.length);\n\n    if (x.length != 0) {\n        throw 'Unreachable 1';\n    }\n\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/ExpoSE/tests/arrays/push_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/push.js');
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 'hi', 21, false)], 10, false)), x, 3));
            if (J$.X1(361, J$.C(16, J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 1, 22, false), 0)))) {
                J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.T(137, 'X is ', 21, false), J$.R(145, 'x', x, 1), 0)));
                J$.X1(185, J$.M(177, J$.R(169, 'x', x, 1), 'pop', 0)());
                J$.X1(249, J$.M(241, J$.R(193, 'console', console, 2), 'log', 0)(J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.T(201, 'X is ', 21, false), J$.R(209, 'x', x, 1), 0), J$.T(217, ' with length ', 21, false), 0), J$.G(233, J$.R(225, 'x', x, 1), 'length', 0), 0)));
                if (J$.X1(353, J$.C(8, J$.B(50, '!=', J$.G(265, J$.R(257, 'x', x, 1), 'length', 0), J$.T(273, 0, 22, false), 0)))) {
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable 1', 21, false)));
                }
                throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
