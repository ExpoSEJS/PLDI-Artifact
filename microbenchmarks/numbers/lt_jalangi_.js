J$.iids = {"8":[9,6,9,12],"9":[3,1,3,13],"10":[8,5,8,12],"16":[8,5,8,12],"17":[3,1,3,14],"18":[9,6,9,12],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,24,6,26],"89":[6,9,6,27],"91":[6,9,6,18],"97":[6,9,6,27],"105":[6,9,6,27],"113":[8,5,8,6],"121":[8,9,8,12],"129":[9,6,9,7],"137":[9,10,9,12],"145":[10,3,10,10],"153":[10,15,10,20],"161":[10,3,10,21],"163":[10,3,10,14],"169":[10,3,10,22],"177":[1,1,12,2],"185":[1,1,12,2],"193":[1,1,12,2],"201":[9,2,11,3],"209":[8,1,12,2],"217":[1,1,12,2],"225":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/lt.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/lt_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', 10);\n\nif (x < 150) {\n\tif (x > 75) {\n\t\tconsole.log('Bye');\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/home/blake/artifact/ExpoSE/tests/numbers/lt_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/lt.js');
            J$.N(185, 'S$', S$, 0);
            J$.N(193, 'x', x, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(105, J$.W(97, 'x', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'X', 21, false), J$.T(81, 10, 22, false)), x, 3));
            if (J$.X1(209, J$.C(16, J$.B(10, '<', J$.R(113, 'x', x, 1), J$.T(121, 150, 22, false), 0)))) {
                if (J$.X1(201, J$.C(8, J$.B(18, '>', J$.R(129, 'x', x, 1), J$.T(137, 75, 22, false), 0)))) {
                    J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 'Bye', 21, false)));
                }
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
