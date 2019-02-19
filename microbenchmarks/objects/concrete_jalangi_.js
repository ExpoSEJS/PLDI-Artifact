J$.iids = {"9":[3,10,3,17],"10":[13,11,13,27],"17":[3,18,3,22],"18":[15,11,15,23],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,9,5,11],"57":[5,9,5,11],"65":[5,9,5,11],"73":[7,1,7,2],"81":[7,3,7,4],"89":[7,8,7,12],"97":[7,1,7,12],"105":[7,1,7,13],"113":[9,1,9,2],"121":[9,3,9,10],"129":[9,14,9,16],"137":[9,1,9,16],"145":[9,1,9,17],"153":[11,1,11,2],"161":[11,3,11,8],"169":[11,12,11,16],"177":[11,1,11,16],"185":[11,1,11,17],"193":[13,1,13,3],"201":[13,11,13,12],"209":[13,13,13,18],"217":[13,11,13,19],"225":[13,23,13,27],"233":[13,1,13,28],"235":[13,1,13,10],"241":[13,1,13,29],"249":[14,1,14,3],"257":[14,11,14,12],"265":[14,13,14,20],"273":[14,24,14,26],"281":[14,11,14,26],"289":[14,1,14,27],"291":[14,1,14,10],"297":[14,1,14,28],"305":[15,1,15,3],"313":[15,11,15,12],"321":[15,13,15,14],"329":[15,11,15,15],"337":[15,19,15,23],"345":[15,1,15,24],"347":[15,1,15,10],"353":[15,1,15,25],"361":[1,1,15,25],"369":[1,1,15,25],"377":[1,1,15,25],"385":[1,1,15,25],"393":[1,1,15,25],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/objects/concrete.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/objects/concrete_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nvar x = {};\n\nx[4] = 'Hi';\n\nx['Hello'] = 32;\n\nx[false] = true;\n\nS$.assert(x[false] == true);\nS$.assert(x['Hello'] = 32);\nS$.assert(x[4] == 'Hi');\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(361, '/home/blake/artifact/ExpoSE/tests/objects/concrete_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/objects/concrete.js');
            J$.N(369, 'S$', S$, 0);
            J$.N(377, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(65, J$.W(57, 'x', J$.T(49, {}, 11, false), x, 3));
            J$.X1(105, J$.P(97, J$.R(73, 'x', x, 1), J$.T(81, 4, 22, false), J$.T(89, 'Hi', 21, false), 2));
            J$.X1(145, J$.P(137, J$.R(113, 'x', x, 1), J$.T(121, 'Hello', 21, false), J$.T(129, 32, 22, false), 2));
            J$.X1(185, J$.P(177, J$.R(153, 'x', x, 1), J$.T(161, false, 23, false), J$.T(169, true, 23, false), 2));
            J$.X1(241, J$.M(233, J$.R(193, 'S$', S$, 1), 'assert', 0)(J$.B(10, '==', J$.G(217, J$.R(201, 'x', x, 1), J$.T(209, false, 23, false), 4), J$.T(225, true, 23, false), 0)));
            J$.X1(297, J$.M(289, J$.R(249, 'S$', S$, 1), 'assert', 0)(J$.P(281, J$.R(257, 'x', x, 1), J$.T(265, 'Hello', 21, false), J$.T(273, 32, 22, false), 2)));
            J$.X1(353, J$.M(345, J$.R(305, 'S$', S$, 1), 'assert', 0)(J$.B(18, '==', J$.G(329, J$.R(313, 'x', x, 1), J$.T(321, 4, 22, false), 4), J$.T(337, 'Hi', 21, false), 0)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
