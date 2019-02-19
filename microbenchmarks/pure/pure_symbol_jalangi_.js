J$.iids = {"8":[8,5,8,6],"9":[3,10,3,17],"10":[9,14,9,25],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,23,4,26],"65":[4,9,4,27],"67":[4,9,4,22],"73":[4,9,4,27],"81":[4,9,4,27],"89":[6,1,6,8],"97":[6,13,6,33],"105":[6,1,6,34],"107":[6,1,6,12],"113":[6,1,6,35],"121":[8,5,8,6],"129":[9,2,9,9],"137":[9,14,9,21],"145":[9,24,9,25],"153":[9,2,9,26],"155":[9,2,9,13],"161":[9,2,9,27],"169":[1,1,10,2],"177":[1,1,10,2],"185":[1,1,10,2],"193":[8,1,10,2],"201":[1,1,10,2],"209":[1,1,10,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/pure/pure_symbol.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/pure/pure_symbol_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar a = S$.pureSymbol('A');\n\nconsole.log('Created new symbol');\n\nif (a) {\n\tconsole.log('A is ' + a)\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/home/blake/artifact/ExpoSE/tests/pure/pure_symbol_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/pure/pure_symbol.js');
            J$.N(177, 'S$', S$, 0);
            J$.N(185, 'a', a, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var a = J$.X1(81, J$.W(73, 'a', J$.M(65, J$.R(49, 'S$', S$, 1), 'pureSymbol', 0)(J$.T(57, 'A', 21, false)), a, 3));
            J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 'Created new symbol', 21, false)));
            if (J$.X1(193, J$.C(8, J$.R(121, 'a', a, 1)))) {
                J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(137, 'A is ', 21, false), J$.R(145, 'a', a, 1), 0)));
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
