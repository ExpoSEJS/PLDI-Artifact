J$.iids = {"8":[9,6,9,20],"9":[3,1,3,13],"10":[13,6,13,16],"16":[13,6,13,16],"17":[3,1,3,14],"18":[17,6,17,16],"24":[17,6,17,16],"25":[4,10,4,17],"26":[21,6,21,17],"32":[21,6,21,17],"33":[4,18,4,22],"34":[29,6,29,16],"40":[29,6,29,16],"41":[4,10,4,23],"48":[7,5,7,42],"49":[4,10,4,23],"57":[4,10,4,23],"65":[5,9,5,11],"73":[5,19,5,22],"81":[5,24,5,26],"89":[5,9,5,27],"91":[5,9,5,18],"97":[5,9,5,27],"105":[5,9,5,27],"113":[7,5,7,34],"121":[7,40,7,41],"129":[7,5,7,42],"131":[7,5,7,39],"137":[9,6,9,12],"145":[9,18,9,19],"153":[9,6,9,20],"155":[9,6,9,17],"161":[10,9,10,22],"169":[10,9,10,22],"177":[10,3,10,23],"185":[13,6,13,7],"193":[13,11,13,16],"201":[14,9,14,20],"209":[14,9,14,20],"217":[14,3,14,21],"225":[17,6,17,7],"233":[17,11,17,16],"241":[18,9,18,20],"249":[18,9,18,20],"257":[18,3,18,21],"265":[21,6,21,7],"273":[21,11,21,17],"281":[22,9,22,22],"289":[22,9,22,22],"297":[22,3,22,23],"305":[25,8,25,19],"313":[25,8,25,19],"321":[25,2,25,20],"329":[29,6,29,7],"337":[29,11,29,16],"345":[30,9,30,22],"353":[30,9,30,22],"361":[30,3,30,23],"369":[33,8,33,19],"377":[33,8,33,19],"385":[33,2,33,20],"393":[1,1,34,2],"401":[1,1,34,2],"409":[1,1,34,2],"417":[9,2,11,3],"425":[13,2,15,3],"433":[17,2,19,3],"441":[21,2,23,3],"449":[29,2,31,3],"457":[7,1,34,2],"465":[1,1,34,2],"473":[1,1,34,2],"nBranches":12,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/many.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/many_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\nif (/^(a|b|c)(c|d)([a-z]|[0-9])$/.test(q)) {\n\n\tif (/^..$/.test(q)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (q == 'ac3') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (q == 'ccp') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (q == 'ac4p') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n\n} else {\n\n\tif (q == 'ac5') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(393, '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/many_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/many.js');
            J$.N(401, 'S$', S$, 0);
            J$.N(409, 'q', q, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var q = J$.X1(105, J$.W(97, 'q', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "q", 21, false), J$.T(81, '', 21, false)), q, 3));
            if (J$.X1(457, J$.C(48, J$.M(129, J$.T(113, /^(a|b|c)(c|d)([a-z]|[0-9])$/, 14, false), 'test', 0)(J$.R(121, 'q', q, 1))))) {
                if (J$.X1(417, J$.C(8, J$.M(153, J$.T(137, /^..$/, 14, false), 'test', 0)(J$.R(145, 'q', q, 1))))) {
                    throw J$.X1(177, J$.Th(169, J$.T(161, 'Unreachable', 21, false)));
                }
                if (J$.X1(425, J$.C(16, J$.B(10, '==', J$.R(185, 'q', q, 1), J$.T(193, 'ac3', 21, false), 0)))) {
                    throw J$.X1(217, J$.Th(209, J$.T(201, 'Reachable', 21, false)));
                }
                if (J$.X1(433, J$.C(24, J$.B(18, '==', J$.R(225, 'q', q, 1), J$.T(233, 'ccp', 21, false), 0)))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
                }
                if (J$.X1(441, J$.C(32, J$.B(26, '==', J$.R(265, 'q', q, 1), J$.T(273, 'ac4p', 21, false), 0)))) {
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable', 21, false)));
                }
                throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
            } else {
                if (J$.X1(449, J$.C(40, J$.B(34, '==', J$.R(329, 'q', q, 1), J$.T(337, 'ac5', 21, false), 0)))) {
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Unreachable', 21, false)));
                }
                throw J$.X1(385, J$.Th(377, J$.T(369, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT