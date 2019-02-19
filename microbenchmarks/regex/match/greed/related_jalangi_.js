J$.iids = {"8":[6,9,6,21],"9":[1,20,1,27],"10":[6,9,6,21],"16":[5,5,5,6],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,34,4,46],"161":[4,9,4,47],"163":[4,9,4,33],"169":[4,9,4,47],"177":[4,9,4,47],"185":[5,5,5,6],"193":[6,9,6,10],"201":[6,11,6,12],"209":[6,9,6,13],"217":[6,17,6,18],"225":[6,19,6,20],"233":[6,17,6,21],"241":[7,15,7,26],"249":[7,15,7,26],"257":[7,9,7,27],"265":[9,11,9,22],"273":[9,11,9,22],"281":[9,5,9,23],"289":[1,1,10,2],"297":[1,1,10,2],"305":[1,1,10,2],"313":[1,1,10,2],"321":[1,1,10,2],"329":[6,5,8,6],"337":[5,1,10,2],"345":[1,1,10,2],"353":[1,1,10,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/related.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/greed/related_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//In this test a string constraint is used to force a relation between two captured strings\n//The Regex in question though places the implicit constraint that C2 can only ever be one character wide though\n\nvar S$ = require('S$');\n\nvar b = S$.symbol('X', '').match(/^(.+)(.+)$/);\n\nif (b) {\n\n\tif (b[1] == b[2]) {\n\t\tthrow 'Reachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/microbenchmarks/regex/match/greed/related_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/greed/related.js');
            J$.N(297, '__secret__S$', __secret__S$, 0);
            J$.N(305, '__secret__traits__', __secret__traits__, 0);
            J$.N(313, 'S$', S$, 0);
            J$.N(321, 'b', b, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var b = J$.X1(177, J$.W(169, 'b', J$.M(161, J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), 'match', 0)(J$.T(153, /^(.+)(.+)$/, 14, false)), b, 3));
            if (J$.X1(337, J$.C(16, J$.R(185, 'b', b, 1)))) {
                if (J$.X1(329, J$.C(8, J$.B(10, '==', J$.G(209, J$.R(193, 'b', b, 1), J$.T(201, 1, 22, false), 4), J$.G(233, J$.R(217, 'b', b, 1), J$.T(225, 2, 22, false), 4), 0)))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
                }
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
