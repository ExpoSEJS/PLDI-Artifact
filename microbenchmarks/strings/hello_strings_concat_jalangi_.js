J$.iids = {"8":[9,5,9,18],"9":[3,1,3,13],"10":[7,9,7,19],"17":[3,1,3,14],"18":[9,5,9,18],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,23],"81":[6,25,6,32],"89":[6,9,6,33],"91":[6,9,6,18],"97":[6,9,6,33],"105":[6,9,6,33],"113":[7,9,7,10],"121":[7,13,7,19],"129":[7,9,7,19],"137":[7,9,7,19],"145":[9,5,9,6],"153":[9,5,9,13],"161":[9,17,9,18],"169":[10,2,10,9],"177":[10,14,10,27],"185":[10,2,10,28],"187":[10,2,10,13],"193":[10,2,10,29],"201":[12,2,12,9],"209":[12,14,12,29],"217":[12,2,12,30],"219":[12,2,12,13],"225":[12,2,12,31],"233":[1,1,13,2],"241":[1,1,13,2],"249":[1,1,13,2],"257":[1,1,13,2],"265":[9,1,13,2],"273":[1,1,13,2],"281":[1,1,13,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar a = S$.symbol(\"HI\", 'hello');\nvar q = a + \"DOGS\";\n\nif (q.length == 6) {\n\tconsole.log('Hello World');\n} else {\n\tconsole.log('Goodbye world');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(233, '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_concat.js');
            J$.N(241, 'S$', S$, 0);
            J$.N(249, 'a', a, 0);
            J$.N(257, 'q', q, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var a = J$.X1(105, J$.W(97, 'a', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "HI", 21, false), J$.T(81, 'hello', 21, false)), a, 3));
            var q = J$.X1(137, J$.W(129, 'q', J$.B(10, '+', J$.R(113, 'a', a, 1), J$.T(121, "DOGS", 21, false), 0), q, 3));
            if (J$.X1(265, J$.C(8, J$.B(18, '==', J$.G(153, J$.R(145, 'q', q, 1), 'length', 0), J$.T(161, 6, 22, false), 0)))) {
                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, 'Hello World', 21, false)));
            } else {
                J$.X1(225, J$.M(217, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, 'Goodbye world', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
