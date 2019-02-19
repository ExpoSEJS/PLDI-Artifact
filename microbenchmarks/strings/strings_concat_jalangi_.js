J$.iids = {"8":[7,5,7,34],"9":[3,10,3,17],"10":[7,5,7,34],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,31],"73":[4,9,4,32],"75":[4,9,4,18],"81":[4,9,4,32],"89":[4,9,4,32],"97":[5,9,5,11],"105":[5,19,5,22],"113":[5,24,5,33],"121":[5,9,5,34],"123":[5,9,5,18],"129":[5,9,5,34],"137":[5,9,5,34],"145":[7,5,7,6],"153":[7,14,7,19],"161":[7,21,7,22],"169":[7,5,7,23],"171":[7,5,7,13],"177":[7,27,7,34],"185":[9,2,9,9],"193":[9,14,9,21],"201":[9,2,9,22],"203":[9,2,9,13],"209":[9,2,9,23],"217":[1,1,10,2],"225":[1,1,10,2],"233":[1,1,10,2],"241":[1,1,10,2],"249":[7,1,10,2],"257":[1,1,10,2],"265":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/strings_concat.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/strings_concat_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"A\", \"Hello\");\nvar y = S$.symbol(\"B\", \"Goodbye\");\n\nif (x.concat('abc',y) == \"aabcd\") {\n\t//One path\n\tconsole.log('Weird');\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/home/blake/artifact/ExpoSE/tests/strings/strings_concat_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/strings_concat.js');
            J$.N(225, 'S$', S$, 0);
            J$.N(233, 'x', x, 0);
            J$.N(241, 'y', y, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "A", 21, false), J$.T(65, "Hello", 21, false)), x, 3));
            var y = J$.X1(137, J$.W(129, 'y', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, "B", 21, false), J$.T(113, "Goodbye", 21, false)), y, 3));
            if (J$.X1(249, J$.C(8, J$.B(10, '==', J$.M(169, J$.R(145, 'x', x, 1), 'concat', 0)(J$.T(153, 'abc', 21, false), J$.R(161, 'y', y, 1)), J$.T(177, "aabcd", 21, false), 0)))) {
                J$.X1(209, J$.M(201, J$.R(185, 'console', console, 2), 'log', 0)(J$.T(193, 'Weird', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
