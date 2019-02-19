J$.iids = {"8":[13,5,13,7],"9":[3,1,3,13],"10":[13,5,13,7],"16":[17,5,17,6],"17":[3,1,3,14],"18":[14,12,14,14],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[7,1,7,8],"73":[7,13,7,20],"81":[7,1,7,21],"83":[7,1,7,12],"89":[7,1,7,22],"97":[9,9,9,11],"105":[9,19,9,22],"113":[9,24,9,28],"121":[9,9,9,29],"123":[9,9,9,18],"129":[9,9,9,29],"137":[9,9,9,29],"145":[11,1,11,8],"153":[11,13,11,21],"161":[11,1,11,22],"163":[11,1,11,12],"169":[11,1,11,23],"177":[13,6,13,7],"185":[14,2,14,4],"193":[14,13,14,14],"201":[14,2,14,15],"203":[14,2,14,11],"209":[14,2,14,16],"217":[17,5,17,6],"225":[18,2,18,4],"233":[18,12,18,13],"241":[18,2,18,14],"243":[18,2,18,11],"249":[18,2,18,15],"257":[21,1,21,8],"265":[21,13,21,28],"273":[21,1,21,29],"275":[21,1,21,12],"281":[21,1,21,30],"289":[1,1,21,30],"297":[1,1,21,30],"305":[1,1,21,30],"313":[13,1,15,2],"321":[17,1,19,2],"329":[1,1,21,30],"337":[1,1,21,30],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/bool/hello.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/bool/hello_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nconsole.log('Start');\n\nvar q = S$.symbol('Q', true);\n\nconsole.log('Create');\n\nif (!q) {\n\tS$.assert(!q);\n}\n\nif (q) {\n\tS$.assert(q);\n}\n\nconsole.log('Path Finished');\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/ExpoSE/tests/bool/hello_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/bool/hello.js');
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'q', q, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 'Start', 21, false)));
            var q = J$.X1(137, J$.W(129, 'q', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'Q', 21, false), J$.T(113, true, 23, false)), q, 3));
            J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.T(153, 'Create', 21, false)));
            if (J$.X1(313, J$.C(8, J$.U(10, '!', J$.R(177, 'q', q, 1))))) {
                J$.X1(209, J$.M(201, J$.R(185, 'S$', S$, 1), 'assert', 0)(J$.U(18, '!', J$.R(193, 'q', q, 1))));
            }
            if (J$.X1(321, J$.C(16, J$.R(217, 'q', q, 1)))) {
                J$.X1(249, J$.M(241, J$.R(225, 'S$', S$, 1), 'assert', 0)(J$.R(233, 'q', q, 1)));
            }
            J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, 'Path Finished', 21, false)));
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
