J$.iids = {"8":[9,9,9,20],"9":[1,20,1,27],"10":[6,11,6,23],"16":[8,17,8,29],"17":[1,28,1,32],"18":[8,17,8,29],"25":[1,20,1,33],"26":[8,31,8,34],"33":[1,20,1,33],"41":[1,20,1,33],"42":[8,31,8,34],"49":[2,26,2,38],"50":[9,9,9,20],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,14],"177":[5,9,5,14],"185":[5,9,5,14],"193":[6,1,6,3],"201":[6,11,6,12],"209":[6,11,6,19],"217":[6,22,6,23],"225":[6,1,6,24],"227":[6,1,6,10],"233":[6,1,6,25],"241":[7,5,7,6],"249":[7,13,7,14],"257":[7,5,7,15],"259":[7,5,7,12],"265":[7,5,7,15],"273":[7,1,7,16],"281":[8,14,8,15],"289":[8,14,8,15],"297":[8,14,8,15],"305":[8,17,8,18],"313":[8,21,8,22],"321":[8,21,8,29],"337":[8,31,8,32],"345":[8,31,8,34],"361":[9,9,9,10],"369":[9,11,9,12],"377":[9,9,9,13],"385":[9,17,9,20],"393":[10,15,10,28],"401":[10,15,10,28],"409":[10,9,10,29],"417":[1,1,12,2],"425":[1,1,12,2],"433":[1,1,12,2],"441":[1,1,12,2],"449":[1,1,12,2],"457":[1,1,12,2],"465":[1,1,12,2],"473":[9,5,11,6],"481":[8,1,12,2],"489":[8,1,12,2],"497":[1,1,12,2],"505":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/split/split_4.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/split/split_4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests replace on a global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)/;\n\nS$.assume(x.length < 5);\n\nx = x.split(b);\n\nfor (var i = 0; i < x.length; i++) {\n\tif (x[i] == 'a') {\n\t\tthrow 'Unreachable';\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(417, '/home/blake/artifact/microbenchmarks/regex/split/split_4_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/split/split_4.js');
            J$.N(425, '__secret__S$', __secret__S$, 0);
            J$.N(433, '__secret__traits__', __secret__traits__, 0);
            J$.N(441, 'S$', S$, 0);
            J$.N(449, 'x', x, 0);
            J$.N(457, 'b', b, 0);
            J$.N(465, 'i', i, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /(a)/, 14, false), b, 3));
            J$.X1(233, J$.M(225, J$.R(193, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(209, J$.R(201, 'x', x, 1), 'length', 0), J$.T(217, 5, 22, false), 0)));
            J$.X1(273, x = J$.W(265, 'x', J$.M(257, J$.R(241, 'x', x, 1), 'split', 0)(J$.R(249, 'b', b, 1)), x, 2));
            for (var i = J$.X1(297, J$.W(289, 'i', J$.T(281, 0, 22, false), i, 3)); J$.X1(481, J$.C(16, J$.B(18, '<', J$.R(305, 'i', i, 1), J$.G(321, J$.R(313, 'x', x, 1), 'length', 0), 0))); J$.X1(489, J$.B(42, '-', i = J$.W(345, 'i', J$.B(34, '+', J$.U(26, '+', J$.R(337, 'i', i, 1)), J$.T(329, 1, 22, false), 0), i, 2), J$.T(353, 1, 22, false), 0))) {
                if (J$.X1(473, J$.C(8, J$.B(50, '==', J$.G(377, J$.R(361, 'x', x, 1), J$.R(369, 'i', i, 1), 4), J$.T(385, 'a', 21, false), 0)))) {
                    throw J$.X1(409, J$.Th(401, J$.T(393, 'Unreachable', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
