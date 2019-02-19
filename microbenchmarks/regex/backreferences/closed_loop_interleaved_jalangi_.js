J$.iids = {"8":[5,5,5,46],"9":[1,20,1,27],"17":[1,28,1,32],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,5,5,38],"177":[5,44,5,45],"185":[5,5,5,46],"187":[5,5,5,43],"193":[6,11,6,22],"201":[6,11,6,22],"209":[6,5,6,23],"217":[1,1,7,2],"225":[1,1,7,2],"233":[1,1,7,2],"241":[1,1,7,2],"249":[1,1,7,2],"257":[5,1,7,2],"265":[1,1,7,2],"273":[1,1,7,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_loop_interleaved.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/backreferences/closed_loop_interleaved_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(a)([a-z])(hello)(....)\\4\\3\\1$/.test(x)) {\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_loop_interleaved_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/backreferences/closed_loop_interleaved.js');
            J$.N(225, '__secret__S$', __secret__S$, 0);
            J$.N(233, '__secret__traits__', __secret__traits__, 0);
            J$.N(241, 'S$', S$, 0);
            J$.N(249, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), x, 3));
            if (J$.X1(257, J$.C(8, J$.M(185, J$.T(169, /^(a)([a-z])(hello)(....)\4\3\1$/, 14, false), 'test', 0)(J$.R(177, 'x', x, 1))))) {
                throw J$.X1(209, J$.Th(201, J$.T(193, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
