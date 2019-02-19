J$.iids = {"8":[7,9,7,17],"9":[1,20,1,27],"10":[6,5,6,14],"16":[6,5,6,14],"17":[1,28,1,32],"18":[7,9,7,17],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,19],"177":[5,25,5,26],"185":[5,9,5,27],"187":[5,9,5,24],"193":[5,9,5,27],"201":[5,9,5,27],"209":[6,5,6,6],"217":[6,10,6,14],"225":[7,9,7,10],"233":[7,14,7,17],"241":[8,15,8,28],"249":[8,15,8,28],"257":[8,9,8,29],"265":[10,11,10,22],"273":[10,11,10,22],"281":[10,5,10,23],"289":[1,1,11,2],"297":[1,1,11,2],"305":[1,1,11,2],"313":[1,1,11,2],"321":[1,1,11,2],"329":[1,1,11,2],"337":[7,5,9,6],"345":[6,1,11,2],"353":[1,1,11,2],"361":[1,1,11,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_4.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a)+?a$/.exec(x);\n\nif (b != null) {\n\t\n\tif (x == 'a') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_4_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_4.js');
            J$.N(297, '__secret__S$', __secret__S$, 0);
            J$.N(305, '__secret__traits__', __secret__traits__, 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'x', x, 0);
            J$.N(329, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^(a)+?a$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(345, J$.C(16, J$.B(10, '!=', J$.R(209, 'b', b, 1), J$.T(217, null, 25, false), 0)))) {
                if (J$.X1(337, J$.C(8, J$.B(18, '==', J$.R(225, 'x', x, 1), J$.T(233, 'a', 21, false), 0)))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
                }
                throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
