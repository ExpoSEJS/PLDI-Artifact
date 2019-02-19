J$.iids = {"8":[6,9,6,21],"9":[1,20,1,27],"10":[6,9,6,21],"16":[9,9,9,21],"17":[1,28,1,32],"18":[9,9,9,21],"24":[5,5,5,27],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,19],"177":[5,25,5,26],"185":[5,5,5,27],"187":[5,5,5,24],"193":[6,9,6,10],"201":[6,11,6,12],"209":[6,9,6,13],"217":[6,17,6,18],"225":[6,19,6,20],"233":[6,17,6,21],"241":[7,15,7,28],"249":[7,15,7,28],"257":[7,9,7,29],"265":[9,9,9,10],"273":[9,11,9,12],"281":[9,9,9,13],"289":[9,17,9,18],"297":[9,19,9,20],"305":[9,17,9,21],"313":[10,15,10,28],"321":[10,15,10,28],"329":[10,9,10,29],"337":[12,11,12,22],"345":[12,11,12,22],"353":[12,5,12,23],"361":[1,1,13,2],"369":[1,1,13,2],"377":[1,1,13,2],"385":[1,1,13,2],"393":[1,1,13,2],"401":[6,5,8,6],"409":[9,5,11,6],"417":[5,1,13,2],"425":[1,1,13,2],"433":[1,1,13,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_limited.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_limited_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test a single backreference of a closed capture group\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(a)\\1(a)\\2$/.test(x)) {\n\tif (x[0] != x[1]) { throw 'Unreachable'; }\n\tif (x[2] != x[3]) { throw 'Unreachable'; }\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(361, '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_limited_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_limited.js');
            J$.N(369, '__secret__S$', __secret__S$, 0);
            J$.N(377, '__secret__traits__', __secret__traits__, 0);
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(417, J$.C(24, J$.M(185, J$.T(169, /^(a)\1(a)\2$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(401, J$.C(8, J$.B(10, '!=', J$.G(209, J$.R(193, 'x', x, 1), J$.T(201, 0, 22, false), 4), J$.G(233, J$.R(217, 'x', x, 1), J$.T(225, 1, 22, false), 4), 0)))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
                }
                if (J$.X1(409, J$.C(16, J$.B(18, '!=', J$.G(281, J$.R(265, 'x', x, 1), J$.T(273, 2, 22, false), 4), J$.G(305, J$.R(289, 'x', x, 1), J$.T(297, 3, 22, false), 4), 0)))) {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Unreachable', 21, false)));
                }
                throw J$.X1(353, J$.Th(345, J$.T(337, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
