J$.iids = {"8":[8,5,8,19],"9":[3,1,3,13],"10":[8,5,8,19],"17":[3,1,3,14],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,23],"81":[6,25,6,32],"89":[6,9,6,33],"91":[6,9,6,18],"97":[6,9,6,33],"105":[6,9,6,33],"113":[8,5,8,6],"121":[8,5,8,13],"129":[8,17,8,19],"137":[9,2,9,9],"145":[9,14,9,19],"153":[9,2,9,20],"155":[9,2,9,13],"161":[9,2,9,21],"169":[1,1,10,2],"177":[1,1,10,2],"185":[1,1,10,2],"193":[8,1,10,2],"201":[1,1,10,2],"209":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_len.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_len_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar q = S$.symbol(\"HI\", 'HELLO');\n\nif (q.length == 15) {\n\tconsole.log('YES');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_len_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_len.js');
            J$.N(177, 'S$', S$, 0);
            J$.N(185, 'q', q, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var q = J$.X1(105, J$.W(97, 'q', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "HI", 21, false), J$.T(81, 'HELLO', 21, false)), q, 3));
            if (J$.X1(193, J$.C(8, J$.B(10, '==', J$.G(121, J$.R(113, 'q', q, 1), 'length', 0), J$.T(129, 15, 22, false), 0)))) {
                J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(J$.T(145, 'YES', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
