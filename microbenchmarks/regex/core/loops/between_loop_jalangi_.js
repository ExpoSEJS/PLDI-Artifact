J$.iids = {"8":[6,9,6,25],"9":[1,20,1,27],"10":[6,9,6,25],"16":[8,9,8,28],"17":[1,28,1,32],"18":[8,9,8,28],"24":[10,9,10,31],"25":[1,20,1,33],"26":[10,9,10,31],"32":[12,9,12,34],"33":[1,20,1,33],"34":[12,9,12,34],"40":[5,5,5,27],"41":[1,20,1,33],"42":[17,9,17,16],"48":[17,9,17,16],"49":[2,26,2,38],"50":[19,9,19,17],"56":[19,9,19,17],"57":[2,26,2,45],"58":[21,9,21,18],"64":[21,9,21,18],"65":[2,26,2,45],"66":[23,9,23,19],"72":[23,9,23,19],"73":[2,26,2,45],"80":[16,5,16,23],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,19],"177":[5,25,5,26],"185":[5,5,5,27],"187":[5,5,5,24],"193":[6,9,6,10],"201":[6,14,6,25],"209":[7,15,7,26],"217":[7,15,7,26],"225":[7,9,7,27],"233":[8,9,8,10],"241":[8,14,8,28],"249":[9,15,9,26],"257":[9,15,9,26],"265":[9,9,9,27],"273":[10,9,10,10],"281":[10,14,10,31],"289":[11,15,11,26],"297":[11,15,11,26],"305":[11,9,11,27],"313":[12,9,12,10],"321":[12,14,12,34],"329":[13,15,13,26],"337":[13,15,13,26],"345":[13,9,13,27],"353":[14,11,14,24],"361":[14,11,14,24],"369":[14,5,14,25],"377":[16,5,16,15],"385":[16,21,16,22],"393":[16,5,16,23],"395":[16,5,16,20],"401":[17,9,17,10],"409":[17,14,17,16],"417":[18,15,18,26],"425":[18,15,18,26],"433":[18,9,18,27],"441":[19,9,19,10],"449":[19,14,19,17],"457":[20,15,20,26],"465":[20,15,20,26],"473":[20,9,20,27],"481":[21,9,21,10],"489":[21,14,21,18],"497":[22,15,22,26],"505":[22,15,22,26],"513":[22,9,22,27],"521":[23,9,23,10],"529":[23,14,23,19],"537":[24,15,24,26],"545":[24,15,24,26],"553":[24,9,24,27],"561":[25,11,25,24],"569":[25,11,25,24],"577":[25,5,25,25],"585":[1,1,26,2],"593":[1,1,26,2],"601":[1,1,26,2],"609":[1,1,26,2],"617":[1,1,26,2],"625":[6,5,7,27],"633":[8,5,9,27],"641":[10,5,11,27],"649":[12,5,13,27],"657":[5,1,15,2],"665":[17,5,18,27],"673":[19,5,20,27],"681":[21,5,22,27],"689":[23,5,24,27],"697":[16,1,26,2],"705":[1,1,26,2],"713":[1,1,26,2],"nBranches":20,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/between_loop.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/between_loop_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple test of Term {Min, Max}\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(abc){3,6}$/.test(x)) {\n\tif (x == 'abcabcabc') throw 'Reachable';\n\tif (x == 'abcabcabcabc') throw 'Reachable';\n\tif (x == 'abcabcabcabcabc') throw 'Reachable';\n\tif (x == 'abcabcabcabcabcabc') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nif (/^a{0,3}$/.test(x)) {\n\tif (x == '') throw 'Reachable';\n\tif (x == 'a') throw 'Reachable';\n\tif (x == 'aa') throw 'Reachable';\n\tif (x == 'aaa') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(585, '/home/blake/artifact/microbenchmarks/regex/core/loops/between_loop_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/loops/between_loop.js');
            J$.N(593, '__secret__S$', __secret__S$, 0);
            J$.N(601, '__secret__traits__', __secret__traits__, 0);
            J$.N(609, 'S$', S$, 0);
            J$.N(617, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(657, J$.C(40, J$.M(185, J$.T(169, /^(abc){3,6}$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(625, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, 'abcabcabc', 21, false), 0))))
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Reachable', 21, false)));
                if (J$.X1(633, J$.C(16, J$.B(18, '==', J$.R(233, 'x', x, 1), J$.T(241, 'abcabcabcabc', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
                if (J$.X1(641, J$.C(24, J$.B(26, '==', J$.R(273, 'x', x, 1), J$.T(281, 'abcabcabcabcabc', 21, false), 0))))
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                if (J$.X1(649, J$.C(32, J$.B(34, '==', J$.R(313, 'x', x, 1), J$.T(321, 'abcabcabcabcabcabc', 21, false), 0))))
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
                throw J$.X1(369, J$.Th(361, J$.T(353, 'Unreachable', 21, false)));
            }
            if (J$.X1(697, J$.C(80, J$.M(393, J$.T(377, /^a{0,3}$/, 14, false), 'test', 0)(J$.R(385, 'x', x, 1))))) {
                if (J$.X1(665, J$.C(48, J$.B(42, '==', J$.R(401, 'x', x, 1), J$.T(409, '', 21, false), 0))))
                    throw J$.X1(433, J$.Th(425, J$.T(417, 'Reachable', 21, false)));
                if (J$.X1(673, J$.C(56, J$.B(50, '==', J$.R(441, 'x', x, 1), J$.T(449, 'a', 21, false), 0))))
                    throw J$.X1(473, J$.Th(465, J$.T(457, 'Reachable', 21, false)));
                if (J$.X1(681, J$.C(64, J$.B(58, '==', J$.R(481, 'x', x, 1), J$.T(489, 'aa', 21, false), 0))))
                    throw J$.X1(513, J$.Th(505, J$.T(497, 'Reachable', 21, false)));
                if (J$.X1(689, J$.C(72, J$.B(66, '==', J$.R(521, 'x', x, 1), J$.T(529, 'aaa', 21, false), 0))))
                    throw J$.X1(553, J$.Th(545, J$.T(537, 'Reachable', 21, false)));
                throw J$.X1(577, J$.Th(569, J$.T(561, 'Unreachable', 21, false)));
            }
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
