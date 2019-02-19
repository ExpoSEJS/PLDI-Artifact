J$.iids = {"8":[9,5,9,12],"9":[3,1,3,13],"10":[9,5,9,12],"17":[3,1,3,14],"18":[11,12,11,18],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,26],"81":[6,28,6,35],"89":[6,9,6,36],"91":[6,9,6,18],"97":[6,9,6,36],"105":[6,9,6,36],"113":[7,9,7,11],"121":[7,19,7,23],"129":[7,25,7,31],"137":[7,9,7,32],"139":[7,9,7,18],"145":[7,9,7,32],"153":[7,9,7,32],"161":[9,5,9,6],"169":[9,11,9,12],"177":[10,2,10,9],"185":[10,14,10,19],"193":[10,2,10,20],"195":[10,2,10,13],"201":[10,2,10,21],"209":[11,2,11,4],"217":[11,12,11,13],"225":[11,17,11,18],"233":[11,2,11,19],"235":[11,2,11,11],"241":[11,2,11,20],"249":[13,2,13,9],"257":[13,14,13,20],"265":[13,2,13,21],"267":[13,2,13,13],"273":[13,2,13,22],"281":[1,1,14,2],"289":[1,1,14,2],"297":[1,1,14,2],"305":[1,1,14,2],"313":[9,1,14,2],"321":[1,1,14,2],"329":[1,1,14,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/hello_strings_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar a = S$.symbol(\"HELLO\", 'HELLO');\nvar b = S$.symbol(\"NO\", 'NOPE');\n\nif (a === b) {\n\tconsole.log('Yes');\n\tS$.assert(a == b);\n} else {\n\tconsole.log('Nope');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/home/blake/artifact/ExpoSE/tests/strings/hello_strings_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/hello_strings.js');
            J$.N(289, 'S$', S$, 0);
            J$.N(297, 'a', a, 0);
            J$.N(305, 'b', b, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var a = J$.X1(105, J$.W(97, 'a', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "HELLO", 21, false), J$.T(81, 'HELLO', 21, false)), a, 3));
            var b = J$.X1(153, J$.W(145, 'b', J$.M(137, J$.R(113, 'S$', S$, 1), 'symbol', 0)(J$.T(121, "NO", 21, false), J$.T(129, 'NOPE', 21, false)), b, 3));
            if (J$.X1(313, J$.C(8, J$.B(10, '===', J$.R(161, 'a', a, 1), J$.R(169, 'b', b, 1), 0)))) {
                J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 'Yes', 21, false)));
                J$.X1(241, J$.M(233, J$.R(209, 'S$', S$, 1), 'assert', 0)(J$.B(18, '==', J$.R(217, 'a', a, 1), J$.R(225, 'b', b, 1), 0)));
            } else {
                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 'Nope', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
