J$.iids = {"8":[8,9,8,19],"9":[1,20,1,27],"10":[8,9,8,19],"16":[11,9,11,43],"17":[1,28,1,32],"18":[11,9,11,43],"24":[7,5,7,6],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,13,5,25],"177":[5,13,5,25],"185":[5,13,5,25],"193":[6,9,6,10],"201":[6,17,6,22],"209":[6,9,6,23],"211":[6,9,6,16],"217":[6,9,6,23],"225":[6,9,6,23],"233":[7,5,7,6],"241":[8,9,8,10],"249":[8,11,8,12],"257":[8,9,8,13],"265":[8,17,8,19],"273":[9,15,9,28],"281":[9,15,9,28],"289":[9,9,9,29],"297":[11,9,11,10],"305":[11,11,11,12],"313":[11,9,11,13],"321":[11,17,11,43],"329":[12,15,12,26],"337":[12,15,12,26],"345":[12,9,12,27],"353":[14,11,14,22],"361":[14,11,14,22],"369":[14,5,14,23],"377":[1,1,15,2],"385":[1,1,15,2],"393":[1,1,15,2],"401":[1,1,15,2],"409":[1,1,15,2],"417":[1,1,15,2],"425":[1,1,15,2],"433":[8,5,10,6],"441":[11,5,13,6],"449":[7,1,15,2],"457":[1,1,15,2],"465":[1,1,15,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/greedy_capture.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/captures/greedy_capture_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar regex = /^(.+)(.?)$/;\n\nvar b = x.match(regex);\n\nif (b) {\n\t\n\tif (b[2] != '') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (b[1] == 'Hello world yanky doodle') {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/home/blake/artifact/microbenchmarks/regex/match/captures/greedy_capture_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/captures/greedy_capture.js');
            J$.N(385, '__secret__S$', __secret__S$, 0);
            J$.N(393, '__secret__traits__', __secret__traits__, 0);
            J$.N(401, 'S$', S$, 0);
            J$.N(409, 'x', x, 0);
            J$.N(417, 'regex', regex, 0);
            J$.N(425, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var regex = J$.X1(185, J$.W(177, 'regex', J$.T(169, /^(.+)(.?)$/, 14, false), regex, 3));
            var b = J$.X1(225, J$.W(217, 'b', J$.M(209, J$.R(193, 'x', x, 1), 'match', 0)(J$.R(201, 'regex', regex, 1)), b, 3));
            if (J$.X1(449, J$.C(24, J$.R(233, 'b', b, 1)))) {
                if (J$.X1(433, J$.C(8, J$.B(10, '!=', J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 2, 22, false), 4), J$.T(265, '', 21, false), 0)))) {
                    throw J$.X1(289, J$.Th(281, J$.T(273, 'Unreachable', 21, false)));
                }
                if (J$.X1(441, J$.C(16, J$.B(18, '==', J$.G(313, J$.R(297, 'b', b, 1), J$.T(305, 1, 22, false), 4), J$.T(321, 'Hello world yanky doodle', 21, false), 0)))) {
                    throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
                }
                throw J$.X1(369, J$.Th(361, J$.T(353, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
