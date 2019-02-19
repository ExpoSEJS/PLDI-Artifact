J$.iids = {"8":[6,9,6,25],"9":[1,20,1,27],"10":[6,9,6,25],"16":[5,5,5,25],"17":[1,28,1,32],"18":[11,9,11,19],"24":[11,9,11,19],"25":[1,20,1,33],"32":[10,5,10,21],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,17],"177":[5,23,5,24],"185":[5,5,5,25],"187":[5,5,5,22],"193":[6,9,6,10],"201":[6,14,6,25],"209":[7,15,7,26],"217":[7,15,7,26],"225":[7,9,7,27],"233":[8,11,8,24],"241":[8,11,8,24],"249":[8,5,8,25],"257":[10,5,10,13],"265":[10,19,10,20],"273":[10,5,10,21],"275":[10,5,10,18],"281":[11,9,11,10],"289":[11,14,11,19],"297":[12,15,12,26],"305":[12,15,12,26],"313":[12,9,12,27],"321":[13,11,13,24],"329":[13,11,13,24],"337":[13,5,13,25],"345":[1,1,14,2],"353":[1,1,14,2],"361":[1,1,14,2],"369":[1,1,14,2],"377":[1,1,14,2],"385":[6,5,7,27],"393":[5,1,9,2],"401":[11,5,12,27],"409":[10,1,14,2],"417":[1,1,14,2],"425":[1,1,14,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/fixed_loop.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/loops/fixed_loop_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple test of Term {X}\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(abc){3}$/.test(x)) {\n\tif (x == 'abcabcabc') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nif (/^a{3}$/.test(x)) {\n\tif (x == 'aaa') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(345, '/home/blake/artifact/microbenchmarks/regex/core/loops/fixed_loop_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/loops/fixed_loop.js');
            J$.N(353, '__secret__S$', __secret__S$, 0);
            J$.N(361, '__secret__traits__', __secret__traits__, 0);
            J$.N(369, 'S$', S$, 0);
            J$.N(377, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(393, J$.C(16, J$.M(185, J$.T(169, /^(abc){3}$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(385, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, 'abcabcabc', 21, false), 0))))
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Reachable', 21, false)));
                throw J$.X1(249, J$.Th(241, J$.T(233, 'Unreachable', 21, false)));
            }
            if (J$.X1(409, J$.C(32, J$.M(273, J$.T(257, /^a{3}$/, 14, false), 'test', 0)(J$.R(265, 'x', x, 1))))) {
                if (J$.X1(401, J$.C(24, J$.B(18, '==', J$.R(281, 'x', x, 1), J$.T(289, 'aaa', 21, false), 0))))
                    throw J$.X1(313, J$.Th(305, J$.T(297, 'Reachable', 21, false)));
                throw J$.X1(337, J$.Th(329, J$.T(321, 'Unreachable', 21, false)));
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
