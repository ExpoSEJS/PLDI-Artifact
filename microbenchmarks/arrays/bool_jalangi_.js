J$.iids = {"8":[8,9,8,13],"9":[3,10,3,17],"10":[17,9,17,14],"16":[13,9,13,13],"17":[3,18,3,22],"24":[17,9,17,14],"25":[3,10,3,23],"32":[6,5,6,21],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,25,4,30],"73":[4,24,4,31],"81":[4,9,4,32],"83":[4,9,4,18],"89":[4,9,4,32],"97":[4,9,4,32],"105":[6,5,6,6],"113":[6,16,6,20],"121":[6,5,6,21],"123":[6,5,6,15],"129":[8,9,8,10],"137":[8,11,8,12],"145":[8,9,8,13],"153":[9,15,9,26],"161":[9,15,9,26],"169":[9,9,9,27],"177":[13,9,13,10],"185":[13,11,13,12],"193":[13,9,13,13],"201":[14,15,14,28],"209":[14,15,14,28],"217":[14,9,14,29],"225":[17,10,17,11],"233":[17,12,17,13],"241":[17,10,17,14],"249":[18,15,18,26],"257":[18,15,18,26],"265":[18,9,18,27],"273":[1,1,20,2],"281":[1,1,20,2],"289":[1,1,20,2],"297":[8,5,10,6],"305":[13,5,15,6],"313":[17,5,19,6],"321":[6,1,20,2],"329":[1,1,20,2],"337":[1,1,20,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/bool.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/bool_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol('X', [false]);\n\nif (x.includes(true)) {\n\n    if (x[4]) {\n        throw 'Reachable';\n    }\n\n} else {\n    if (x[4]) {\n        throw 'Unreachable';\n    }\n\n    if (!x[4]) {\n        throw 'Reachable';\n    }\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(273, '/home/blake/artifact/ExpoSE/tests/arrays/bool_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/bool.js');
            J$.N(281, 'S$', S$, 0);
            J$.N(289, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, false, 23, false)], 10, false)), x, 3));
            if (J$.X1(321, J$.C(32, J$.M(121, J$.R(105, 'x', x, 1), 'includes', 0)(J$.T(113, true, 23, false))))) {
                if (J$.X1(297, J$.C(8, J$.G(145, J$.R(129, 'x', x, 1), J$.T(137, 4, 22, false), 4)))) {
                    throw J$.X1(169, J$.Th(161, J$.T(153, 'Reachable', 21, false)));
                }
            } else {
                if (J$.X1(305, J$.C(16, J$.G(193, J$.R(177, 'x', x, 1), J$.T(185, 4, 22, false), 4)))) {
                    throw J$.X1(217, J$.Th(209, J$.T(201, 'Unreachable', 21, false)));
                }
                if (J$.X1(313, J$.C(24, J$.U(10, '!', J$.G(241, J$.R(225, 'x', x, 1), J$.T(233, 4, 22, false), 4))))) {
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Reachable', 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
