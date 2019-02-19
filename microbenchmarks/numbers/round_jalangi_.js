J$.iids = {"8":[9,5,9,21],"9":[3,10,3,17],"10":[9,5,9,21],"17":[3,18,3,22],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,13,5,15],"57":[5,23,5,30],"65":[5,32,5,33],"73":[5,13,5,34],"75":[5,13,5,22],"81":[5,13,5,34],"89":[5,13,5,34],"97":[6,15,6,17],"105":[6,25,6,34],"113":[6,36,6,37],"121":[6,15,6,38],"123":[6,15,6,24],"129":[6,15,6,38],"137":[6,15,6,38],"145":[7,15,7,19],"153":[7,26,7,33],"161":[7,15,7,34],"163":[7,15,7,25],"169":[7,15,7,34],"177":[7,15,7,34],"185":[9,5,9,10],"193":[9,14,9,21],"201":[10,11,10,15],"209":[10,11,10,15],"217":[10,5,10,16],"225":[12,11,12,15],"233":[12,11,12,15],"241":[12,5,12,16],"249":[1,1,13,2],"257":[1,1,13,2],"265":[1,1,13,2],"273":[1,1,13,2],"281":[1,1,13,2],"289":[9,1,13,2],"297":[1,1,13,2],"305":[1,1,13,2],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/round.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/round_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar value = S$.symbol('VALUE', 1);\nvar decimal = S$.symbol('DECIMAL', 3);\nvar rounded = Math.round(decimal);\n\nif (value != rounded) {\n    throw 'R1';\n} else {\n    throw 'R2';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/home/blake/artifact/ExpoSE/tests/numbers/round_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/round.js');
            J$.N(257, 'S$', S$, 0);
            J$.N(265, 'value', value, 0);
            J$.N(273, 'decimal', decimal, 0);
            J$.N(281, 'rounded', rounded, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var value = J$.X1(89, J$.W(81, 'value', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'VALUE', 21, false), J$.T(65, 1, 22, false)), value, 3));
            var decimal = J$.X1(137, J$.W(129, 'decimal', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'DECIMAL', 21, false), J$.T(113, 3, 22, false)), decimal, 3));
            var rounded = J$.X1(177, J$.W(169, 'rounded', J$.M(161, J$.R(145, 'Math', Math, 2), 'round', 0)(J$.R(153, 'decimal', decimal, 1)), rounded, 3));
            if (J$.X1(289, J$.C(8, J$.B(10, '!=', J$.R(185, 'value', value, 1), J$.R(193, 'rounded', rounded, 1), 0)))) {
                throw J$.X1(217, J$.Th(209, J$.T(201, 'R1', 21, false)));
            } else {
                throw J$.X1(241, J$.Th(233, J$.T(225, 'R2', 21, false)));
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
