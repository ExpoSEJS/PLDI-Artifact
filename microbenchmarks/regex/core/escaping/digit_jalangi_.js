J$.iids = {"8":[8,6,8,24],"9":[3,10,3,17],"10":[8,6,8,24],"16":[6,5,6,19],"17":[3,18,3,22],"24":[17,6,17,23],"25":[3,10,3,23],"32":[15,5,15,19],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,11],"105":[6,17,6,18],"113":[6,5,6,19],"115":[6,5,6,16],"121":[8,7,8,16],"129":[8,22,8,23],"137":[8,7,8,24],"139":[8,7,8,21],"145":[9,9,9,22],"153":[9,9,9,22],"161":[9,3,9,23],"169":[12,8,12,19],"177":[12,8,12,19],"185":[12,2,12,20],"193":[15,5,15,11],"201":[15,17,15,18],"209":[15,5,15,19],"211":[15,5,15,16],"217":[17,6,17,15],"225":[17,21,17,22],"233":[17,6,17,23],"235":[17,6,17,20],"241":[18,9,18,22],"249":[18,9,18,22],"257":[18,3,18,23],"265":[21,8,21,19],"273":[21,8,21,19],"281":[21,2,21,20],"289":[1,1,22,2],"297":[1,1,22,2],"305":[1,1,22,2],"313":[8,2,10,3],"321":[6,1,13,2],"329":[17,2,19,3],"337":[15,1,22,2],"345":[1,1,22,2],"353":[1,1,22,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/digit.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/digit_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^\\d$/.test(x)) {\n\n\tif (!/^[0-9]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n\nif (/^\\D$/.test(x)) {\n\n\tif (/^[0-9]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/digit_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/digit.js');
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(321, J$.C(16, J$.M(113, J$.T(97, /^\d$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(313, J$.C(8, J$.U(10, '!', J$.M(137, J$.T(121, /^[0-9]$/, 14, false), 'test', 0)(J$.R(129, 'x', x, 1)))))) {
                    throw J$.X1(161, J$.Th(153, J$.T(145, 'Unreachable', 21, false)));
                }
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
            }
            if (J$.X1(337, J$.C(32, J$.M(209, J$.T(193, /^\D$/, 14, false), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                if (J$.X1(329, J$.C(24, J$.M(233, J$.T(217, /^[0-9]$/, 14, false), 'test', 0)(J$.R(225, 'x', x, 1))))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
                }
                throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
            }
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
