J$.iids = {"8":[10,13,10,20],"9":[1,20,1,27],"10":[5,11,5,23],"16":[9,9,9,22],"17":[1,28,1,32],"18":[8,11,8,13],"24":[8,5,8,13],"25":[1,20,1,33],"26":[8,5,8,13],"33":[1,20,1,33],"34":[9,9,9,22],"41":[1,20,1,33],"42":[10,13,10,20],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,1,5,3],"177":[5,11,5,12],"185":[5,11,5,19],"193":[5,22,5,23],"201":[5,1,5,24],"203":[5,1,5,10],"209":[5,1,5,25],"217":[6,9,6,15],"225":[6,9,6,15],"233":[6,9,6,15],"241":[7,10,7,11],"249":[7,19,7,20],"257":[7,10,7,21],"259":[7,10,7,18],"265":[7,10,7,21],"273":[7,10,7,21],"281":[8,5,8,7],"289":[8,12,8,13],"297":[9,9,9,10],"305":[9,14,9,22],"313":[10,13,10,15],"321":[10,19,10,20],"329":[11,19,11,32],"337":[11,19,11,32],"345":[11,13,11,33],"353":[13,15,13,26],"361":[13,15,13,26],"369":[13,9,13,27],"377":[15,11,15,22],"385":[15,11,15,22],"393":[15,5,15,23],"401":[1,1,16,2],"409":[1,1,16,2],"417":[1,1,16,2],"425":[1,1,16,2],"433":[1,1,16,2],"441":[1,1,16,2],"449":[1,1,16,2],"457":[10,9,12,10],"465":[9,5,14,6],"473":[8,1,16,2],"481":[1,1,16,2],"489":[1,1,16,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous3.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous3_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a simple string search\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nS$.assume(x.length < 7);\n\nvar b = /(a*)/;\nvar nl = x.search(b);\n\nif (nl != -1) {\n\n\t//The first set of as should be the match, but if greediness is not enforced either will be accepted\n\tif (x == 'aaaa_a') {\n\n\t\tif (nl == 5) {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/microbenchmarks/regex/search/ambiguous3_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/ambiguous3.js');
            J$.N(409, '__secret__S$', __secret__S$, 0);
            J$.N(417, '__secret__traits__', __secret__traits__, 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'x', x, 0);
            J$.N(441, 'b', b, 0);
            J$.N(449, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            J$.X1(209, J$.M(201, J$.R(169, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(185, J$.R(177, 'x', x, 1), 'length', 0), J$.T(193, 7, 22, false), 0)));
            var b = J$.X1(233, J$.W(225, 'b', J$.T(217, /(a*)/, 14, false), b, 3));
            var nl = J$.X1(273, J$.W(265, 'nl', J$.M(257, J$.R(241, 'x', x, 1), 'search', 0)(J$.R(249, 'b', b, 1)), nl, 3));
            if (J$.X1(473, J$.C(24, J$.B(26, '!=', J$.R(281, 'nl', nl, 1), J$.U(18, '-', J$.T(289, 1, 22, false)), 0)))) {
                if (J$.X1(465, J$.C(16, J$.B(34, '==', J$.R(297, 'x', x, 1), J$.T(305, 'aaaa_a', 21, false), 0)))) {
                    if (J$.X1(457, J$.C(8, J$.B(42, '==', J$.R(313, 'nl', nl, 1), J$.T(321, 5, 22, false), 0)))) {
                        throw J$.X1(345, J$.Th(337, J$.T(329, 'Unreachable', 21, false)));
                    }
                    throw J$.X1(369, J$.Th(361, J$.T(353, 'Reachable', 21, false)));
                }
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
