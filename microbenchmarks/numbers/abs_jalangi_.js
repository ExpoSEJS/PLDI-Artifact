J$.iids = {"8":[6,5,6,21],"9":[3,10,3,17],"10":[6,5,6,21],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,25],"73":[4,9,4,26],"75":[4,9,4,18],"81":[4,9,4,26],"89":[4,9,4,26],"97":[6,5,6,9],"105":[6,14,6,15],"113":[6,5,6,16],"115":[6,5,6,13],"121":[6,20,6,21],"129":[7,11,7,15],"137":[7,11,7,15],"145":[7,5,7,16],"153":[9,11,9,15],"161":[9,11,9,15],"169":[9,5,9,16],"177":[1,1,10,2],"185":[1,1,10,2],"193":[1,1,10,2],"201":[6,1,10,2],"209":[1,1,10,2],"217":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/abs.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/abs_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', 0);\n\nif (Math.abs(x) == x) {\n    throw 'R1';\n} else {\n    throw 'R2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/home/blake/artifact/ExpoSE/tests/numbers/abs_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/abs.js');
            J$.N(185, 'S$', S$, 0);
            J$.N(193, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, 0, 22, false)), x, 3));
            if (J$.X1(201, J$.C(8, J$.B(10, '==', J$.M(113, J$.R(97, 'Math', Math, 2), 'abs', 0)(J$.R(105, 'x', x, 1)), J$.R(121, 'x', x, 1), 0)))) {
                throw J$.X1(145, J$.Th(137, J$.T(129, 'R1', 21, false)));
            } else {
                throw J$.X1(169, J$.Th(161, J$.T(153, 'R2', 21, false)));
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
