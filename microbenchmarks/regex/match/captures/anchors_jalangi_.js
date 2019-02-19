J$.iids = {"8":[8,9,8,20],"9":[1,20,1,27],"10":[8,9,8,20],"16":[10,9,10,20],"17":[1,28,1,32],"18":[10,9,10,20],"24":[12,9,12,20],"25":[1,20,1,33],"26":[12,9,12,20],"32":[14,9,14,24],"33":[1,20,1,33],"34":[14,9,14,24],"40":[16,9,16,24],"41":[1,20,1,33],"42":[16,9,16,24],"48":[18,9,18,27],"49":[2,26,2,38],"50":[18,9,18,27],"56":[20,9,20,27],"57":[2,26,2,45],"58":[20,9,20,27],"64":[7,5,7,6],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,13,5,24],"177":[5,13,5,24],"185":[5,13,5,24],"193":[6,9,6,10],"201":[6,17,6,22],"209":[6,9,6,23],"211":[6,9,6,16],"217":[6,9,6,23],"225":[6,9,6,23],"233":[7,5,7,6],"241":[8,9,8,10],"249":[8,11,8,12],"257":[8,9,8,13],"265":[8,17,8,20],"273":[9,15,9,28],"281":[9,15,9,28],"289":[9,9,9,29],"297":[10,9,10,10],"305":[10,11,10,12],"313":[10,9,10,13],"321":[10,17,10,20],"329":[11,15,11,28],"337":[11,15,11,28],"345":[11,9,11,29],"353":[12,9,12,10],"361":[12,11,12,12],"369":[12,9,12,13],"377":[12,17,12,20],"385":[13,15,13,28],"393":[13,15,13,28],"401":[13,9,13,29],"409":[14,9,14,10],"417":[14,14,14,24],"425":[15,15,15,26],"433":[15,15,15,26],"441":[15,9,15,27],"449":[16,9,16,10],"457":[16,14,16,24],"465":[17,15,17,26],"473":[17,15,17,26],"481":[17,9,17,27],"489":[18,9,18,10],"497":[18,11,18,12],"505":[18,9,18,13],"513":[18,17,18,27],"521":[19,15,19,28],"529":[19,15,19,28],"537":[19,9,19,29],"545":[20,9,20,10],"553":[20,11,20,12],"561":[20,9,20,13],"569":[20,17,20,27],"577":[21,15,21,28],"585":[21,15,21,28],"593":[21,9,21,29],"601":[22,11,22,22],"609":[22,11,22,22],"617":[22,5,22,23],"625":[1,1,23,2],"633":[1,1,23,2],"641":[1,1,23,2],"649":[1,1,23,2],"657":[1,1,23,2],"665":[1,1,23,2],"673":[1,1,23,2],"681":[8,5,9,29],"689":[10,5,11,29],"697":[12,5,13,29],"705":[14,5,15,27],"713":[16,5,17,27],"721":[18,5,19,29],"729":[20,5,21,29],"737":[7,1,23,2],"745":[1,1,23,2],"753":[1,1,23,2],"nBranches":16,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/anchors.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/anchors_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar regex = /(a)(b)(c)/;\n\nvar b = x.match(regex);\n\nif (b) {\n\tif (b[1] != 'a') throw 'Unreachable';\n\tif (b[2] != 'b') throw 'Unreachable';\n\tif (b[3] != 'c') throw 'Unreachable';\n\n\tif (x == 'helloabc') throw 'Reachable';\n\tif (x == 'abchello') throw 'Reachable';\n\n\tif (b[0] == \"helloabc\") throw 'Unreachable';\n\tif (b[0] == \"abchello\") throw 'Unreachable';\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(625, '/home/blake/artifact/microbenchmarks/regex/match/captures/anchors_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/captures/anchors.js');
            J$.N(633, '__secret__S$', __secret__S$, 0);
            J$.N(641, '__secret__traits__', __secret__traits__, 0);
            J$.N(649, 'S$', S$, 0);
            J$.N(657, 'x', x, 0);
            J$.N(665, 'regex', regex, 0);
            J$.N(673, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var regex = J$.X1(185, J$.W(177, 'regex', J$.T(169, /(a)(b)(c)/, 14, false), regex, 3));
            var b = J$.X1(225, J$.W(217, 'b', J$.M(209, J$.R(193, 'x', x, 1), 'match', 0)(J$.R(201, 'regex', regex, 1)), b, 3));
            if (J$.X1(737, J$.C(64, J$.R(233, 'b', b, 1)))) {
                if (J$.X1(681, J$.C(8, J$.B(10, '!=', J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 1, 22, false), 4), J$.T(265, 'a', 21, false), 0))))
                    throw J$.X1(289, J$.Th(281, J$.T(273, 'Unreachable', 21, false)));
                if (J$.X1(689, J$.C(16, J$.B(18, '!=', J$.G(313, J$.R(297, 'b', b, 1), J$.T(305, 2, 22, false), 4), J$.T(321, 'b', 21, false), 0))))
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Unreachable', 21, false)));
                if (J$.X1(697, J$.C(24, J$.B(26, '!=', J$.G(369, J$.R(353, 'b', b, 1), J$.T(361, 3, 22, false), 4), J$.T(377, 'c', 21, false), 0))))
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Unreachable', 21, false)));
                if (J$.X1(705, J$.C(32, J$.B(34, '==', J$.R(409, 'x', x, 1), J$.T(417, 'helloabc', 21, false), 0))))
                    throw J$.X1(441, J$.Th(433, J$.T(425, 'Reachable', 21, false)));
                if (J$.X1(713, J$.C(40, J$.B(42, '==', J$.R(449, 'x', x, 1), J$.T(457, 'abchello', 21, false), 0))))
                    throw J$.X1(481, J$.Th(473, J$.T(465, 'Reachable', 21, false)));
                if (J$.X1(721, J$.C(48, J$.B(50, '==', J$.G(505, J$.R(489, 'b', b, 1), J$.T(497, 0, 22, false), 4), J$.T(513, 'helloabc', 21, false), 0))))
                    throw J$.X1(537, J$.Th(529, J$.T(521, 'Unreachable', 21, false)));
                if (J$.X1(729, J$.C(56, J$.B(58, '==', J$.G(561, J$.R(545, 'b', b, 1), J$.T(553, 0, 22, false), 4), J$.T(569, 'abchello', 21, false), 0))))
                    throw J$.X1(593, J$.Th(585, J$.T(577, 'Unreachable', 21, false)));
                throw J$.X1(617, J$.Th(609, J$.T(601, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(745, J$e);
        } finally {
            if (J$.Sr(753)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
