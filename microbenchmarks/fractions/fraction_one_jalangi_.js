J$.iids = {"8":[14,5,14,19],"9":[3,1,3,13],"10":[14,5,14,10],"16":[14,5,14,19],"17":[3,1,3,14],"18":[14,14,14,19],"25":[5,10,5,17],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[7,1,7,8],"73":[7,13,7,28],"81":[7,1,7,29],"83":[7,1,7,12],"89":[7,1,7,30],"97":[8,1,8,8],"105":[8,13,8,30],"113":[8,1,8,31],"115":[8,1,8,12],"121":[8,1,8,32],"129":[10,9,10,11],"137":[10,19,10,22],"145":[10,24,10,25],"153":[10,9,10,26],"155":[10,9,10,18],"161":[10,9,10,26],"169":[10,9,10,26],"177":[12,1,12,8],"185":[12,13,12,21],"193":[12,1,12,22],"195":[12,1,12,12],"201":[12,1,12,23],"209":[14,5,14,6],"217":[14,9,14,10],"225":[14,14,14,15],"233":[14,18,14,19],"241":[15,3,15,10],"249":[15,15,15,20],"257":[15,3,15,21],"259":[15,3,15,14],"265":[15,3,15,22],"273":[1,1,16,2],"281":[1,1,16,2],"289":[1,1,16,2],"297":[14,1,16,2],"305":[1,1,16,2],"313":[1,1,16,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/fractions/fraction_one.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/fractions/fraction_one_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nconsole.log('Fraction Test');\nconsole.log('Loading Symbols');\n\nvar x = S$.symbol('X', 0);\n\nconsole.log('Made X');\n\nif (x > 0 && x < 1) {\n  console.log(\"Bla\");\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(273, '/home/blake/artifact/ExpoSE/tests/fractions/fraction_one_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/fractions/fraction_one.js');
            J$.N(281, 'S$', S$, 0);
            J$.N(289, 'x', x, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, 'Fraction Test', 21, false)));
            J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, 'Loading Symbols', 21, false)));
            var x = J$.X1(169, J$.W(161, 'x', J$.M(153, J$.R(129, 'S$', S$, 1), 'symbol', 0)(J$.T(137, 'X', 21, false), J$.T(145, 0, 22, false)), x, 3));
            J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 'Made X', 21, false)));
            if (J$.X1(297, J$.C(16, J$.C(8, J$.B(10, '>', J$.R(209, 'x', x, 1), J$.T(217, 0, 22, false), 0)) ? J$.B(18, '<', J$.R(225, 'x', x, 1), J$.T(233, 1, 22, false), 0) : J$._()))) {
                J$.X1(265, J$.M(257, J$.R(241, 'console', console, 2), 'log', 0)(J$.T(249, "Bla", 21, false)));
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
