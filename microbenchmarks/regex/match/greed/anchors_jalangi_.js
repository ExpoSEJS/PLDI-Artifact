J$.iids = {"8":[8,9,8,22],"9":[1,20,1,27],"10":[8,9,8,22],"16":[10,9,10,21],"17":[1,28,1,32],"18":[10,9,10,21],"24":[12,9,12,25],"25":[1,20,1,33],"26":[12,9,12,25],"32":[7,5,7,6],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,13,5,18],"177":[5,13,5,18],"185":[5,13,5,18],"193":[6,9,6,10],"201":[6,17,6,22],"209":[6,9,6,23],"211":[6,9,6,16],"217":[6,9,6,23],"225":[6,9,6,23],"233":[7,5,7,6],"241":[8,9,8,10],"249":[8,9,8,17],"257":[8,21,8,22],"265":[9,15,9,26],"273":[9,15,9,26],"281":[9,9,9,27],"289":[10,9,10,10],"297":[10,9,10,17],"305":[10,20,10,21],"313":[11,15,11,26],"321":[11,15,11,26],"329":[11,9,11,27],"337":[12,9,12,10],"345":[12,11,12,12],"353":[12,9,12,13],"361":[12,9,12,20],"369":[12,24,12,25],"377":[13,15,13,28],"385":[13,15,13,28],"393":[13,9,13,29],"401":[14,11,14,22],"409":[14,11,14,22],"417":[14,5,14,23],"425":[1,1,15,2],"433":[1,1,15,2],"441":[1,1,15,2],"449":[1,1,15,2],"457":[1,1,15,2],"465":[1,1,15,2],"473":[1,1,15,2],"481":[8,5,9,27],"489":[10,5,11,27],"497":[12,5,13,29],"505":[7,1,15,2],"513":[1,1,15,2],"521":[1,1,15,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/anchors.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/anchors_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test ambiguities brought about by greediness and anchors\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar regex = /.../\nvar b = x.match(regex);\n\nif (b) {\n\tif (x.length == 3) throw 'Reachable';\n\tif (x.length > 9) throw 'Reachable';\n\tif (b[0].length != 3) throw 'Unreachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(425, '/home/blake/artifact/microbenchmarks/regex/match/greed/anchors_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/greed/anchors.js');
            J$.N(433, '__secret__S$', __secret__S$, 0);
            J$.N(441, '__secret__traits__', __secret__traits__, 0);
            J$.N(449, 'S$', S$, 0);
            J$.N(457, 'x', x, 0);
            J$.N(465, 'regex', regex, 0);
            J$.N(473, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var regex = J$.X1(185, J$.W(177, 'regex', J$.T(169, /.../, 14, false), regex, 3));
            var b = J$.X1(225, J$.W(217, 'b', J$.M(209, J$.R(193, 'x', x, 1), 'match', 0)(J$.R(201, 'regex', regex, 1)), b, 3));
            if (J$.X1(505, J$.C(32, J$.R(233, 'b', b, 1)))) {
                if (J$.X1(481, J$.C(8, J$.B(10, '==', J$.G(249, J$.R(241, 'x', x, 1), 'length', 0), J$.T(257, 3, 22, false), 0))))
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
                if (J$.X1(489, J$.C(16, J$.B(18, '>', J$.G(297, J$.R(289, 'x', x, 1), 'length', 0), J$.T(305, 9, 22, false), 0))))
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable', 21, false)));
                if (J$.X1(497, J$.C(24, J$.B(26, '!=', J$.G(361, J$.G(353, J$.R(337, 'b', b, 1), J$.T(345, 0, 22, false), 4), 'length', 0), J$.T(369, 3, 22, false), 0))))
                    throw J$.X1(393, J$.Th(385, J$.T(377, 'Unreachable', 21, false)));
                throw J$.X1(417, J$.Th(409, J$.T(401, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(513, J$e);
        } finally {
            if (J$.Sr(521)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
