J$.iids = {"9":[3,10,3,17],"10":[6,11,6,21],"17":[3,18,3,22],"18":[7,11,7,21],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,29],"73":[5,9,5,30],"75":[5,9,5,18],"81":[5,9,5,30],"89":[5,9,5,30],"97":[6,1,6,3],"105":[6,11,6,12],"113":[6,17,6,21],"121":[6,1,6,22],"123":[6,1,6,10],"129":[6,1,6,23],"137":[7,1,7,3],"145":[7,11,7,12],"153":[7,17,7,21],"161":[7,1,7,22],"163":[7,1,7,10],"169":[7,1,7,23],"177":[1,1,7,23],"185":[1,1,7,23],"193":[1,1,7,23],"201":[1,1,7,23],"209":[1,1,7,23],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/assumes/wrapped_assume.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/assumes/wrapped_assume_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar x = S$.symbol('X', false);\nS$.assume(x === true);\nS$.assert(x === true);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/home/blake/artifact/ExpoSE/tests/assumes/wrapped_assume_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/assumes/wrapped_assume.js');
            J$.N(185, 'S$', S$, 0);
            J$.N(193, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, false, 23, false)), x, 3));
            J$.X1(129, J$.M(121, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '===', J$.R(105, 'x', x, 1), J$.T(113, true, 23, false), 0)));
            J$.X1(169, J$.M(161, J$.R(137, 'S$', S$, 1), 'assert', 0)(J$.B(18, '===', J$.R(145, 'x', x, 1), J$.T(153, true, 23, false), 0)));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
