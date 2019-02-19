J$.iids = {"8":[7,5,7,23],"9":[1,20,1,27],"10":[6,11,6,23],"17":[1,28,1,32],"18":[7,5,7,23],"25":[1,20,1,33],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,9,3,11],"89":[3,19,3,22],"97":[3,24,3,26],"105":[3,9,3,27],"107":[3,9,3,18],"113":[3,9,3,27],"121":[3,9,3,27],"129":[4,9,4,20],"137":[4,9,4,20],"145":[4,9,4,20],"153":[5,10,5,11],"161":[5,19,5,20],"169":[5,10,5,21],"171":[5,10,5,18],"177":[5,10,5,21],"185":[5,10,5,21],"193":[6,1,6,3],"201":[6,11,6,12],"209":[6,11,6,19],"217":[6,22,6,23],"225":[6,1,6,24],"227":[6,1,6,10],"233":[6,1,6,25],"241":[7,5,7,6],"249":[7,14,7,15],"257":[7,5,7,16],"259":[7,5,7,13],"265":[7,20,7,23],"273":[8,11,8,22],"281":[8,11,8,22],"289":[8,5,8,23],"297":[1,1,9,2],"305":[1,1,9,2],"313":[1,1,9,2],"321":[1,1,9,2],"329":[1,1,9,2],"337":[1,1,9,2],"345":[7,1,9,2],"353":[1,1,9,2],"361":[1,1,9,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous2.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/search/ambiguous2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Tests a simple string search\n\nvar x = S$.symbol(\"X\", '');\nvar b = /(a*)(ab)?/;\nvar nl = x.search(b);\n\nS$.assume(x.length < 5);\n\nif (x.charAt(3) == 'b') {\n\t//Locked by anchor to be 0\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/blake/artifact/microbenchmarks/regex/search/ambiguous2_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/search/ambiguous2.js');
            J$.N(305, '__secret__S$', __secret__S$, 0);
            J$.N(313, '__secret__traits__', __secret__traits__, 0);
            J$.N(321, 'x', x, 0);
            J$.N(329, 'b', b, 0);
            J$.N(337, 'nl', nl, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var x = J$.X1(121, J$.W(113, 'x', J$.M(105, J$.R(81, 'S$', S$, 2), 'symbol', 0)(J$.T(89, 'X', 21, false), J$.T(97, '', 21, false)), x, 3));
            var b = J$.X1(145, J$.W(137, 'b', J$.T(129, /(a*)(ab)?/, 14, false), b, 3));
            var nl = J$.X1(185, J$.W(177, 'nl', J$.M(169, J$.R(153, 'x', x, 1), 'search', 0)(J$.R(161, 'b', b, 1)), nl, 3));
            J$.X1(233, J$.M(225, J$.R(193, 'S$', S$, 2), 'assume', 0)(J$.B(10, '<', J$.G(209, J$.R(201, 'x', x, 1), 'length', 0), J$.T(217, 5, 22, false), 0)));
            if (J$.X1(345, J$.C(8, J$.B(18, '==', J$.M(257, J$.R(241, 'x', x, 1), 'charAt', 0)(J$.T(249, 3, 22, false)), J$.T(265, 'b', 21, false), 0)))) {
                throw J$.X1(289, J$.Th(281, J$.T(273, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
