J$.iids = {"8":[9,9,9,16],"9":[1,20,1,27],"10":[7,11,7,24],"16":[8,5,8,17],"17":[1,28,1,32],"18":[8,5,8,17],"24":[15,9,15,16],"25":[1,20,1,33],"26":[9,9,9,16],"32":[14,5,14,16],"33":[1,20,1,33],"34":[14,5,14,16],"40":[20,5,20,28],"41":[1,20,1,33],"42":[15,9,15,16],"48":[20,5,20,28],"49":[2,26,2,38],"50":[20,5,20,17],"57":[2,26,2,45],"58":[20,21,20,28],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,17],"177":[5,9,5,17],"185":[5,9,5,17],"193":[6,10,6,11],"201":[6,19,6,20],"209":[6,10,6,21],"211":[6,10,6,18],"217":[6,10,6,21],"225":[6,10,6,21],"233":[7,1,7,3],"241":[7,11,7,12],"249":[7,11,7,19],"257":[7,23,7,24],"265":[7,1,7,25],"267":[7,1,7,10],"273":[7,1,7,26],"281":[8,5,8,6],"289":[8,10,8,17],"297":[9,9,9,11],"305":[9,15,9,16],"313":[10,15,10,28],"321":[10,15,10,28],"329":[10,9,10,29],"337":[12,11,12,24],"345":[12,11,12,24],"353":[12,5,12,25],"361":[14,5,14,6],"369":[14,10,14,16],"377":[15,9,15,11],"385":[15,15,15,16],"393":[16,15,16,28],"401":[16,15,16,28],"409":[16,9,16,29],"417":[18,11,18,24],"425":[18,11,18,24],"433":[18,5,18,25],"441":[20,5,20,6],"449":[20,10,20,17],"457":[20,21,20,23],"465":[20,27,20,28],"473":[21,11,21,24],"481":[21,11,21,24],"489":[21,5,21,25],"497":[1,1,22,2],"505":[1,1,22,2],"513":[1,1,22,2],"521":[1,1,22,2],"529":[1,1,22,2],"537":[1,1,22,2],"545":[1,1,22,2],"553":[9,5,11,6],"561":[8,1,13,2],"569":[15,5,17,6],"577":[14,1,19,2],"585":[20,1,22,2],"593":[1,1,22,2],"601":[1,1,22,2],"nBranches":12,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous4.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a simple string search\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /[a-z]*/;\nvar nl = x.search(b);\n\nS$.assume(x.length <= 5);\n\n//The first set of as should be the match, but if greediness is not enforced either will be accepted\nif (x == 'hello') {\n\n\tif (nl == 2) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable 1';\n}\n\nif (x == 'what') {\n\t\t\n\tif (nl != 0) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable 2';\n}\n\nif (x == '12345' && nl != 0) {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(497, '/home/blake/artifact/microbenchmarks/regex/search/ambiguous4_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/ambiguous4.js');
            J$.N(505, '__secret__S$', __secret__S$, 0);
            J$.N(513, '__secret__traits__', __secret__traits__, 0);
            J$.N(521, 'S$', S$, 0);
            J$.N(529, 'x', x, 0);
            J$.N(537, 'b', b, 0);
            J$.N(545, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /[a-z]*/, 14, false), b, 3));
            var nl = J$.X1(225, J$.W(217, 'nl', J$.M(209, J$.R(193, 'x', x, 1), 'search', 0)(J$.R(201, 'b', b, 1)), nl, 3));
            J$.X1(273, J$.M(265, J$.R(233, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<=', J$.G(249, J$.R(241, 'x', x, 1), 'length', 0), J$.T(257, 5, 22, false), 0)));
            if (J$.X1(561, J$.C(16, J$.B(18, '==', J$.R(281, 'x', x, 1), J$.T(289, 'hello', 21, false), 0)))) {
                if (J$.X1(553, J$.C(8, J$.B(26, '==', J$.R(297, 'nl', nl, 1), J$.T(305, 2, 22, false), 0)))) {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Unreachable', 21, false)));
                }
                throw J$.X1(353, J$.Th(345, J$.T(337, 'Reachable 1', 21, false)));
            }
            if (J$.X1(577, J$.C(32, J$.B(34, '==', J$.R(361, 'x', x, 1), J$.T(369, 'what', 21, false), 0)))) {
                if (J$.X1(569, J$.C(24, J$.B(42, '!=', J$.R(377, 'nl', nl, 1), J$.T(385, 0, 22, false), 0)))) {
                    throw J$.X1(409, J$.Th(401, J$.T(393, 'Unreachable', 21, false)));
                }
                throw J$.X1(433, J$.Th(425, J$.T(417, 'Reachable 2', 21, false)));
            }
            if (J$.X1(585, J$.C(48, J$.C(40, J$.B(50, '==', J$.R(441, 'x', x, 1), J$.T(449, '12345', 21, false), 0)) ? J$.B(58, '!=', J$.R(457, 'nl', nl, 1), J$.T(465, 0, 22, false), 0) : J$._()))) {
                throw J$.X1(489, J$.Th(481, J$.T(473, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(593, J$e);
        } finally {
            if (J$.Sr(601)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT