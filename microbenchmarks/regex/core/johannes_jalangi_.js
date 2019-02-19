J$.iids = {"8":[13,20,13,40],"9":[3,1,3,13],"10":[11,13,11,29],"16":[11,13,11,29],"17":[3,1,3,14],"18":[13,20,13,40],"24":[10,9,10,10],"25":[5,10,5,17],"26":[26,11,26,26],"33":[5,18,5,22],"41":[5,10,5,23],"49":[5,10,5,23],"57":[5,10,5,23],"65":[8,13,8,14],"73":[8,21,8,44],"81":[8,13,8,45],"83":[8,13,8,20],"89":[8,13,8,45],"97":[8,13,8,45],"105":[10,9,10,10],"113":[11,13,11,14],"121":[11,15,11,16],"129":[11,13,11,17],"137":[11,13,11,24],"145":[11,28,11,29],"153":[12,19,12,44],"161":[12,19,12,44],"169":[12,13,12,45],"177":[13,20,13,21],"185":[13,22,13,23],"193":[13,20,13,24],"201":[13,20,13,31],"209":[13,34,13,40],"217":[14,19,14,45],"225":[14,19,14,45],"233":[14,13,14,46],"241":[16,19,16,36],"249":[16,19,16,36],"257":[16,13,16,37],"265":[19,15,19,38],"273":[19,15,19,38],"281":[19,9,19,39],"289":[7,1,21,2],"297":[7,1,21,2],"305":[7,1,21,2],"313":[7,1,21,2],"321":[7,1,21,2],"329":[23,11,23,13],"337":[23,21,23,24],"345":[23,26,23,27],"353":[23,11,23,28],"355":[23,11,23,20],"361":[23,11,23,28],"369":[23,11,23,28],"377":[24,11,24,13],"385":[24,21,24,24],"393":[24,26,24,31],"401":[24,11,24,32],"403":[24,11,24,20],"409":[24,11,24,32],"417":[24,11,24,32],"425":[26,1,26,3],"433":[26,11,26,14],"441":[26,11,26,21],"449":[26,24,26,26],"457":[26,1,26,27],"459":[26,1,26,10],"465":[26,1,26,28],"473":[28,1,28,2],"481":[28,3,28,6],"489":[28,8,28,11],"497":[28,1,28,12],"505":[28,1,28,13],"513":[1,1,28,13],"521":[1,1,28,13],"529":[7,1,21,2],"537":[1,1,28,13],"545":[1,1,28,13],"553":[1,1,28,13],"561":[13,16,17,10],"569":[11,9,17,10],"577":[10,5,20,6],"585":[7,1,21,2],"593":[7,1,21,2],"601":[1,1,28,13],"609":[1,1,28,13],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/johannes.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/regex/core/johannes_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nfunction f(x, maxLen) {\n    var s = x.match(/<([a-z]+)>(.*?)<\\/\\1>/);\n\n    if (s) {\n        if (s[2].length <= 0) {\n            throw '*** Element Missing ***';\n        } else if (s[2].length > maxLen) {\n            throw '*** Element Too Long ***';\n        } else {\n            throw '*** Success ***';\n        }\n    } else {\n        throw '*** Malformed XML ***';\n    }\n}\n\nvar len = S$.symbol(\"L\", 3);\nvar str = S$.symbol(\"A\", 'foo');\n\nS$.assume(str.length < 10);\n\nf(str, len);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(513, '/home/blake/artifact/ExpoSE/tests/regex/core/johannes_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/regex/core/johannes.js');
            function f(x, maxLen) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(289, arguments.callee, this, arguments);
                            arguments = J$.N(297, 'arguments', arguments, 4);
                            x = J$.N(305, 'x', x, 4);
                            maxLen = J$.N(313, 'maxLen', maxLen, 4);
                            J$.N(321, 's', s, 0);
                            var s = J$.X1(97, J$.W(89, 's', J$.M(81, J$.R(65, 'x', x, 0), 'match', 0)(J$.T(73, /<([a-z]+)>(.*?)<\/\1>/, 14, false)), s, 1));
                            if (J$.X1(577, J$.C(24, J$.R(105, 's', s, 0)))) {
                                if (J$.X1(569, J$.C(16, J$.B(10, '<=', J$.G(137, J$.G(129, J$.R(113, 's', s, 0), J$.T(121, 2, 22, false), 4), 'length', 0), J$.T(145, 0, 22, false), 0)))) {
                                    throw J$.X1(169, J$.Th(161, J$.T(153, '*** Element Missing ***', 21, false)));
                                } else if (J$.X1(561, J$.C(8, J$.B(18, '>', J$.G(201, J$.G(193, J$.R(177, 's', s, 0), J$.T(185, 2, 22, false), 4), 'length', 0), J$.R(209, 'maxLen', maxLen, 0), 0)))) {
                                    throw J$.X1(233, J$.Th(225, J$.T(217, '*** Element Too Long ***', 21, false)));
                                } else {
                                    throw J$.X1(257, J$.Th(249, J$.T(241, '*** Success ***', 21, false)));
                                }
                            } else {
                                throw J$.X1(281, J$.Th(273, J$.T(265, '*** Malformed XML ***', 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(585, J$e);
                        } finally {
                            if (J$.Fr(593))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(521, 'S$', S$, 0);
            f = J$.N(537, 'f', J$.T(529, f, 12, false, 289), 0);
            J$.N(545, 'len', len, 0);
            J$.N(553, 'str', str, 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            var len = J$.X1(369, J$.W(361, 'len', J$.M(353, J$.R(329, 'S$', S$, 1), 'symbol', 0)(J$.T(337, "L", 21, false), J$.T(345, 3, 22, false)), len, 3));
            var str = J$.X1(417, J$.W(409, 'str', J$.M(401, J$.R(377, 'S$', S$, 1), 'symbol', 0)(J$.T(385, "A", 21, false), J$.T(393, 'foo', 21, false)), str, 3));
            J$.X1(465, J$.M(457, J$.R(425, 'S$', S$, 1), 'assume', 0)(J$.B(26, '<', J$.G(441, J$.R(433, 'str', str, 1), 'length', 0), J$.T(449, 10, 22, false), 0)));
            J$.X1(505, J$.F(497, J$.R(473, 'f', f, 1), 0)(J$.R(481, 'str', str, 1), J$.R(489, 'len', len, 1)));
        } catch (J$e) {
            J$.Ex(601, J$e);
        } finally {
            if (J$.Sr(609)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
