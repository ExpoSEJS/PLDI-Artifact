J$.iids = {"8":[11,5,11,17],"9":[3,10,3,17],"10":[8,31,8,43],"16":[15,5,15,25],"17":[3,18,3,22],"18":[8,13,8,44],"24":[19,5,19,23],"25":[3,10,3,23],"26":[11,5,11,17],"33":[3,10,3,23],"34":[15,5,15,25],"41":[3,10,3,23],"42":[19,5,19,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[5,5,5,11],"105":[5,12,5,13],"113":[5,5,5,14],"121":[5,5,5,14],"129":[5,1,5,15],"137":[7,1,7,8],"145":[7,13,7,29],"153":[7,1,7,30],"155":[7,1,7,12],"161":[7,1,7,31],"169":[8,1,8,8],"177":[8,13,8,27],"185":[8,31,8,32],"193":[8,36,8,43],"201":[8,1,8,45],"203":[8,1,8,12],"209":[8,1,8,46],"217":[9,1,9,8],"225":[9,13,9,19],"233":[9,1,9,20],"235":[9,1,9,12],"241":[9,1,9,21],"249":[11,5,11,6],"257":[11,10,11,17],"265":[12,11,12,22],"273":[12,11,12,22],"281":[12,5,12,23],"289":[15,5,15,6],"297":[15,10,15,16],"305":[15,17,15,24],"313":[15,10,15,25],"321":[16,11,16,24],"329":[16,11,16,24],"337":[16,5,16,25],"345":[19,5,19,6],"353":[19,10,19,16],"361":[19,17,19,22],"369":[19,10,19,23],"377":[20,11,20,24],"385":[20,11,20,24],"393":[20,5,20,25],"401":[1,1,21,2],"409":[1,1,21,2],"417":[1,1,21,2],"425":[11,1,13,2],"433":[15,1,17,2],"441":[19,1,21,2],"449":[1,1,21,2],"457":[1,1,21,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/objects/constructor.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/objects/constructor_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', '');\nx = Object(x);\n\nconsole.log('What what what');\nconsole.log('X eq hello? ' + (x == 'Hello'));\nconsole.log('Doop');\n\nif (x == \"Hello\") {\n    throw 'Reachable';\n}\n\nif (x == Object('Hello')) {\n    throw 'Unreachable';\n}\n\nif (x == Object(\"How\")) {\n    throw 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/ExpoSE/tests/objects/constructor_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/objects/constructor.js');
            J$.N(409, 'S$', S$, 0);
            J$.N(417, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, '', 21, false)), x, 3));
            J$.X1(129, x = J$.W(121, 'x', J$.F(113, J$.R(97, 'Object', Object, 2), 0)(J$.R(105, 'x', x, 1)), x, 2));
            J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 'What what what', 21, false)));
            J$.X1(209, J$.M(201, J$.R(169, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.T(177, 'X eq hello? ', 21, false), J$.B(10, '==', J$.R(185, 'x', x, 1), J$.T(193, 'Hello', 21, false), 0), 0)));
            J$.X1(241, J$.M(233, J$.R(217, 'console', console, 2), 'log', 0)(J$.T(225, 'Doop', 21, false)));
            if (J$.X1(425, J$.C(8, J$.B(26, '==', J$.R(249, 'x', x, 1), J$.T(257, "Hello", 21, false), 0)))) {
                throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
            }
            if (J$.X1(433, J$.C(16, J$.B(34, '==', J$.R(289, 'x', x, 1), J$.F(313, J$.R(297, 'Object', Object, 2), 0)(J$.T(305, 'Hello', 21, false)), 0)))) {
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Unreachable', 21, false)));
            }
            if (J$.X1(441, J$.C(24, J$.B(42, '==', J$.R(345, 'x', x, 1), J$.F(369, J$.R(353, 'Object', Object, 2), 0)(J$.T(361, "How", 21, false)), 0)))) {
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
