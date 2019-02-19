J$.iids = {"8":[8,9,8,19],"9":[1,20,1,27],"10":[6,11,6,24],"16":[7,5,7,15],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,10,5,18],"177":[5,10,5,18],"185":[5,10,5,18],"193":[6,1,6,3],"201":[6,11,6,12],"209":[6,11,6,19],"217":[6,22,6,24],"225":[6,1,6,25],"227":[6,1,6,10],"233":[6,1,6,26],"241":[7,5,7,7],"249":[7,13,7,14],"257":[7,5,7,15],"259":[7,5,7,12],"265":[8,9,8,11],"273":[8,17,8,18],"281":[8,9,8,19],"283":[8,9,8,16],"289":[9,15,9,28],"297":[9,15,9,28],"305":[9,9,9,29],"313":[11,11,11,24],"321":[11,11,11,24],"329":[11,5,11,25],"337":[1,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"361":[1,1,12,2],"369":[1,1,12,2],"377":[1,1,12,2],"385":[8,5,10,6],"393":[7,1,12,2],"401":[1,1,12,2],"409":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/test/flags/sticky2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/test/flags/sticky2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test that multiline changes ^ into (\\n or ^) and $ into (\\n or $)\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar re = /Hello/y;\n\nS$.assume(x.length < 13);\n\nif (re.test(x)) {\n\t\n\tif (re.test(x)) {\n\t\t//Length < 4, sticky is set, lastIndex should be 3, cant match again\n\t\tthrow 'Reachable 2';\n\t}\n\n\tthrow 'Reachable 1';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(337, '/home/blake/artifact/microbenchmarks/regex/test/flags/sticky2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/test/flags/sticky2.js');
            J$.N(345, '__secret__S$', __secret__S$, 0);
            J$.N(353, '__secret__traits__', __secret__traits__, 0);
            J$.N(361, 'S$', S$, 0);
            J$.N(369, 'x', x, 0);
            J$.N(377, 're', re, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re = J$.X1(185, J$.W(177, 're', J$.T(169, /Hello/y, 14, false), re, 3));
            J$.X1(233, J$.M(225, J$.R(193, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(209, J$.R(201, 'x', x, 1), 'length', 0), J$.T(217, 13, 22, false), 0)));
            if (J$.X1(393, J$.C(16, J$.M(257, J$.R(241, 're', re, 1), 'test', 0)(J$.R(249, 'x', x, 1))))) {
                if (J$.X1(385, J$.C(8, J$.M(281, J$.R(265, 're', re, 1), 'test', 0)(J$.R(273, 'x', x, 1))))) {
                    throw J$.X1(305, J$.Th(297, J$.T(289, 'Reachable 2', 21, false)));
                }
                throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable 1', 21, false)));
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
