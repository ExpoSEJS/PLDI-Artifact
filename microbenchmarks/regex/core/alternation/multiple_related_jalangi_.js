J$.iids = {"8":[7,6,7,18],"9":[3,10,3,17],"10":[7,6,7,18],"16":[8,6,8,20],"17":[3,18,3,22],"18":[8,6,8,20],"24":[9,6,9,21],"25":[3,10,3,23],"26":[9,6,9,21],"32":[6,5,6,39],"33":[3,10,3,23],"34":[14,6,14,19],"40":[14,6,14,19],"41":[3,10,3,23],"42":[23,6,23,18],"48":[13,5,13,29],"49":[4,9,4,11],"50":[24,6,24,16],"56":[18,5,18,38],"57":[4,19,4,22],"64":[23,6,23,18],"65":[4,24,4,26],"72":[24,6,24,16],"73":[4,9,4,27],"75":[4,9,4,18],"80":[22,5,22,35],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,31],"105":[6,37,6,38],"113":[6,5,6,39],"115":[6,5,6,36],"121":[7,6,7,7],"129":[7,11,7,18],"137":[7,26,7,37],"145":[7,26,7,37],"153":[7,20,7,38],"161":[8,6,8,7],"169":[8,11,8,20],"177":[8,28,8,39],"185":[8,28,8,39],"193":[8,22,8,40],"201":[9,6,9,7],"209":[9,11,9,21],"217":[9,29,9,40],"225":[9,29,9,40],"233":[9,23,9,41],"241":[10,8,10,21],"249":[10,8,10,21],"257":[10,2,10,22],"265":[13,5,13,21],"273":[13,27,13,28],"281":[13,5,13,29],"283":[13,5,13,26],"289":[14,6,14,7],"297":[14,11,14,19],"305":[14,27,14,38],"313":[14,27,14,38],"321":[14,21,14,39],"329":[15,8,15,21],"337":[15,8,15,21],"345":[15,2,15,22],"353":[18,5,18,30],"361":[18,36,18,37],"369":[18,5,18,38],"371":[18,5,18,35],"377":[19,8,19,21],"385":[19,8,19,21],"393":[19,2,19,22],"401":[22,5,22,27],"409":[22,33,22,34],"417":[22,5,22,35],"419":[22,5,22,32],"425":[23,6,23,7],"433":[23,11,23,18],"441":[23,26,23,37],"449":[23,26,23,37],"457":[23,20,23,38],"465":[24,6,24,7],"473":[24,11,24,16],"481":[24,24,24,35],"489":[24,24,24,35],"497":[24,18,24,36],"505":[25,8,25,21],"513":[25,8,25,21],"521":[25,2,25,22],"529":[28,7,28,18],"537":[28,7,28,18],"545":[28,1,28,19],"553":[1,1,28,19],"561":[1,1,28,19],"569":[1,1,28,19],"577":[7,2,7,38],"585":[8,2,8,40],"593":[9,2,9,41],"601":[6,1,11,2],"609":[14,2,14,39],"617":[13,1,16,2],"625":[18,1,20,2],"633":[23,2,23,38],"641":[24,2,24,36],"649":[22,1,26,2],"657":[1,1,28,19],"665":[1,1,28,19],"nBranches":20,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/multiple_related.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/multiple_related_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^Hello|Goodbye|Whats Up$/.test(x)) {\n\tif (x == 'Hello') throw 'Reachable';\n\tif (x == 'Goodbye') throw 'Reachable';\n\tif (x == 'Whats Up') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nif (/^Hello|Cookey$/.test(x)) {\n\tif (x == 'Cookey') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nif (/^Cookey|Hello|Whats Up$/.test(x)) {\n\tthrow 'Unreachable';\n}\n\nif (/^Whats Up|Alice|Bob$/.test(x)) {\n\tif (x == 'Alice') throw 'Reachable';\n\tif (x == 'Bob') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(553, '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/multiple_related_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/multiple_related.js');
            J$.N(561, 'S$', S$, 0);
            J$.N(569, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(601, J$.C(32, J$.M(113, J$.T(97, /^Hello|Goodbye|Whats Up$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(577, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'Hello', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                if (J$.X1(585, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'Goodbye', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
                if (J$.X1(593, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, 'Whats Up', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable', 21, false)));
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
            }
            if (J$.X1(617, J$.C(48, J$.M(281, J$.T(265, /^Hello|Cookey$/, 14, false), 'test', 0)(J$.R(273, 'x', x, 1))))) {
                if (J$.X1(609, J$.C(40, J$.B(34, '==', J$.R(289, 'x', x, 1), J$.T(297, 'Cookey', 21, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
                throw J$.X1(345, J$.Th(337, J$.T(329, 'Unreachable', 21, false)));
            }
            if (J$.X1(625, J$.C(56, J$.M(369, J$.T(353, /^Cookey|Hello|Whats Up$/, 14, false), 'test', 0)(J$.R(361, 'x', x, 1))))) {
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Unreachable', 21, false)));
            }
            if (J$.X1(649, J$.C(80, J$.M(417, J$.T(401, /^Whats Up|Alice|Bob$/, 14, false), 'test', 0)(J$.R(409, 'x', x, 1))))) {
                if (J$.X1(633, J$.C(64, J$.B(42, '==', J$.R(425, 'x', x, 1), J$.T(433, 'Alice', 21, false), 0))))
                    throw J$.X1(457, J$.Th(449, J$.T(441, 'Reachable', 21, false)));
                if (J$.X1(641, J$.C(72, J$.B(50, '==', J$.R(465, 'x', x, 1), J$.T(473, 'Bob', 21, false), 0))))
                    throw J$.X1(497, J$.Th(489, J$.T(481, 'Reachable', 21, false)));
                throw J$.X1(521, J$.Th(513, J$.T(505, 'Unreachable', 21, false)));
            }
            throw J$.X1(545, J$.Th(537, J$.T(529, 'Reachable', 21, false)));
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