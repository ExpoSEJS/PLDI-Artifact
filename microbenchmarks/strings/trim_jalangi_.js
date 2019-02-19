J$.iids = {"8":[8,5,8,24],"9":[3,10,3,17],"10":[6,11,6,25],"17":[3,18,3,22],"18":[8,5,8,24],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,1,6,3],"105":[6,11,6,12],"113":[6,11,6,19],"121":[6,23,6,25],"129":[6,1,6,26],"131":[6,1,6,10],"137":[6,1,6,27],"145":[8,5,8,6],"153":[8,5,8,13],"155":[8,5,8,11],"161":[8,17,8,24],"169":[9,11,9,22],"177":[9,11,9,22],"185":[9,5,9,23],"193":[1,1,10,2],"201":[1,1,10,2],"209":[1,1,10,2],"217":[8,1,10,2],"225":[1,1,10,2],"233":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/trim.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/trim_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nS$.assume(x.length == 15);\n\nif (x.trim() == 'Hello') {\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/home/blake/artifact/ExpoSE/tests/strings/trim_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/trim.js');
            J$.N(201, 'S$', S$, 0);
            J$.N(209, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '==', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 15, 22, false), 0)));
            if (J$.X1(217, J$.C(8, J$.B(18, '==', J$.M(153, J$.R(145, 'x', x, 1), 'trim', 0)(), J$.T(161, 'Hello', 21, false), 0)))) {
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
