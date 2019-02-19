J$.iids = {"9":[3,1,3,13],"10":[8,14,8,26],"17":[3,1,3,14],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[7,15,7,17],"73":[7,25,7,29],"81":[7,31,7,32],"89":[7,15,7,33],"91":[7,15,7,24],"97":[7,15,7,33],"105":[7,15,7,33],"113":[8,14,8,21],"121":[8,24,8,26],"129":[8,14,8,26],"137":[8,14,8,26],"145":[1,1,8,27],"153":[1,1,8,27],"161":[1,1,8,27],"169":[1,1,8,27],"177":[1,1,8,27],"185":[1,1,8,27],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/breaker.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/breaker_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nvar loInput = S$.symbol('LO', 0);\nvar result = loInput * 42;\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/home/blake/artifact/ExpoSE/tests/numbers/breaker_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/breaker.js');
            J$.N(153, 'S$', S$, 0);
            J$.N(161, 'loInput', loInput, 0);
            J$.N(169, 'result', result, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var loInput = J$.X1(105, J$.W(97, 'loInput', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'LO', 21, false), J$.T(81, 0, 22, false)), loInput, 3));
            var result = J$.X1(137, J$.W(129, 'result', J$.B(10, '*', J$.R(113, 'loInput', loInput, 1), J$.T(121, 42, 22, false), 0), result, 3));
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
