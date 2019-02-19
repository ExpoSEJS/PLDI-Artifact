J$.iids = {"8":[6,9,6,16],"9":[1,20,1,27],"10":[6,9,6,16],"16":[8,9,8,17],"17":[1,28,1,32],"18":[8,9,8,17],"24":[10,9,10,17],"25":[1,20,1,33],"26":[10,9,10,17],"32":[12,9,12,17],"33":[1,20,1,33],"34":[12,9,12,17],"40":[14,9,14,18],"41":[1,20,1,33],"42":[14,9,14,18],"48":[16,9,16,18],"49":[2,26,2,38],"50":[16,9,16,18],"56":[18,9,18,18],"57":[2,26,2,45],"58":[18,9,18,18],"64":[20,9,20,19],"65":[2,26,2,45],"66":[20,9,20,19],"72":[5,5,5,23],"73":[2,26,2,45],"74":[25,9,25,17],"80":[25,9,25,17],"81":[3,10,3,17],"82":[27,9,27,20],"88":[27,9,27,20],"89":[3,18,3,22],"90":[32,9,32,18],"96":[24,5,24,24],"97":[3,10,3,23],"98":[34,9,34,19],"104":[32,9,32,18],"105":[3,10,3,23],"112":[34,9,34,19],"113":[3,10,3,23],"120":[31,5,31,21],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,15],"177":[5,21,5,22],"185":[5,5,5,23],"187":[5,5,5,20],"193":[6,9,6,10],"201":[6,14,6,16],"209":[7,15,7,26],"217":[7,15,7,26],"225":[7,9,7,27],"233":[8,9,8,10],"241":[8,14,8,17],"249":[9,15,9,26],"257":[9,15,9,26],"265":[9,9,9,27],"273":[10,9,10,10],"281":[10,14,10,17],"289":[11,15,11,26],"297":[11,15,11,26],"305":[11,9,11,27],"313":[12,9,12,10],"321":[12,14,12,17],"329":[13,15,13,26],"337":[13,15,13,26],"345":[13,9,13,27],"353":[14,9,14,10],"361":[14,14,14,18],"369":[15,15,15,26],"377":[15,15,15,26],"385":[15,9,15,27],"393":[16,9,16,10],"401":[16,14,16,18],"409":[17,15,17,26],"417":[17,15,17,26],"425":[17,9,17,27],"433":[18,9,18,10],"441":[18,14,18,18],"449":[19,15,19,26],"457":[19,15,19,26],"465":[19,9,19,27],"473":[20,9,20,10],"481":[20,14,20,19],"489":[21,15,21,26],"497":[21,15,21,26],"505":[21,9,21,27],"513":[22,11,22,24],"521":[22,11,22,24],"529":[22,5,22,25],"537":[24,5,24,16],"545":[24,22,24,23],"553":[24,5,24,24],"555":[24,5,24,21],"561":[25,9,25,10],"569":[25,14,25,17],"577":[26,15,26,26],"585":[26,15,26,26],"593":[26,9,26,27],"601":[27,9,27,10],"609":[27,14,27,20],"617":[28,15,28,26],"625":[28,15,28,26],"633":[28,9,28,27],"641":[29,11,29,24],"649":[29,11,29,24],"657":[29,5,29,25],"665":[31,5,31,13],"673":[31,19,31,20],"681":[31,5,31,21],"683":[31,5,31,18],"689":[32,9,32,10],"697":[32,14,32,18],"705":[33,15,33,26],"713":[33,15,33,26],"721":[33,9,33,27],"729":[34,9,34,10],"737":[34,14,34,19],"745":[35,15,35,26],"753":[35,15,35,26],"761":[35,9,35,27],"769":[36,11,36,24],"777":[36,11,36,24],"785":[36,5,36,25],"793":[1,1,37,2],"801":[1,1,37,2],"809":[1,1,37,2],"817":[1,1,37,2],"825":[1,1,37,2],"833":[6,5,7,27],"841":[8,5,9,27],"849":[10,5,11,27],"857":[12,5,13,27],"865":[14,5,15,27],"873":[16,5,17,27],"881":[18,5,19,27],"889":[20,5,21,27],"897":[5,1,23,2],"905":[25,5,26,27],"913":[27,5,28,27],"921":[24,1,30,2],"929":[32,5,33,27],"937":[34,5,35,27],"945":[31,1,37,2],"953":[1,1,37,2],"961":[1,1,37,2],"nBranches":30,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/optional/base.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/optional/base_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple optional enumerates all strings possible from a simple optional\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^a?b?c?$/.test(x)) {\n\tif (x == '') throw 'Reachable';\n\tif (x == 'a') throw 'Reachable';\n\tif (x == 'b') throw 'Reachable';\n\tif (x == 'c') throw 'Reachable';\n\tif (x == 'ab') throw 'Reachable';\n\tif (x == 'ac') throw 'Reachable';\n\tif (x == 'bc') throw 'Reachable';\n\tif (x == 'abc') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\n//Test that braced terms resolve properly, /abc?/ is ab (optional c), (abc) is '' or abc\nif (/^n(qrk)?$/.test(x)) {\n\tif (x == 'n') throw 'Reachable';\n\tif (x == 'nqrk') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nif (/^zed?$/.test(x)) {\n\tif (x == 'ze') throw 'Reachable';\n\tif (x == 'zed') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(793, '/home/blake/artifact/microbenchmarks/regex/core/optional/base_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/optional/base.js');
            J$.N(801, '__secret__S$', __secret__S$, 0);
            J$.N(809, '__secret__traits__', __secret__traits__, 0);
            J$.N(817, 'S$', S$, 0);
            J$.N(825, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(897, J$.C(72, J$.M(185, J$.T(169, /^a?b?c?$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(833, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, '', 21, false), 0))))
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Reachable', 21, false)));
                if (J$.X1(841, J$.C(16, J$.B(18, '==', J$.R(233, 'x', x, 1), J$.T(241, 'a', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
                if (J$.X1(849, J$.C(24, J$.B(26, '==', J$.R(273, 'x', x, 1), J$.T(281, 'b', 21, false), 0))))
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                if (J$.X1(857, J$.C(32, J$.B(34, '==', J$.R(313, 'x', x, 1), J$.T(321, 'c', 21, false), 0))))
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
                if (J$.X1(865, J$.C(40, J$.B(42, '==', J$.R(353, 'x', x, 1), J$.T(361, 'ab', 21, false), 0))))
                    throw J$.X1(385, J$.Th(377, J$.T(369, 'Reachable', 21, false)));
                if (J$.X1(873, J$.C(48, J$.B(50, '==', J$.R(393, 'x', x, 1), J$.T(401, 'ac', 21, false), 0))))
                    throw J$.X1(425, J$.Th(417, J$.T(409, 'Reachable', 21, false)));
                if (J$.X1(881, J$.C(56, J$.B(58, '==', J$.R(433, 'x', x, 1), J$.T(441, 'bc', 21, false), 0))))
                    throw J$.X1(465, J$.Th(457, J$.T(449, 'Reachable', 21, false)));
                if (J$.X1(889, J$.C(64, J$.B(66, '==', J$.R(473, 'x', x, 1), J$.T(481, 'abc', 21, false), 0))))
                    throw J$.X1(505, J$.Th(497, J$.T(489, 'Reachable', 21, false)));
                throw J$.X1(529, J$.Th(521, J$.T(513, 'Unreachable', 21, false)));
            }
            if (J$.X1(921, J$.C(96, J$.M(553, J$.T(537, /^n(qrk)?$/, 14, false), 'test', 0)(J$.R(545, 'x', x, 1))))) {
                if (J$.X1(905, J$.C(80, J$.B(74, '==', J$.R(561, 'x', x, 1), J$.T(569, 'n', 21, false), 0))))
                    throw J$.X1(593, J$.Th(585, J$.T(577, 'Reachable', 21, false)));
                if (J$.X1(913, J$.C(88, J$.B(82, '==', J$.R(601, 'x', x, 1), J$.T(609, 'nqrk', 21, false), 0))))
                    throw J$.X1(633, J$.Th(625, J$.T(617, 'Reachable', 21, false)));
                throw J$.X1(657, J$.Th(649, J$.T(641, 'Unreachable', 21, false)));
            }
            if (J$.X1(945, J$.C(120, J$.M(681, J$.T(665, /^zed?$/, 14, false), 'test', 0)(J$.R(673, 'x', x, 1))))) {
                if (J$.X1(929, J$.C(104, J$.B(90, '==', J$.R(689, 'x', x, 1), J$.T(697, 'ze', 21, false), 0))))
                    throw J$.X1(721, J$.Th(713, J$.T(705, 'Reachable', 21, false)));
                if (J$.X1(937, J$.C(112, J$.B(98, '==', J$.R(729, 'x', x, 1), J$.T(737, 'zed', 21, false), 0))))
                    throw J$.X1(761, J$.Th(753, J$.T(745, 'Reachable', 21, false)));
                throw J$.X1(785, J$.Th(777, J$.T(769, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(953, J$e);
        } finally {
            if (J$.Sr(961)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT