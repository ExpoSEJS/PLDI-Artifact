J$.iids = {"8":[7,9,7,27],"9":[1,20,1,27],"10":[7,9,7,27],"16":[10,9,10,38],"17":[1,28,1,32],"18":[10,18,10,30],"24":[6,5,6,20],"25":[1,20,1,33],"26":[10,9,10,38],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,1,3,13],"89":[3,1,3,14],"97":[4,10,4,17],"105":[4,18,4,22],"113":[4,10,4,23],"121":[4,10,4,23],"129":[4,10,4,23],"137":[5,9,5,11],"145":[5,19,5,22],"153":[5,24,5,26],"161":[5,9,5,27],"163":[5,9,5,18],"169":[5,9,5,27],"177":[5,9,5,27],"185":[6,5,6,12],"193":[6,18,6,19],"201":[6,5,6,20],"203":[6,5,6,17],"209":[7,9,7,10],"217":[7,18,7,19],"225":[7,9,7,20],"227":[7,9,7,17],"233":[7,24,7,27],"241":[8,15,8,26],"249":[8,15,8,26],"257":[8,9,8,27],"265":[10,9,10,10],"273":[10,18,10,19],"281":[10,18,10,26],"289":[10,29,10,30],"297":[10,9,10,31],"299":[10,9,10,17],"305":[10,35,10,38],"313":[11,15,11,26],"321":[11,15,11,26],"329":[11,9,11,27],"337":[13,11,13,22],"345":[13,11,13,22],"353":[13,5,13,23],"361":[15,7,15,18],"369":[15,7,15,18],"377":[15,1,15,19],"385":[1,1,15,19],"393":[1,1,15,19],"401":[1,1,15,19],"409":[1,1,15,19],"417":[1,1,15,19],"425":[7,5,9,6],"433":[10,5,12,6],"441":[6,1,14,2],"449":[1,1,15,19],"457":[1,1,15,19],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/anchors/none.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/anchors/none_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n'use strict';\nvar S$ = require('S$');\nvar q = S$.symbol(\"q\", '');\n\nif (/--.+=/.test(q)) {\n\n\tif (q.charAt(0) != '-') {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (q.charAt(q.length - 1) != '=') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(385, '/home/blake/artifact/microbenchmarks/regex/anchors/none_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/anchors/none.js');
            J$.N(393, '__secret__S$', __secret__S$, 0);
            J$.N(401, '__secret__traits__', __secret__traits__, 0);
            J$.N(409, 'S$', S$, 0);
            J$.N(417, 'q', q, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            J$.X1(89, J$.T(81, 'use strict', 21, false));
            var S$ = J$.X1(129, J$.W(121, 'S$', J$.F(113, J$.R(97, 'require', require, 2), 0)(J$.T(105, 'S$', 21, false)), S$, 3));
            var q = J$.X1(177, J$.W(169, 'q', J$.M(161, J$.R(137, 'S$', S$, 1), 'symbol', 0)(J$.T(145, 'q', 21, false), J$.T(153, '', 21, false)), q, 3));
            if (J$.X1(441, J$.C(24, J$.M(201, J$.T(185, /--.+=/, 14, false), 'test', 0)(J$.R(193, 'q', q, 1))))) {
                if (J$.X1(425, J$.C(8, J$.B(10, '!=', J$.M(225, J$.R(209, 'q', q, 1), 'charAt', 0)(J$.T(217, 0, 22, false)), J$.T(233, '-', 21, false), 0)))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
                }
                if (J$.X1(433, J$.C(16, J$.B(26, '!=', J$.M(297, J$.R(265, 'q', q, 1), 'charAt', 0)(J$.B(18, '-', J$.G(281, J$.R(273, 'q', q, 1), 'length', 0), J$.T(289, 1, 22, false), 0)), J$.T(305, '=', 21, false), 0)))) {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable', 21, false)));
                }
                throw J$.X1(353, J$.Th(345, J$.T(337, 'Reachable', 21, false)));
            }
            throw J$.X1(377, J$.Th(369, J$.T(361, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
