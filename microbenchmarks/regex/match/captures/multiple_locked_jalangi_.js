J$.iids = {"8":[8,9,8,23],"9":[1,20,1,27],"10":[8,9,8,23],"16":[10,9,10,22],"17":[1,28,1,32],"18":[10,9,10,22],"24":[12,9,12,20],"25":[1,20,1,33],"26":[12,9,12,20],"32":[7,5,7,6],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,13,5,23],"177":[5,13,5,23],"185":[5,13,5,23],"193":[6,9,6,10],"201":[6,17,6,22],"209":[6,9,6,23],"211":[6,9,6,16],"217":[6,9,6,23],"225":[6,9,6,23],"233":[7,5,7,6],"241":[8,9,8,10],"249":[8,11,8,12],"257":[8,9,8,13],"265":[8,17,8,23],"273":[9,15,9,28],"281":[9,15,9,28],"289":[9,9,9,29],"297":[10,9,10,10],"305":[10,11,10,12],"313":[10,9,10,13],"321":[10,17,10,22],"329":[11,15,11,28],"337":[11,15,11,28],"345":[11,9,11,29],"353":[12,9,12,10],"361":[12,11,12,12],"369":[12,9,12,13],"377":[12,17,12,20],"385":[13,15,13,28],"393":[13,15,13,28],"401":[13,9,13,29],"409":[14,11,14,22],"417":[14,11,14,22],"425":[14,5,14,23],"433":[1,1,15,2],"441":[1,1,15,2],"449":[1,1,15,2],"457":[1,1,15,2],"465":[1,1,15,2],"473":[1,1,15,2],"481":[1,1,15,2],"489":[8,5,9,29],"497":[10,5,11,29],"505":[12,5,13,29],"513":[7,1,15,2],"521":[1,1,15,2],"529":[1,1,15,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/multiple_locked.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/multiple_locked_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar regex = /(abc)(d)/\nvar b = x.match(regex);\n\nif (b) {\n\tif (b[0] != 'abcd') throw 'Unreachable';\n\tif (b[1] != 'abc') throw 'Unreachable';\n\tif (b[2] != 'd') throw 'Unreachable';\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(433, '/home/blake/artifact/microbenchmarks/regex/match/captures/multiple_locked_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/captures/multiple_locked.js');
            J$.N(441, '__secret__S$', __secret__S$, 0);
            J$.N(449, '__secret__traits__', __secret__traits__, 0);
            J$.N(457, 'S$', S$, 0);
            J$.N(465, 'x', x, 0);
            J$.N(473, 'regex', regex, 0);
            J$.N(481, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var regex = J$.X1(185, J$.W(177, 'regex', J$.T(169, /(abc)(d)/, 14, false), regex, 3));
            var b = J$.X1(225, J$.W(217, 'b', J$.M(209, J$.R(193, 'x', x, 1), 'match', 0)(J$.R(201, 'regex', regex, 1)), b, 3));
            if (J$.X1(513, J$.C(32, J$.R(233, 'b', b, 1)))) {
                if (J$.X1(489, J$.C(8, J$.B(10, '!=', J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 0, 22, false), 4), J$.T(265, 'abcd', 21, false), 0))))
                    throw J$.X1(289, J$.Th(281, J$.T(273, 'Unreachable', 21, false)));
                if (J$.X1(497, J$.C(16, J$.B(18, '!=', J$.G(313, J$.R(297, 'b', b, 1), J$.T(305, 1, 22, false), 4), J$.T(321, 'abc', 21, false), 0))))
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Unreachable', 21, false)));
                if (J$.X1(505, J$.C(24, J$.B(26, '!=', J$.G(369, J$.R(353, 'b', b, 1), J$.T(361, 2, 22, false), 4), J$.T(377, 'd', 21, false), 0))))
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Unreachable', 21, false)));
                throw J$.X1(425, J$.Th(417, J$.T(409, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
