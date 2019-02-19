J$.iids = {"8":[8,9,8,15],"9":[1,20,1,27],"10":[7,11,7,13],"16":[10,9,10,16],"17":[1,28,1,32],"18":[7,5,7,13],"24":[12,9,12,16],"25":[1,20,1,33],"26":[8,9,8,15],"32":[14,9,14,17],"33":[1,20,1,33],"34":[10,9,10,16],"40":[16,17,16,45],"41":[1,20,1,33],"42":[12,9,12,16],"48":[17,9,17,15],"49":[2,26,2,38],"50":[14,9,14,17],"56":[7,5,7,13],"57":[2,26,2,45],"58":[16,17,16,29],"65":[2,26,2,45],"66":[16,33,16,45],"73":[2,26,2,45],"74":[17,9,17,15],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,17],"177":[5,9,5,17],"185":[5,9,5,17],"193":[6,10,6,11],"201":[6,19,6,20],"209":[6,10,6,21],"211":[6,10,6,18],"217":[6,10,6,21],"225":[6,10,6,21],"233":[7,5,7,7],"241":[7,12,7,13],"249":[8,9,8,11],"257":[8,14,8,15],"265":[9,15,9,28],"273":[9,15,9,28],"281":[9,9,9,29],"289":[10,9,10,11],"297":[10,15,10,16],"305":[11,15,11,26],"313":[11,15,11,26],"321":[11,9,11,27],"329":[12,9,12,11],"337":[12,15,12,16],"345":[13,15,13,26],"353":[13,15,13,26],"361":[13,9,13,27],"369":[14,9,14,11],"377":[14,15,14,17],"385":[15,15,15,26],"393":[15,15,15,26],"401":[15,9,15,27],"409":[16,17,16,18],"417":[16,19,16,21],"425":[16,17,16,22],"433":[16,26,16,29],"441":[16,33,16,34],"449":[16,35,16,37],"457":[16,33,16,38],"465":[16,42,16,45],"473":[16,17,16,45],"481":[16,17,16,45],"489":[17,10,17,15],"497":[18,15,18,28],"505":[18,15,18,28],"513":[18,9,18,29],"521":[20,15,20,26],"529":[20,15,20,26],"537":[20,9,20,27],"545":[1,1,22,2],"553":[1,1,22,2],"561":[1,1,22,2],"569":[1,1,22,2],"577":[1,1,22,2],"585":[1,1,22,2],"593":[1,1,22,2],"601":[1,1,22,2],"609":[8,5,9,29],"617":[10,5,11,27],"625":[12,5,13,27],"633":[14,5,15,27],"641":[17,5,21,6],"649":[7,1,22,2],"657":[1,1,22,2],"665":[1,1,22,2],"nBranches":14,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/test_at_start.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/test_at_start_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a|b)$/;\nvar nl = x.search(b);\n\nif (nl != -1) {\n\n\tif (nl < 0) throw 'Unreachable';\n\tif (nl == 0) throw 'Reachable';\n\tif (nl == 5) throw 'Reachable';\n\tif (nl == 15) throw 'Reachable';\n\n\tvar in_re = b[nl] == 'a' || b[nl] == 'b';\n\n\tif (!in_re) {\n\t\tthrow 'Unreachable';\n\t} else {\n\t\tthrow 'Reachable';\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(545, '/home/blake/artifact/microbenchmarks/regex/search/test_at_start_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/test_at_start.js');
            J$.N(553, '__secret__S$', __secret__S$, 0);
            J$.N(561, '__secret__traits__', __secret__traits__, 0);
            J$.N(569, 'S$', S$, 0);
            J$.N(577, 'x', x, 0);
            J$.N(585, 'b', b, 0);
            J$.N(593, 'nl', nl, 0);
            J$.N(601, 'in_re', in_re, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /(a|b)$/, 14, false), b, 3));
            var nl = J$.X1(225, J$.W(217, 'nl', J$.M(209, J$.R(193, 'x', x, 1), 'search', 0)(J$.R(201, 'b', b, 1)), nl, 3));
            if (J$.X1(649, J$.C(56, J$.B(18, '!=', J$.R(233, 'nl', nl, 1), J$.U(10, '-', J$.T(241, 1, 22, false)), 0)))) {
                if (J$.X1(609, J$.C(8, J$.B(26, '<', J$.R(249, 'nl', nl, 1), J$.T(257, 0, 22, false), 0))))
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
                if (J$.X1(617, J$.C(16, J$.B(34, '==', J$.R(289, 'nl', nl, 1), J$.T(297, 0, 22, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
                if (J$.X1(625, J$.C(24, J$.B(42, '==', J$.R(329, 'nl', nl, 1), J$.T(337, 5, 22, false), 0))))
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
                if (J$.X1(633, J$.C(32, J$.B(50, '==', J$.R(369, 'nl', nl, 1), J$.T(377, 15, 22, false), 0))))
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable', 21, false)));
                var in_re = J$.X1(481, J$.W(473, 'in_re', J$.C(40, J$.B(58, '==', J$.G(425, J$.R(409, 'b', b, 1), J$.R(417, 'nl', nl, 1), 4), J$.T(433, 'a', 21, false), 0)) ? J$._() : J$.B(66, '==', J$.G(457, J$.R(441, 'b', b, 1), J$.R(449, 'nl', nl, 1), 4), J$.T(465, 'b', 21, false), 0), in_re, 3));
                if (J$.X1(641, J$.C(48, J$.U(74, '!', J$.R(489, 'in_re', in_re, 1))))) {
                    throw J$.X1(513, J$.Th(505, J$.T(497, 'Unreachable', 21, false)));
                } else {
                    throw J$.X1(537, J$.Th(529, J$.T(521, 'Reachable', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(657, J$e);
        } finally {
            if (J$.Sr(665)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
