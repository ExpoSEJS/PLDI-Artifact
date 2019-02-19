J$.iids = {"8":[7,6,7,31],"9":[3,10,3,17],"10":[7,6,7,31],"16":[6,5,6,19],"17":[3,18,3,22],"24":[15,6,15,30],"25":[3,10,3,23],"32":[14,5,14,19],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,11],"105":[6,17,6,18],"113":[6,5,6,19],"115":[6,5,6,16],"121":[7,7,7,23],"129":[7,29,7,30],"137":[7,7,7,31],"139":[7,7,7,28],"145":[8,9,8,22],"153":[8,9,8,22],"161":[8,3,8,23],"169":[10,9,10,20],"177":[10,9,10,20],"185":[10,3,10,21],"193":[14,5,14,11],"201":[14,17,14,18],"209":[14,5,14,19],"211":[14,5,14,16],"217":[15,6,15,22],"225":[15,28,15,29],"233":[15,6,15,30],"235":[15,6,15,27],"241":[16,9,16,22],"249":[16,9,16,22],"257":[16,3,16,23],"265":[18,9,18,20],"273":[18,9,18,20],"281":[18,3,18,21],"289":[1,1,20,2],"297":[1,1,20,2],"305":[1,1,20,2],"313":[7,2,11,3],"321":[6,1,12,2],"329":[15,2,19,3],"337":[14,1,20,2],"345":[1,1,20,2],"353":[1,1,20,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/word.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/escaping/word_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^\\w$/.test(x)) {\n\tif (!/^[a-zA-Z0-9_]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t} else {\n\t\tthrow 'Reachable';\n\t}\n}\n\nif (/^\\W$/.test(x)) {\n\tif (/^[a-zA-Z0-9_]$/.test(x)) {\n\t\tthrow 'Unreachable';\n\t} else {\n\t\tthrow 'Reachable';\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/word_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/escaping/word.js');
            J$.N(297, 'S$', S$, 0);
            J$.N(305, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(321, J$.C(16, J$.M(113, J$.T(97, /^\w$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(313, J$.C(8, J$.U(10, '!', J$.M(137, J$.T(121, /^[a-zA-Z0-9_]$/, 14, false), 'test', 0)(J$.R(129, 'x', x, 1)))))) {
                    throw J$.X1(161, J$.Th(153, J$.T(145, 'Unreachable', 21, false)));
                } else {
                    throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
                }
            }
            if (J$.X1(337, J$.C(32, J$.M(209, J$.T(193, /^\W$/, 14, false), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                if (J$.X1(329, J$.C(24, J$.M(233, J$.T(217, /^[a-zA-Z0-9_]$/, 14, false), 'test', 0)(J$.R(225, 'x', x, 1))))) {
                    throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable', 21, false)));
                } else {
                    throw J$.X1(281, J$.Th(273, J$.T(265, 'Reachable', 21, false)));
                }
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
