J$.iids = {"8":[8,13,8,24],"9":[1,20,1,27],"10":[6,5,6,14],"16":[7,9,7,17],"17":[1,28,1,32],"18":[7,9,7,17],"24":[6,5,6,14],"25":[1,20,1,33],"26":[8,13,8,24],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,19],"177":[5,25,5,26],"185":[5,9,5,27],"187":[5,9,5,24],"193":[5,9,5,27],"201":[5,9,5,27],"209":[6,5,6,6],"217":[6,10,6,14],"225":[7,9,7,10],"233":[7,14,7,17],"241":[8,13,8,14],"249":[8,15,8,16],"257":[8,13,8,17],"265":[8,21,8,24],"273":[9,19,9,32],"281":[9,19,9,32],"289":[9,13,9,33],"297":[11,15,11,26],"305":[11,15,11,26],"313":[11,9,11,27],"321":[13,11,13,22],"329":[13,11,13,22],"337":[13,5,13,23],"345":[1,1,14,2],"353":[1,1,14,2],"361":[1,1,14,2],"369":[1,1,14,2],"377":[1,1,14,2],"385":[1,1,14,2],"393":[8,9,10,10],"401":[7,5,12,6],"409":[6,1,14,2],"417":[1,1,14,2],"425":[1,1,14,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_3.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_3_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a)*?a$/.exec(x);\n\nif (b != null) {\n\t\n\tif (x == 'a') {\n\n\t\tif (b[1] == 'a') {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(345, '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_3_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_3.js');
            J$.N(353, '__secret__S$', __secret__S$, 0);
            J$.N(361, '__secret__traits__', __secret__traits__, 0);
            J$.N(369, 'S$', S$, 0);
            J$.N(377, 'x', x, 0);
            J$.N(385, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^(a)*?a$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(409, J$.C(24, J$.B(10, '!=', J$.R(209, 'b', b, 1), J$.T(217, null, 25, false), 0)))) {
                if (J$.X1(401, J$.C(16, J$.B(18, '==', J$.R(225, 'x', x, 1), J$.T(233, 'a', 21, false), 0)))) {
                    if (J$.X1(393, J$.C(8, J$.B(26, '==', J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 1, 22, false), 4), J$.T(265, 'a', 21, false), 0)))) {
                        throw J$.X1(289, J$.Th(281, J$.T(273, 'Unreachable', 21, false)));
                    }
                    throw J$.X1(313, J$.Th(305, J$.T(297, 'Reachable', 21, false)));
                }
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
