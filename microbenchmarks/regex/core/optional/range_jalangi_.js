J$.iids = {"8":[6,9,6,27],"9":[1,20,1,27],"10":[6,9,6,27],"16":[5,5,5,26],"17":[1,28,1,32],"24":[12,5,12,22],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,18],"177":[5,24,5,25],"185":[5,5,5,26],"187":[5,5,5,23],"193":[6,10,6,19],"201":[6,25,6,26],"209":[6,10,6,27],"211":[6,10,6,24],"217":[7,15,7,26],"225":[7,15,7,26],"233":[7,9,7,27],"241":[9,15,9,26],"249":[9,15,9,26],"257":[9,9,9,27],"265":[12,5,12,14],"273":[12,20,12,21],"281":[12,5,12,22],"283":[12,5,12,19],"289":[13,11,13,24],"297":[13,11,13,24],"305":[13,5,13,25],"313":[1,1,14,2],"321":[1,1,14,2],"329":[1,1,14,2],"337":[1,1,14,2],"345":[1,1,14,2],"353":[6,5,10,6],"361":[5,1,11,2],"369":[12,1,14,2],"377":[1,1,14,2],"385":[1,1,14,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/optional/range.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/optional/range_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^[a-zA-Z]?$/.test(x)) {\n\tif (!/^[a-z]$/.test(x)) {\n\t\tthrow 'Reachable';\n\t} else {\n\t\tthrow 'Reachable';\n\t}\n}\n\nif (/^[a-z]$/.test(x)) {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(313, '/home/blake/artifact/microbenchmarks/regex/core/optional/range_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/optional/range.js');
            J$.N(321, '__secret__S$', __secret__S$, 0);
            J$.N(329, '__secret__traits__', __secret__traits__, 0);
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(361, J$.C(16, J$.M(185, J$.T(169, /^[a-zA-Z]?$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                if (J$.X1(353, J$.C(8, J$.U(10, '!', J$.M(209, J$.T(193, /^[a-z]$/, 14, false), 'test', 0)(J$.R(201, 'x', x, 1)))))) {
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable', 21, false)));
                } else {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
                }
            }
            if (J$.X1(369, J$.C(24, J$.M(281, J$.T(265, /^[a-z]$/, 14, false), 'test', 0)(J$.R(273, 'x', x, 1))))) {
                throw J$.X1(305, J$.Th(297, J$.T(289, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
