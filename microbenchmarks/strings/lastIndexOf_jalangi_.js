J$.iids = {"8":[6,5,6,34],"9":[1,10,1,17],"10":[4,11,4,29],"17":[1,18,1,22],"18":[6,5,6,34],"25":[1,10,1,23],"33":[1,10,1,23],"41":[1,10,1,23],"49":[3,15,3,17],"57":[3,25,3,28],"65":[3,30,3,33],"73":[3,15,3,34],"75":[3,15,3,24],"81":[3,15,3,34],"89":[3,15,3,34],"97":[4,1,4,3],"105":[4,11,4,18],"113":[4,11,4,25],"121":[4,28,4,29],"129":[4,1,4,30],"131":[4,1,4,10],"137":[4,1,4,31],"145":[6,5,6,12],"153":[6,25,6,28],"161":[6,5,6,29],"163":[6,5,6,24],"169":[6,33,6,34],"177":[7,9,7,20],"185":[7,9,7,20],"193":[7,3,7,21],"201":[1,1,8,2],"209":[1,1,8,2],"217":[1,1,8,2],"225":[6,1,8,2],"233":[1,1,8,2],"241":[1,1,8,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/lastIndexOf.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/lastIndexOf_jalangi_.js","code":"var S$ = require('S$');\n\nvar testStr = S$.symbol('A', 'H');\nS$.assume(testStr.length < 5);\n\nif (testStr.lastIndexOf('D') == 4) {\n  throw 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/home/blake/artifact/ExpoSE/tests/strings/lastIndexOf_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/lastIndexOf.js');
            J$.N(209, 'S$', S$, 0);
            J$.N(217, 'testStr', testStr, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var testStr = J$.X1(89, J$.W(81, 'testStr', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'A', 21, false), J$.T(65, 'H', 21, false)), testStr, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(113, J$.R(105, 'testStr', testStr, 1), 'length', 0), J$.T(121, 5, 22, false), 0)));
            if (J$.X1(225, J$.C(8, J$.B(18, '==', J$.M(161, J$.R(145, 'testStr', testStr, 1), 'lastIndexOf', 0)(J$.T(153, 'D', 21, false)), J$.T(169, 4, 22, false), 0)))) {
                throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
