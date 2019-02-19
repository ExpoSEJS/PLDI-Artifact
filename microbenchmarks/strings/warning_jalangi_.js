J$.iids = {"8":[12,5,12,10],"9":[3,1,3,13],"10":[12,5,12,10],"16":[20,5,20,27],"17":[3,1,3,14],"18":[18,13,18,26],"25":[5,10,5,17],"26":[18,13,18,38],"33":[5,18,5,22],"34":[20,5,20,12],"41":[5,10,5,23],"42":[20,5,20,18],"49":[5,10,5,23],"50":[20,5,20,27],"57":[5,10,5,23],"58":[21,17,21,32],"65":[6,9,6,11],"73":[6,19,6,22],"81":[6,24,6,26],"89":[6,9,6,27],"91":[6,9,6,18],"97":[6,9,6,27],"105":[6,9,6,27],"113":[7,9,7,11],"121":[7,19,7,22],"129":[7,24,7,29],"137":[7,9,7,30],"139":[7,9,7,18],"145":[7,9,7,30],"153":[7,9,7,30],"161":[9,1,9,8],"169":[9,13,9,34],"177":[9,36,9,37],"185":[9,1,9,38],"187":[9,1,9,12],"193":[9,1,9,39],"201":[10,1,10,8],"209":[10,13,10,34],"217":[10,36,10,37],"225":[10,1,10,38],"227":[10,1,10,12],"233":[10,1,10,39],"241":[12,5,12,6],"249":[12,9,12,10],"257":[13,5,13,12],"265":[13,17,13,24],"273":[13,5,13,25],"275":[13,5,13,16],"281":[13,5,13,26],"289":[15,5,15,12],"297":[15,17,15,25],"305":[15,5,15,26],"307":[15,5,15,16],"313":[15,5,15,27],"321":[18,1,18,8],"329":[18,13,18,22],"337":[18,25,18,26],"345":[18,29,18,38],"353":[18,1,18,39],"355":[18,1,18,12],"361":[18,1,18,40],"369":[20,5,20,8],"377":[20,11,20,12],"385":[20,15,20,18],"393":[20,22,20,27],"401":[21,5,21,12],"409":[21,17,21,28],"417":[21,31,21,32],"425":[21,5,21,33],"427":[21,5,21,16],"433":[21,5,21,34],"441":[1,1,22,2],"449":[1,1,22,2],"457":[1,1,22,2],"465":[1,1,22,2],"473":[12,1,16,2],"481":[20,1,22,2],"489":[1,1,22,2],"497":[1,1,22,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/warning.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/strings/warning_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\nvar x = S$.symbol(\"X\", 10);\nvar s = S$.symbol(\"S\", \"foo\");\n\nconsole.log(\"x is initialized to\", x);\nconsole.log(\"s is initialized to\", s);\n\nif (x > 0) {\n    console.log(\"x > 0\");\n} else {\n    console.log(\"x <= 0\");\n}\n\nconsole.log(\"prefix \" + s + \" suffix\");\n\nif (\"x\" + s + \"z\" == \"xyz\") {\n\tconsole.log(\"s is now \" + s);\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(441, '/home/blake/artifact/ExpoSE/tests/strings/warning_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/strings/warning.js');
            J$.N(449, 'S$', S$, 0);
            J$.N(457, 'x', x, 0);
            J$.N(465, 's', s, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var x = J$.X1(105, J$.W(97, 'x', J$.M(89, J$.R(65, 'S$', S$, 1), 'symbol', 0)(J$.T(73, "X", 21, false), J$.T(81, 10, 22, false)), x, 3));
            var s = J$.X1(153, J$.W(145, 's', J$.M(137, J$.R(113, 'S$', S$, 1), 'symbol', 0)(J$.T(121, "S", 21, false), J$.T(129, "foo", 21, false)), s, 3));
            J$.X1(193, J$.M(185, J$.R(161, 'console', console, 2), 'log', 0)(J$.T(169, "x is initialized to", 21, false), J$.R(177, 'x', x, 1)));
            J$.X1(233, J$.M(225, J$.R(201, 'console', console, 2), 'log', 0)(J$.T(209, "s is initialized to", 21, false), J$.R(217, 's', s, 1)));
            if (J$.X1(473, J$.C(8, J$.B(10, '>', J$.R(241, 'x', x, 1), J$.T(249, 0, 22, false), 0)))) {
                J$.X1(281, J$.M(273, J$.R(257, 'console', console, 2), 'log', 0)(J$.T(265, "x > 0", 21, false)));
            } else {
                J$.X1(313, J$.M(305, J$.R(289, 'console', console, 2), 'log', 0)(J$.T(297, "x <= 0", 21, false)));
            }
            J$.X1(361, J$.M(353, J$.R(321, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.B(18, '+', J$.T(329, "prefix ", 21, false), J$.R(337, 's', s, 1), 0), J$.T(345, " suffix", 21, false), 0)));
            if (J$.X1(481, J$.C(16, J$.B(50, '==', J$.B(42, '+', J$.B(34, '+', J$.T(369, "x", 21, false), J$.R(377, 's', s, 1), 0), J$.T(385, "z", 21, false), 0), J$.T(393, "xyz", 21, false), 0)))) {
                J$.X1(433, J$.M(425, J$.R(401, 'console', console, 2), 'log', 0)(J$.B(58, '+', J$.T(409, "s is now ", 21, false), J$.R(417, 's', s, 1), 0)));
            }
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
