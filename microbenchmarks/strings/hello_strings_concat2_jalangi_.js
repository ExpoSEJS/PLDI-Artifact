J$.iids = {"9":[3,1,3,13],"10":[7,9,7,22],"17":[3,1,3,14],"18":[9,11,9,25],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,25],"81":[6,27,6,33],"89":[6,9,6,34],"91":[6,9,6,18],"97":[6,9,6,34],"105":[6,9,6,34],"113":[7,9,7,10],"121":[7,13,7,22],"129":[7,9,7,22],"137":[7,9,7,22],"145":[9,1,9,3],"153":[9,11,9,12],"161":[9,11,9,19],"169":[9,24,9,25],"177":[9,1,9,26],"179":[9,1,9,10],"185":[9,1,9,27],"193":[1,1,9,27],"201":[1,1,9,27],"209":[1,1,9,27],"217":[1,1,9,27],"225":[1,1,9,27],"233":[1,1,9,27],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat2.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar a = S$.symbol(\"DOGS\", 'HELL');\nvar q = a + \"DOGS666\";\n\nS$.assert(q.length !== 6);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat2_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat2.js');
            J$.N(201, 'S$', S$, 0);
            J$.N(209, 'a', a, 0);
            J$.N(217, 'q', q, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var a = J$.X1(105, J$.W(97, 'a', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "DOGS", 21, false), J$.T(81, 'HELL', 21, false)), a, 3));
            var q = J$.X1(137, J$.W(129, 'q', J$.B(10, '+', J$.R(113, 'a', a, 1), J$.T(121, "DOGS666", 21, false), 0), q, 3));
            J$.X1(185, J$.M(177, J$.R(145, 'S$', S$, 1), 'assert', 0)(J$.B(18, '!==', J$.G(161, J$.R(153, 'q', q, 1), 'length', 0), J$.T(169, 6, 22, false), 0)));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
