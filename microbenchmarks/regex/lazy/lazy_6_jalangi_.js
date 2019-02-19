J$.iids = {"8":[8,13,8,18],"9":[1,20,1,27],"10":[6,5,6,14],"16":[11,13,11,19],"17":[1,28,1,32],"18":[7,9,7,17],"24":[7,9,7,17],"25":[1,20,1,33],"26":[8,13,8,18],"32":[6,5,6,14],"33":[1,20,1,33],"34":[11,14,11,19],"41":[1,20,1,33],"42":[11,13,11,19],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,26],"177":[5,32,5,33],"185":[5,9,5,34],"187":[5,9,5,31],"193":[5,9,5,34],"201":[5,9,5,34],"209":[6,5,6,6],"217":[6,10,6,14],"225":[7,9,7,10],"233":[7,14,7,17],"241":[8,14,8,15],"249":[8,16,8,17],"257":[8,14,8,18],"265":[9,19,9,32],"273":[9,19,9,32],"281":[9,13,9,33],"289":[11,15,11,16],"297":[11,17,11,18],"305":[11,15,11,19],"313":[12,19,12,32],"321":[12,19,12,32],"329":[12,13,12,33],"337":[14,15,14,26],"345":[14,15,14,26],"353":[14,9,14,27],"361":[16,11,16,22],"369":[16,11,16,22],"377":[16,5,16,23],"385":[1,1,17,2],"393":[1,1,17,2],"401":[1,1,17,2],"409":[1,1,17,2],"417":[1,1,17,2],"425":[1,1,17,2],"433":[8,9,10,10],"441":[11,9,13,10],"449":[7,5,15,6],"457":[6,1,17,2],"465":[1,1,17,2],"473":[1,1,17,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_6.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_6_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a{1,3}?)(a)?$/.exec(x);\n\nif (b != null) {\n\t\n\tif (x == 'a') {\n\t\tif (!b[1]) {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\n\t\tif (!!b[2]) {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(385, '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_6_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_6.js');
            J$.N(393, '__secret__S$', __secret__S$, 0);
            J$.N(401, '__secret__traits__', __secret__traits__, 0);
            J$.N(409, 'S$', S$, 0);
            J$.N(417, 'x', x, 0);
            J$.N(425, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^(a{1,3}?)(a)?$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(457, J$.C(32, J$.B(10, '!=', J$.R(209, 'b', b, 1), J$.T(217, null, 25, false), 0)))) {
                if (J$.X1(449, J$.C(24, J$.B(18, '==', J$.R(225, 'x', x, 1), J$.T(233, 'a', 21, false), 0)))) {
                    if (J$.X1(433, J$.C(8, J$.U(26, '!', J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 1, 22, false), 4))))) {
                        throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
                    }
                    if (J$.X1(441, J$.C(16, J$.U(42, '!', J$.U(34, '!', J$.G(305, J$.R(289, 'b', b, 1), J$.T(297, 2, 22, false), 4)))))) {
                        throw J$.X1(329, J$.Th(321, J$.T(313, 'Unreachable', 21, false)));
                    }
                    throw J$.X1(353, J$.Th(345, J$.T(337, 'Reachable', 21, false)));
                }
                throw J$.X1(377, J$.Th(369, J$.T(361, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
