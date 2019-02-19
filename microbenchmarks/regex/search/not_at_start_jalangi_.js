J$.iids = {"8":[8,9,8,15],"9":[1,20,1,27],"10":[7,11,7,13],"16":[10,9,10,15],"17":[1,28,1,32],"18":[7,5,7,13],"24":[7,5,7,13],"25":[1,20,1,33],"26":[8,9,8,15],"33":[1,20,1,33],"34":[10,9,10,15],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,17],"177":[5,9,5,17],"185":[5,9,5,17],"193":[6,10,6,11],"201":[6,19,6,20],"209":[6,10,6,21],"211":[6,10,6,18],"217":[6,10,6,21],"225":[6,10,6,21],"233":[7,5,7,7],"241":[7,12,7,13],"249":[8,9,8,11],"257":[8,14,8,15],"265":[9,15,9,28],"273":[9,15,9,28],"281":[9,9,9,29],"289":[10,9,10,11],"297":[10,14,10,15],"305":[11,15,11,26],"313":[11,15,11,26],"321":[11,9,11,27],"329":[12,11,12,22],"337":[12,11,12,22],"345":[12,5,12,23],"353":[14,11,14,22],"361":[14,11,14,22],"369":[14,5,14,23],"377":[1,1,15,2],"385":[1,1,15,2],"393":[1,1,15,2],"401":[1,1,15,2],"409":[1,1,15,2],"417":[1,1,15,2],"425":[1,1,15,2],"433":[8,5,9,29],"441":[10,5,11,27],"449":[7,1,15,2],"457":[1,1,15,2],"465":[1,1,15,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/not_at_start.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/not_at_start_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a|b)$/;\nvar nl = x.search(b);\n\nif (nl != -1) {\n\tif (nl < 0) throw 'Unreachable';\n\tif (nl > 3) throw 'Reachable';\n\tthrow 'Reachable';\n} else {\n\t//b not in x\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/home/blake/artifact/microbenchmarks/regex/search/not_at_start_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/not_at_start.js');
            J$.N(385, '__secret__S$', __secret__S$, 0);
            J$.N(393, '__secret__traits__', __secret__traits__, 0);
            J$.N(401, 'S$', S$, 0);
            J$.N(409, 'x', x, 0);
            J$.N(417, 'b', b, 0);
            J$.N(425, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /(a|b)$/, 14, false), b, 3));
            var nl = J$.X1(225, J$.W(217, 'nl', J$.M(209, J$.R(193, 'x', x, 1), 'search', 0)(J$.R(201, 'b', b, 1)), nl, 3));
            if (J$.X1(449, J$.C(24, J$.B(18, '!=', J$.R(233, 'nl', nl, 1), J$.U(10, '-', J$.T(241, 1, 22, false)), 0)))) {
                if (J$.X1(433, J$.C(8, J$.B(26, '<', J$.R(249, 'nl', nl, 1), J$.T(257, 0, 22, false), 0))))
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
                if (J$.X1(441, J$.C(16, J$.B(34, '>', J$.R(289, 'nl', nl, 1), J$.T(297, 3, 22, false), 0))))
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
                throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
            } else {
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
