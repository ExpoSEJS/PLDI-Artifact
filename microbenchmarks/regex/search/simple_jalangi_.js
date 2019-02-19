J$.iids = {"8":[6,9,6,16],"9":[1,20,1,27],"10":[5,11,5,13],"16":[5,5,5,13],"17":[1,28,1,32],"18":[5,5,5,13],"25":[1,20,1,33],"26":[6,9,6,16],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,10,4,12],"129":[4,20,4,23],"137":[4,25,4,27],"145":[4,10,4,28],"147":[4,10,4,19],"153":[4,36,4,43],"161":[4,10,4,44],"163":[4,10,4,35],"169":[4,10,4,44],"177":[4,10,4,44],"185":[5,5,5,7],"193":[5,12,5,13],"201":[6,9,6,11],"209":[6,15,6,16],"217":[7,15,7,28],"225":[7,15,7,28],"233":[7,9,7,29],"241":[9,11,9,22],"249":[9,11,9,22],"257":[9,5,9,23],"265":[11,11,11,22],"273":[11,11,11,22],"281":[11,5,11,23],"289":[1,1,12,2],"297":[1,1,12,2],"305":[1,1,12,2],"313":[1,1,12,2],"321":[1,1,12,2],"329":[6,5,8,6],"337":[5,1,12,2],"345":[1,1,12,2],"353":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/simple.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a simple string search\n\nvar S$ = require('S$');\nvar nl = (S$.symbol('X', '')).search(/^abc$/);\n\nif (nl != -1) {\n\t\n\tif (nl != 0) {\n\t\t//Locked by anchor to be 0\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n} else {\n\t//b not in x\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/microbenchmarks/regex/search/simple_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/simple.js');
            J$.N(297, '__secret__S$', __secret__S$, 0);
            J$.N(305, '__secret__traits__', __secret__traits__, 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var nl = J$.X1(177, J$.W(169, 'nl', J$.M(161, J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), 'search', 0)(J$.T(153, /^abc$/, 14, false)), nl, 3));
            if (J$.X1(337, J$.C(16, J$.B(18, '!=', J$.R(185, 'nl', nl, 1), J$.U(10, '-', J$.T(193, 1, 22, false)), 0)))) {
                if (J$.X1(329, J$.C(8, J$.B(26, '!=', J$.R(201, 'nl', nl, 1), J$.T(209, 0, 22, false), 0)))) {
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
                }
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
            } else {
                throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
