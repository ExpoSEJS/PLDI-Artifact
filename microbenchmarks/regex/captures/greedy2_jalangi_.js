J$.iids = {"8":[7,9,7,20],"9":[1,20,1,27],"10":[7,9,7,20],"16":[6,5,6,6],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,20],"177":[5,26,5,27],"185":[5,9,5,28],"187":[5,9,5,25],"193":[5,9,5,28],"201":[5,9,5,28],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,11,7,12],"233":[7,9,7,13],"241":[7,17,7,20],"249":[8,15,8,26],"257":[8,15,8,26],"265":[8,9,8,27],"273":[9,11,9,22],"281":[9,11,9,22],"289":[9,5,9,23],"297":[1,1,10,2],"305":[1,1,10,2],"313":[1,1,10,2],"321":[1,1,10,2],"329":[1,1,10,2],"337":[1,1,10,2],"345":[7,5,8,27],"353":[6,1,10,2],"361":[1,1,10,2],"369":[1,1,10,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/greedy2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/captures/greedy2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^([a-z])$/.exec(x);\n\nif (b) {\n\tif (b[1] == 'a') throw 'Reachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/blake/artifact/microbenchmarks/regex/captures/greedy2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/captures/greedy2.js');
            J$.N(305, '__secret__S$', __secret__S$, 0);
            J$.N(313, '__secret__traits__', __secret__traits__, 0);
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'x', x, 0);
            J$.N(337, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^([a-z])$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(353, J$.C(16, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(345, J$.C(8, J$.B(10, '==', J$.G(233, J$.R(217, 'b', b, 1), J$.T(225, 1, 22, false), 4), J$.T(241, 'a', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
                throw J$.X1(289, J$.Th(281, J$.T(273, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
