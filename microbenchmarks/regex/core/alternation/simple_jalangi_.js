J$.iids = {"8":[9,18,9,38],"9":[3,1,3,13],"10":[9,18,9,26],"16":[9,18,9,50],"17":[3,1,3,14],"18":[9,30,9,38],"24":[11,6,11,16],"25":[4,10,4,17],"26":[9,42,9,50],"32":[15,6,15,14],"33":[4,18,4,22],"34":[11,6,11,16],"40":[19,6,19,14],"41":[4,10,4,23],"42":[15,6,15,14],"48":[23,6,23,14],"49":[4,10,4,23],"50":[19,6,19,14],"56":[7,5,7,22],"57":[4,10,4,23],"58":[23,6,23,14],"65":[5,9,5,11],"73":[5,19,5,22],"81":[5,24,5,26],"89":[5,9,5,27],"91":[5,9,5,18],"97":[5,9,5,27],"105":[5,9,5,27],"113":[7,5,7,14],"121":[7,20,7,21],"129":[7,5,7,22],"131":[7,5,7,19],"137":[9,18,9,19],"145":[9,23,9,26],"153":[9,30,9,31],"161":[9,35,9,38],"169":[9,42,9,43],"177":[9,47,9,50],"185":[9,18,9,50],"193":[9,18,9,50],"201":[11,7,11,16],"209":[12,9,12,22],"217":[12,9,12,22],"225":[12,3,12,23],"233":[15,6,15,7],"241":[15,11,15,14],"249":[16,9,16,20],"257":[16,9,16,20],"265":[16,3,16,21],"273":[19,6,19,7],"281":[19,11,19,14],"289":[20,9,20,22],"297":[20,9,20,22],"305":[20,3,20,23],"313":[23,6,23,7],"321":[23,11,23,14],"329":[24,9,24,20],"337":[24,9,24,20],"345":[24,3,24,21],"353":[27,8,27,21],"361":[27,8,27,21],"369":[27,2,27,22],"377":[29,8,29,19],"385":[29,8,29,19],"393":[29,2,29,20],"401":[1,1,30,2],"409":[1,1,30,2],"417":[1,1,30,2],"425":[1,1,30,2],"433":[11,2,13,3],"441":[15,2,17,3],"449":[19,2,21,3],"457":[23,2,25,3],"465":[7,1,30,2],"473":[1,1,30,2],"481":[1,1,30,2],"nBranches":14,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/simple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\nif (/^a|b|c$/.test(q)) {\n\n\tvar isCorrect = q == 'a' || q == 'b' || q == 'c';\n\n\tif (!isCorrect) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (q == 'a') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (q == 'b') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (q == 'c') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Unreachable';\n} else {\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/simple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/simple.js');
            J$.N(409, 'S$', S$, 0);
            J$.N(417, 'q', q, 0);
            J$.N(425, 'isCorrect', isCorrect, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var q = J$.X1(105, J$.W(97, 'q', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "q", 21, false), J$.T(81, '', 21, false)), q, 3));
            if (J$.X1(465, J$.C(56, J$.M(129, J$.T(113, /^a|b|c$/, 14, false), 'test', 0)(J$.R(121, 'q', q, 1))))) {
                var isCorrect = J$.X1(193, J$.W(185, 'isCorrect', J$.C(16, J$.C(8, J$.B(10, '==', J$.R(137, 'q', q, 1), J$.T(145, 'a', 21, false), 0)) ? J$._() : J$.B(18, '==', J$.R(153, 'q', q, 1), J$.T(161, 'b', 21, false), 0)) ? J$._() : J$.B(26, '==', J$.R(169, 'q', q, 1), J$.T(177, 'c', 21, false), 0), isCorrect, 3));
                if (J$.X1(433, J$.C(24, J$.U(34, '!', J$.R(201, 'isCorrect', isCorrect, 1))))) {
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Unreachable', 21, false)));
                }
                if (J$.X1(441, J$.C(32, J$.B(42, '==', J$.R(233, 'q', q, 1), J$.T(241, 'a', 21, false), 0)))) {
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
                }
                if (J$.X1(449, J$.C(40, J$.B(50, '==', J$.R(273, 'q', q, 1), J$.T(281, 'b', 21, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Unreachable', 21, false)));
                }
                if (J$.X1(457, J$.C(48, J$.B(58, '==', J$.R(313, 'q', q, 1), J$.T(321, 'c', 21, false), 0)))) {
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
                }
                throw J$.X1(369, J$.Th(361, J$.T(353, 'Unreachable', 21, false)));
            } else {
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
