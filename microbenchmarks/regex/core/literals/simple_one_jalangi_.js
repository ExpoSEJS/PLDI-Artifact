J$.iids = {"8":[7,6,7,14],"9":[3,10,3,17],"10":[7,6,7,14],"16":[6,5,6,18],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,10],"105":[6,16,6,17],"113":[6,5,6,18],"115":[6,5,6,15],"121":[7,6,7,7],"129":[7,11,7,14],"137":[7,22,7,33],"145":[7,22,7,33],"153":[7,16,7,34],"161":[8,8,8,21],"169":[8,8,8,21],"177":[8,2,8,22],"185":[1,1,9,2],"193":[1,1,9,2],"201":[1,1,9,2],"209":[7,2,7,34],"217":[6,1,9,2],"225":[1,1,9,2],"233":[1,1,9,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/simple_one.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/simple_one_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^a$/.test(x)) {\n\tif (x == 'a') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/home/blake/artifact/ExpoSE/tests/regex/core/literals/simple_one_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/literals/simple_one.js');
            J$.N(193, 'S$', S$, 0);
            J$.N(201, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(217, J$.C(16, J$.M(113, J$.T(97, /^a$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(209, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'a', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                throw J$.X1(177, J$.Th(169, J$.T(161, 'Unreachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
