J$.iids = {"8":[7,9,7,22],"9":[1,20,1,27],"10":[7,9,7,22],"16":[9,9,9,21],"17":[1,28,1,32],"18":[9,9,9,21],"24":[11,9,11,25],"25":[1,20,1,33],"26":[11,9,11,25],"32":[6,5,6,6],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,14],"177":[5,20,5,21],"185":[5,9,5,22],"187":[5,9,5,19],"193":[5,9,5,22],"201":[5,9,5,22],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,9,7,17],"233":[7,21,7,22],"241":[8,15,8,26],"249":[8,15,8,26],"257":[8,9,8,27],"265":[9,9,9,10],"273":[9,9,9,17],"281":[9,20,9,21],"289":[10,15,10,26],"297":[10,15,10,26],"305":[10,9,10,27],"313":[11,9,11,10],"321":[11,11,11,12],"329":[11,9,11,13],"337":[11,9,11,20],"345":[11,24,11,25],"353":[12,15,12,28],"361":[12,15,12,28],"369":[12,9,12,29],"377":[13,11,13,22],"385":[13,11,13,22],"393":[13,5,13,23],"401":[1,1,14,2],"409":[1,1,14,2],"417":[1,1,14,2],"425":[1,1,14,2],"433":[1,1,14,2],"441":[1,1,14,2],"449":[7,5,8,27],"457":[9,5,10,27],"465":[11,5,12,29],"473":[6,1,14,2],"481":[1,1,14,2],"489":[1,1,14,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/exec/greed/anchors.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/exec/greed/anchors_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test ambiguities brought about by greediness and anchors\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /.../.exec(x);\n\nif (b) {\n\tif (x.length == 3) throw 'Reachable';\n\tif (x.length > 9) throw 'Reachable';\n\tif (b[0].length != 3) throw 'Unreachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/microbenchmarks/regex/exec/greed/anchors_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/exec/greed/anchors.js');
            J$.N(409, '__secret__S$', __secret__S$, 0);
            J$.N(417, '__secret__traits__', __secret__traits__, 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'x', x, 0);
            J$.N(441, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /.../, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(473, J$.C(32, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(449, J$.C(8, J$.B(10, '==', J$.G(225, J$.R(217, 'x', x, 1), 'length', 0), J$.T(233, 3, 22, false), 0))))
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
                if (J$.X1(457, J$.C(16, J$.B(18, '>', J$.G(273, J$.R(265, 'x', x, 1), 'length', 0), J$.T(281, 9, 22, false), 0))))
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                if (J$.X1(465, J$.C(24, J$.B(26, '!=', J$.G(337, J$.G(329, J$.R(313, 'b', b, 1), J$.T(321, 0, 22, false), 4), 'length', 0), J$.T(345, 3, 22, false), 0))))
                    throw J$.X1(369, J$.Th(361, J$.T(353, 'Unreachable', 21, false)));
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
