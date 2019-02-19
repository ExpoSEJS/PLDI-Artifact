J$.iids = {"9":[3,1,3,13],"10":[9,11,9,16],"17":[3,1,3,14],"25":[6,10,6,17],"33":[6,18,6,22],"41":[6,10,6,23],"49":[6,10,6,23],"57":[6,10,6,23],"65":[8,9,8,11],"73":[8,19,8,22],"81":[8,24,8,25],"89":[8,9,8,26],"91":[8,9,8,18],"97":[8,9,8,26],"105":[8,9,8,26],"113":[9,1,9,3],"121":[9,11,9,12],"129":[9,15,9,16],"137":[9,1,9,17],"139":[9,1,9,10],"145":[9,1,9,18],"153":[1,1,9,18],"161":[1,1,9,18],"169":[1,1,9,18],"177":[1,1,9,18],"185":[1,1,9,18],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/assert/assert.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/assert/assert_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\n\nvar S$ = require('S$');\n\nvar x = S$.symbol('X', 0);\nS$.assume(x < 4);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/home/blake/artifact/ExpoSE/tests/assert/assert_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/assert/assert.js');
            J$.N(161, 'S$', S$, 0);
            J$.N(169, 'x', x, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(105, J$.W(97, 'x', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'X', 21, false), J$.T(81, 0, 22, false)), x, 3));
            J$.X1(145, J$.M(137, J$.R(113, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.R(121, 'x', x, 1), J$.T(129, 4, 22, false), 0)));
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
