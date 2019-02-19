J$.iids = {"8":[6,5,6,16],"9":[1,20,1,27],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,11,5,22],"177":[5,11,5,22],"185":[5,11,5,22],"193":[6,5,6,8],"201":[6,14,6,15],"209":[6,5,6,16],"211":[6,5,6,13],"217":[7,11,7,24],"225":[7,11,7,24],"233":[7,5,7,25],"241":[1,1,8,2],"249":[1,1,8,2],"257":[1,1,8,2],"265":[1,1,8,2],"273":[1,1,8,2],"281":[1,1,8,2],"289":[6,1,8,2],"297":[1,1,8,2],"305":[1,1,8,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/assertions/ahead_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nvar re1 = /^a(?=b)c$/;\n\nif (re1.test(x)) {\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(241, '/home/blake/artifact/microbenchmarks/regex/assertions/ahead_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/assertions/ahead.js');
            J$.N(249, '__secret__S$', __secret__S$, 0);
            J$.N(257, '__secret__traits__', __secret__traits__, 0);
            J$.N(265, 'S$', S$, 0);
            J$.N(273, 'x', x, 0);
            J$.N(281, 're1', re1, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            var re1 = J$.X1(185, J$.W(177, 're1', J$.T(169, /^a(?=b)c$/, 14, false), re1, 3));
            if (J$.X1(289, J$.C(8, J$.M(209, J$.R(193, 're1', re1, 1), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
