J$.iids = {"8":[5,5,5,19],"9":[1,20,1,27],"10":[8,5,8,13],"16":[8,5,8,13],"17":[1,28,1,32],"18":[14,5,14,13],"24":[11,5,11,19],"25":[1,20,1,33],"26":[18,9,18,22],"32":[14,5,14,13],"33":[1,20,1,33],"34":[23,5,23,15],"40":[18,9,18,22],"41":[1,20,1,33],"48":[17,5,17,21],"49":[2,26,2,38],"56":[23,5,23,15],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,11],"177":[5,17,5,18],"185":[5,5,5,19],"187":[5,5,5,16],"193":[6,11,6,22],"201":[6,11,6,22],"209":[6,5,6,23],"217":[8,5,8,6],"225":[8,10,8,13],"233":[9,11,9,24],"241":[9,11,9,24],"249":[9,5,9,25],"257":[11,5,11,11],"265":[11,17,11,18],"273":[11,5,11,19],"275":[11,5,11,16],"281":[12,11,12,22],"289":[12,11,12,22],"297":[12,5,12,23],"305":[14,5,14,6],"313":[14,10,14,13],"321":[15,11,15,24],"329":[15,11,15,24],"337":[15,5,15,25],"345":[17,5,17,13],"353":[17,19,17,20],"361":[17,5,17,21],"363":[17,5,17,18],"369":[18,9,18,10],"377":[18,14,18,22],"385":[19,15,19,28],"393":[19,15,19,28],"401":[19,9,19,29],"409":[21,11,21,22],"417":[21,11,21,22],"425":[21,5,21,23],"433":[23,5,23,6],"441":[23,10,23,15],"449":[24,11,24,24],"457":[24,11,24,24],"465":[24,5,24,25],"473":[26,7,26,18],"481":[26,7,26,18],"489":[26,1,26,19],"497":[1,1,26,19],"505":[1,1,26,19],"513":[1,1,26,19],"521":[1,1,26,19],"529":[1,1,26,19],"537":[5,1,7,2],"545":[8,1,10,2],"553":[11,1,13,2],"561":[14,1,16,2],"569":[18,5,20,6],"577":[17,1,22,2],"585":[23,1,25,2],"593":[1,1,26,19],"601":[1,1,26,19],"nBranches":14,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/plus/multiple.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/plus/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the + operator\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^a+$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (x == 'a') {\n\tthrow 'Unreachable';\n}\n\nif (/^b+$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (x == 'b') {\n\tthrow 'Unreachable';\n}\n\nif (/^abc+$/.test(x)) {\n\n\tif (x == 'abcabc') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n\nif (x == 'abc') {\n\tthrow 'Unreachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(497, '/home/blake/artifact/microbenchmarks/regex/core/plus/multiple_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/plus/multiple.js');
            J$.N(505, '__secret__S$', __secret__S$, 0);
            J$.N(513, '__secret__traits__', __secret__traits__, 0);
            J$.N(521, 'S$', S$, 0);
            J$.N(529, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(537, J$.C(8, J$.M(185, J$.T(169, /^a+$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                throw J$.X1(209, J$.Th(201, J$.T(193, 'Reachable', 21, false)));
            }
            if (J$.X1(545, J$.C(16, J$.B(10, '==', J$.R(217, 'x', x, 1), J$.T(225, 'a', 21, false), 0)))) {
                throw J$.X1(249, J$.Th(241, J$.T(233, 'Unreachable', 21, false)));
            }
            if (J$.X1(553, J$.C(24, J$.M(273, J$.T(257, /^b+$/, 14, false), 'test', 0)(J$.R(265, 'x', x, 1))))) {
                throw J$.X1(297, J$.Th(289, J$.T(281, 'Reachable', 21, false)));
            }
            if (J$.X1(561, J$.C(32, J$.B(18, '==', J$.R(305, 'x', x, 1), J$.T(313, 'b', 21, false), 0)))) {
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Unreachable', 21, false)));
            }
            if (J$.X1(577, J$.C(48, J$.M(361, J$.T(345, /^abc+$/, 14, false), 'test', 0)(J$.R(353, 'x', x, 1))))) {
                if (J$.X1(569, J$.C(40, J$.B(26, '==', J$.R(369, 'x', x, 1), J$.T(377, 'abcabc', 21, false), 0)))) {
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Unreachable', 21, false)));
                }
                throw J$.X1(425, J$.Th(417, J$.T(409, 'Reachable', 21, false)));
            }
            if (J$.X1(585, J$.C(56, J$.B(34, '==', J$.R(433, 'x', x, 1), J$.T(441, 'abc', 21, false), 0)))) {
                throw J$.X1(465, J$.Th(457, J$.T(449, 'Unreachable', 21, false)));
            }
            throw J$.X1(489, J$.Th(481, J$.T(473, 'Reachable', 21, false)));
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
