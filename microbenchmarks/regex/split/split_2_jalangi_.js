J$.iids = {"8":[8,5,8,18],"9":[1,20,1,27],"10":[6,11,6,23],"17":[1,28,1,32],"18":[8,5,8,18],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,14],"177":[5,9,5,14],"185":[5,9,5,14],"193":[6,1,6,3],"201":[6,11,6,12],"209":[6,11,6,19],"217":[6,22,6,23],"225":[6,1,6,24],"227":[6,1,6,10],"233":[6,1,6,25],"241":[7,5,7,6],"249":[7,13,7,14],"257":[7,5,7,15],"259":[7,5,7,12],"265":[7,5,7,15],"273":[7,1,7,16],"281":[8,5,8,6],"289":[8,5,8,13],"297":[8,17,8,18],"305":[9,11,9,24],"313":[9,11,9,24],"321":[9,5,9,25],"329":[1,1,10,2],"337":[1,1,10,2],"345":[1,1,10,2],"353":[1,1,10,2],"361":[1,1,10,2],"369":[1,1,10,2],"377":[8,1,10,2],"385":[1,1,10,2],"393":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/split/split_2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/split/split_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests replace on a global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a)/;\n\nS$.assume(x.length < 5);\n\nx = x.split(b);\n\nif (x.length == 6) {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/microbenchmarks/regex/split/split_2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/split/split_2.js');
            J$.N(337, '__secret__S$', __secret__S$, 0);
            J$.N(345, '__secret__traits__', __secret__traits__, 0);
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'x', x, 0);
            J$.N(369, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /(a)/, 14, false), b, 3));
            J$.X1(233, J$.M(225, J$.R(193, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(209, J$.R(201, 'x', x, 1), 'length', 0), J$.T(217, 5, 22, false), 0)));
            J$.X1(273, x = J$.W(265, 'x', J$.M(257, J$.R(241, 'x', x, 1), 'split', 0)(J$.R(249, 'b', b, 1)), x, 2));
            if (J$.X1(377, J$.C(8, J$.B(18, '==', J$.G(289, J$.R(281, 'x', x, 1), 'length', 0), J$.T(297, 6, 22, false), 0)))) {
                throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT