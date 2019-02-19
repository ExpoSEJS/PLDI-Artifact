J$.iids = {"8":[8,5,8,20],"9":[3,1,3,13],"10":[8,5,8,20],"16":[14,5,14,17],"17":[3,1,3,14],"18":[14,5,14,17],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,24,6,31],"89":[6,9,6,32],"91":[6,9,6,18],"97":[6,9,6,32],"105":[6,9,6,32],"113":[8,5,8,6],"121":[8,11,8,20],"129":[9,2,9,9],"137":[9,14,9,20],"145":[9,2,9,21],"147":[9,2,9,13],"153":[9,2,9,22],"161":[11,2,11,9],"169":[11,14,11,20],"177":[11,2,11,21],"179":[11,2,11,13],"185":[11,2,11,22],"193":[14,5,14,6],"201":[14,11,14,17],"209":[15,2,15,9],"217":[15,14,15,29],"225":[15,2,15,30],"227":[15,2,15,13],"233":[15,2,15,31],"241":[17,2,17,9],"249":[17,14,17,29],"257":[17,2,17,30],"259":[17,2,17,13],"265":[17,2,17,31],"273":[1,1,18,2],"281":[1,1,18,2],"289":[1,1,18,2],"297":[8,1,12,2],"305":[14,1,18,2],"313":[1,1,18,2],"321":[1,1,18,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings2.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar a = S$.symbol(\"A\", 'hello');\n\nif (a === \"goodbye\") {\n\tconsole.log('PASS');\n} else {\n\tconsole.log('FAIL');\n}\n\nif (a === \"derp\") {\n\tconsole.log('AND THEN SOME');\n} else {\n\tconsole.log('NOT THEN SOME');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(273, '/home/blake/artifact/ExpoSE/tests/strings/hello_strings2_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/hello_strings2.js');
            J$.N(281, 'S$', S$, 0);
            J$.N(289, 'a', a, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var a = J$.X1(105, J$.W(97, 'a', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "A", 21, false), J$.T(81, 'hello', 21, false)), a, 3));
            if (J$.X1(297, J$.C(8, J$.B(10, '===', J$.R(113, 'a', a, 1), J$.T(121, "goodbye", 21, false), 0)))) {
                J$.X1(153, J$.M(145, J$.R(129, 'console', console, 2), 'log', 0)(J$.T(137, 'PASS', 21, false)));
            } else {
                J$.X1(185, J$.M(177, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, 'FAIL', 21, false)));
            }
            if (J$.X1(305, J$.C(16, J$.B(18, '===', J$.R(193, 'a', a, 1), J$.T(201, "derp", 21, false), 0)))) {
                J$.X1(233, J$.M(225, J$.R(209, 'console', console, 2), 'log', 0)(J$.T(217, 'AND THEN SOME', 21, false)));
            } else {
                J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, 'NOT THEN SOME', 21, false)));
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
