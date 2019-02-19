J$.iids = {"8":[7,9,7,20],"9":[1,20,1,27],"10":[7,9,7,20],"16":[9,9,9,20],"17":[1,28,1,32],"18":[9,9,9,20],"24":[11,9,11,20],"25":[1,20,1,33],"26":[11,9,11,20],"32":[13,9,13,24],"33":[1,20,1,33],"34":[13,9,13,24],"40":[15,9,15,24],"41":[1,20,1,33],"42":[15,9,15,24],"48":[17,9,17,27],"49":[2,26,2,38],"50":[17,9,17,27],"56":[19,9,19,27],"57":[2,26,2,45],"58":[19,9,19,27],"64":[6,5,6,6],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,20],"177":[5,26,5,27],"185":[5,9,5,28],"187":[5,9,5,25],"193":[5,9,5,28],"201":[5,9,5,28],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,11,7,12],"233":[7,9,7,13],"241":[7,17,7,20],"249":[8,15,8,28],"257":[8,15,8,28],"265":[8,9,8,29],"273":[9,9,9,10],"281":[9,11,9,12],"289":[9,9,9,13],"297":[9,17,9,20],"305":[10,15,10,28],"313":[10,15,10,28],"321":[10,9,10,29],"329":[11,9,11,10],"337":[11,11,11,12],"345":[11,9,11,13],"353":[11,17,11,20],"361":[12,15,12,28],"369":[12,15,12,28],"377":[12,9,12,29],"385":[13,9,13,10],"393":[13,14,13,24],"401":[14,15,14,26],"409":[14,15,14,26],"417":[14,9,14,27],"425":[15,9,15,10],"433":[15,14,15,24],"441":[16,15,16,26],"449":[16,15,16,26],"457":[16,9,16,27],"465":[17,9,17,10],"473":[17,11,17,12],"481":[17,9,17,13],"489":[17,17,17,27],"497":[18,15,18,28],"505":[18,15,18,28],"513":[18,9,18,29],"521":[19,9,19,10],"529":[19,11,19,12],"537":[19,9,19,13],"545":[19,17,19,27],"553":[20,15,20,28],"561":[20,15,20,28],"569":[20,9,20,29],"577":[21,11,21,22],"585":[21,11,21,22],"593":[21,5,21,23],"601":[1,1,22,2],"609":[1,1,22,2],"617":[1,1,22,2],"625":[1,1,22,2],"633":[1,1,22,2],"641":[1,1,22,2],"649":[7,5,8,29],"657":[9,5,10,29],"665":[11,5,12,29],"673":[13,5,14,27],"681":[15,5,16,27],"689":[17,5,18,29],"697":[19,5,20,29],"705":[6,1,22,2],"713":[1,1,22,2],"721":[1,1,22,2],"nBranches":16,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/anchors.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/anchors_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)(b)(c)/.exec(x);\n\nif (b) {\n\tif (b[1] != 'a') throw 'Unreachable';\n\tif (b[2] != 'b') throw 'Unreachable';\n\tif (b[3] != 'c') throw 'Unreachable';\n\n\tif (x == 'helloabc') throw 'Reachable';\n\tif (x == 'abchello') throw 'Reachable';\n\n\tif (b[0] == \"helloabc\") throw 'Unreachable';\n\tif (b[0] == \"abchello\") throw 'Unreachable';\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(601, '/home/blake/artifact/microbenchmarks/regex/captures/anchors_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/captures/anchors.js');
            J$.N(609, '__secret__S$', __secret__S$, 0);
            J$.N(617, '__secret__traits__', __secret__traits__, 0);
            J$.N(625, 'S$', S$, 0);
            J$.N(633, 'x', x, 0);
            J$.N(641, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /(a)(b)(c)/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(705, J$.C(64, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(649, J$.C(8, J$.B(10, '!=', J$.G(233, J$.R(217, 'b', b, 1), J$.T(225, 1, 22, false), 4), J$.T(241, 'a', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
                if (J$.X1(657, J$.C(16, J$.B(18, '!=', J$.G(289, J$.R(273, 'b', b, 1), J$.T(281, 2, 22, false), 4), J$.T(297, 'b', 21, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
                if (J$.X1(665, J$.C(24, J$.B(26, '!=', J$.G(345, J$.R(329, 'b', b, 1), J$.T(337, 3, 22, false), 4), J$.T(353, 'c', 21, false), 0))))
                    throw J$.X1(377, J$.Th(369, J$.T(361, 'Unreachable', 21, false)));
                if (J$.X1(673, J$.C(32, J$.B(34, '==', J$.R(385, 'x', x, 1), J$.T(393, 'helloabc', 21, false), 0))))
                    throw J$.X1(417, J$.Th(409, J$.T(401, 'Reachable', 21, false)));
                if (J$.X1(681, J$.C(40, J$.B(42, '==', J$.R(425, 'x', x, 1), J$.T(433, 'abchello', 21, false), 0))))
                    throw J$.X1(457, J$.Th(449, J$.T(441, 'Reachable', 21, false)));
                if (J$.X1(689, J$.C(48, J$.B(50, '==', J$.G(481, J$.R(465, 'b', b, 1), J$.T(473, 0, 22, false), 4), J$.T(489, 'helloabc', 21, false), 0))))
                    throw J$.X1(513, J$.Th(505, J$.T(497, 'Unreachable', 21, false)));
                if (J$.X1(697, J$.C(56, J$.B(58, '==', J$.G(537, J$.R(521, 'b', b, 1), J$.T(529, 0, 22, false), 4), J$.T(545, 'abchello', 21, false), 0))))
                    throw J$.X1(569, J$.Th(561, J$.T(553, 'Unreachable', 21, false)));
                throw J$.X1(593, J$.Th(585, J$.T(577, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(713, J$e);
        } finally {
            if (J$.Sr(721)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
