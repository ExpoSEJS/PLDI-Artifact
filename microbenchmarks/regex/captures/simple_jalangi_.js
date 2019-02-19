J$.iids = {"8":[7,9,7,23],"9":[1,20,1,27],"10":[7,9,7,23],"16":[9,9,9,32],"17":[1,28,1,32],"18":[9,9,9,32],"24":[11,9,11,35],"25":[1,20,1,33],"26":[11,9,11,20],"32":[11,9,11,35],"33":[1,20,1,33],"34":[11,24,11,35],"40":[6,5,6,6],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,14],"177":[5,20,5,21],"185":[5,9,5,22],"187":[5,9,5,19],"193":[5,9,5,22],"201":[5,9,5,22],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,14,7,23],"233":[8,15,8,26],"241":[8,15,8,26],"249":[8,9,8,27],"257":[9,9,9,10],"265":[9,14,9,32],"273":[10,15,10,26],"281":[10,15,10,26],"289":[10,9,10,27],"297":[11,9,11,10],"305":[11,11,11,12],"313":[11,9,11,13],"321":[11,17,11,20],"329":[11,24,11,25],"337":[11,26,11,27],"345":[11,24,11,28],"353":[11,32,11,35],"361":[12,15,12,28],"369":[12,15,12,28],"377":[12,9,12,29],"385":[13,11,13,22],"393":[13,11,13,22],"401":[13,5,13,23],"409":[1,1,14,2],"417":[1,1,14,2],"425":[1,1,14,2],"433":[1,1,14,2],"441":[1,1,14,2],"449":[1,1,14,2],"457":[7,5,8,27],"465":[9,5,10,27],"473":[11,5,12,29],"481":[6,1,14,2],"489":[1,1,14,2],"497":[1,1,14,2],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/simple.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)/.exec(x);\n\nif (b) {\n\tif (x == 'aaaabaa') throw 'Reachable';\n\tif (x == 'abcabcabcabcabca') throw 'Reachable';\n\tif (b[0] != 'a' || b[1] != 'a') throw 'Unreachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/home/blake/artifact/microbenchmarks/regex/captures/simple_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/captures/simple.js');
            J$.N(417, '__secret__S$', __secret__S$, 0);
            J$.N(425, '__secret__traits__', __secret__traits__, 0);
            J$.N(433, 'S$', S$, 0);
            J$.N(441, 'x', x, 0);
            J$.N(449, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /(a)/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(481, J$.C(40, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(457, J$.C(8, J$.B(10, '==', J$.R(217, 'x', x, 1), J$.T(225, 'aaaabaa', 21, false), 0))))
                    throw J$.X1(249, J$.Th(241, J$.T(233, 'Reachable', 21, false)));
                if (J$.X1(465, J$.C(16, J$.B(18, '==', J$.R(257, 'x', x, 1), J$.T(265, 'abcabcabcabcabca', 21, false), 0))))
                    throw J$.X1(289, J$.Th(281, J$.T(273, 'Reachable', 21, false)));
                if (J$.X1(473, J$.C(32, J$.C(24, J$.B(26, '!=', J$.G(313, J$.R(297, 'b', b, 1), J$.T(305, 0, 22, false), 4), J$.T(321, 'a', 21, false), 0)) ? J$._() : J$.B(34, '!=', J$.G(345, J$.R(329, 'b', b, 1), J$.T(337, 1, 22, false), 4), J$.T(353, 'a', 21, false), 0))))
                    throw J$.X1(377, J$.Th(369, J$.T(361, 'Unreachable', 21, false)));
                throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
