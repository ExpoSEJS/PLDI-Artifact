J$.iids = {"8":[7,6,7,14],"9":[3,10,3,17],"10":[7,6,7,14],"16":[8,6,8,14],"17":[3,18,3,22],"18":[8,6,8,14],"24":[9,6,9,14],"25":[3,10,3,23],"26":[9,6,9,14],"32":[10,6,10,14],"33":[3,10,3,23],"34":[10,6,10,14],"40":[6,5,6,24],"41":[3,10,3,23],"48":[17,6,17,23],"49":[4,9,4,11],"56":[14,5,14,23],"57":[4,19,4,22],"64":[27,6,27,23],"65":[4,24,4,26],"72":[25,5,25,23],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,16],"105":[6,22,6,23],"113":[6,5,6,24],"115":[6,5,6,21],"121":[7,6,7,7],"129":[7,11,7,14],"137":[7,22,7,35],"145":[7,22,7,35],"153":[7,16,7,36],"161":[8,6,8,7],"169":[8,11,8,14],"177":[8,22,8,35],"185":[8,22,8,35],"193":[8,16,8,36],"201":[9,6,9,7],"209":[9,11,9,14],"217":[9,22,9,35],"225":[9,22,9,35],"233":[9,16,9,36],"241":[10,6,10,7],"249":[10,11,10,14],"257":[10,22,10,35],"265":[10,22,10,35],"273":[10,16,10,36],"281":[11,8,11,19],"289":[11,8,11,19],"297":[11,2,11,20],"305":[14,5,14,15],"313":[14,21,14,22],"321":[14,5,14,23],"323":[14,5,14,20],"329":[17,6,17,15],"337":[17,21,17,22],"345":[17,6,17,23],"347":[17,6,17,20],"353":[18,9,18,22],"361":[18,9,18,22],"369":[18,3,18,23],"377":[22,8,22,21],"385":[22,8,22,21],"393":[22,2,22,22],"401":[25,5,25,15],"409":[25,21,25,22],"417":[25,5,25,23],"419":[25,5,25,20],"425":[27,6,27,15],"433":[27,21,27,22],"441":[27,6,27,23],"443":[27,6,27,20],"449":[28,9,28,22],"457":[28,9,28,22],"465":[28,3,28,23],"473":[31,8,31,12],"481":[31,8,31,12],"489":[31,2,31,13],"497":[1,1,32,2],"505":[1,1,32,2],"513":[1,1,32,2],"521":[7,2,7,36],"529":[8,2,8,36],"537":[9,2,9,36],"545":[10,2,10,36],"553":[6,1,12,2],"561":[17,2,19,3],"569":[14,1,23,2],"577":[27,2,29,3],"585":[25,1,32,2],"593":[1,1,32,2],"601":[1,1,32,2],"nBranches":18,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/negative_ranges.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/negative_ranges_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^[^abcd]$/.test(x)) {\n\tif (x == 'a') throw 'Unreachable';\n\tif (x == 'b') throw 'Unreachable';\n\tif (x == 'c') throw 'Unreachable';\n\tif (x == 'd') throw 'Unreachable';\n\tthrow 'Reachable';\n}\n\nif (/^[^a-z]$/.test(x)) {\n\t\n\t//Definitely unreachable given this if should never be entered\n\tif (/^[a-z]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\t//This is unreachable as any section that is caught by [^a-z] will be caught by [^abcd]\n\tthrow 'Unreachable';\n}\n\nif (/^[^0-9]$/.test(x)) {\n\t\n\tif (/^[0-9]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'R3';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(497, '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/negative_ranges_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/negative_ranges.js');
            J$.N(505, 'S$', S$, 0);
            J$.N(513, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(553, J$.C(40, J$.M(113, J$.T(97, /^[^abcd]$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(521, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'a', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Unreachable', 21, false)));
                if (J$.X1(529, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'b', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Unreachable', 21, false)));
                if (J$.X1(537, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, 'c', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
                if (J$.X1(545, J$.C(32, J$.B(34, '==', J$.R(241, 'x', x, 1), J$.T(249, 'd', 21, false), 0))))
                    throw J$.X1(273, J$.Th(265, J$.T(257, 'Unreachable', 21, false)));
                throw J$.X1(297, J$.Th(289, J$.T(281, 'Reachable', 21, false)));
            }
            if (J$.X1(569, J$.C(56, J$.M(321, J$.T(305, /^[^a-z]$/, 14, false), 'test', 0)(J$.R(313, 'x', x, 1))))) {
                if (J$.X1(561, J$.C(48, J$.M(345, J$.T(329, /^[a-z]$/, 14, false), 'test', 0)(J$.R(337, 'x', x, 1))))) {
                    throw J$.X1(369, J$.Th(361, J$.T(353, 'Unreachable', 21, false)));
                }
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Unreachable', 21, false)));
            }
            if (J$.X1(585, J$.C(72, J$.M(417, J$.T(401, /^[^0-9]$/, 14, false), 'test', 0)(J$.R(409, 'x', x, 1))))) {
                if (J$.X1(577, J$.C(64, J$.M(441, J$.T(425, /^[0-9]$/, 14, false), 'test', 0)(J$.R(433, 'x', x, 1))))) {
                    throw J$.X1(465, J$.Th(457, J$.T(449, 'Unreachable', 21, false)));
                }
                throw J$.X1(489, J$.Th(481, J$.T(473, 'R3', 21, false)));
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
