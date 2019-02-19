J$.iids = {"8":[8,6,8,14],"9":[4,10,4,17],"10":[8,6,8,14],"16":[9,6,9,14],"17":[4,18,4,22],"18":[9,6,9,14],"24":[10,6,10,18],"25":[4,10,4,23],"26":[10,6,10,18],"32":[11,6,11,16],"33":[4,10,4,23],"34":[11,6,11,16],"40":[7,5,7,32],"41":[4,10,4,23],"49":[5,9,5,11],"57":[5,19,5,22],"65":[5,24,5,26],"73":[5,9,5,27],"75":[5,9,5,18],"81":[5,9,5,27],"89":[5,9,5,27],"97":[7,5,7,24],"105":[7,30,7,31],"113":[7,5,7,32],"115":[7,5,7,29],"121":[8,6,8,7],"129":[8,11,8,14],"137":[8,22,8,33],"145":[8,22,8,33],"153":[8,16,8,34],"161":[9,6,9,7],"169":[9,11,9,14],"177":[9,22,9,33],"185":[9,22,9,33],"193":[9,16,9,34],"201":[10,6,10,7],"209":[10,11,10,18],"217":[10,26,10,37],"225":[10,26,10,37],"233":[10,20,10,38],"241":[11,6,11,7],"249":[11,11,11,16],"257":[11,24,11,35],"265":[11,24,11,35],"273":[11,18,11,36],"281":[12,8,12,21],"289":[12,8,12,21],"297":[12,2,12,22],"305":[15,7,15,18],"313":[15,7,15,18],"321":[15,1,15,19],"329":[1,1,15,19],"337":[1,1,15,19],"345":[1,1,15,19],"353":[8,2,8,34],"361":[9,2,9,34],"369":[10,2,10,38],"377":[11,2,11,36],"385":[7,1,13,2],"393":[1,1,15,19],"401":[1,1,15,19],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/exhaustive_simple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/alternation/exhaustive_simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n//Simple alternation test\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", '');\n\nif (/^(a|b|hello|dog)$/.test(x)) {\n\tif (x == 'a') throw 'Reachable';\n\tif (x == 'b') throw 'Reachable';\n\tif (x == 'hello') throw 'Reachable';\n\tif (x == 'dog') throw 'Reachable';\n\tthrow 'Unreachable';\n}\n\nthrow 'Reachable';\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(329, '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/exhaustive_simple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/alternation/exhaustive_simple.js');
            J$.N(337, 'S$', S$, 0);
            J$.N(345, 'x', x, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var x = J$.X1(89, J$.W(81, 'x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, "X", 21, false), J$.T(65, '', 21, false)), x, 3));
            if (J$.X1(385, J$.C(40, J$.M(113, J$.T(97, /^(a|b|hello|dog)$/, 14, false), 'test', 0)(J$.R(105, 'x', x, 1))))) {
                if (J$.X1(353, J$.C(8, J$.B(10, '==', J$.R(121, 'x', x, 1), J$.T(129, 'a', 21, false), 0))))
                    throw J$.X1(153, J$.Th(145, J$.T(137, 'Reachable', 21, false)));
                if (J$.X1(361, J$.C(16, J$.B(18, '==', J$.R(161, 'x', x, 1), J$.T(169, 'b', 21, false), 0))))
                    throw J$.X1(193, J$.Th(185, J$.T(177, 'Reachable', 21, false)));
                if (J$.X1(369, J$.C(24, J$.B(26, '==', J$.R(201, 'x', x, 1), J$.T(209, 'hello', 21, false), 0))))
                    throw J$.X1(233, J$.Th(225, J$.T(217, 'Reachable', 21, false)));
                if (J$.X1(377, J$.C(32, J$.B(34, '==', J$.R(241, 'x', x, 1), J$.T(249, 'dog', 21, false), 0))))
                    throw J$.X1(273, J$.Th(265, J$.T(257, 'Reachable', 21, false)));
                throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable', 21, false)));
            }
            throw J$.X1(321, J$.Th(313, J$.T(305, 'Reachable', 21, false)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
