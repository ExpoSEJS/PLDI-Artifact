J$.iids = {"8":[6,9,6,18],"9":[1,20,1,27],"10":[6,9,6,18],"16":[9,9,9,18],"17":[1,28,1,32],"18":[9,9,9,18],"24":[12,9,12,18],"25":[1,20,1,33],"26":[12,9,12,18],"32":[15,9,15,18],"33":[1,20,1,33],"34":[15,9,15,18],"40":[18,9,18,20],"41":[1,20,1,33],"42":[18,9,18,20],"48":[21,9,21,20],"49":[2,26,2,38],"50":[21,9,21,20],"56":[24,9,24,22],"57":[2,26,2,45],"58":[24,9,24,22],"64":[5,5,5,41],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,33],"177":[5,39,5,40],"185":[5,5,5,41],"187":[5,5,5,38],"193":[6,9,6,10],"201":[6,14,6,18],"209":[7,15,7,28],"217":[7,15,7,28],"225":[7,9,7,29],"233":[9,9,9,10],"241":[9,14,9,18],"249":[10,15,10,28],"257":[10,15,10,28],"265":[10,9,10,29],"273":[12,9,12,10],"281":[12,14,12,18],"289":[13,15,13,28],"297":[13,15,13,28],"305":[13,9,13,29],"313":[15,9,15,10],"321":[15,14,15,18],"329":[16,15,16,28],"337":[16,15,16,28],"345":[16,9,16,29],"353":[18,9,18,10],"361":[18,14,18,20],"369":[19,15,19,28],"377":[19,15,19,28],"385":[19,9,19,29],"393":[21,9,21,10],"401":[21,14,21,20],"409":[22,15,22,26],"417":[22,15,22,26],"425":[22,9,22,27],"433":[24,9,24,10],"441":[24,14,24,22],"449":[25,15,25,26],"457":[25,15,25,26],"465":[25,9,25,27],"473":[27,11,27,22],"481":[27,11,27,22],"489":[27,5,27,23],"497":[1,1,28,2],"505":[1,1,28,2],"513":[1,1,28,2],"521":[1,1,28,2],"529":[1,1,28,2],"537":[6,5,8,6],"545":[9,5,11,6],"553":[12,5,14,6],"561":[15,5,17,6],"569":[18,5,20,6],"577":[21,5,23,6],"585":[24,5,26,6],"593":[5,1,28,2],"601":[1,1,28,2],"609":[1,1,28,2],"nBranches":16,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/open_three.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/open_three_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test modeling of looped references to open capture groups (Local captures)\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(([a-z])\\2)+(([1-9])\\4)+$/.test(x)) {\n\n\tif (x == '11') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'ab') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'aa') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'zz') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'aa23') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'aa11') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (x == 'aaaa11') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(497, '/home/blake/artifact/microbenchmarks/regex/backreferences/open_three_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/backreferences/open_three.js');
            J$.N(505, '__secret__S$', __secret__S$, 0);
            J$.N(513, '__secret__traits__', __secret__traits__, 0);
            J$.N(521, 'S$', S$, 0);
            J$.N(529, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(593, J$.C(64, J$.M(185, J$.T(169, /^(([a-z])\2)+(([1-9])\4)+$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(537, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, '11', 21, false), 0)))) {
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Unreachable', 21, false)));
                }
                if (J$.X1(545, J$.C(16, J$.B(18, '==', J$.R(233, 'x', x, 1), J$.T(241, 'ab', 21, false), 0)))) {
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
                }
                if (J$.X1(553, J$.C(24, J$.B(26, '==', J$.R(273, 'x', x, 1), J$.T(281, 'aa', 21, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Unreachable', 21, false)));
                }
                if (J$.X1(561, J$.C(32, J$.B(34, '==', J$.R(313, 'x', x, 1), J$.T(321, 'zz', 21, false), 0)))) {
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Unreachable', 21, false)));
                }
                if (J$.X1(569, J$.C(40, J$.B(42, '==', J$.R(353, 'x', x, 1), J$.T(361, 'aa23', 21, false), 0)))) {
                    throw J$.X1(385, J$.Th(377, J$.T(369, 'Unreachable', 21, false)));
                }
                if (J$.X1(577, J$.C(48, J$.B(50, '==', J$.R(393, 'x', x, 1), J$.T(401, 'aa11', 21, false), 0)))) {
                    throw J$.X1(425, J$.Th(417, J$.T(409, 'Reachable', 21, false)));
                }
                if (J$.X1(585, J$.C(56, J$.B(58, '==', J$.R(433, 'x', x, 1), J$.T(441, 'aaaa11', 21, false), 0)))) {
                    throw J$.X1(465, J$.Th(457, J$.T(449, 'Reachable', 21, false)));
                }
                throw J$.X1(489, J$.Th(481, J$.T(473, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(601, J$e);
        } finally {
            if (J$.Sr(609)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
