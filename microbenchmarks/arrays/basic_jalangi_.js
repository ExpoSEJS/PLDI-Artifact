J$.iids = {"8":[11,6,11,20],"9":[3,1,3,13],"10":[8,11,8,23],"16":[10,17,10,29],"17":[3,1,3,14],"18":[10,17,10,29],"25":[5,10,5,17],"26":[10,31,10,34],"33":[5,18,5,22],"41":[5,10,5,23],"42":[10,31,10,34],"49":[5,10,5,23],"50":[11,6,11,20],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,25,6,28],"89":[6,24,6,29],"97":[6,9,6,30],"99":[6,9,6,18],"105":[6,9,6,30],"113":[6,9,6,30],"121":[8,1,8,3],"129":[8,11,8,12],"137":[8,11,8,19],"145":[8,22,8,23],"153":[8,1,8,24],"155":[8,1,8,10],"161":[8,1,8,25],"169":[10,14,10,15],"177":[10,14,10,15],"185":[10,14,10,15],"193":[10,17,10,18],"201":[10,21,10,22],"209":[10,21,10,29],"225":[10,31,10,32],"233":[10,31,10,34],"249":[11,6,11,7],"257":[11,8,11,9],"265":[11,6,11,10],"273":[11,14,11,20],"281":[12,9,12,20],"289":[12,9,12,20],"297":[12,3,12,21],"305":[1,1,14,2],"313":[1,1,14,2],"321":[1,1,14,2],"329":[1,1,14,2],"337":[11,2,13,3],"345":[10,1,14,2],"353":[10,1,14,2],"361":[1,1,14,2],"369":[1,1,14,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/basic.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/basic_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', ['A']);\n\nS$.assume(x.length < 4);\n\nfor (var i = 0; i < x.length; i++) {\n\tif (x[i] == 'What') {\n\t\tthrow 'Reachable';\n\t}\n}"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(305, '/home/blake/artifact/ExpoSE/tests/arrays/basic_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/basic.js');
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'x', x, 0);
            J$.N(329, 'i', i, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(113, J$.W(105, 'x', J$.M(97, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'X', 21, false), J$.T(89, [J$.T(81, 'A', 21, false)], 10, false)), x, 3));
            J$.X1(161, J$.M(153, J$.R(121, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(137, J$.R(129, 'x', x, 1), 'length', 0), J$.T(145, 4, 22, false), 0)));
            for (var i = J$.X1(185, J$.W(177, 'i', J$.T(169, 0, 22, false), i, 3)); J$.X1(345, J$.C(16, J$.B(18, '<', J$.R(193, 'i', i, 1), J$.G(209, J$.R(201, 'x', x, 1), 'length', 0), 0))); J$.X1(353, J$.B(42, '-', i = J$.W(233, 'i', J$.B(34, '+', J$.U(26, '+', J$.R(225, 'i', i, 1)), J$.T(217, 1, 22, false), 0), i, 2), J$.T(241, 1, 22, false), 0))) {
                if (J$.X1(337, J$.C(8, J$.B(50, '==', J$.G(265, J$.R(249, 'x', x, 1), J$.R(257, 'i', i, 1), 4), J$.T(273, 'What', 21, false), 0)))) {
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Reachable', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
