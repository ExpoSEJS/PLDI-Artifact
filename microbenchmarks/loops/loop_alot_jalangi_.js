J$.iids = {"8":[9,18,9,23],"9":[3,10,3,17],"10":[6,5,6,11],"16":[6,5,6,11],"17":[3,18,3,22],"18":[9,18,9,23],"25":[3,10,3,23],"26":[9,25,9,28],"33":[3,10,3,23],"41":[3,10,3,23],"42":[9,25,9,28],"49":[4,9,4,11],"50":[10,3,10,6],"57":[4,19,4,22],"65":[4,24,4,26],"66":[10,3,10,6],"73":[4,9,4,27],"74":[13,14,13,25],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,6],"105":[6,9,6,11],"113":[7,10,7,11],"121":[7,10,7,11],"129":[7,10,7,11],"137":[9,15,9,16],"145":[9,15,9,16],"153":[9,15,9,16],"161":[9,18,9,19],"169":[9,22,9,23],"185":[9,25,9,26],"193":[9,25,9,28],"217":[10,3,10,4],"225":[10,3,10,6],"241":[10,3,10,7],"249":[13,2,13,9],"257":[13,14,13,21],"265":[13,24,13,25],"273":[13,2,13,26],"275":[13,2,13,13],"281":[13,2,13,27],"289":[1,1,14,2],"297":[1,1,14,2],"305":[1,1,14,2],"313":[1,1,14,2],"321":[1,1,14,2],"329":[9,2,11,3],"337":[9,2,11,3],"345":[6,1,14,2],"353":[1,1,14,2],"361":[1,1,14,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/loops/loop_alot.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/loops/loop_alot_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar q = S$.symbol('Q', 10);\n\nif (q < 10) {\n\tvar j = 0;\n\n\tfor (var i = 0; i < q; i++) {\n\t\tj++;\n\t}\n\n\tconsole.log('Done ' + j);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/ExpoSE/tests/loops/loop_alot_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/loops/loop_alot.js');
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'q', q, 0);
            J$.N(313, 'j', j, 0);
            J$.N(321, 'i', i, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var q = J$.X1(89, J$.W(81, 'q', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'Q', 21, false), J$.T(65, 10, 22, false)), q, 3));
            if (J$.X1(345, J$.C(16, J$.B(10, '<', J$.R(97, 'q', q, 1), J$.T(105, 10, 22, false), 0)))) {
                var j = J$.X1(129, J$.W(121, 'j', J$.T(113, 0, 22, false), j, 3));
                for (var i = J$.X1(153, J$.W(145, 'i', J$.T(137, 0, 22, false), i, 3)); J$.X1(329, J$.C(8, J$.B(18, '<', J$.R(161, 'i', i, 1), J$.R(169, 'q', q, 1), 0))); J$.X1(337, J$.B(42, '-', i = J$.W(193, 'i', J$.B(34, '+', J$.U(26, '+', J$.R(185, 'i', i, 1)), J$.T(177, 1, 22, false), 0), i, 2), J$.T(201, 1, 22, false), 0))) {
                    J$.X1(241, J$.B(66, '-', j = J$.W(225, 'j', J$.B(58, '+', J$.U(50, '+', J$.R(217, 'j', j, 1)), J$.T(209, 1, 22, false), 0), j, 2), J$.T(233, 1, 22, false), 0));
                }
                J$.X1(281, J$.M(273, J$.R(249, 'console', console, 2), 'log', 0)(J$.B(74, '+', J$.T(257, 'Done ', 21, false), J$.R(265, 'j', j, 1), 0)));
            }
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
