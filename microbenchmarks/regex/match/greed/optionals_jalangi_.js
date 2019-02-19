J$.iids = {"8":[8,9,8,26],"9":[1,20,1,27],"10":[8,9,8,26],"16":[10,9,10,26],"17":[1,28,1,32],"18":[10,9,10,26],"24":[7,5,7,6],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,13,5,22],"177":[5,13,5,22],"185":[5,13,5,22],"193":[6,9,6,10],"201":[6,17,6,22],"209":[6,9,6,23],"211":[6,9,6,16],"217":[6,9,6,23],"225":[6,9,6,23],"233":[7,5,7,6],"241":[8,9,8,10],"249":[8,11,8,12],"257":[8,9,8,13],"265":[8,9,8,20],"273":[8,24,8,26],"281":[9,15,9,28],"289":[9,15,9,28],"297":[9,9,9,29],"305":[10,9,10,10],"313":[10,11,10,12],"321":[10,9,10,13],"329":[10,9,10,20],"337":[10,24,10,26],"345":[11,15,11,26],"353":[11,15,11,26],"361":[11,9,11,27],"369":[12,11,12,22],"377":[12,11,12,22],"385":[12,5,12,23],"393":[1,1,13,2],"401":[1,1,13,2],"409":[1,1,13,2],"417":[1,1,13,2],"425":[1,1,13,2],"433":[1,1,13,2],"441":[1,1,13,2],"449":[8,5,9,29],"457":[10,5,11,27],"465":[7,1,13,2],"473":[1,1,13,2],"481":[1,1,13,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/optionals.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/optionals_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test ambiguous regular expressions which include alternation or optional terms (?)\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar regex = /^(a)+?$/\nvar b = x.match(regex);\n\nif (b) {\n\tif (b[1].length == 15) throw 'Unreachable';\n\tif (b[0].length == 15) throw 'Reachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(393, '/home/blake/artifact/microbenchmarks/regex/match/greed/optionals_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/greed/optionals.js');
            J$.N(401, '__secret__S$', __secret__S$, 0);
            J$.N(409, '__secret__traits__', __secret__traits__, 0);
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'x', x, 0);
            J$.N(433, 'regex', regex, 0);
            J$.N(441, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var regex = J$.X1(185, J$.W(177, 'regex', J$.T(169, /^(a)+?$/, 14, false), regex, 3));
            var b = J$.X1(225, J$.W(217, 'b', J$.M(209, J$.R(193, 'x', x, 1), 'match', 0)(J$.R(201, 'regex', regex, 1)), b, 3));
            if (J$.X1(465, J$.C(24, J$.R(233, 'b', b, 1)))) {
                if (J$.X1(449, J$.C(8, J$.B(10, '==', J$.G(265, J$.G(257, J$.R(241, 'b', b, 1), J$.T(249, 1, 22, false), 4), 'length', 0), J$.T(273, 15, 22, false), 0))))
                    throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable', 21, false)));
                if (J$.X1(457, J$.C(16, J$.B(18, '==', J$.G(329, J$.G(321, J$.R(305, 'b', b, 1), J$.T(313, 0, 22, false), 4), 'length', 0), J$.T(337, 15, 22, false), 0))))
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
                throw J$.X1(385, J$.Th(377, J$.T(369, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
