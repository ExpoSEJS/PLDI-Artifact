J$.iids = {"8":[10,6,10,29],"9":[6,10,6,17],"10":[10,6,10,29],"16":[11,6,11,22],"17":[6,18,6,22],"18":[11,6,11,22],"24":[12,6,12,13],"25":[6,10,6,23],"26":[12,6,12,13],"32":[9,5,9,32],"33":[6,10,6,23],"34":[17,6,17,13],"40":[17,6,17,13],"41":[6,10,6,23],"42":[18,6,18,28],"48":[18,6,18,28],"49":[7,9,7,11],"50":[19,6,19,14],"56":[19,6,19,14],"57":[7,19,7,22],"58":[20,6,20,27],"64":[20,6,20,27],"65":[7,24,7,26],"66":[21,6,21,28],"72":[21,6,21,28],"73":[7,9,7,27],"75":[7,9,7,18],"80":[16,5,16,35],"81":[7,9,7,27],"89":[7,9,7,27],"97":[9,5,9,24],"105":[9,30,9,31],"113":[9,5,9,32],"115":[9,5,9,29],"121":[10,6,10,7],"129":[10,11,10,29],"137":[10,37,10,48],"145":[10,37,10,48],"153":[10,31,10,49],"161":[11,6,11,7],"169":[11,11,11,22],"177":[11,30,11,41],"185":[11,30,11,41],"193":[11,24,11,42],"201":[12,6,12,7],"209":[12,11,12,13],"217":[12,21,12,34],"225":[12,21,12,34],"233":[12,15,12,35],"241":[13,8,13,19],"249":[13,8,13,19],"257":[13,2,13,20],"265":[16,5,16,27],"273":[16,33,16,34],"281":[16,5,16,35],"283":[16,5,16,32],"289":[17,6,17,7],"297":[17,11,17,13],"305":[17,21,17,32],"313":[17,21,17,32],"321":[17,15,17,33],"329":[18,6,18,7],"337":[18,11,18,28],"345":[18,36,18,47],"353":[18,36,18,47],"361":[18,30,18,48],"369":[19,6,19,7],"377":[19,11,19,14],"385":[19,22,19,35],"393":[19,22,19,35],"401":[19,16,19,36],"409":[20,6,20,7],"417":[20,11,20,27],"425":[20,35,20,48],"433":[20,35,20,48],"441":[20,29,20,49],"449":[21,6,21,7],"457":[21,11,21,28],"465":[21,36,21,47],"473":[21,36,21,47],"481":[21,30,21,48],"489":[22,8,22,19],"497":[22,8,22,19],"505":[22,2,22,20],"513":[1,1,23,2],"521":[1,1,23,2],"529":[1,1,23,2],"537":[10,2,10,49],"545":[11,2,11,42],"553":[12,2,12,35],"561":[9,1,14,2],"569":[17,2,17,33],"577":[18,2,18,48],"585":[19,2,19,36],"593":[20,2,20,49],"601":[21,2,21,48],"609":[16,1,23,2],"617":[1,1,23,2],"625":[1,1,23,2],"nBranches":20,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/lazy.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/lazy_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Lazy based on star.js\n//Tests that *? has the same properties as * in test\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^he*?llo_world*?$/.test(x)) {\n\tif (x == 'heello_worlddddd') throw 'Reachable';\n\tif (x == 'hllo_worl') throw 'Reachable';\n\tif (x == '') throw 'Unreachable';\n\tthrow 'Reachable';\n}\n\nif (/^(hello)*?(world)*?$/.test(x)) {\n\tif (x == '') throw 'Reachable';\n\tif (x == 'hellohelloworld') throw 'Reachable';\n\tif (x == 'd') throw 'Unreachable';\n\tif (x == 'hellohelloworl') throw 'Unreachable';\n\tif (x == 'worldworldworld') throw 'Reachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(513, '/home/blake/artifact/ExpoSE/tests/regex/core/star/lazy_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/star/lazy.js');
            J$.N(521, 'S$', S$, 0);
            J$.N(529, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(561, J$.C(32, J$.M(113, J$.T(97, /^he*?llo_world*?$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(537, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'heello_worlddddd', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                if (J$.X1(545, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'hllo_worl', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
                if (J$.X1(553, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, '', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
            }
            if (J$.X1(609, J$.C(80, J$.M(281, J$.T(265, /^(hello)*?(world)*?$/, 14, false), 'test', 0)(J$.R(273, 'x', x, 1))))) {
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
