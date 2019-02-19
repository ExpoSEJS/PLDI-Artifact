J$.iids = {"8":[8,5,8,25],"9":[3,10,3,17],"10":[6,11,6,24],"16":[12,5,12,25],"17":[3,18,3,22],"18":[8,5,8,25],"24":[16,5,16,25],"25":[3,10,3,23],"26":[12,5,12,25],"32":[20,5,20,23],"33":[3,10,3,23],"34":[16,5,16,25],"40":[24,5,24,28],"41":[3,10,3,23],"42":[20,13,20,15],"48":[28,5,28,28],"49":[4,9,4,11],"50":[20,5,20,23],"56":[32,5,32,28],"57":[4,19,4,22],"58":[24,13,24,15],"64":[36,5,36,26],"65":[4,24,4,31],"66":[24,5,24,28],"73":[4,9,4,32],"74":[28,13,28,15],"75":[4,9,4,18],"81":[4,9,4,32],"82":[28,5,28,28],"89":[4,9,4,32],"90":[32,13,32,15],"97":[6,1,6,3],"98":[32,5,32,28],"105":[6,11,6,12],"106":[36,13,36,15],"113":[6,11,6,19],"114":[36,5,36,26],"121":[6,23,6,24],"129":[6,1,6,25],"131":[6,1,6,10],"137":[6,1,6,26],"145":[8,5,8,6],"153":[8,13,8,14],"161":[8,16,8,17],"169":[8,5,8,18],"171":[8,5,8,12],"177":[8,22,8,25],"185":[9,8,9,21],"193":[9,8,9,21],"201":[9,2,9,22],"209":[12,5,12,6],"217":[12,13,12,14],"225":[12,5,12,15],"227":[12,5,12,12],"233":[12,19,12,25],"241":[13,8,13,21],"249":[13,8,13,21],"257":[13,2,13,22],"265":[16,5,16,6],"273":[16,13,16,14],"281":[16,5,16,15],"283":[16,5,16,12],"289":[16,19,16,25],"297":[17,8,17,21],"305":[17,8,17,21],"313":[17,2,17,22],"321":[20,5,20,6],"329":[20,14,20,15],"337":[20,5,20,16],"339":[20,5,20,12],"345":[20,20,20,23],"353":[21,8,21,21],"361":[21,8,21,21],"369":[21,2,21,22],"377":[24,5,24,6],"385":[24,14,24,15],"393":[24,17,24,18],"401":[24,5,24,19],"403":[24,5,24,12],"409":[24,23,24,28],"417":[25,8,25,21],"425":[25,8,25,21],"433":[25,2,25,22],"441":[28,5,28,6],"449":[28,14,28,15],"457":[28,17,28,18],"465":[28,5,28,19],"467":[28,5,28,12],"473":[28,23,28,28],"481":[29,8,29,21],"489":[29,8,29,21],"497":[29,2,29,22],"505":[32,5,32,6],"513":[32,14,32,15],"521":[32,17,32,18],"529":[32,5,32,19],"531":[32,5,32,12],"537":[32,23,32,28],"545":[33,8,33,21],"553":[33,8,33,21],"561":[33,2,33,22],"569":[36,5,36,6],"577":[36,14,36,15],"585":[36,5,36,16],"587":[36,5,36,12],"593":[36,20,36,26],"601":[37,8,37,21],"609":[37,8,37,21],"617":[37,2,37,22],"625":[1,1,38,2],"633":[1,1,38,2],"641":[1,1,38,2],"649":[8,1,10,2],"657":[12,1,14,2],"665":[16,1,18,2],"673":[20,1,22,2],"681":[24,1,26,2],"689":[28,1,30,2],"697":[32,1,34,2],"705":[36,1,38,2],"713":[1,1,38,2],"721":[1,1,38,2],"nBranches":16,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/negative_slice.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/negative_slice_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", \"hello\");\n\nS$.assume(x.length == 5);\n\nif (x.slice(1, 1) == \"w\") {\n\tthrow 'Unreachable';\n}\n\nif (x.slice(1) == \"what\") {\n\tthrow 'Reachable 1';\n}\n\nif (x.slice(1) == \"phat\") {\n\tthrow 'Reachable 2';\n}\n\nif (x.slice(-1) == \"w\") {\n\tthrow 'Reachable 3';\n}\n\nif (x.slice(-5, 3) == \"por\") {\n\tthrow 'Reachable 4';\n}\n\nif (x.slice(-3, 8) == \"por\") {\n\tthrow 'Reachable 5';\n}\n\nif (x.slice(-5, 4) == \"por\") {\n\tthrow 'Unreachable';\n}\n\nif (x.slice(-1) == \"what\") {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(625, '/home/blake/artifact/ExpoSE/tests/strings/negative_slice_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/negative_slice.js');
            J$.N(633, 'S$', S$, 0);
            J$.N(641, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, "hello", 21, false)), x, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 5, 22, false), 0)));
            if (J$.X1(649, J$.C(8, J$.B(18, '==', J$.M(169, J$.R(145, 'x', x, 1), 'slice', 0)(J$.T(153, 1, 22, false), J$.T(161, 1, 22, false)), J$.T(177, "w", 21, false), 0)))) {
                throw J$.X1(201, J$.Th(193, J$.T(185, 'Unreachable', 21, false)));
            }
            if (J$.X1(657, J$.C(16, J$.B(26, '==', J$.M(225, J$.R(209, 'x', x, 1), 'slice', 0)(J$.T(217, 1, 22, false)), J$.T(233, "what", 21, false), 0)))) {
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable 1', 21, false)));
            }
            if (J$.X1(665, J$.C(24, J$.B(34, '==', J$.M(281, J$.R(265, 'x', x, 1), 'slice', 0)(J$.T(273, 1, 22, false)), J$.T(289, "phat", 21, false), 0)))) {
                throw J$.X1(313, J$.Th(305, J$.T(297, 'Reachable 2', 21, false)));
            }
            if (J$.X1(673, J$.C(32, J$.B(50, '==', J$.M(337, J$.R(321, 'x', x, 1), 'slice', 0)(J$.U(42, '-', J$.T(329, 1, 22, false))), J$.T(345, "w", 21, false), 0)))) {
                throw J$.X1(369, J$.Th(361, J$.T(353, 'Reachable 3', 21, false)));
            }
            if (J$.X1(681, J$.C(40, J$.B(66, '==', J$.M(401, J$.R(377, 'x', x, 1), 'slice', 0)(J$.U(58, '-', J$.T(385, 5, 22, false)), J$.T(393, 3, 22, false)), J$.T(409, "por", 21, false), 0)))) {
                throw J$.X1(433, J$.Th(425, J$.T(417, 'Reachable 4', 21, false)));
            }
            if (J$.X1(689, J$.C(48, J$.B(82, '==', J$.M(465, J$.R(441, 'x', x, 1), 'slice', 0)(J$.U(74, '-', J$.T(449, 3, 22, false)), J$.T(457, 8, 22, false)), J$.T(473, "por", 21, false), 0)))) {
                throw J$.X1(497, J$.Th(489, J$.T(481, 'Reachable 5', 21, false)));
            }
            if (J$.X1(697, J$.C(56, J$.B(98, '==', J$.M(529, J$.R(505, 'x', x, 1), 'slice', 0)(J$.U(90, '-', J$.T(513, 5, 22, false)), J$.T(521, 4, 22, false)), J$.T(537, "por", 21, false), 0)))) {
                throw J$.X1(561, J$.Th(553, J$.T(545, 'Unreachable', 21, false)));
            }
            if (J$.X1(705, J$.C(64, J$.B(114, '==', J$.M(585, J$.R(569, 'x', x, 1), 'slice', 0)(J$.U(106, '-', J$.T(577, 1, 22, false))), J$.T(593, "what", 21, false), 0)))) {
                throw J$.X1(617, J$.Th(609, J$.T(601, 'Unreachable', 21, false)));
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