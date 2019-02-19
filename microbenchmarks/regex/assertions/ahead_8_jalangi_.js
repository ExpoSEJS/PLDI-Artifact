J$.iids = {"8":[9,9,9,24],"9":[1,20,1,27],"10":[9,9,9,24],"16":[8,5,8,6],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,10,5,26],"177":[5,10,5,26],"185":[5,10,5,26],"193":[6,11,6,20],"201":[6,11,6,20],"209":[6,11,6,20],"217":[7,9,7,11],"225":[7,17,7,18],"233":[7,9,7,19],"235":[7,9,7,16],"241":[7,9,7,19],"249":[7,9,7,19],"257":[8,5,8,6],"265":[9,10,9,13],"273":[9,19,9,20],"281":[9,21,9,22],"289":[9,19,9,23],"297":[9,10,9,24],"299":[9,10,9,18],"305":[10,15,10,28],"313":[10,15,10,28],"321":[10,9,10,29],"329":[12,11,12,22],"337":[12,11,12,22],"345":[12,5,12,23],"353":[1,1,13,2],"361":[1,1,13,2],"369":[1,1,13,2],"377":[1,1,13,2],"385":[1,1,13,2],"393":[1,1,13,2],"401":[1,1,13,2],"409":[1,1,13,2],"417":[9,5,11,6],"425":[8,1,13,2],"433":[1,1,13,2],"441":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_8.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_8_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re = /^(?=([0-9])).$/;\nvar re2 = /^[0-9]$/;\n\nvar r = re.exec(x);\n\nif (r) {\n\t\n\tif (!re2.test(r[0])) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(353, '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_8_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_8.js');
            J$.N(361, '__secret__S$', __secret__S$, 0);
            J$.N(369, '__secret__traits__', __secret__traits__, 0);
            J$.N(377, 'S$', S$, 0);
            J$.N(385, 'x', x, 0);
            J$.N(393, 're', re, 0);
            J$.N(401, 're2', re2, 0);
            J$.N(409, 'r', r, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re = J$.X1(185, J$.W(177, 're', J$.T(169, /^(?=([0-9])).$/, 14, false), re, 3));
            var re2 = J$.X1(209, J$.W(201, 're2', J$.T(193, /^[0-9]$/, 14, false), re2, 3));
            var r = J$.X1(249, J$.W(241, 'r', J$.M(233, J$.R(217, 're', re, 1), 'exec', 0)(J$.R(225, 'x', x, 1)), r, 3));
            if (J$.X1(425, J$.C(16, J$.R(257, 'r', r, 1)))) {
                if (J$.X1(417, J$.C(8, J$.U(10, '!', J$.M(297, J$.R(265, 're2', re2, 1), 'test', 0)(J$.G(289, J$.R(273, 'r', r, 1), J$.T(281, 0, 22, false), 4)))))) {
                    throw J$.X1(321, J$.Th(313, J$.T(305, 'Unreachable', 21, false)));
                }
                throw J$.X1(345, J$.Th(337, J$.T(329, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
