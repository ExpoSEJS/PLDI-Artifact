J$.iids = {"8":[6,5,6,12],"9":[3,10,3,17],"10":[6,5,6,12],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,6],"105":[6,10,6,12],"113":[7,5,7,12],"121":[7,17,7,22],"129":[7,5,7,23],"131":[7,5,7,16],"137":[7,5,7,24],"145":[1,1,8,2],"153":[1,1,8,2],"161":[1,1,8,2],"169":[6,1,8,2],"177":[1,1,8,2],"185":[1,1,8,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/ten.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/ten_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', 10);\n\nif (x == 10) {\n    console.log('Ten');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/home/blake/artifact/ExpoSE/tests/numbers/ten_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/ten.js');
            J$.N(153, 'S$', S$, 0);
            J$.N(161, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, 10, 22, false)), x, 3));
            if (J$.X1(169, J$.C(8, J$.B(10, '==', J$.R(97, 'x', x, 1), J$.T(105, 10, 22, false), 0)))) {
                J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 'Ten', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
