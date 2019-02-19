J$.iids = {"8":[8,9,8,23],"9":[1,20,1,27],"10":[8,9,8,23],"16":[6,5,6,16],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,11,5,24],"177":[5,11,5,24],"185":[5,11,5,24],"193":[6,5,6,8],"201":[6,14,6,15],"209":[6,5,6,16],"211":[6,5,6,13],"217":[7,16,7,19],"225":[7,25,7,26],"233":[7,16,7,27],"235":[7,16,7,24],"241":[7,16,7,27],"249":[7,16,7,27],"257":[8,9,8,13],"265":[8,14,8,15],"273":[8,9,8,16],"281":[8,20,8,23],"289":[9,15,9,26],"297":[9,15,9,26],"305":[9,9,9,27],"313":[11,15,11,28],"321":[11,15,11,28],"329":[11,9,11,29],"337":[1,1,13,2],"345":[1,1,13,2],"353":[1,1,13,2],"361":[1,1,13,2],"369":[1,1,13,2],"377":[1,1,13,2],"385":[1,1,13,2],"393":[8,5,12,6],"401":[6,1,13,2],"409":[1,1,13,2],"417":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re2 = /^a(?=(a))a$/;\n \n//Capture some text in an assertion\nif (re2.test(x)) {\n\tvar caps = re2.exec(x);\n\n\tif (caps[1] == 'a') {\n\t\tthrow 'Reachable';\n\t} else {\n\t\tthrow 'Unreachable';\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(337, '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_2.js');
            J$.N(345, '__secret__S$', __secret__S$, 0);
            J$.N(353, '__secret__traits__', __secret__traits__, 0);
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'x', x, 0);
            J$.N(377, 're2', re2, 0);
            J$.N(385, 'caps', caps, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re2 = J$.X1(185, J$.W(177, 're2', J$.T(169, /^a(?=(a))a$/, 14, false), re2, 3));
            if (J$.X1(401, J$.C(16, J$.M(209, J$.R(193, 're2', re2, 1), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                var caps = J$.X1(249, J$.W(241, 'caps', J$.M(233, J$.R(217, 're2', re2, 1), 'exec', 0)(J$.R(225, 'x', x, 1)), caps, 3));
                if (J$.X1(393, J$.C(8, J$.B(10, '==', J$.G(273, J$.R(257, 'caps', caps, 1), J$.T(265, 1, 22, false), 4), J$.T(281, 'a', 21, false), 0)))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
                } else {
                    throw J$.X1(329, J$.Th(321, J$.T(313, 'Unreachable', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
