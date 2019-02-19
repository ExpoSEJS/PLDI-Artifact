J$.iids = {"8":[7,9,7,21],"9":[1,20,1,27],"10":[5,11,5,24],"16":[10,9,10,16],"17":[1,28,1,32],"18":[7,9,7,21],"24":[13,9,13,19],"25":[1,20,1,33],"26":[10,9,10,16],"32":[16,9,16,22],"33":[1,20,1,33],"34":[13,9,13,19],"40":[20,13,20,36],"41":[1,20,1,33],"42":[16,9,16,22],"48":[19,21,19,33],"49":[2,26,2,38],"50":[19,21,19,33],"56":[6,5,6,26],"57":[2,26,2,45],"58":[19,40,19,41],"65":[2,26,2,45],"66":[20,13,20,36],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,1,5,3],"177":[5,11,5,12],"185":[5,11,5,19],"193":[5,22,5,24],"201":[5,1,5,25],"203":[5,1,5,10],"209":[5,1,5,26],"217":[6,5,6,18],"225":[6,24,6,25],"233":[6,5,6,26],"235":[6,5,6,23],"241":[7,9,7,10],"249":[7,9,7,17],"257":[7,20,7,21],"265":[8,15,8,28],"273":[8,15,8,28],"281":[8,9,8,29],"289":[10,9,10,10],"297":[10,14,10,16],"305":[11,15,11,28],"313":[11,15,11,28],"321":[11,9,11,29],"329":[13,9,13,10],"337":[13,14,13,19],"345":[14,15,14,28],"353":[14,15,14,28],"361":[14,9,14,29],"369":[16,9,16,10],"377":[16,14,16,22],"385":[17,15,17,28],"393":[17,15,17,28],"401":[17,9,17,29],"409":[19,18,19,19],"417":[19,18,19,19],"425":[19,18,19,19],"433":[19,21,19,22],"441":[19,25,19,26],"449":[19,25,19,33],"457":[19,40,19,41],"465":[19,35,19,36],"473":[19,35,19,41],"481":[20,13,20,14],"489":[20,22,20,23],"497":[20,25,20,26],"505":[20,13,20,27],"507":[20,13,20,21],"513":[20,31,20,36],"521":[21,19,21,32],"529":[21,19,21,32],"537":[21,13,21,33],"545":[24,11,24,22],"553":[24,11,24,22],"561":[24,5,24,23],"569":[26,7,26,18],"577":[26,7,26,18],"585":[26,1,26,19],"593":[1,1,26,19],"601":[1,1,26,19],"609":[1,1,26,19],"617":[1,1,26,19],"625":[1,1,26,19],"633":[1,1,26,19],"641":[7,5,9,6],"649":[10,5,12,6],"657":[13,5,15,6],"665":[16,5,18,6],"673":[20,9,22,10],"681":[19,5,23,6],"689":[19,5,23,6],"697":[6,1,25,2],"705":[1,1,26,19],"713":[1,1,26,19],"nBranches":14,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/minimum_loop.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/minimum_loop_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple test of Term {Min,}\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\n//Restriction to avoid infinite feasible paths for dynamic analysis\nS$.assume(x.length < 20);\n\nif (/^(abc){3,}$/.test(x)) {\n\n\tif (x.length < 9) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == '') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'abc') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'abcabc') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tfor (var i = 0; i < x.length; i += 3) {\n\t\tif (x.substr(i, 3) != 'abc') {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\t}\n\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(593, '/home/blake/artifact/microbenchmarks/regex/core/loops/minimum_loop_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/loops/minimum_loop.js');
            J$.N(601, '__secret__S$', __secret__S$, 0);
            J$.N(609, '__secret__traits__', __secret__traits__, 0);
            J$.N(617, 'S$', S$, 0);
            J$.N(625, 'x', x, 0);
            J$.N(633, 'i', i, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            J$.X1(209, J$.M(201, J$.R(169, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(185, J$.R(177, 'x', x, 1), 'length', 0), J$.T(193, 20, 22, false), 0)));
            if (J$.X1(697, J$.C(56, J$.M(233, J$.T(217, /^(abc){3,}$/, 14, false), 'test', 0)(J$.R(225, 'x', x, 1))))) {
                if (J$.X1(641, J$.C(8, J$.B(18, '<', J$.G(249, J$.R(241, 'x', x, 1), 'length', 0), J$.T(257, 9, 22, false), 0)))) {
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
                }
                if (J$.X1(649, J$.C(16, J$.B(26, '==', J$.R(289, 'x', x, 1), J$.T(297, '', 21, false), 0)))) {
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
                }
                if (J$.X1(657, J$.C(24, J$.B(34, '==', J$.R(329, 'x', x, 1), J$.T(337, 'abc', 21, false), 0)))) {
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Unreachable', 21, false)));
                }
                if (J$.X1(665, J$.C(32, J$.B(42, '==', J$.R(369, 'x', x, 1), J$.T(377, 'abcabc', 21, false), 0)))) {
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Unreachable', 21, false)));
                }
                for (var i = J$.X1(425, J$.W(417, 'i', J$.T(409, 0, 22, false), i, 3)); J$.X1(681, J$.C(48, J$.B(50, '<', J$.R(433, 'i', i, 1), J$.G(449, J$.R(441, 'x', x, 1), 'length', 0), 0))); J$.X1(689, i = J$.W(473, 'i', J$.B(58, '+', J$.R(465, 'i', i, 1), J$.T(457, 3, 22, false), 0), i, 2))) {
                    if (J$.X1(673, J$.C(40, J$.B(66, '!=', J$.M(505, J$.R(481, 'x', x, 1), 'substr', 0)(J$.R(489, 'i', i, 1), J$.T(497, 3, 22, false)), J$.T(513, 'abc', 21, false), 0)))) {
                        throw J$.X1(537, J$.Th(529, J$.T(521, 'Unreachable', 21, false)));
                    }
                }
                throw J$.X1(561, J$.Th(553, J$.T(545, 'Reachable', 21, false)));
            }
            throw J$.X1(585, J$.Th(577, J$.T(569, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(705, J$e);
        } finally {
            if (J$.Sr(713)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
