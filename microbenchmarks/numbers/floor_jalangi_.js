J$.iids = {"8":[6,5,6,23],"9":[3,10,3,17],"10":[6,5,6,23],"16":[10,5,10,22],"17":[3,18,3,22],"18":[10,5,10,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,25],"73":[4,9,4,26],"75":[4,9,4,18],"81":[4,9,4,26],"89":[4,9,4,26],"97":[6,5,6,9],"105":[6,16,6,17],"113":[6,5,6,18],"115":[6,5,6,15],"121":[6,22,6,23],"129":[7,11,7,22],"137":[7,11,7,22],"145":[7,5,7,23],"153":[10,5,10,9],"161":[10,15,10,16],"169":[10,5,10,17],"171":[10,5,10,14],"177":[10,21,10,22],"185":[11,11,11,22],"193":[11,11,11,22],"201":[11,5,11,23],"209":[1,1,12,2],"217":[1,1,12,2],"225":[1,1,12,2],"233":[6,1,8,2],"241":[10,1,12,2],"249":[1,1,12,2],"257":[1,1,12,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/floor.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/floor_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', 5);\n\nif (Math.floor(x) == 6) {\n    throw 'Reachable';\n}\n\nif (Math.ceil(x) == 9) {\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/blake/artifact/ExpoSE/tests/numbers/floor_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/floor.js');
            J$.N(217, 'S$', S$, 0);
            J$.N(225, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, 5, 22, false)), x, 3));
            if (J$.X1(233, J$.C(8, J$.B(10, '==', J$.M(113, J$.R(97, 'Math', Math, 2), 'floor', 0)(J$.R(105, 'x', x, 1)), J$.T(121, 6, 22, false), 0)))) {
                throw J$.X1(145, J$.Th(137, J$.T(129, 'Reachable', 21, false)));
            }
            if (J$.X1(241, J$.C(16, J$.B(18, '==', J$.M(169, J$.R(153, 'Math', Math, 2), 'ceil', 0)(J$.R(161, 'x', x, 1)), J$.T(177, 9, 22, false), 0)))) {
                throw J$.X1(201, J$.Th(193, J$.T(185, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
