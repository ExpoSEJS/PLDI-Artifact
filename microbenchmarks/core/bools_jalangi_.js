J$.iids = {"9":[3,10,3,17],"10":[11,11,11,17],"17":[3,18,3,22],"18":[13,5,13,7],"25":[3,10,3,23],"26":[15,11,15,17],"33":[3,10,3,23],"34":[17,5,17,7],"41":[3,10,3,23],"42":[19,11,19,17],"49":[8,5,8,9],"50":[23,11,23,17],"57":[8,5,8,9],"65":[8,1,8,10],"73":[9,5,9,6],"81":[9,5,9,6],"89":[9,1,9,7],"97":[11,1,11,3],"105":[11,11,11,12],"113":[11,16,11,17],"121":[11,1,11,18],"123":[11,1,11,10],"129":[11,1,11,19],"137":[13,6,13,7],"145":[13,5,13,7],"153":[13,1,13,8],"161":[15,1,15,3],"169":[15,11,15,12],"177":[15,16,15,17],"185":[15,1,15,18],"187":[15,1,15,10],"193":[15,1,15,19],"201":[17,6,17,7],"209":[17,5,17,7],"217":[17,1,17,8],"225":[19,1,19,3],"233":[19,11,19,12],"241":[19,16,19,17],"249":[19,1,19,18],"251":[19,1,19,10],"257":[19,1,19,19],"265":[21,5,21,6],"273":[21,5,21,6],"281":[21,1,21,7],"289":[23,1,23,3],"297":[23,11,23,12],"305":[23,16,23,17],"313":[23,1,23,18],"315":[23,1,23,10],"321":[23,1,23,19],"329":[1,1,23,19],"337":[1,1,23,19],"345":[1,1,23,19],"353":[1,1,23,19],"361":[1,1,23,19],"369":[1,1,23,19],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/bools.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/bools_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar a;\nvar b;\n\na = true;\nb = a;\n\nS$.assert(a == b);\n\na = !a;\n\nS$.assert(a != b);\n\nb = !a;\n\nS$.assert(b != a);\n\nb = a;\n\nS$.assert(b == a);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/ExpoSE/tests/core/bools_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/core/bools.js');
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'a', a, 0);
            J$.N(353, 'b', b, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var a;
            var b;
            J$.X1(65, a = J$.W(57, 'a', J$.T(49, true, 23, false), a, 2));
            J$.X1(89, b = J$.W(81, 'b', J$.R(73, 'a', a, 1), b, 2));
            J$.X1(129, J$.M(121, J$.R(97, 'S$', S$, 1), 'assert', 0)(J$.B(10, '==', J$.R(105, 'a', a, 1), J$.R(113, 'b', b, 1), 0)));
            J$.X1(153, a = J$.W(145, 'a', J$.U(18, '!', J$.R(137, 'a', a, 1)), a, 2));
            J$.X1(193, J$.M(185, J$.R(161, 'S$', S$, 1), 'assert', 0)(J$.B(26, '!=', J$.R(169, 'a', a, 1), J$.R(177, 'b', b, 1), 0)));
            J$.X1(217, b = J$.W(209, 'b', J$.U(34, '!', J$.R(201, 'a', a, 1)), b, 2));
            J$.X1(257, J$.M(249, J$.R(225, 'S$', S$, 1), 'assert', 0)(J$.B(42, '!=', J$.R(233, 'b', b, 1), J$.R(241, 'a', a, 1), 0)));
            J$.X1(281, b = J$.W(273, 'b', J$.R(265, 'a', a, 1), b, 2));
            J$.X1(321, J$.M(313, J$.R(289, 'S$', S$, 1), 'assert', 0)(J$.B(50, '==', J$.R(297, 'b', b, 1), J$.R(305, 'a', a, 1), 0)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
