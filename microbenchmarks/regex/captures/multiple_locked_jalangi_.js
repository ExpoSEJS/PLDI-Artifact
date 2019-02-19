J$.iids = {"8":[7,9,7,23],"9":[1,20,1,27],"10":[7,9,7,23],"16":[9,9,9,22],"17":[1,28,1,32],"18":[9,9,9,22],"24":[11,9,11,20],"25":[1,20,1,33],"26":[11,9,11,20],"32":[6,5,6,6],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,19],"177":[5,25,5,26],"185":[5,9,5,27],"187":[5,9,5,24],"193":[5,9,5,27],"201":[5,9,5,27],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,11,7,12],"233":[7,9,7,13],"241":[7,17,7,23],"249":[8,15,8,28],"257":[8,15,8,28],"265":[8,9,8,29],"273":[9,9,9,10],"281":[9,11,9,12],"289":[9,9,9,13],"297":[9,17,9,22],"305":[10,15,10,28],"313":[10,15,10,28],"321":[10,9,10,29],"329":[11,9,11,10],"337":[11,11,11,12],"345":[11,9,11,13],"353":[11,17,11,20],"361":[12,15,12,28],"369":[12,15,12,28],"377":[12,9,12,29],"385":[13,11,13,22],"393":[13,11,13,22],"401":[13,5,13,23],"409":[1,1,14,2],"417":[1,1,14,2],"425":[1,1,14,2],"433":[1,1,14,2],"441":[1,1,14,2],"449":[1,1,14,2],"457":[7,5,8,29],"465":[9,5,10,29],"473":[11,5,12,29],"481":[6,1,14,2],"489":[1,1,14,2],"497":[1,1,14,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/multiple_locked.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/multiple_locked_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(abc)(d)/.exec(x);\n\nif (b) {\n\tif (b[0] != 'abcd') throw 'Unreachable';\n\tif (b[1] != 'abc') throw 'Unreachable';\n\tif (b[2] != 'd') throw 'Unreachable';\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/home/blake/artifact/microbenchmarks/regex/captures/multiple_locked_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/captures/multiple_locked.js');
            J$.N(417, '__secret__S$', __secret__S$, 0);
            J$.N(425, '__secret__traits__', __secret__traits__, 0);
            J$.N(433, 'S$', S$, 0);
            J$.N(441, 'x', x, 0);
            J$.N(449, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /(abc)(d)/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(481, J$.C(32, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(457, J$.C(8, J$.B(10, '!=', J$.G(233, J$.R(217, 'b', b, 1), J$.T(225, 0, 22, false), 4), J$.T(241, 'abcd', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
                if (J$.X1(465, J$.C(16, J$.B(18, '!=', J$.G(289, J$.R(273, 'b', b, 1), J$.T(281, 1, 22, false), 4), J$.T(297, 'abc', 21, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
                if (J$.X1(473, J$.C(24, J$.B(26, '!=', J$.G(345, J$.R(329, 'b', b, 1), J$.T(337, 2, 22, false), 4), J$.T(353, 'd', 21, false), 0))))
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
