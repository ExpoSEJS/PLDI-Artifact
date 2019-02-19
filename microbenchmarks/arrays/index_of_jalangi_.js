J$.iids = {"8":[6,5,6,23],"9":[3,10,3,17],"10":[6,21,6,23],"17":[3,18,3,22],"18":[6,5,6,23],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,25,4,26],"73":[4,24,4,27],"81":[4,9,4,28],"83":[4,9,4,18],"89":[4,9,4,28],"97":[4,9,4,28],"105":[6,5,6,6],"113":[6,15,6,16],"121":[6,5,6,17],"123":[6,5,6,14],"129":[6,22,6,23],"137":[7,11,7,15],"145":[7,11,7,15],"153":[7,5,7,16],"161":[1,1,8,2],"169":[1,1,8,2],"177":[1,1,8,2],"185":[6,1,8,2],"193":[1,1,8,2],"201":[1,1,8,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/index_of.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/index_of_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', [1]);\n\nif (x.indexOf(5) != -1) {\n    throw 'Hi';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/home/blake/artifact/ExpoSE/tests/arrays/index_of_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/index_of.js');
            J$.N(169, 'S$', S$, 0);
            J$.N(177, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 1, 22, false)], 10, false)), x, 3));
            if (J$.X1(185, J$.C(8, J$.B(18, '!=', J$.M(121, J$.R(105, 'x', x, 1), 'indexOf', 0)(J$.T(113, 5, 22, false)), J$.U(10, '-', J$.T(129, 1, 22, false)), 0)))) {
                throw J$.X1(153, J$.Th(145, J$.T(137, 'Hi', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
