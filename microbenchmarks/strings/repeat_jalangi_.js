J$.iids = {"8":[8,9,8,30],"9":[3,10,3,17],"10":[6,5,6,27],"16":[6,5,6,27],"17":[3,18,3,22],"18":[8,9,8,30],"24":[15,5,15,26],"25":[3,10,3,23],"26":[15,5,15,26],"32":[19,5,19,22],"33":[3,10,3,23],"34":[19,5,19,22],"40":[23,5,23,30],"41":[3,10,3,23],"42":[23,5,23,30],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,6],"105":[6,14,6,15],"113":[6,5,6,16],"115":[6,5,6,13],"121":[6,20,6,27],"129":[8,9,8,10],"137":[8,18,8,19],"145":[8,9,8,20],"147":[8,9,8,17],"153":[8,24,8,30],"161":[9,15,9,30],"169":[9,15,9,30],"177":[9,9,9,31],"185":[12,11,12,24],"193":[12,11,12,24],"201":[12,5,12,25],"209":[15,5,15,6],"217":[15,14,15,15],"225":[15,5,15,16],"227":[15,5,15,13],"233":[15,20,15,26],"241":[16,11,16,26],"249":[16,11,16,26],"257":[16,5,16,27],"265":[19,5,19,6],"273":[19,14,19,15],"281":[19,5,19,16],"283":[19,5,19,13],"289":[19,20,19,22],"297":[20,11,20,26],"305":[20,11,20,26],"313":[20,5,20,27],"321":[23,5,23,6],"329":[23,14,23,16],"337":[23,5,23,17],"339":[23,5,23,13],"345":[23,5,23,24],"353":[23,28,23,30],"361":[24,11,24,24],"369":[24,11,24,24],"377":[24,5,24,25],"385":[1,1,25,2],"393":[1,1,25,2],"401":[1,1,25,2],"409":[8,5,10,6],"417":[6,1,13,2],"425":[15,1,17,2],"433":[19,1,21,2],"441":[23,1,25,2],"449":[1,1,25,2],"457":[1,1,25,2],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/repeat.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/repeat_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (x.repeat(5) == \"AAAAA\") {\n\n    if (x.repeat(4) != \"AAAA\") {\n        throw 'Unreachable 1';\n    }\n\n    throw 'Reachable 1';\n}\n\nif (x.repeat(5) == \"AAAA\") {\n    throw 'Unreachable 2';\n}\n\nif (x.repeat(0) != \"\") {\n    throw 'Unreachable 3';\n}\n\nif (x.repeat(10).length == 20) {\n    throw 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(385, '/home/blake/artifact/ExpoSE/tests/strings/repeat_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/repeat.js');
            J$.N(393, 'S$', S$, 0);
            J$.N(401, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(417, J$.C(16, J$.B(10, '==', J$.M(113, J$.R(97, 'x', x, 1), 'repeat', 0)(J$.T(105, 5, 22, false)), J$.T(121, "AAAAA", 21, false), 0)))) {
                if (J$.X1(409, J$.C(8, J$.B(18, '!=', J$.M(145, J$.R(129, 'x', x, 1), 'repeat', 0)(J$.T(137, 4, 22, false)), J$.T(153, "AAAA", 21, false), 0)))) {
                    throw J$.X1(177, J$.Th(169, J$.T(161, 'Unreachable 1', 21, false)));
                }
                throw J$.X1(201, J$.Th(193, J$.T(185, 'Reachable 1', 21, false)));
            }
            if (J$.X1(425, J$.C(24, J$.B(26, '==', J$.M(225, J$.R(209, 'x', x, 1), 'repeat', 0)(J$.T(217, 5, 22, false)), J$.T(233, "AAAA", 21, false), 0)))) {
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable 2', 21, false)));
            }
            if (J$.X1(433, J$.C(32, J$.B(34, '!=', J$.M(281, J$.R(265, 'x', x, 1), 'repeat', 0)(J$.T(273, 0, 22, false)), J$.T(289, "", 21, false), 0)))) {
                throw J$.X1(313, J$.Th(305, J$.T(297, 'Unreachable 3', 21, false)));
            }
            if (J$.X1(441, J$.C(40, J$.B(42, '==', J$.G(345, J$.M(337, J$.R(321, 'x', x, 1), 'repeat', 0)(J$.T(329, 10, 22, false)), 'length', 0), J$.T(353, 20, 22, false), 0)))) {
                throw J$.X1(377, J$.Th(369, J$.T(361, 'Reachable 2', 21, false)));
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
