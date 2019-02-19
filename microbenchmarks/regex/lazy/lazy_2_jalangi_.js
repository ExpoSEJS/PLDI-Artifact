J$.iids = {"8":[7,9,7,32],"9":[1,20,1,27],"10":[6,5,6,14],"16":[7,9,7,32],"17":[1,28,1,32],"18":[7,9,7,14],"24":[6,5,6,14],"25":[1,20,1,33],"26":[7,18,7,32],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,25],"177":[5,31,5,32],"185":[5,9,5,33],"187":[5,9,5,30],"193":[5,9,5,33],"201":[5,9,5,33],"209":[6,5,6,6],"217":[6,10,6,14],"225":[7,10,7,11],"233":[7,12,7,13],"241":[7,10,7,14],"249":[7,18,7,19],"257":[7,20,7,21],"265":[7,18,7,22],"273":[7,27,7,32],"281":[8,15,8,28],"289":[8,15,8,28],"297":[8,9,8,29],"305":[10,11,10,22],"313":[10,11,10,22],"321":[10,5,10,23],"329":[1,1,11,2],"337":[1,1,11,2],"345":[1,1,11,2],"353":[1,1,11,2],"361":[1,1,11,2],"369":[1,1,11,2],"377":[7,5,9,6],"385":[6,1,11,2],"393":[1,1,11,2],"401":[1,1,11,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^[a-z]*?(aaa)$/.exec(x);\n\nif (b != null) {\n\t\n\tif (!b[1] || b[1] !== 'aaa') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_2.js');
            J$.N(337, '__secret__S$', __secret__S$, 0);
            J$.N(345, '__secret__traits__', __secret__traits__, 0);
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'x', x, 0);
            J$.N(369, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^[a-z]*?(aaa)$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(385, J$.C(24, J$.B(10, '!=', J$.R(209, 'b', b, 1), J$.T(217, null, 25, false), 0)))) {
                if (J$.X1(377, J$.C(16, J$.C(8, J$.U(18, '!', J$.G(241, J$.R(225, 'b', b, 1), J$.T(233, 1, 22, false), 4))) ? J$._() : J$.B(26, '!==', J$.G(265, J$.R(249, 'b', b, 1), J$.T(257, 1, 22, false), 4), J$.T(273, 'aaa', 21, false), 0)))) {
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable', 21, false)));
                }
                throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
