J$.iids = {"8":[8,16,8,21],"9":[1,20,1,27],"10":[5,5,5,14],"16":[6,9,6,20],"17":[1,28,1,32],"18":[6,9,6,20],"24":[5,5,5,14],"25":[1,20,1,33],"26":[8,16,8,21],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,20],"129":[4,26,4,28],"137":[4,36,4,39],"145":[4,41,4,43],"153":[4,26,4,44],"155":[4,26,4,35],"161":[4,9,4,45],"163":[4,9,4,25],"169":[4,9,4,45],"177":[4,9,4,45],"185":[5,5,5,6],"193":[5,10,5,14],"201":[6,9,6,10],"209":[6,11,6,12],"217":[6,9,6,13],"225":[6,17,6,20],"233":[7,15,7,26],"241":[7,15,7,26],"249":[7,9,7,27],"257":[8,17,8,18],"265":[8,19,8,20],"273":[8,17,8,21],"281":[9,15,9,26],"289":[9,15,9,26],"297":[9,9,9,27],"305":[11,11,11,24],"313":[11,11,11,24],"321":[11,5,11,25],"329":[1,1,12,2],"337":[1,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"361":[1,1,12,2],"369":[8,12,10,6],"377":[6,5,10,6],"385":[5,1,12,2],"393":[1,1,12,2],"401":[1,1,12,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_1.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/lazy/lazy_1_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test the lastIndex property of the sticky flag\n\nvar S$ = require('S$');\nvar b = /^a*?(a)?$/.exec(S$.symbol(\"X\", \"\"));\n\nif (b != null) {\n\n\n\tif (b[1] == 'a') {\n\t\tthrow 'Reachable';\n\t} else if (!b[1]) {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_1_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/lazy/lazy_1.js');
            J$.N(337, '__secret__S$', __secret__S$, 0);
            J$.N(345, '__secret__traits__', __secret__traits__, 0);
            J$.N(353, 'S$', S$, 0);
            J$.N(361, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var b = J$.X1(177, J$.W(169, 'b', J$.M(161, J$.T(121, /^a*?(a)?$/, 14, false), 'exec', 0)(J$.M(153, J$.R(129, 'S$', S$, 1), 'symbol', 0)(J$.T(137, 'X', 21, false), J$.T(145, '', 21, false))), b, 3));
            if (J$.X1(385, J$.C(24, J$.B(10, '!=', J$.R(185, 'b', b, 1), J$.T(193, null, 25, false), 0)))) {
                if (J$.X1(377, J$.C(16, J$.B(18, '==', J$.G(217, J$.R(201, 'b', b, 1), J$.T(209, 1, 22, false), 4), J$.T(225, 'a', 21, false), 0)))) {
                    throw J$.X1(249, J$.Th(241, J$.T(233, 'Reachable', 21, false)));
                } else if (J$.X1(369, J$.C(8, J$.U(26, '!', J$.G(273, J$.R(257, 'b', b, 1), J$.T(265, 1, 22, false), 4))))) {
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Reachable', 21, false)));
                }
                throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
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
