J$.iids = {"8":[6,5,6,26],"9":[3,10,3,17],"16":[10,5,10,28],"17":[3,18,3,22],"24":[14,5,14,21],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,18],"105":[6,24,6,25],"113":[6,5,6,26],"115":[6,5,6,23],"121":[7,8,7,19],"129":[7,8,7,19],"137":[7,2,7,20],"145":[10,5,10,20],"153":[10,26,10,27],"161":[10,5,10,28],"163":[10,5,10,25],"169":[11,8,11,19],"177":[11,8,11,19],"185":[11,2,11,20],"193":[14,5,14,13],"201":[14,19,14,20],"209":[14,5,14,21],"211":[14,5,14,18],"217":[15,8,15,19],"225":[15,8,15,19],"233":[15,2,15,20],"241":[18,7,18,18],"249":[18,7,18,18],"257":[18,1,18,19],"265":[1,1,18,19],"273":[1,1,18,19],"281":[1,1,18,19],"289":[6,1,8,2],"297":[10,1,12,2],"305":[14,1,16,2],"313":[1,1,18,19],"321":[1,1,18,19],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/multiple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/HELLO WORLD/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (/GOODBYE WORLD/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (/AND ME/.test(x)) {\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(265, '/home/blake/artifact/ExpoSE/tests/regex/core/literals/multiple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/literals/multiple.js');
            J$.N(273, 'S$', S$, 0);
            J$.N(281, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(289, J$.C(8, J$.M(113, J$.T(97, /HELLO WORLD/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                throw J$.X1(137, J$.Th(129, J$.T(121, 'Reachable', 21, false)));
            }
            if (J$.X1(297, J$.C(16, J$.M(161, J$.T(145, /GOODBYE WORLD/, 14, false), 'test', 0)(J$.R(153, 'x', x, 1))))) {
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
            }
            if (J$.X1(305, J$.C(24, J$.M(209, J$.T(193, /AND ME/, 14, false), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable', 21, false)));
            }
            throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
