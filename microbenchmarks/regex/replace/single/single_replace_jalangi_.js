J$.iids = {"8":[7,9,7,29],"9":[1,20,1,27],"10":[6,5,6,35],"16":[10,9,10,29],"17":[1,28,1,32],"18":[7,27,7,29],"24":[6,5,6,35],"25":[1,20,1,33],"26":[7,9,7,29],"33":[1,20,1,33],"34":[10,27,10,29],"41":[1,20,1,33],"42":[10,9,10,29],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,16],"177":[5,9,5,16],"185":[5,9,5,16],"193":[6,5,6,6],"201":[6,15,6,16],"209":[6,18,6,24],"217":[6,5,6,25],"219":[6,5,6,14],"225":[6,29,6,35],"233":[7,9,7,10],"241":[7,19,7,22],"249":[7,9,7,23],"251":[7,9,7,18],"257":[7,28,7,29],"265":[8,15,8,26],"273":[8,15,8,26],"281":[8,9,8,27],"289":[10,9,10,10],"297":[10,19,10,22],"305":[10,9,10,23],"307":[10,9,10,18],"313":[10,28,10,29],"321":[11,15,11,26],"329":[11,15,11,26],"337":[11,9,11,27],"345":[13,11,13,22],"353":[13,11,13,22],"361":[13,5,13,23],"369":[1,1,14,2],"377":[1,1,14,2],"385":[1,1,14,2],"393":[1,1,14,2],"401":[1,1,14,2],"409":[1,1,14,2],"417":[7,5,9,6],"425":[10,5,12,6],"433":[6,1,14,2],"441":[1,1,14,2],"449":[1,1,14,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/single_replace.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/single_replace_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a replace on a non global regex\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar b = /(a|b)/;\n\nif (x.replace(b, 'Test') == 'Test') {\n\n\tif (x.indexOf('a') != -1) {\n\t\tthrow 'Reachable';\n\t}\n\n\tif (x.indexOf('b') != -1) {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/home/blake/artifact/microbenchmarks/regex/replace/single/single_replace_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/replace/single/single_replace.js');
            J$.N(377, '__secret__S$', __secret__S$, 0);
            J$.N(385, '__secret__traits__', __secret__traits__, 0);
            J$.N(393, 'S$', S$, 0);
            J$.N(401, 'x', x, 0);
            J$.N(409, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var b = J$.X1(185, J$.W(177, 'b', J$.T(169, /(a|b)/, 14, false), b, 3));
            if (J$.X1(433, J$.C(24, J$.B(10, '==', J$.M(217, J$.R(193, 'x', x, 1), 'replace', 0)(J$.R(201, 'b', b, 1), J$.T(209, 'Test', 21, false)), J$.T(225, 'Test', 21, false), 0)))) {
                if (J$.X1(417, J$.C(8, J$.B(26, '!=', J$.M(249, J$.R(233, 'x', x, 1), 'indexOf', 0)(J$.T(241, 'a', 21, false)), J$.U(18, '-', J$.T(257, 1, 22, false)), 0)))) {
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
                }
                if (J$.X1(425, J$.C(16, J$.B(42, '!=', J$.M(305, J$.R(289, 'x', x, 1), 'indexOf', 0)(J$.T(297, 'b', 21, false)), J$.U(34, '-', J$.T(313, 1, 22, false)), 0)))) {
                    throw J$.X1(337, J$.Th(329, J$.T(321, 'Reachable', 21, false)));
                }
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
