J$.iids = {"8":[7,5,7,10],"9":[3,10,3,17],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[5,13,5,16],"105":[5,22,5,23],"113":[5,13,5,24],"115":[5,13,5,21],"121":[5,13,5,24],"129":[5,13,5,24],"137":[7,5,7,10],"145":[8,8,8,19],"153":[8,8,8,19],"161":[8,2,8,20],"169":[10,8,10,19],"177":[10,8,10,19],"185":[10,2,10,20],"193":[1,1,11,2],"201":[1,1,11,2],"209":[1,1,11,2],"217":[1,1,11,2],"225":[7,1,11,2],"233":[1,1,11,2],"241":[1,1,11,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/empty_example.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/empty_example_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar inStr = / /.test(x);\n\nif (inStr) {\n\tthrow 'Reachable';\n} else {\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/home/blake/artifact/ExpoSE/tests/regex/core/literals/empty_example_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/literals/empty_example.js');
            J$.N(201, 'S$', S$, 0);
            J$.N(209, 'x', x, 0);
            J$.N(217, 'inStr', inStr, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var inStr = J$.X1(129, J$.W(121, 'inStr', J$.M(113, J$.T(97, / /, 14, false), 'test', 0)(J$.R(105, 'x', x, 1)), inStr, 3));
            if (J$.X1(225, J$.C(8, J$.R(137, 'inStr', inStr, 1)))) {
                throw J$.X1(161, J$.Th(153, J$.T(145, 'Reachable', 21, false)));
            } else {
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
