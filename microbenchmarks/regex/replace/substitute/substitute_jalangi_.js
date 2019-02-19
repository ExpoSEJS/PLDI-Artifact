J$.iids = {"8":[7,9,7,22],"9":[1,20,1,27],"10":[6,10,6,15],"16":[6,5,6,15],"17":[1,28,1,32],"18":[6,5,6,15],"25":[1,20,1,33],"26":[7,9,7,22],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,9,5,10],"177":[5,19,5,25],"185":[5,27,5,33],"193":[5,9,5,34],"195":[5,9,5,18],"201":[5,9,5,34],"209":[5,9,5,34],"217":[6,5,6,6],"225":[6,10,6,11],"233":[6,14,6,15],"241":[7,9,7,10],"249":[7,9,7,17],"257":[7,21,7,22],"265":[8,15,8,28],"273":[8,15,8,28],"281":[8,9,8,29],"289":[10,11,10,24],"297":[10,11,10,24],"305":[10,5,10,25],"313":[12,11,12,24],"321":[12,11,12,24],"329":[12,5,12,25],"337":[1,1,13,2],"345":[1,1,13,2],"353":[1,1,13,2],"361":[1,1,13,2],"369":[1,1,13,2],"377":[1,1,13,2],"385":[7,5,9,6],"393":[6,1,13,2],"401":[1,1,13,2],"409":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/substitute/substitute.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/substitute/substitute_jalangi_.js","code":"var S$ = require('S$');\n\nvar a = S$.symbol('A', '');\n\nvar x = a.replace(/(.*)/, '$1$1');\n\nif (x != (a + a)) {\n\n\t//Reachable when x == \"\\n\"\n\tif (a.length != 0) {\n\t\tthrow 'Reachable 1';\n\t}\n\n\tthrow 'Unreachable';\n} else {\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(337, '/home/blake/artifact/microbenchmarks/regex/replace/substitute/substitute_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/replace/substitute/substitute.js');
            J$.N(345, '__secret__S$', __secret__S$, 0);
            J$.N(353, '__secret__traits__', __secret__traits__, 0);
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'a', a, 0);
            J$.N(377, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var a = J$.X1(161, J$.W(153, 'a', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'A', 21, false), J$.T(137, '', 21, false)), a, 3));
            var x = J$.X1(209, J$.W(201, 'x', J$.M(193, J$.R(169, 'a', a, 1), 'replace', 0)(J$.T(177, /(.*)/, 14, false), J$.T(185, '$1$1', 21, false)), x, 3));
            if (J$.X1(393, J$.C(16, J$.B(18, '!=', J$.R(217, 'x', x, 1), J$.B(10, '+', J$.R(225, 'a', a, 1), J$.R(233, 'a', a, 1), 0), 0)))) {
                if (J$.X1(385, J$.C(8, J$.B(26, '!=', J$.G(249, J$.R(241, 'a', a, 1), 'length', 0), J$.T(257, 0, 22, false), 0)))) {
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable 1', 21, false)));
                }
                throw J$.X1(305, J$.Th(297, J$.T(289, 'Unreachable', 21, false)));
            } else {
                throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
