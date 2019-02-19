J$.iids = {"9":[3,10,3,17],"10":[8,11,8,20],"17":[3,18,3,22],"18":[9,11,9,20],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,10,5,12],"57":[5,20,5,24],"65":[5,26,5,31],"73":[5,10,5,32],"75":[5,10,5,19],"81":[5,10,5,32],"89":[5,10,5,32],"97":[6,10,6,12],"105":[6,20,6,24],"113":[6,26,6,31],"121":[6,10,6,32],"123":[6,10,6,19],"129":[6,10,6,32],"137":[6,10,6,32],"145":[8,1,8,3],"153":[8,11,8,13],"161":[8,18,8,20],"169":[8,1,8,21],"171":[8,1,8,10],"177":[8,1,8,22],"185":[9,1,9,3],"193":[9,11,9,13],"201":[9,18,9,20],"209":[9,1,9,21],"211":[9,1,9,10],"217":[9,1,9,22],"225":[1,1,9,22],"233":[1,1,9,22],"241":[1,1,9,22],"249":[1,1,9,22],"257":[1,1,9,22],"265":[1,1,9,22],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/assumes/basic.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/assumes/basic_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar QR = S$.symbol('QR', false);\nvar QK = S$.symbol('QK', false);\n\nS$.assume(QR === QK);\nS$.assert(QR === QK);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/home/blake/artifact/ExpoSE/tests/assumes/basic_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/assumes/basic.js');
            J$.N(233, 'S$', S$, 0);
            J$.N(241, 'QR', QR, 0);
            J$.N(249, 'QK', QK, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var QR = J$.X1(89, J$.W(81, 'QR', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'QR', 21, false), J$.T(65, false, 23, false)), QR, 3));
            var QK = J$.X1(137, J$.W(129, 'QK', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'QK', 21, false), J$.T(113, false, 23, false)), QK, 3));
            J$.X1(177, J$.M(169, J$.R(145, 'S$', S$, 1), 'assume', 0)(J$.B(10, '===', J$.R(153, 'QR', QR, 1), J$.R(161, 'QK', QK, 1), 0)));
            J$.X1(217, J$.M(209, J$.R(185, 'S$', S$, 1), 'assert', 0)(J$.B(18, '===', J$.R(193, 'QR', QR, 1), J$.R(201, 'QK', QK, 1), 0)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
