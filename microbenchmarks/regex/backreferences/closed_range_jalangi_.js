J$.iids = {"8":[6,9,6,22],"9":[1,20,1,27],"10":[6,9,6,22],"16":[8,9,8,22],"17":[1,28,1,32],"18":[8,9,8,22],"24":[5,5,5,41],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,33],"177":[5,39,5,40],"185":[5,5,5,41],"187":[5,5,5,38],"193":[6,9,6,10],"201":[6,14,6,22],"209":[7,15,7,26],"217":[7,15,7,26],"225":[7,9,7,27],"233":[8,9,8,10],"241":[8,14,8,22],"249":[9,15,9,28],"257":[9,15,9,28],"265":[9,9,9,29],"273":[10,11,10,22],"281":[10,11,10,22],"289":[10,5,10,23],"297":[1,1,11,2],"305":[1,1,11,2],"313":[1,1,11,2],"321":[1,1,11,2],"329":[1,1,11,2],"337":[6,5,7,27],"345":[8,5,9,29],"353":[5,1,11,2],"361":[1,1,11,2],"369":[1,1,11,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_range.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_range_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test a single backreference of a closed capture group\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^([ab])\\1([ab])\\2([ab])\\1$/.test(x)) {\n\tif (x == 'aabbba') throw 'Reachable';\n\tif (x == 'abaaaa') throw 'Unreachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_range_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_range.js');
            J$.N(305, '__secret__S$', __secret__S$, 0);
            J$.N(313, '__secret__traits__', __secret__traits__, 0);
            J$.N(321, 'S$', S$, 0);
            J$.N(329, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(353, J$.C(24, J$.M(185, J$.T(169, /^([ab])\1([ab])\2([ab])\1$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(337, J$.C(8, J$.B(10, '==', J$.R(193, 'x', x, 1), J$.T(201, 'aabbba', 21, false), 0))))
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Reachable', 21, false)));
                if (J$.X1(345, J$.C(16, J$.B(18, '==', J$.R(233, 'x', x, 1), J$.T(241, 'abaaaa', 21, false), 0))))
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
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