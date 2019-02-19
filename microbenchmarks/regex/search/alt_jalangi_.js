J$.iids = {"8":[9,9,9,16],"9":[1,20,1,27],"10":[7,11,7,13],"16":[12,9,12,17],"17":[1,28,1,32],"18":[7,5,7,13],"24":[14,9,14,17],"25":[1,20,1,33],"26":[8,17,8,28],"32":[7,5,7,13],"33":[1,20,1,33],"34":[9,9,9,16],"41":[1,20,1,33],"42":[12,9,12,17],"49":[2,26,2,38],"50":[14,9,14,17],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,18],"177":[5,9,5,18],"185":[5,9,5,18],"193":[6,10,6,11],"201":[6,19,6,20],"209":[6,10,6,21],"211":[6,10,6,18],"217":[6,10,6,21],"225":[6,10,6,21],"233":[7,5,7,7],"241":[7,12,7,13],"249":[8,5,8,12],"257":[8,17,8,24],"265":[8,27,8,28],"273":[8,5,8,29],"275":[8,5,8,16],"281":[8,5,8,30],"289":[9,9,9,11],"297":[9,15,9,16],"305":[10,15,10,28],"313":[10,15,10,28],"321":[10,9,10,29],"329":[12,9,12,10],"337":[12,14,12,17],"345":[13,15,13,26],"353":[13,15,13,26],"361":[13,9,13,27],"369":[14,9,14,10],"377":[14,14,14,17],"385":[15,15,15,26],"393":[15,15,15,26],"401":[15,9,15,27],"409":[16,11,16,24],"417":[16,11,16,24],"425":[16,5,16,25],"433":[18,11,18,22],"441":[18,11,18,22],"449":[18,5,18,23],"457":[1,1,19,2],"465":[1,1,19,2],"473":[1,1,19,2],"481":[1,1,19,2],"489":[1,1,19,2],"497":[1,1,19,2],"505":[1,1,19,2],"513":[9,5,11,6],"521":[12,5,13,27],"529":[14,5,15,27],"537":[7,1,19,2],"545":[1,1,19,2],"553":[1,1,19,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/alt.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/alt_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a simple string search\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /^(a|b)$/;\nvar nl = x.search(b);\n\nif (nl != -1) {\n\n\tconsole.log('B is ' + b);\n\t\n\tif (nl == 3) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tif (x == 'a') throw 'Reachable';\n\tif (x == 'b') throw 'Reachable';\n\n\tthrow 'Unreachable';\n} else {\n\t//b not in x\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(457, '/home/blake/artifact/microbenchmarks/regex/search/alt_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/alt.js');
            J$.N(465, '__secret__S$', __secret__S$, 0);
            J$.N(473, '__secret__traits__', __secret__traits__, 0);
            J$.N(481, 'S$', S$, 0);
            J$.N(489, 'x', x, 0);
            J$.N(497, 'b', b, 0);
            J$.N(505, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /^(a|b)$/, 14, false), b, 3));
            var nl = J$.X1(225, J$.W(217, 'nl', J$.M(209, J$.R(193, 'x', x, 1), 'search', 0)(J$.R(201, 'b', b, 1)), nl, 3));
            if (J$.X1(537, J$.C(32, J$.B(18, '!=', J$.R(233, 'nl', nl, 1), J$.U(10, '-', J$.T(241, 1, 22, false)), 0)))) {
                J$.X1(281, J$.M(273, J$.R(249, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.T(257, 'B is ', 21, false), J$.R(265, 'b', b, 1), 0)));
                if (J$.X1(513, J$.C(8, J$.B(34, '==', J$.R(289, 'nl', nl, 1), J$.T(297, 3, 22, false), 0)))) {
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
                }
                if (J$.X1(521, J$.C(16, J$.B(42, '==', J$.R(329, 'x', x, 1), J$.T(337, 'a', 21, false), 0))))
                    throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
                if (J$.X1(529, J$.C(24, J$.B(50, '==', J$.R(369, 'x', x, 1), J$.T(377, 'b', 21, false), 0))))
                    throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable', 21, false)));
                throw J$.X1(425, J$.Th(417, J$.T(409, 'Unreachable', 21, false)));
            } else {
                throw J$.X1(449, J$.Th(441, J$.T(433, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(545, J$e);
        } finally {
            if (J$.Sr(553)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
