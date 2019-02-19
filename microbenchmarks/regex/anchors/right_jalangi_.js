J$.iids = {"8":[8,9,8,20],"9":[1,20,1,27],"10":[6,11,6,24],"16":[11,9,11,31],"17":[1,28,1,32],"18":[8,9,8,20],"24":[7,5,7,21],"25":[1,20,1,33],"26":[11,11,11,23],"33":[1,20,1,33],"34":[11,9,11,31],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,1,3,13],"89":[3,1,3,14],"97":[4,10,4,17],"105":[4,18,4,22],"113":[4,10,4,23],"121":[4,10,4,23],"129":[4,10,4,23],"137":[5,9,5,11],"145":[5,19,5,22],"153":[5,24,5,26],"161":[5,9,5,27],"163":[5,9,5,18],"169":[5,9,5,27],"177":[5,9,5,27],"185":[6,1,6,3],"193":[6,11,6,12],"201":[6,11,6,19],"209":[6,22,6,24],"217":[6,1,6,25],"219":[6,1,6,10],"225":[6,1,6,26],"233":[7,5,7,13],"241":[7,19,7,20],"249":[7,5,7,21],"251":[7,5,7,18],"257":[8,9,8,10],"265":[8,11,8,12],"273":[8,9,8,13],"281":[8,17,8,20],"289":[9,15,9,26],"297":[9,15,9,26],"305":[9,9,9,27],"313":[11,9,11,10],"321":[11,11,11,12],"329":[11,11,11,19],"337":[11,22,11,23],"345":[11,9,11,24],"353":[11,28,11,31],"361":[12,15,12,28],"369":[12,15,12,28],"377":[12,9,12,29],"385":[14,11,14,22],"393":[14,11,14,22],"401":[14,5,14,23],"409":[16,7,16,18],"417":[16,7,16,18],"425":[16,1,16,19],"433":[1,1,16,19],"441":[1,1,16,19],"449":[1,1,16,19],"457":[1,1,16,19],"465":[1,1,16,19],"473":[8,5,10,6],"481":[11,5,13,6],"489":[7,1,15,2],"497":[1,1,16,19],"505":[1,1,16,19],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/anchors/right.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/anchors/right_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\n//This assumption is required to make the testcase solve in reasonable time with Z3\n//This is not due to the regular expression but in fact due to the q.length and str.at\nS$.assume(q.length < 10);\n\nif (/--.+=$/.test(q)) {\n\n\tif (q[0] != '-') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (q[q.length - 1] != '=') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(433, '/home/blake/artifact/microbenchmarks/regex/anchors/right_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/anchors/right.js');
            J$.N(441, '__secret__S$', __secret__S$, 0);
            J$.N(449, '__secret__traits__', __secret__traits__, 0);
            J$.N(457, 'S$', S$, 0);
            J$.N(465, 'q', q, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            J$.X1(89, J$.T(81, 'use strict', 21, false));
            var S$ = J$.X1(129, J$.W(121, 'S$', J$.F(113, J$.R(97, 'require', require, 2), 0)(J$.T(105, 'S$', 21, false)), S$, 3));
            var q = J$.X1(177, J$.W(169, 'q', J$.M(161, J$.R(137, 'S$', S$, 1), 'symbol', 0)(J$.T(145, 'q', 21, false), J$.T(153, '', 21, false)), q, 3));
            J$.X1(225, J$.M(217, J$.R(185, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(201, J$.R(193, 'q', q, 1), 'length', 0), J$.T(209, 10, 22, false), 0)));
            if (J$.X1(489, J$.C(24, J$.M(249, J$.T(233, /--.+=$/, 14, false), 'test', 0)(J$.R(241, 'q', q, 1))))) {
                if (J$.X1(473, J$.C(8, J$.B(18, '!=', J$.G(273, J$.R(257, 'q', q, 1), J$.T(265, 0, 22, false), 4), J$.T(281, '-', 21, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                }
                if (J$.X1(481, J$.C(16, J$.B(34, '!=', J$.G(345, J$.R(313, 'q', q, 1), J$.B(26, '-', J$.G(329, J$.R(321, 'q', q, 1), 'length', 0), J$.T(337, 1, 22, false), 0), 4), J$.T(353, '=', 21, false), 0)))) {
                    throw J$.X1(377, J$.Th(369, J$.T(361, 'Unreachable', 21, false)));
                }
                throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable', 21, false)));
            }
            throw J$.X1(425, J$.Th(417, J$.T(409, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
