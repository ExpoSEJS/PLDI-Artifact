J$.iids = {"8":[12,6,12,12],"9":[4,10,4,17],"10":[10,5,10,11],"16":[10,5,10,11],"17":[4,18,4,22],"18":[12,6,12,12],"25":[4,10,4,23],"33":[4,10,4,23],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,25],"73":[5,9,5,26],"75":[5,9,5,18],"81":[5,9,5,26],"89":[5,9,5,26],"97":[6,9,6,11],"105":[6,19,6,22],"113":[6,24,6,26],"121":[6,9,6,27],"123":[6,9,6,18],"129":[6,9,6,27],"137":[6,9,6,27],"145":[8,1,8,8],"153":[8,13,8,18],"161":[8,1,8,19],"163":[8,1,8,12],"169":[8,1,8,20],"177":[10,5,10,6],"185":[10,10,10,11],"193":[12,6,12,7],"201":[12,11,12,12],"209":[13,9,13,22],"217":[13,9,13,22],"225":[13,3,13,23],"233":[16,8,16,21],"241":[16,8,16,21],"249":[16,2,16,22],"257":[1,1,17,2],"265":[1,1,17,2],"273":[1,1,17,2],"281":[1,1,17,2],"289":[12,2,14,3],"297":[10,1,17,2],"305":[1,1,17,2],"313":[1,1,17,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/renaming/rename_simple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/renaming/rename_simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Test variable renaming scheme\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", 0);\nvar y = S$.symbol(\"X\", 10);\n\nconsole.log('Wat');\n\nif (x == 5) {\n} else {\n\tif (x == y) {\n\t\tthrow 'Reachable 1';\n\t}\n\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(257, '/home/blake/artifact/ExpoSE/tests/renaming/rename_simple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/renaming/rename_simple.js');
            J$.N(265, 'S$', S$, 0);
            J$.N(273, 'x', x, 0);
            J$.N(281, 'y', y, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, 0, 22, false)), x, 3));
            var y = J$.X1(137, J$.W(129, 'y', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, "X", 21, false), J$.T(113, 10, 22, false)), y, 3));
            J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 'Wat', 21, false)));
            if (J$.X1(297, J$.C(16, J$.B(10, '==', J$.R(177, 'x', x, 1), J$.T(185, 5, 22, false), 0)))) {
            } else {
                if (J$.X1(289, J$.C(8, J$.B(18, '==', J$.R(193, 'x', x, 1), J$.R(201, 'y', y, 1), 0)))) {
                    throw J$.X1(225, J$.Th(217, J$.T(209, 'Reachable 1', 21, false)));
                }
                throw J$.X1(249, J$.Th(241, J$.T(233, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
