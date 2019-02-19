J$.iids = {"8":[7,9,7,26],"9":[1,20,1,27],"10":[7,9,7,26],"16":[9,9,9,26],"17":[1,28,1,32],"18":[9,9,9,26],"24":[6,5,6,6],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,18],"177":[5,24,5,25],"185":[5,9,5,26],"187":[5,9,5,23],"193":[5,9,5,26],"201":[5,9,5,26],"209":[6,5,6,6],"217":[7,9,7,10],"225":[7,11,7,12],"233":[7,9,7,13],"241":[7,9,7,20],"249":[7,24,7,26],"257":[8,15,8,28],"265":[8,15,8,28],"273":[8,9,8,29],"281":[9,9,9,10],"289":[9,11,9,12],"297":[9,9,9,13],"305":[9,9,9,20],"313":[9,24,9,26],"321":[10,15,10,26],"329":[10,15,10,26],"337":[10,9,10,27],"345":[11,11,11,22],"353":[11,11,11,22],"361":[11,5,11,23],"369":[1,1,12,2],"377":[1,1,12,2],"385":[1,1,12,2],"393":[1,1,12,2],"401":[1,1,12,2],"409":[1,1,12,2],"417":[7,5,8,29],"425":[9,5,10,27],"433":[6,1,12,2],"441":[1,1,12,2],"449":[1,1,12,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/exec/greed/optionals.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/exec/greed/optionals_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test ambiguous regular expressions which include alternation or optional terms (?)\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a)+?$/.exec(x);\n\nif (b) {\n\tif (b[1].length == 15) throw 'Unreachable';\n\tif (b[0].length == 15) throw 'Reachable';\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/home/blake/artifact/microbenchmarks/regex/exec/greed/optionals_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/exec/greed/optionals.js');
            J$.N(377, '__secret__S$', __secret__S$, 0);
            J$.N(385, '__secret__traits__', __secret__traits__, 0);
            J$.N(393, 'S$', S$, 0);
            J$.N(401, 'x', x, 0);
            J$.N(409, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(201, J$.W(193, 'b', J$.M(185, J$.T(169, /^(a)+?$/, 14, false), 'exec', 0)(J$.R(177, 'x', x, 1)), b, 3));
            if (J$.X1(433, J$.C(24, J$.R(209, 'b', b, 1)))) {
                if (J$.X1(417, J$.C(8, J$.B(10, '==', J$.G(241, J$.G(233, J$.R(217, 'b', b, 1), J$.T(225, 1, 22, false), 4), 'length', 0), J$.T(249, 15, 22, false), 0))))
                    throw J$.X1(273, J$.Th(265, J$.T(257, 'Unreachable', 21, false)));
                if (J$.X1(425, J$.C(16, J$.B(18, '==', J$.G(305, J$.G(297, J$.R(281, 'b', b, 1), J$.T(289, 0, 22, false), 4), 'length', 0), J$.T(313, 15, 22, false), 0))))
                    throw J$.X1(337, J$.Th(329, J$.T(321, 'Reachable', 21, false)));
                throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
