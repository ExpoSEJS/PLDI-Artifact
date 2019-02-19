J$.iids = {"8":[10,5,10,21],"9":[4,10,4,17],"10":[10,5,10,11],"16":[13,6,13,12],"17":[4,18,4,22],"18":[10,15,10,21],"24":[10,5,10,21],"25":[4,10,4,23],"26":[13,6,13,12],"33":[4,10,4,23],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,23,5,26],"65":[5,9,5,27],"67":[5,9,5,22],"73":[5,9,5,27],"81":[5,9,5,27],"89":[6,9,6,11],"97":[6,19,6,22],"105":[6,24,6,26],"113":[6,9,6,27],"115":[6,9,6,18],"121":[6,9,6,27],"129":[6,9,6,27],"137":[8,1,8,8],"145":[8,13,8,18],"153":[8,1,8,19],"155":[8,1,8,12],"161":[8,1,8,20],"169":[10,5,10,6],"177":[10,10,10,11],"185":[10,15,10,16],"193":[10,20,10,21],"201":[13,6,13,7],"209":[13,11,13,12],"217":[14,9,14,22],"225":[14,9,14,22],"233":[14,3,14,23],"241":[17,8,17,21],"249":[17,8,17,21],"257":[17,2,17,22],"265":[1,1,18,2],"273":[1,1,18,2],"281":[1,1,18,2],"289":[1,1,18,2],"297":[13,2,15,3],"305":[10,1,18,2],"313":[1,1,18,2],"321":[1,1,18,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/renaming/rename.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/renaming/rename_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test variable renaming scheme\nvar S$ = require('S$');\nvar x = S$.pureSymbol(\"X\");\nvar y = S$.symbol(\"X\", 10);\n\nconsole.log('Wat');\n\nif (x == 5 && x == y) {\n\n} else {\n\tif (x == y) {\n\t\tthrow 'Reachable 1';\n\t}\n\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/home/blake/artifact/ExpoSE/tests/renaming/rename_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/renaming/rename.js');
            J$.N(273, 'S$', S$, 0);
            J$.N(281, 'x', x, 0);
            J$.N(289, 'y', y, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(81, J$.W(73, 'x', J$.M(65, J$.R(49, 'S$', S$, 1), 'pureSymbol', 0)(J$.T(57, "X", 21, false)), x, 3));
            var y = J$.X1(129, J$.W(121, 'y', J$.M(113, J$.R(89, 'S$', S$, 1), 'symbol', 0)(J$.T(97, "X", 21, false), J$.T(105, 10, 22, false)), y, 3));
            J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 'Wat', 21, false)));
            if (J$.X1(305, J$.C(24, J$.C(8, J$.B(10, '==', J$.R(169, 'x', x, 1), J$.T(177, 5, 22, false), 0)) ? J$.B(18, '==', J$.R(185, 'x', x, 1), J$.R(193, 'y', y, 1), 0) : J$._()))) {
            } else {
                if (J$.X1(297, J$.C(16, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.R(209, 'y', y, 1), 0)))) {
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable 1', 21, false)));
                }
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
