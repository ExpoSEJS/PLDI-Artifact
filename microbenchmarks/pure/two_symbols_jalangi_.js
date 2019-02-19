J$.iids = {"8":[7,5,7,11],"9":[3,10,3,17],"10":[7,5,7,11],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,23,4,26],"65":[4,9,4,27],"67":[4,9,4,22],"73":[4,9,4,27],"81":[4,9,4,27],"89":[5,9,5,11],"97":[5,23,5,26],"105":[5,9,5,27],"107":[5,9,5,22],"113":[5,9,5,27],"121":[5,9,5,27],"129":[7,5,7,6],"137":[7,10,7,11],"145":[8,11,8,22],"153":[8,11,8,22],"161":[8,5,8,23],"169":[1,1,9,2],"177":[1,1,9,2],"185":[1,1,9,2],"193":[1,1,9,2],"201":[7,1,9,2],"209":[1,1,9,2],"217":[1,1,9,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/pure/two_symbols.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/pure/two_symbols_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.pureSymbol('X');\nvar y = S$.pureSymbol('Y');\n\nif (x == y) {\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/home/blake/artifact/ExpoSE/tests/pure/two_symbols_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/pure/two_symbols.js');
            J$.N(177, 'S$', S$, 0);
            J$.N(185, 'x', x, 0);
            J$.N(193, 'y', y, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(81, J$.W(73, 'x', J$.M(65, J$.R(49, 'S$', S$, 1), 'pureSymbol', 0)(J$.T(57, 'X', 21, false)), x, 3));
            var y = J$.X1(121, J$.W(113, 'y', J$.M(105, J$.R(89, 'S$', S$, 1), 'pureSymbol', 0)(J$.T(97, 'Y', 21, false)), y, 3));
            if (J$.X1(201, J$.C(8, J$.B(10, '==', J$.R(129, 'x', x, 1), J$.R(137, 'y', y, 1), 0)))) {
                throw J$.X1(161, J$.Th(153, J$.T(145, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
