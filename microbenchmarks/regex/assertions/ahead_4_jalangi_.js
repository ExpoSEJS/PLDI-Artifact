J$.iids = {"8":[7,9,7,17],"9":[1,20,1,27],"10":[7,9,7,17],"16":[10,9,10,17],"17":[1,28,1,32],"18":[10,9,10,17],"24":[13,9,13,17],"25":[1,20,1,33],"26":[13,9,13,17],"32":[16,9,16,17],"33":[1,20,1,33],"34":[16,9,16,17],"40":[6,5,6,16],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,11,5,27],"177":[5,11,5,27],"185":[5,11,5,27],"193":[6,5,6,8],"201":[6,14,6,15],"209":[6,5,6,16],"211":[6,5,6,13],"217":[7,9,7,10],"225":[7,14,7,17],"233":[8,15,8,28],"241":[8,15,8,28],"249":[8,9,8,29],"257":[10,9,10,10],"265":[10,14,10,17],"273":[11,15,11,26],"281":[11,15,11,26],"289":[11,9,11,27],"297":[13,9,13,10],"305":[13,14,13,17],"313":[14,15,14,26],"321":[14,15,14,26],"329":[14,9,14,27],"337":[16,9,16,10],"345":[16,14,16,17],"353":[17,15,17,26],"361":[17,15,17,26],"369":[17,9,17,27],"377":[19,11,19,24],"385":[19,11,19,24],"393":[19,5,19,25],"401":[1,1,20,2],"409":[1,1,20,2],"417":[1,1,20,2],"425":[1,1,20,2],"433":[1,1,20,2],"441":[1,1,20,2],"449":[7,5,9,6],"457":[10,5,12,6],"465":[13,5,15,6],"473":[16,5,18,6],"481":[6,1,20,2],"489":[1,1,20,2],"497":[1,1,20,2],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_4.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re3 = /^(?=(a|b|c)).$/;\n\nif (re3.test(x)) {\n\t\n\tif (x == 'd') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'a') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (x == 'b') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (x == 'c') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_4_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_4.js');
            J$.N(409, '__secret__S$', __secret__S$, 0);
            J$.N(417, '__secret__traits__', __secret__traits__, 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'x', x, 0);
            J$.N(441, 're3', re3, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re3 = J$.X1(185, J$.W(177, 're3', J$.T(169, /^(?=(a|b|c)).$/, 14, false), re3, 3));
            if (J$.X1(481, J$.C(40, J$.M(209, J$.R(193, 're3', re3, 1), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                if (J$.X1(449, J$.C(8, J$.B(10, '==', J$.R(217, 'x', x, 1), J$.T(225, 'd', 21, false), 0)))) {
                    throw J$.X1(249, J$.Th(241, J$.T(233, 'Unreachable', 21, false)));
                }
                if (J$.X1(457, J$.C(16, J$.B(18, '==', J$.R(257, 'x', x, 1), J$.T(265, 'a', 21, false), 0)))) {
                    throw J$.X1(289, J$.Th(281, J$.T(273, 'Reachable', 21, false)));
                }
                if (J$.X1(465, J$.C(24, J$.B(26, '==', J$.R(297, 'x', x, 1), J$.T(305, 'b', 21, false), 0)))) {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable', 21, false)));
                }
                if (J$.X1(473, J$.C(32, J$.B(34, '==', J$.R(337, 'x', x, 1), J$.T(345, 'c', 21, false), 0)))) {
                    throw J$.X1(369, J$.Th(361, J$.T(353, 'Reachable', 21, false)));
                }
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
