J$.iids = {"8":[11,6,11,7],"9":[3,1,3,13],"16":[15,6,15,7],"17":[3,1,3,14],"24":[10,5,10,6],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[7,9,7,11],"73":[7,19,7,22],"81":[7,24,7,28],"89":[7,9,7,29],"91":[7,9,7,18],"97":[7,9,7,29],"105":[7,9,7,29],"113":[8,9,8,11],"121":[8,19,8,22],"129":[8,24,8,28],"137":[8,9,8,29],"139":[8,9,8,18],"145":[8,9,8,29],"153":[8,9,8,29],"161":[10,5,10,6],"169":[11,6,11,7],"177":[12,9,12,15],"185":[12,9,12,15],"193":[12,3,12,16],"201":[15,6,15,7],"209":[1,1,16,2],"217":[1,1,16,2],"225":[1,1,16,2],"233":[1,1,16,2],"241":[11,2,13,3],"249":[15,2,15,11],"257":[10,1,16,2],"265":[1,1,16,2],"273":[1,1,16,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/bool/basic.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/bool/basic_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nvar A = S$.symbol('A', true);\nvar B = S$.symbol('B', true);\n\nif (A) {\n\tif (B) {\n\t\tthrow 'Ouch';\n\t}\n} else {\n\tif (B) {}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/blake/artifact/ExpoSE/tests/bool/basic_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/bool/basic.js');
            J$.N(217, 'S$', S$, 0);
            J$.N(225, 'A', A, 0);
            J$.N(233, 'B', B, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var A = J$.X1(105, J$.W(97, 'A', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'A', 21, false), J$.T(81, true, 23, false)), A, 3));
            var B = J$.X1(153, J$.W(145, 'B', J$.M(137, J$.R(113, 'S$', S$, 1), 'symbol', 0)(J$.T(121, 'B', 21, false), J$.T(129, true, 23, false)), B, 3));
            if (J$.X1(257, J$.C(24, J$.R(161, 'A', A, 1)))) {
                if (J$.X1(241, J$.C(8, J$.R(169, 'B', B, 1)))) {
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Ouch', 21, false)));
                }
            } else {
                if (J$.X1(249, J$.C(16, J$.R(201, 'B', B, 1)))) {
                }
            }
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
