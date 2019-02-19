J$.iids = {"8":[11,9,11,19],"9":[3,10,3,17],"10":[8,5,8,18],"16":[8,5,8,18],"17":[3,18,3,22],"18":[11,9,11,19],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,25,5,26],"73":[5,24,5,27],"81":[5,9,5,28],"83":[5,9,5,18],"89":[5,9,5,28],"97":[5,9,5,28],"105":[6,10,6,12],"113":[6,20,6,23],"121":[6,25,6,26],"129":[6,10,6,27],"131":[6,10,6,19],"137":[6,10,6,27],"145":[6,10,6,27],"153":[8,5,8,6],"161":[8,5,8,13],"169":[8,17,8,18],"177":[9,5,9,6],"185":[9,7,9,8],"193":[9,12,9,14],"201":[9,5,9,14],"209":[9,5,9,15],"217":[11,9,11,10],"225":[11,11,11,12],"233":[11,9,11,13],"241":[11,17,11,19],"249":[12,15,12,28],"257":[12,15,12,28],"265":[12,9,12,29],"273":[15,11,15,20],"281":[15,11,15,20],"289":[15,5,15,21],"297":[1,1,16,2],"305":[1,1,16,2],"313":[1,1,16,2],"321":[1,1,16,2],"329":[11,5,13,6],"337":[8,1,16,2],"345":[1,1,16,2],"353":[1,1,16,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/update.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/update_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar q = S$.symbol('X', [1]);\nvar qq = S$.symbol('X', 5);\n\nif (q.length == 5) {\n    q[3] = qq;\n\n    if (q[3] != qq) {\n        throw 'Unreachable';\n    }\n\n    throw 'Reached';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/home/blake/artifact/ExpoSE/tests/arrays/update_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/update.js');
            J$.N(305, 'S$', S$, 0);
            J$.N(313, 'q', q, 0);
            J$.N(321, 'qq', qq, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var q = J$.X1(97, J$.W(89, 'q', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 1, 22, false)], 10, false)), q, 3));
            var qq = J$.X1(145, J$.W(137, 'qq', J$.M(129, J$.R(105, 'S$', S$, 1), 'symbol', 0)(J$.T(113, 'X', 21, false), J$.T(121, 5, 22, false)), qq, 3));
            if (J$.X1(337, J$.C(16, J$.B(10, '==', J$.G(161, J$.R(153, 'q', q, 1), 'length', 0), J$.T(169, 5, 22, false), 0)))) {
                J$.X1(209, J$.P(201, J$.R(177, 'q', q, 1), J$.T(185, 3, 22, false), J$.R(193, 'qq', qq, 1), 2));
                if (J$.X1(329, J$.C(8, J$.B(18, '!=', J$.G(233, J$.R(217, 'q', q, 1), J$.T(225, 3, 22, false), 4), J$.R(241, 'qq', qq, 1), 0)))) {
                    throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable', 21, false)));
                }
                throw J$.X1(289, J$.Th(281, J$.T(273, 'Reached', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
