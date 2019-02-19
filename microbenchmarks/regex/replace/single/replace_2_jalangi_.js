J$.iids = {"8":[8,5,8,17],"9":[1,20,1,27],"10":[7,13,7,24],"16":[11,5,11,13],"17":[1,28,1,32],"18":[8,5,8,17],"24":[14,5,14,13],"25":[1,20,1,33],"26":[11,5,11,13],"33":[1,20,1,33],"34":[14,5,14,13],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,27],"145":[4,9,4,28],"147":[4,9,4,18],"153":[4,9,4,28],"161":[4,9,4,28],"169":[5,9,5,18],"177":[5,9,5,18],"185":[5,9,5,18],"193":[6,5,6,6],"201":[6,15,6,16],"209":[6,18,6,25],"217":[6,5,6,26],"219":[6,5,6,14],"225":[6,5,6,26],"233":[6,1,6,27],"241":[7,1,7,8],"249":[7,13,7,20],"257":[7,23,7,24],"265":[7,1,7,25],"267":[7,1,7,12],"273":[7,1,7,26],"281":[8,5,8,6],"289":[8,10,8,17],"297":[9,11,9,22],"305":[9,11,9,22],"313":[9,5,9,23],"321":[11,5,11,6],"329":[11,10,11,13],"337":[12,11,12,24],"345":[12,11,12,24],"353":[12,5,12,25],"361":[14,5,14,6],"369":[14,10,14,13],"377":[15,11,15,24],"385":[15,11,15,24],"393":[15,5,15,25],"401":[1,1,16,2],"409":[1,1,16,2],"417":[1,1,16,2],"425":[1,1,16,2],"433":[1,1,16,2],"441":[1,1,16,2],"449":[8,1,10,2],"457":[11,1,13,2],"465":[14,1,16,2],"473":[1,1,16,2],"481":[1,1,16,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/replace_2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/replace_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a replace on a non global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", 'a');\nvar b = /^(a|b)$/;\n\nx = x.replace(b, 'hello');\n\nconsole.log('X is ' + x);\n\nif (x == 'hello') {\n\tthrow 'Reachable';\n}\n\nif (x == 'a') {\n\tthrow 'Unreachable';\n}\n\nif (x == 'b') {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/microbenchmarks/regex/replace/single/replace_2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/replace/single/replace_2.js');
            J$.N(409, '__secret__S$', __secret__S$, 0);
            J$.N(417, '__secret__traits__', __secret__traits__, 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'x', x, 0);
            J$.N(441, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, 'a', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /^(a|b)$/, 14, false), b, 3));
            J$.X1(233, x = J$.W(225, 'x', J$.M(217, J$.R(193, 'x', x, 1), 'replace', 0)(J$.R(201, 'b', b, 1), J$.T(209, 'hello', 21, false)), x, 2));
            J$.X1(273, J$.M(265, J$.R(241, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(249, 'X is ', 21, false), J$.R(257, 'x', x, 1), 0)));
            if (J$.X1(449, J$.C(8, J$.B(18, '==', J$.R(281, 'x', x, 1), J$.T(289, 'hello', 21, false), 0)))) {
                throw J$.X1(313, J$.Th(305, J$.T(297, 'Reachable', 21, false)));
            }
            if (J$.X1(457, J$.C(16, J$.B(26, '==', J$.R(321, 'x', x, 1), J$.T(329, 'a', 21, false), 0)))) {
                throw J$.X1(353, J$.Th(345, J$.T(337, 'Unreachable', 21, false)));
            }
            if (J$.X1(465, J$.C(24, J$.B(34, '==', J$.R(361, 'x', x, 1), J$.T(369, 'b', 21, false), 0)))) {
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Unreachable', 21, false)));
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
