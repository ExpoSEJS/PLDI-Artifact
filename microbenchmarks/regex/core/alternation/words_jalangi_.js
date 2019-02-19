J$.iids = {"8":[7,6,7,18],"9":[3,10,3,17],"10":[7,6,7,18],"16":[8,6,8,20],"17":[3,18,3,22],"18":[8,6,8,20],"24":[9,6,9,21],"25":[3,10,3,23],"26":[9,6,9,21],"32":[6,5,6,39],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,31],"105":[6,37,6,38],"113":[6,5,6,39],"115":[6,5,6,36],"121":[7,6,7,7],"129":[7,11,7,18],"137":[7,26,7,37],"145":[7,26,7,37],"153":[7,20,7,38],"161":[8,6,8,7],"169":[8,11,8,20],"177":[8,28,8,39],"185":[8,28,8,39],"193":[8,22,8,40],"201":[9,6,9,7],"209":[9,11,9,21],"217":[9,29,9,40],"225":[9,29,9,40],"233":[9,23,9,41],"241":[10,8,10,21],"249":[10,8,10,21],"257":[10,2,10,22],"265":[13,7,13,18],"273":[13,7,13,18],"281":[13,1,13,19],"289":[1,1,13,19],"297":[1,1,13,19],"305":[1,1,13,19],"313":[7,2,7,38],"321":[8,2,8,40],"329":[9,2,9,41],"337":[6,1,11,2],"345":[1,1,13,19],"353":[1,1,13,19],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/words.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/words_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^Hello|Goodbye|Whats Up$/.test(x)) {\n\tif (x == 'Hello') throw 'Reachable';\n\tif (x == 'Goodbye') throw 'Reachable';\n\tif (x == 'Whats Up') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/words_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/words.js');
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(337, J$.C(32, J$.M(113, J$.T(97, /^Hello|Goodbye|Whats Up$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(313, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'Hello', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                if (J$.X1(321, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'Goodbye', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
                if (J$.X1(329, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, 'Whats Up', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable', 21, false)));
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
            }
            throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
