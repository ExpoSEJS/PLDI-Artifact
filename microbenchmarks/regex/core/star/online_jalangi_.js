J$.iids = {"8":[10,6,10,13],"9":[3,10,3,17],"10":[6,11,6,24],"16":[15,7,15,18],"17":[3,18,3,22],"18":[10,6,10,13],"24":[14,18,14,30],"25":[3,10,3,23],"26":[14,18,14,30],"32":[8,5,8,19],"33":[3,10,3,23],"34":[14,32,14,35],"41":[3,10,3,23],"49":[4,9,4,11],"50":[14,32,14,35],"57":[4,19,4,22],"58":[15,7,15,18],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,1,6,3],"105":[6,11,6,12],"113":[6,11,6,19],"121":[6,22,6,24],"129":[6,1,6,25],"131":[6,1,6,10],"137":[6,1,6,26],"145":[8,5,8,11],"153":[8,17,8,18],"161":[8,5,8,19],"163":[8,5,8,16],"169":[10,6,10,7],"177":[10,11,10,13],"185":[11,9,11,20],"193":[11,9,11,20],"201":[11,3,11,21],"209":[14,15,14,16],"217":[14,15,14,16],"225":[14,15,14,16],"233":[14,18,14,19],"241":[14,22,14,23],"249":[14,22,14,30],"265":[14,32,14,33],"273":[14,32,14,35],"289":[15,7,15,8],"297":[15,9,15,10],"305":[15,7,15,11],"313":[15,15,15,18],"321":[16,10,16,23],"329":[16,10,16,23],"337":[16,4,16,24],"345":[20,8,20,19],"353":[20,8,20,19],"361":[20,2,20,20],"369":[1,1,21,2],"377":[1,1,21,2],"385":[1,1,21,2],"393":[1,1,21,2],"401":[10,2,12,3],"409":[15,3,17,4],"417":[14,2,18,3],"425":[14,2,18,3],"433":[8,1,21,2],"441":[1,1,21,2],"449":[1,1,21,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/online.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/online_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nS$.assume(x.length < 10);\n\nif (/^z*$/.test(x)) {\n\t\n\tif (x == '') {\n\t\tthrow 'Reachable';\n\t}\n\n\tfor (var i = 0; i < x.length; i++) {\n\t\tif (x[i] != 'z') {\n\t\t\tthrow 'Unreachable';\n\t\t}\n\t}\n\n\tthrow 'Reachable';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(369, '/home/blake/artifact/ExpoSE/tests/regex/core/star/online_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/star/online.js');
            J$.N(377, 'S$', S$, 0);
            J$.N(385, 'x', x, 0);
            J$.N(393, 'i', i, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            J$.X1(137, J$.M(129, J$.R(97, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<', J$.G(113, J$.R(105, 'x', x, 1), 'length', 0), J$.T(121, 10, 22, false), 0)));
            if (J$.X1(433, J$.C(32, J$.M(161, J$.T(145, /^z*$/, 14, false), 'test', 0)(J$.R(153, 'x', x, 1))))) {
                if (J$.X1(401, J$.C(8, J$.B(18, '==', J$.R(169, 'x', x, 1), J$.T(177, '', 21, false), 0)))) {
                    throw J$.X1(201, J$.Th(193, J$.T(185, 'Reachable', 21, false)));
                }
                for (var i = J$.X1(225, J$.W(217, 'i', J$.T(209, 0, 22, false), i, 3)); J$.X1(417, J$.C(24, J$.B(26, '<', J$.R(233, 'i', i, 1), J$.G(249, J$.R(241, 'x', x, 1), 'length', 0), 0))); J$.X1(425, J$.B(50, '-', i = J$.W(273, 'i', J$.B(42, '+', J$.U(34, '+', J$.R(265, 'i', i, 1)), J$.T(257, 1, 22, false), 0), i, 2), J$.T(281, 1, 22, false), 0))) {
                    if (J$.X1(409, J$.C(16, J$.B(58, '!=', J$.G(305, J$.R(289, 'x', x, 1), J$.R(297, 'i', i, 1), 4), J$.T(313, 'z', 21, false), 0)))) {
                        throw J$.X1(337, J$.Th(329, J$.T(321, 'Unreachable', 21, false)));
                    }
                }
                throw J$.X1(361, J$.Th(353, J$.T(345, 'Reachable', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
