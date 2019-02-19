J$.iids = {"8":[8,6,8,93],"9":[3,10,3,17],"10":[8,6,8,47],"16":[8,6,8,93],"17":[3,18,3,22],"18":[8,51,8,93],"24":[7,5,7,9],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[5,12,5,57],"105":[5,63,5,64],"113":[5,12,5,65],"115":[5,12,5,62],"121":[5,12,5,65],"129":[5,12,5,65],"137":[7,5,7,9],"145":[8,6,8,7],"153":[8,11,8,47],"161":[8,51,8,52],"169":[8,56,8,93],"177":[9,9,9,22],"185":[9,9,9,22],"193":[9,3,9,23],"201":[11,9,11,22],"209":[11,9,11,22],"217":[11,3,11,23],"225":[14,8,14,21],"233":[14,8,14,21],"241":[14,2,14,22],"249":[1,1,15,2],"257":[1,1,15,2],"265":[1,1,15,2],"273":[1,1,15,2],"281":[8,2,12,3],"289":[7,1,15,2],"297":[1,1,15,2],"305":[1,1,15,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/mixed_escaped.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/literals/mixed_escaped_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\nvar isIn = /^Hello(world)how are you\\(today\\)huh\\?huh?$/.test(x);\n\nif (isIn) {\n\tif (x != 'Helloworldhow are you(today)huh?hu' && x != 'Helloworldhow are you(today)huh?huh') {\n\t\tthrow 'Unreachable';\n\t} else {\n\t\tthrow 'Reachable 1';\n\t}\n} else {\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/home/blake/artifact/ExpoSE/tests/regex/core/literals/mixed_escaped_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/literals/mixed_escaped.js');
            J$.N(257, 'S$', S$, 0);
            J$.N(265, 'x', x, 0);
            J$.N(273, 'isIn', isIn, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            var isIn = J$.X1(129, J$.W(121, 'isIn', J$.M(113, J$.T(97, /^Hello(world)how are you\(today\)huh\?huh?$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1)), isIn, 3));
            if (J$.X1(289, J$.C(24, J$.R(137, 'isIn', isIn, 1)))) {
                if (J$.X1(281, J$.C(16, J$.C(8, J$.B(10, '!=', J$.R(145, 'x', x, 1), J$.T(153, 'Helloworldhow are you(today)huh?hu', 21, false), 0)) ? J$.B(18, '!=', J$.R(161, 'x', x, 1), J$.T(169, 'Helloworldhow are you(today)huh?huh', 21, false), 0) : J$._()))) {
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Unreachable', 21, false)));
                } else {
                    throw J$.X1(217, J$.Th(209, J$.T(201, 'Reachable 1', 21, false)));
                }
            } else {
                throw J$.X1(241, J$.Th(233, J$.T(225, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
