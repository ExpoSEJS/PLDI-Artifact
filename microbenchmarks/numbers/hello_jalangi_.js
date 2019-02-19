J$.iids = {"8":[10,5,10,10],"9":[3,1,3,13],"10":[10,5,10,10],"17":[3,1,3,14],"18":[11,12,11,17],"25":[5,10,5,17],"26":[13,12,13,18],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,24,6,25],"89":[6,9,6,26],"91":[6,9,6,18],"97":[6,9,6,26],"105":[6,9,6,26],"113":[8,1,8,8],"121":[8,13,8,34],"129":[8,36,8,37],"137":[8,1,8,38],"139":[8,1,8,12],"145":[8,1,8,39],"153":[10,5,10,6],"161":[10,9,10,10],"169":[11,2,11,4],"177":[11,12,11,13],"185":[11,16,11,17],"193":[11,2,11,18],"195":[11,2,11,11],"201":[11,2,11,19],"209":[13,2,13,4],"217":[13,12,13,13],"225":[13,17,13,18],"233":[13,2,13,19],"235":[13,2,13,11],"241":[13,2,13,20],"249":[1,1,14,2],"257":[1,1,14,2],"265":[1,1,14,2],"273":[10,1,14,2],"281":[1,1,14,2],"289":[1,1,14,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/hello.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/hello_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar x = S$.symbol('A', 5);\n\nconsole.log(\"x is initialized to\", x);\n\nif (x > 0) {\n\tS$.assert(x > 0);\n} else {\n\tS$.assert(x <= 0);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/home/blake/artifact/ExpoSE/tests/numbers/hello_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/hello.js');
            J$.N(257, 'S$', S$, 0);
            J$.N(265, 'x', x, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(105, J$.W(97, 'x', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, 'A', 21, false), J$.T(81, 5, 22, false)), x, 3));
            J$.X1(145, J$.M(137, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, "x is initialized to", 21, false), J$.R(129, 'x', x, 1)));
            if (J$.X1(273, J$.C(8, J$.B(10, '>', J$.R(153, 'x', x, 1), J$.T(161, 0, 22, false), 0)))) {
                J$.X1(201, J$.M(193, J$.R(169, 'S$', S$, 1), 'assert', 0)(J$.B(18, '>', J$.R(177, 'x', x, 1), J$.T(185, 0, 22, false), 0)));
            } else {
                J$.X1(241, J$.M(233, J$.R(209, 'S$', S$, 1), 'assert', 0)(J$.B(26, '<=', J$.R(217, 'x', x, 1), J$.T(225, 0, 22, false), 0)));
            }
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
