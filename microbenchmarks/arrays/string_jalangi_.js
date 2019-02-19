J$.iids = {"8":[8,9,8,35],"9":[3,10,3,17],"10":[6,5,6,26],"16":[6,5,6,26],"17":[3,18,3,22],"18":[8,9,8,35],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,15,4,17],"57":[4,25,4,28],"65":[4,31,4,34],"73":[4,30,4,35],"81":[4,15,4,36],"83":[4,15,4,24],"89":[4,15,4,36],"97":[4,15,4,36],"105":[6,5,6,12],"113":[6,13,6,14],"121":[6,5,6,15],"129":[6,19,6,26],"137":[8,10,8,17],"145":[8,27,8,34],"153":[8,10,8,35],"155":[8,10,8,26],"161":[9,15,9,28],"169":[9,15,9,28],"177":[9,9,9,29],"185":[12,11,12,22],"193":[12,11,12,22],"201":[12,5,12,23],"209":[1,1,13,2],"217":[1,1,13,2],"225":[1,1,13,2],"233":[8,5,10,6],"241":[6,1,13,2],"249":[1,1,13,2],"257":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/string.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/string_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar stdargs = S$.symbol('X', ['P']);\n\nif (stdargs[3] == 'Hello') {\n\n    if (!stdargs.includes('Hello')) {\n        throw 'Unreachable';\n    }\n\n    throw 'Reachable'; \n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/home/blake/artifact/ExpoSE/tests/arrays/string_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/string.js');
            J$.N(217, 'S$', S$, 0);
            J$.N(225, 'stdargs', stdargs, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var stdargs = J$.X1(97, J$.W(89, 'stdargs', J$.M(81, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(73, [J$.T(65, 'P', 21, false)], 10, false)), stdargs, 3));
            if (J$.X1(241, J$.C(16, J$.B(10, '==', J$.G(121, J$.R(105, 'stdargs', stdargs, 1), J$.T(113, 3, 22, false), 4), J$.T(129, 'Hello', 21, false), 0)))) {
                if (J$.X1(233, J$.C(8, J$.U(18, '!', J$.M(153, J$.R(137, 'stdargs', stdargs, 1), 'includes', 0)(J$.T(145, 'Hello', 21, false)))))) {
                    throw J$.X1(177, J$.Th(169, J$.T(161, 'Unreachable', 21, false)));
                }
                throw J$.X1(201, J$.Th(193, J$.T(185, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
