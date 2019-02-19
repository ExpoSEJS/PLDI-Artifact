J$.iids = {"8":[9,5,9,41],"9":[6,10,6,17],"10":[9,5,9,41],"17":[6,18,6,22],"25":[6,10,6,23],"33":[6,10,6,23],"41":[6,10,6,23],"49":[7,9,7,11],"57":[7,19,7,22],"65":[7,24,7,26],"73":[7,9,7,27],"75":[7,9,7,18],"81":[7,9,7,27],"89":[7,9,7,27],"97":[9,5,9,6],"105":[9,5,9,20],"107":[9,5,9,18],"113":[9,24,9,41],"121":[10,8,10,19],"129":[10,8,10,19],"137":[10,2,10,20],"145":[1,1,11,2],"153":[1,1,11,2],"161":[1,1,11,2],"169":[9,1,11,2],"177":[1,1,11,2],"185":[1,1,11,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/lowercase.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/lowercase_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//to lowercase smoke test\n//Does not exhaustively test, just our weak model\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (x.toLowerCase() == 'what_is_my_name') {\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/home/blake/artifact/ExpoSE/tests/strings/lowercase_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/lowercase.js');
            J$.N(153, 'S$', S$, 0);
            J$.N(161, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(169, J$.C(8, J$.B(10, '==', J$.M(105, J$.R(97, 'x', x, 1), 'toLowerCase', 0)(), J$.T(113, 'what_is_my_name', 21, false), 0)))) {
                throw J$.X1(137, J$.Th(129, J$.T(121, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
