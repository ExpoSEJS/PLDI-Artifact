J$.iids = {"8":[6,5,6,19],"9":[3,10,3,17],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,25,4,26],"73":[4,24,4,27],"81":[4,9,4,28],"83":[4,9,4,18],"89":[4,9,4,28],"97":[4,9,4,28],"105":[6,5,6,6],"113":[6,16,6,18],"121":[6,5,6,19],"123":[6,5,6,15],"129":[7,11,7,24],"137":[7,11,7,24],"145":[7,5,7,25],"153":[1,1,8,2],"161":[1,1,8,2],"169":[1,1,8,2],"177":[6,1,8,2],"185":[1,1,8,2],"193":[1,1,8,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/includes.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/includes_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', [1]);\n\nif (x.includes(54)) {\n    throw 'Reachable 1';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/home/blake/artifact/ExpoSE/tests/arrays/includes_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/includes.js');
            J$.N(161, 'S$', S$, 0);
            J$.N(169, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 1, 22, false)], 10, false)), x, 3));
            if (J$.X1(177, J$.C(8, J$.M(121, J$.R(105, 'x', x, 1), 'includes', 0)(J$.T(113, 54, 22, false))))) {
                throw J$.X1(145, J$.Th(137, J$.T(129, 'Reachable 1', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT