J$.iids = {"8":[5,5,5,6],"9":[1,10,1,17],"17":[1,18,1,22],"25":[1,10,1,23],"33":[1,10,1,23],"41":[1,10,1,23],"49":[3,9,3,11],"57":[3,19,3,22],"65":[3,24,3,29],"73":[3,9,3,30],"75":[3,9,3,18],"81":[3,9,3,30],"89":[3,9,3,30],"97":[5,5,5,6],"105":[6,8,6,19],"113":[6,8,6,19],"121":[6,2,6,20],"129":[1,1,7,2],"137":[1,1,7,2],"145":[1,1,7,2],"153":[5,1,7,2],"161":[1,1,7,2],"169":[1,1,7,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/spaced name.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/spaced name_jalangi_.js","code":"var S$ = require('S$');\n\nvar x = S$.symbol('X', false);\n\nif (x) {\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(129, '/home/blake/artifact/ExpoSE/tests/core/spaced name_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/core/spaced name.js');
            J$.N(137, 'S$', S$, 0);
            J$.N(145, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'X', 21, false), J$.T(65, false, 23, false)), x, 3));
            if (J$.X1(153, J$.C(8, J$.R(97, 'x', x, 1)))) {
                throw J$.X1(121, J$.Th(113, J$.T(105, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
