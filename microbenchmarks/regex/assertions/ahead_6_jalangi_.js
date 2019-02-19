J$.iids = {"8":[8,9,8,20],"9":[1,20,1,27],"16":[7,5,7,15],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,10,5,26],"177":[5,10,5,26],"185":[5,10,5,26],"193":[6,11,6,20],"201":[6,11,6,20],"209":[6,11,6,20],"217":[7,5,7,7],"225":[7,13,7,14],"233":[7,5,7,15],"235":[7,5,7,12],"241":[8,9,8,12],"249":[8,18,8,19],"257":[8,9,8,20],"259":[8,9,8,17],"265":[9,15,9,28],"273":[9,15,9,28],"281":[9,9,9,29],"289":[11,11,11,22],"297":[11,11,11,22],"305":[11,5,11,23],"313":[1,1,12,2],"321":[1,1,12,2],"329":[1,1,12,2],"337":[1,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"361":[1,1,12,2],"369":[8,5,10,6],"377":[7,1,12,2],"385":[1,1,12,2],"393":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_6.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_6_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re = /^(?=([a-z])).$/;\nvar re2 = /^[0-9]$/;\n\nif (re.test(x)) {\n\t\n\tif (re2.test(x)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(313, '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_6_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_6.js');
            J$.N(321, '__secret__S$', __secret__S$, 0);
            J$.N(329, '__secret__traits__', __secret__traits__, 0);
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'x', x, 0);
            J$.N(353, 're', re, 0);
            J$.N(361, 're2', re2, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re = J$.X1(185, J$.W(177, 're', J$.T(169, /^(?=([a-z])).$/, 14, false), re, 3));
            var re2 = J$.X1(209, J$.W(201, 're2', J$.T(193, /^[0-9]$/, 14, false), re2, 3));
            if (J$.X1(377, J$.C(16, J$.M(233, J$.R(217, 're', re, 1), 'test', 0)(J$.R(225, 'x', x, 1))))) {
                if (J$.X1(369, J$.C(8, J$.M(257, J$.R(241, 're2', re2, 1), 'test', 0)(J$.R(249, 'x', x, 1))))) {
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
                }
                throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
