J$.iids = {"8":[8,9,8,28],"9":[3,10,3,17],"10":[6,26,6,28],"16":[6,5,6,28],"17":[3,18,3,22],"18":[6,5,6,28],"25":[3,10,3,23],"26":[8,9,8,28],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,25,4,29],"73":[4,24,4,30],"81":[4,9,4,31],"83":[4,9,4,18],"89":[4,9,4,31],"97":[4,9,4,31],"105":[6,5,6,6],"113":[6,15,6,21],"121":[6,5,6,22],"123":[6,5,6,14],"129":[6,27,6,28],"137":[8,10,8,11],"145":[8,21,8,27],"153":[8,10,8,28],"155":[8,10,8,20],"161":[9,15,9,28],"169":[9,15,9,28],"177":[9,9,9,29],"185":[12,11,12,22],"193":[12,11,12,22],"201":[12,5,12,23],"209":[1,1,13,2],"217":[1,1,13,2],"225":[1,1,13,2],"233":[8,5,10,6],"241":[6,1,13,2],"249":[1,1,13,2],"257":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/includes_index_of.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/includes_index_of_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', ['Hi']);\n\nif (x.indexOf('What') != -1) {\n\n    if (!x.includes('What')) {\n        throw 'Unreachable';\n    }\n\n    throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/blake/artifact/ExpoSE/tests/arrays/includes_index_of_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/includes_index_of.js');
            J$.N(217, 'S$', S$, 0);
            J$.N(225, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 'Hi', 21, false)], 10, false)), x, 3));
            if (J$.X1(241, J$.C(16, J$.B(18, '!=', J$.M(121, J$.R(105, 'x', x, 1), 'indexOf', 0)(J$.T(113, 'What', 21, false)), J$.U(10, '-', J$.T(129, 1, 22, false)), 0)))) {
                if (J$.X1(233, J$.C(8, J$.U(26, '!', J$.M(153, J$.R(137, 'x', x, 1), 'includes', 0)(J$.T(145, 'What', 21, false)))))) {
                    throw J$.X1(177, J$.Th(169, J$.T(161, 'Unreachable', 21, false)));
                }
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
