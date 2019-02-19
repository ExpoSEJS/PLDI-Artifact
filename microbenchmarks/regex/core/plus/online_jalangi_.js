J$.iids = {"8":[7,9,7,16],"9":[1,20,1,27],"10":[5,11,5,24],"16":[11,13,11,24],"17":[1,28,1,32],"18":[7,9,7,16],"24":[10,21,10,33],"25":[1,20,1,33],"26":[10,21,10,33],"32":[6,5,6,19],"33":[1,20,1,33],"34":[10,35,10,38],"41":[1,20,1,33],"49":[2,26,2,38],"50":[10,35,10,38],"57":[2,26,2,45],"58":[11,13,11,24],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,1,5,3],"177":[5,11,5,12],"185":[5,11,5,19],"193":[5,22,5,24],"201":[5,1,5,25],"203":[5,1,5,10],"209":[5,1,5,26],"217":[6,5,6,11],"225":[6,17,6,18],"233":[6,5,6,19],"235":[6,5,6,16],"241":[7,9,7,10],"249":[7,14,7,16],"257":[8,15,8,28],"265":[8,15,8,28],"273":[8,9,8,29],"281":[10,18,10,19],"289":[10,18,10,19],"297":[10,18,10,19],"305":[10,21,10,22],"313":[10,25,10,26],"321":[10,25,10,33],"337":[10,35,10,36],"345":[10,35,10,38],"361":[11,13,11,14],"369":[11,15,11,16],"377":[11,13,11,17],"385":[11,21,11,24],"393":[12,19,12,32],"401":[12,19,12,32],"409":[12,13,12,33],"417":[15,11,15,22],"425":[15,11,15,22],"433":[15,5,15,23],"441":[17,7,17,18],"449":[17,7,17,18],"457":[17,1,17,19],"465":[1,1,17,19],"473":[1,1,17,19],"481":[1,1,17,19],"489":[1,1,17,19],"497":[1,1,17,19],"505":[1,1,17,19],"513":[7,5,9,6],"521":[11,9,13,10],"529":[10,5,14,6],"537":[10,5,14,6],"545":[6,1,16,2],"553":[1,1,17,19],"561":[1,1,17,19],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/plus/online.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/core/plus/online_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nS$.assume(x.length < 10);\n\nif (/^z+$/.test(x)) {\n\t\n\tif (x == '') {\n\t\tthrow 'Unreachable';\n\t}\n\n\tfor (var i = 0; i < x.length; i++) {\n\t\tif (x[i] != 'z') {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\t}\n\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(465, '/home/blake/artifact/microbenchmarks/regex/core/plus/online_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/core/plus/online.js');
            J$.N(473, '__secret__S$', __secret__S$, 0);
            J$.N(481, '__secret__traits__', __secret__traits__, 0);
            J$.N(489, 'S$', S$, 0);
            J$.N(497, 'x', x, 0);
            J$.N(505, 'i', i, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            J$.X1(209, J$.M(201, J$.R(169, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(185, J$.R(177, 'x', x, 1), 'length', 0), J$.T(193, 10, 22, false), 0)));
            if (J$.X1(545, J$.C(32, J$.M(233, J$.T(217, /^z+$/, 14, false), 'test', 0)(J$.R(225, 'x', x, 1))))) {
                if (J$.X1(513, J$.C(8, J$.B(18, '==', J$.R(241, 'x', x, 1), J$.T(249, '', 21, false), 0)))) {
                    throw J$.X1(273, J$.Th(265, J$.T(257, 'Unreachable', 21, false)));
                }
                for (var i = J$.X1(297, J$.W(289, 'i', J$.T(281, 0, 22, false), i, 3)); J$.X1(529, J$.C(24, J$.B(26, '<', J$.R(305, 'i', i, 1), J$.G(321, J$.R(313, 'x', x, 1), 'length', 0), 0))); J$.X1(537, J$.B(50, '-', i = J$.W(345, 'i', J$.B(42, '+', J$.U(34, '+', J$.R(337, 'i', i, 1)), J$.T(329, 1, 22, false), 0), i, 2), J$.T(353, 1, 22, false), 0))) {
                    if (J$.X1(521, J$.C(16, J$.B(58, '!=', J$.G(377, J$.R(361, 'x', x, 1), J$.R(369, 'i', i, 1), 4), J$.T(385, 'z', 21, false), 0)))) {
                        throw J$.X1(409, J$.Th(401, J$.T(393, 'Unreachable', 21, false)));
                    }
                }
                throw J$.X1(433, J$.Th(425, J$.T(417, 'Reachable', 21, false)));
            }
            throw J$.X1(457, J$.Th(449, J$.T(441, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(553, J$e);
        } finally {
            if (J$.Sr(561)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
