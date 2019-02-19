J$.iids = {"8":[6,9,6,18],"9":[1,20,1,27],"10":[6,9,6,18],"16":[9,9,9,18],"17":[1,28,1,32],"18":[9,9,9,18],"24":[12,9,12,18],"25":[1,20,1,33],"26":[12,9,12,18],"32":[15,9,15,18],"33":[1,20,1,33],"34":[15,9,15,18],"40":[5,5,5,29],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,21],"177":[5,27,5,28],"185":[5,5,5,29],"187":[5,5,5,26],"193":[6,9,6,10],"201":[6,14,6,18],"209":[7,15,7,28],"217":[7,15,7,28],"225":[7,9,7,29],"233":[9,9,9,10],"241":[9,14,9,18],"249":[10,15,10,28],"257":[10,15,10,28],"265":[10,9,10,29],"273":[12,9,12,10],"281":[12,14,12,18],"289":[13,15,13,26],"297":[13,15,13,26],"305":[13,9,13,27],"313":[15,9,15,10],"321":[15,14,15,18],"329":[16,15,16,26],"337":[16,15,16,26],"345":[16,9,16,27],"353":[18,11,18,22],"361":[18,11,18,22],"369":[18,5,18,23],"377":[1,1,19,2],"385":[1,1,19,2],"393":[1,1,19,2],"401":[1,1,19,2],"409":[1,1,19,2],"417":[6,5,8,6],"425":[9,5,11,6],"433":[12,5,14,6],"441":[15,5,17,6],"449":[5,1,19,2],"457":[1,1,19,2],"465":[1,1,19,2],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/open_two.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/open_two_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test modeling of looped references to open capture groups (Local captures)\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(([a-z])\\2)+$/.test(x)) {\n\n\tif (x == '11') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'ab') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'aa') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (x == 'zz') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/home/blake/artifact/microbenchmarks/regex/backreferences/open_two_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/backreferences/open_two.js');
            J$.N(385, '__secret__S$', __secret__S$, 0);
            J$.N(393, '__secret__traits__', __secret__traits__, 0);
            J$.N(401, 'S$', S$, 0);
            J$.N(409, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(449, J$.C(40, J$.M(185, J$.T(169, /^(([a-z])\2)+$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(417, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, '11', 21, false), 0)))) {
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Unreachable', 21, false)));
                }
                if (J$.X1(425, J$.C(16, J$.B(18, '==', J$.R(233, 'x', x, 1), J$.T(241, 'ab', 21, false), 0)))) {
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
                }
                if (J$.X1(433, J$.C(24, J$.B(26, '==', J$.R(273, 'x', x, 1), J$.T(281, 'aa', 21, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                }
                if (J$.X1(441, J$.C(32, J$.B(34, '==', J$.R(313, 'x', x, 1), J$.T(321, 'zz', 21, false), 0)))) {
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
                }
                throw J$.X1(369, J$.Th(361, J$.T(353, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
