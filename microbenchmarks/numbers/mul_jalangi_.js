J$.iids = {"8":[8,5,8,18],"9":[3,1,3,13],"10":[8,5,8,12],"17":[3,1,3,14],"18":[8,5,8,18],"25":[5,10,5,17],"26":[9,12,9,19],"33":[5,18,5,22],"34":[9,12,9,25],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,24,6,26],"89":[6,9,6,27],"91":[6,9,6,18],"97":[6,9,6,27],"105":[6,9,6,27],"113":[8,5,8,6],"121":[8,9,8,12],"129":[8,15,8,18],"137":[9,2,9,4],"145":[9,12,9,13],"153":[9,16,9,19],"161":[9,22,9,25],"169":[9,2,9,26],"171":[9,2,9,11],"177":[9,2,9,27],"185":[1,1,10,2],"193":[1,1,10,2],"201":[1,1,10,2],"209":[8,1,10,2],"217":[1,1,10,2],"225":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/mul.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/mul_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', 10);\n\nif (x * 100 > 150) {\n\tS$.assert(x * 100 > 150);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/home/blake/artifact/ExpoSE/tests/numbers/mul_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/mul.js');
            J$.N(193, 'S$', S$, 0);
            J$.N(201, 'x', x, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(105, J$.W(97, 'x', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'X', 21, false), J$.T(81, 10, 22, false)), x, 3));
            if (J$.X1(209, J$.C(8, J$.B(18, '>', J$.B(10, '*', J$.R(113, 'x', x, 1), J$.T(121, 100, 22, false), 0), J$.T(129, 150, 22, false), 0)))) {
                J$.X1(177, J$.M(169, J$.R(137, 'S$', S$, 1), 'assert', 0)(J$.B(34, '>', J$.B(26, '*', J$.R(145, 'x', x, 1), J$.T(153, 100, 22, false), 0), J$.T(161, 150, 22, false), 0)));
            }
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
