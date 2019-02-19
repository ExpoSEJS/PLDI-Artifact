J$.iids = {"8":[10,5,10,14],"9":[3,10,3,17],"10":[8,13,8,25],"16":[14,5,14,25],"17":[3,18,3,22],"18":[8,13,8,43],"25":[3,10,3,23],"26":[8,13,8,54],"33":[3,10,3,23],"34":[10,5,10,14],"41":[3,10,3,23],"42":[14,7,14,19],"49":[4,9,4,11],"50":[14,5,14,25],"57":[4,19,4,22],"65":[4,25,4,26],"73":[4,24,4,27],"81":[4,9,4,28],"83":[4,9,4,18],"89":[4,9,4,28],"97":[4,9,4,28],"105":[6,1,6,2],"113":[6,3,6,4],"121":[6,3,6,11],"129":[6,15,6,16],"137":[6,1,6,16],"145":[6,1,6,17],"153":[8,1,8,8],"161":[8,13,8,21],"169":[8,24,8,25],"177":[8,28,8,43],"185":[8,46,8,47],"193":[8,46,8,54],"201":[8,1,8,55],"203":[8,1,8,12],"209":[8,1,8,56],"217":[10,5,10,6],"225":[10,7,10,8],"233":[10,5,10,9],"241":[10,13,10,14],"249":[11,11,11,22],"257":[11,11,11,22],"265":[11,5,11,23],"273":[14,5,14,6],"281":[14,7,14,8],"289":[14,7,14,15],"297":[14,18,14,19],"305":[14,5,14,20],"313":[14,24,14,25],"321":[15,11,15,24],"329":[15,11,15,24],"337":[15,5,15,25],"345":[1,1,16,2],"353":[1,1,16,2],"361":[1,1,16,2],"369":[10,1,12,2],"377":[14,1,16,2],"385":[1,1,16,2],"393":[1,1,16,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/manual_push.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/manual_push_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', [1]);\n\nx[x.length] = 5;\n\nconsole.log('X is: ' + x + ' with length ' + x.length);\n\nif (x[4] == 5) {\n    throw 'Reachable';\n}\n\nif (x[x.length - 1] != 5) {\n    throw 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(345, '/home/blake/artifact/ExpoSE/tests/arrays/manual_push_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/manual_push.js');
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 1, 22, false)], 10, false)), x, 3));
            J$.X1(145, J$.P(137, J$.R(105, 'x', x, 1), J$.G(121, J$.R(113, 'x', x, 1), 'length', 0), J$.T(129, 5, 22, false), 2));
            J$.X1(209, J$.M(201, J$.R(153, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(161, 'X is: ', 21, false), J$.R(169, 'x', x, 1), 0), J$.T(177, ' with length ', 21, false), 0), J$.G(193, J$.R(185, 'x', x, 1), 'length', 0), 0)));
            if (J$.X1(369, J$.C(8, J$.B(34, '==', J$.G(233, J$.R(217, 'x', x, 1), J$.T(225, 4, 22, false), 4), J$.T(241, 5, 22, false), 0)))) {
                throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
            }
            if (J$.X1(377, J$.C(16, J$.B(50, '!=', J$.G(305, J$.R(273, 'x', x, 1), J$.B(42, '-', J$.G(289, J$.R(281, 'x', x, 1), 'length', 0), J$.T(297, 1, 22, false), 0), 4), J$.T(313, 5, 22, false), 0)))) {
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
