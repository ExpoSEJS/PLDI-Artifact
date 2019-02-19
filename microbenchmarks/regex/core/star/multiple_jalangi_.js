J$.iids = {"8":[6,5,6,30],"9":[3,10,3,17],"16":[10,5,10,33],"17":[3,18,3,22],"24":[14,5,14,30],"25":[3,10,3,23],"32":[18,5,18,33],"33":[3,10,3,23],"40":[22,5,22,19],"41":[3,10,3,23],"48":[26,5,26,19],"49":[4,9,4,11],"57":[4,19,4,22],"65":[4,24,4,26],"73":[4,9,4,27],"75":[4,9,4,18],"81":[4,9,4,27],"89":[4,9,4,27],"97":[6,5,6,22],"105":[6,28,6,29],"113":[6,5,6,30],"115":[6,5,6,27],"121":[7,8,7,19],"129":[7,8,7,19],"137":[7,2,7,20],"145":[10,5,10,25],"153":[10,31,10,32],"161":[10,5,10,33],"163":[10,5,10,30],"169":[11,8,11,19],"177":[11,8,11,19],"185":[11,2,11,20],"193":[14,5,14,22],"201":[14,28,14,29],"209":[14,5,14,30],"211":[14,5,14,27],"217":[15,8,15,21],"225":[15,8,15,21],"233":[15,2,15,22],"241":[18,5,18,25],"249":[18,31,18,32],"257":[18,5,18,33],"259":[18,5,18,30],"265":[19,8,19,21],"273":[19,8,19,21],"281":[19,2,19,22],"289":[22,5,22,11],"297":[22,17,22,18],"305":[22,5,22,19],"307":[22,5,22,16],"313":[23,8,23,19],"321":[23,8,23,19],"329":[23,2,23,20],"337":[26,5,26,11],"345":[26,17,26,18],"353":[26,5,26,19],"355":[26,5,26,16],"361":[27,8,27,19],"369":[27,8,27,19],"377":[27,2,27,20],"385":[30,7,30,18],"393":[30,7,30,18],"401":[30,1,30,19],"409":[1,1,30,19],"417":[1,1,30,19],"425":[1,1,30,19],"433":[6,1,8,2],"441":[10,1,12,2],"449":[14,1,16,2],"457":[18,1,20,2],"465":[22,1,24,2],"473":[26,1,28,2],"481":[1,1,30,19],"489":[1,1,30,19],"nBranches":12,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/multiple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/star/multiple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^he*llo_world*$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (/^he*llo_world*$/.test(x)) {\n\tthrow 'Unreachable';\n}\n\nif (/^(hello)*(world)*$/.test(x)) {\n\tthrow 'Unreachable';\n}\n\nif (/^a*$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nif (/^b*$/.test(x)) {\n\tthrow 'Reachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(409, '/home/blake/artifact/ExpoSE/tests/regex/core/star/multiple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/star/multiple.js');
            J$.N(417, 'S$', S$, 0);
            J$.N(425, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(433, J$.C(8, J$.M(113, J$.T(97, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                throw J$.X1(137, J$.Th(129, J$.T(121, 'Reachable', 21, false)));
            }
            if (J$.X1(441, J$.C(16, J$.M(161, J$.T(145, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(153, 'x', x, 1))))) {
                throw J$.X1(185, J$.Th(177, J$.T(169, 'Reachable', 21, false)));
            }
            if (J$.X1(449, J$.C(24, J$.M(209, J$.T(193, /^he*llo_world*$/, 14, false), 'test', 0)(J$.R(201, 'x', x, 1))))) {
                throw J$.X1(233, J$.Th(225, J$.T(217, 'Unreachable', 21, false)));
            }
            if (J$.X1(457, J$.C(32, J$.M(257, J$.T(241, /^(hello)*(world)*$/, 14, false), 'test', 0)(J$.R(249, 'x', x, 1))))) {
                throw J$.X1(281, J$.Th(273, J$.T(265, 'Unreachable', 21, false)));
            }
            if (J$.X1(465, J$.C(40, J$.M(305, J$.T(289, /^a*$/, 14, false), 'test', 0)(J$.R(297, 'x', x, 1))))) {
                throw J$.X1(329, J$.Th(321, J$.T(313, 'Reachable', 21, false)));
            }
            if (J$.X1(473, J$.C(48, J$.M(353, J$.T(337, /^b*$/, 14, false), 'test', 0)(J$.R(345, 'x', x, 1))))) {
                throw J$.X1(377, J$.Th(369, J$.T(361, 'Reachable', 21, false)));
            }
            throw J$.X1(401, J$.Th(393, J$.T(385, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
