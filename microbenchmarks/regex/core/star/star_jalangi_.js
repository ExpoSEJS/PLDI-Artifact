J$.iids = {"8":[7,6,7,29],"9":[3,10,3,17],"10":[7,6,7,29],"16":[8,6,8,22],"17":[3,18,3,22],"18":[8,6,8,22],"24":[9,6,9,13],"25":[3,10,3,23],"26":[9,6,9,13],"32":[6,5,6,30],"33":[3,10,3,23],"34":[14,6,14,13],"40":[14,6,14,13],"41":[3,10,3,23],"42":[15,6,15,28],"48":[15,6,15,28],"49":[4,9,4,11],"50":[16,6,16,14],"56":[16,6,16,14],"57":[4,19,4,22],"58":[17,6,17,27],"64":[17,6,17,27],"65":[4,24,4,26],"66":[18,6,18,28],"72":[18,6,18,28],"73":[4,9,4,27],"75":[4,9,4,18],"80":[13,5,13,33],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,22],"105":[6,28,6,29],"113":[6,5,6,30],"115":[6,5,6,27],"121":[7,6,7,7],"129":[7,11,7,29],"137":[7,37,7,48],"145":[7,37,7,48],"153":[7,31,7,49],"161":[8,6,8,7],"169":[8,11,8,22],"177":[8,30,8,41],"185":[8,30,8,41],"193":[8,24,8,42],"201":[9,6,9,7],"209":[9,11,9,13],"217":[9,21,9,34],"225":[9,21,9,34],"233":[9,15,9,35],"241":[10,8,10,19],"249":[10,8,10,19],"257":[10,2,10,20],"265":[13,5,13,25],"273":[13,31,13,32],"281":[13,5,13,33],"283":[13,5,13,30],"289":[14,6,14,7],"297":[14,11,14,13],"305":[14,21,14,32],"313":[14,21,14,32],"321":[14,15,14,33],"329":[15,6,15,7],"337":[15,11,15,28],"345":[15,36,15,47],"353":[15,36,15,47],"361":[15,30,15,48],"369":[16,6,16,7],"377":[16,11,16,14],"385":[16,22,16,35],"393":[16,22,16,35],"401":[16,16,16,36],"409":[17,6,17,7],"417":[17,11,17,27],"425":[17,35,17,48],"433":[17,35,17,48],"441":[17,29,17,49],"449":[18,6,18,7],"457":[18,11,18,28],"465":[18,36,18,47],"473":[18,36,18,47],"481":[18,30,18,48],"489":[19,8,19,19],"497":[19,8,19,19],"505":[19,2,19,20],"513":[1,1,20,2],"521":[1,1,20,2],"529":[1,1,20,2],"537":[7,2,7,49],"545":[8,2,8,42],"553":[9,2,9,35],"561":[6,1,11,2],"569":[14,2,14,33],"577":[15,2,15,48],"585":[16,2,16,36],"593":[17,2,17,49],"601":[18,2,18,48],"609":[13,1,20,2],"617":[1,1,20,2],"625":[1,1,20,2],"nBranches":20,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/star.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/star_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^he*llo_world*$/.test(x)) {\n\tif (x == 'heello_worlddddd') throw 'Reachable';\n\tif (x == 'hllo_worl') throw 'Reachable';\n\tif (x == '') throw 'Unreachable';\n\tthrow 'Reachable';\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tif (x == '') throw 'Reachable';\n\tif (x == 'hellohelloworld') throw 'Reachable';\n\tif (x == 'd') throw 'Unreachable';\n\tif (x == 'hellohelloworl') throw 'Unreachable';\n\tif (x == 'worldworldworld') throw 'Reachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(513, '/home/blake/artifact/ExpoSE/tests/regex/core/star/star_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/star/star.js');
            J$.N(521, 'S$', S$, 0);
            J$.N(529, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(561, J$.C(32, J$.M(113, J$.T(97, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(537, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'heello_worlddddd', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                if (J$.X1(545, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'hllo_worl', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
                if (J$.X1(553, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, '', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
            }
            if (J$.X1(609, J$.C(80, J$.M(281, J$.T(265, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(273, 'x', x, 1))))) {
                if (J$.X1(569, J$.C(40, J$.B(34, '==', J$.R(289, 'x', x, 1), J$.T(297, '', 21, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
                if (J$.X1(577, J$.C(48, J$.B(42, '==', J$.R(329, 'x', x, 1), J$.T(337, 'hellohelloworld', 21, false), 0))))
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
                if (J$.X1(585, J$.C(56, J$.B(50, '==', J$.R(369, 'x', x, 1), J$.T(377, 'd', 21, false), 0))))
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Unreachable', 21, false)));
                if (J$.X1(593, J$.C(64, J$.B(58, '==', J$.R(409, 'x', x, 1), J$.T(417, 'hellohelloworl', 21, false), 0))))
                    throw J$.X1(441, J$.Th(433, J$.T(425, 'Unreachable', 21, false)));
                if (J$.X1(601, J$.C(72, J$.B(66, '==', J$.R(449, 'x', x, 1), J$.T(457, 'worldworldworld', 21, false), 0))))
                    throw J$.X1(481, J$.Th(473, J$.T(465, 'Reachable', 21, false)));
                throw J$.X1(505, J$.Th(497, J$.T(489, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(617, J$e);
        } finally {
            if (J$.Sr(625)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
