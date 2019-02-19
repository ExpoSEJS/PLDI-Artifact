J$.iids = {"8":[18,13,18,22],"9":[3,1,3,13],"10":[11,18,11,25],"16":[13,9,13,15],"17":[3,1,3,14],"18":[13,9,13,15],"24":[23,9,23,15],"25":[5,10,5,17],"26":[15,19,15,21],"32":[43,9,43,45],"33":[5,18,5,22],"34":[18,13,18,22],"40":[43,9,43,45],"41":[5,10,5,23],"42":[19,22,19,29],"49":[5,10,5,23],"50":[23,9,23,15],"57":[5,10,5,23],"58":[43,9,43,25],"65":[9,5,9,12],"66":[43,29,43,45],"73":[9,17,9,30],"74":[44,19,44,42],"81":[9,32,9,34],"89":[9,36,9,41],"97":[9,43,9,45],"105":[9,5,9,46],"107":[9,5,9,16],"113":[9,5,9,47],"121":[11,18,11,20],"129":[11,23,11,25],"137":[11,18,11,25],"145":[11,18,11,25],"153":[13,9,13,11],"161":[13,14,13,15],"169":[14,9,14,16],"177":[14,21,14,36],"185":[14,9,14,37],"187":[14,9,14,20],"193":[14,9,14,38],"201":[15,19,15,21],"209":[15,9,15,15],"217":[15,9,15,21],"225":[15,9,15,22],"233":[17,9,17,16],"241":[17,21,17,36],"249":[17,9,17,37],"251":[17,9,17,20],"257":[17,9,17,38],"265":[18,13,18,15],"273":[18,19,18,22],"281":[19,23,19,29],"289":[19,22,19,29],"297":[19,13,19,30],"305":[23,9,23,11],"313":[23,14,23,15],"321":[24,9,24,16],"329":[24,21,24,36],"337":[24,9,24,37],"339":[24,9,24,20],"345":[24,9,24,38],"353":[26,9,26,16],"361":[26,21,26,36],"369":[26,9,26,37],"371":[26,9,26,20],"377":[26,9,26,38],"385":[29,5,29,12],"393":[29,17,29,30],"401":[29,32,29,38],"409":[29,5,29,39],"411":[29,5,29,16],"417":[29,5,29,40],"425":[31,12,31,18],"433":[31,12,31,18],"441":[31,5,31,19],"449":[7,1,32,2],"457":[7,1,32,2],"465":[7,1,32,2],"473":[7,1,32,2],"481":[7,1,32,2],"489":[36,19,36,21],"497":[36,29,36,33],"505":[36,35,36,36],"513":[36,19,36,37],"515":[36,19,36,28],"521":[36,19,36,37],"529":[36,19,36,37],"537":[37,20,37,22],"545":[37,30,37,35],"553":[37,37,37,39],"561":[37,20,37,40],"563":[37,20,37,29],"569":[37,20,37,40],"577":[37,20,37,40],"585":[38,20,38,22],"593":[38,30,38,35],"601":[38,37,38,39],"609":[38,20,38,40],"611":[38,20,38,29],"617":[38,20,38,40],"625":[38,20,38,40],"633":[40,21,40,22],"641":[40,23,40,30],"649":[40,32,40,40],"657":[40,21,40,41],"665":[40,21,40,41],"673":[40,21,40,41],"681":[41,21,41,22],"689":[41,23,41,30],"697":[41,32,41,40],"705":[41,21,41,41],"713":[41,21,41,41],"721":[41,21,41,41],"729":[43,9,43,17],"737":[43,22,43,25],"745":[43,29,43,37],"753":[43,42,43,45],"761":[44,9,44,11],"769":[44,19,44,28],"777":[44,33,44,42],"785":[44,9,44,43],"787":[44,9,44,18],"793":[44,9,44,44],"801":[34,1,46,2],"809":[34,1,46,2],"817":[34,1,46,2],"825":[34,1,46,2],"833":[34,1,46,2],"841":[34,1,46,2],"849":[34,1,46,2],"857":[34,1,46,2],"865":[48,1,48,7],"873":[48,8,48,16],"881":[48,1,48,17],"889":[48,1,48,18],"897":[1,1,48,18],"905":[1,1,48,18],"913":[7,1,32,2],"921":[1,1,48,18],"929":[34,1,46,2],"937":[1,1,48,18],"945":[18,9,20,10],"953":[13,5,21,6],"961":[23,5,27,6],"969":[7,1,32,2],"977":[7,1,32,2],"985":[43,5,45,6],"993":[34,1,46,2],"1001":[34,1,46,2],"1009":[1,1,48,18],"1017":[1,1,48,18],"nBranches":10,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/infoflow.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/numbers/infoflow_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\n\"use strict\";\n\nvar S$ = require('S$');\n\nfunction flowTest(lo, hi) {\n\n    console.log(\"Inputs: Hi:\", hi, \"Lo:\", lo);\n\n    var result = lo * 42;\n\n    if (lo > 4) {\n        console.log(\"Branch A-then\");\n        result -= lo;\n    } else {\n        console.log(\"Branch A-else\");\n        if (hi == 777) {\n            result = -result;\n        }\n    }\n\n    if (hi > 0) {\n        console.log(\"Branch B-then\");\n    } else {\n        console.log(\"Branch B-else\");\n    }\n\n    console.log(\"Low output:\", result);\n\n    return result;\n}\n\nfunction verify(f) {\n\n    var loInput = S$.symbol('LO', 0);\n    var hiInput1 = S$.symbol('HI1', 10);\n    var hiInput2 = S$.symbol('HI2', 10);\n\n    var loOutput1 = f(loInput, hiInput1);\n    var loOutput2 = f(loInput, hiInput2);\n\n    if (hiInput1 !== 777 && hiInput2 !== 777) {\n        S$.assert(loOutput1 === loOutput2);\n    }\n}\n\nverify(flowTest);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(897, '/home/blake/artifact/ExpoSE/tests/numbers/infoflow_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/numbers/infoflow.js');
            function flowTest(lo, hi) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(449, arguments.callee, this, arguments);
                            arguments = J$.N(457, 'arguments', arguments, 4);
                            lo = J$.N(465, 'lo', lo, 4);
                            hi = J$.N(473, 'hi', hi, 4);
                            J$.N(481, 'result', result, 0);
                            J$.X1(113, J$.M(105, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, "Inputs: Hi:", 21, false), J$.R(81, 'hi', hi, 0), J$.T(89, "Lo:", 21, false), J$.R(97, 'lo', lo, 0)));
                            var result = J$.X1(145, J$.W(137, 'result', J$.B(10, '*', J$.R(121, 'lo', lo, 0), J$.T(129, 42, 22, false), 0), result, 1));
                            if (J$.X1(953, J$.C(16, J$.B(18, '>', J$.R(153, 'lo', lo, 0), J$.T(161, 4, 22, false), 0)))) {
                                J$.X1(193, J$.M(185, J$.R(169, 'console', console, 2), 'log', 0)(J$.T(177, "Branch A-then", 21, false)));
                                J$.X1(225, result = J$.W(217, 'result', J$.B(26, '-', J$.R(209, 'result', result, 0), J$.R(201, 'lo', lo, 0), 0), result, 0));
                            } else {
                                J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, "Branch A-else", 21, false)));
                                if (J$.X1(945, J$.C(8, J$.B(34, '==', J$.R(265, 'hi', hi, 0), J$.T(273, 777, 22, false), 0)))) {
                                    J$.X1(297, result = J$.W(289, 'result', J$.U(42, '-', J$.R(281, 'result', result, 0)), result, 0));
                                }
                            }
                            if (J$.X1(961, J$.C(24, J$.B(50, '>', J$.R(305, 'hi', hi, 0), J$.T(313, 0, 22, false), 0)))) {
                                J$.X1(345, J$.M(337, J$.R(321, 'console', console, 2), 'log', 0)(J$.T(329, "Branch B-then", 21, false)));
                            } else {
                                J$.X1(377, J$.M(369, J$.R(353, 'console', console, 2), 'log', 0)(J$.T(361, "Branch B-else", 21, false)));
                            }
                            J$.X1(417, J$.M(409, J$.R(385, 'console', console, 2), 'log', 0)(J$.T(393, "Low output:", 21, false), J$.R(401, 'result', result, 0)));
                            return J$.X1(441, J$.Rt(433, J$.R(425, 'result', result, 0)));
                        } catch (J$e) {
                            J$.Ex(969, J$e);
                        } finally {
                            if (J$.Fr(977))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function verify(f) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(801, arguments.callee, this, arguments);
                            arguments = J$.N(809, 'arguments', arguments, 4);
                            f = J$.N(817, 'f', f, 4);
                            J$.N(825, 'loInput', loInput, 0);
                            J$.N(833, 'hiInput1', hiInput1, 0);
                            J$.N(841, 'hiInput2', hiInput2, 0);
                            J$.N(849, 'loOutput1', loOutput1, 0);
                            J$.N(857, 'loOutput2', loOutput2, 0);
                            var loInput = J$.X1(529, J$.W(521, 'loInput', J$.M(513, J$.R(489, 'S$', S$, 1), 'symbol', 0)(J$.T(497, 'LO', 21, false), J$.T(505, 0, 22, false)), loInput, 1));
                            var hiInput1 = J$.X1(577, J$.W(569, 'hiInput1', J$.M(561, J$.R(537, 'S$', S$, 1), 'symbol', 0)(J$.T(545, 'HI1', 21, false), J$.T(553, 10, 22, false)), hiInput1, 1));
                            var hiInput2 = J$.X1(625, J$.W(617, 'hiInput2', J$.M(609, J$.R(585, 'S$', S$, 1), 'symbol', 0)(J$.T(593, 'HI2', 21, false), J$.T(601, 10, 22, false)), hiInput2, 1));
                            var loOutput1 = J$.X1(673, J$.W(665, 'loOutput1', J$.F(657, J$.R(633, 'f', f, 0), 0)(J$.R(641, 'loInput', loInput, 0), J$.R(649, 'hiInput1', hiInput1, 0)), loOutput1, 1));
                            var loOutput2 = J$.X1(721, J$.W(713, 'loOutput2', J$.F(705, J$.R(681, 'f', f, 0), 0)(J$.R(689, 'loInput', loInput, 0), J$.R(697, 'hiInput2', hiInput2, 0)), loOutput2, 1));
                            if (J$.X1(985, J$.C(40, J$.C(32, J$.B(58, '!==', J$.R(729, 'hiInput1', hiInput1, 0), J$.T(737, 777, 22, false), 0)) ? J$.B(66, '!==', J$.R(745, 'hiInput2', hiInput2, 0), J$.T(753, 777, 22, false), 0) : J$._()))) {
                                J$.X1(793, J$.M(785, J$.R(761, 'S$', S$, 1), 'assert', 0)(J$.B(74, '===', J$.R(769, 'loOutput1', loOutput1, 0), J$.R(777, 'loOutput2', loOutput2, 0), 0)));
                            }
                        } catch (J$e) {
                            J$.Ex(993, J$e);
                        } finally {
                            if (J$.Fr(1001))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(905, 'S$', S$, 0);
            flowTest = J$.N(921, 'flowTest', J$.T(913, flowTest, 12, false, 449), 0);
            verify = J$.N(937, 'verify', J$.T(929, verify, 12, false, 801), 0);
            J$.X1(17, J$.T(9, "use strict", 21, false));
            var S$ = J$.X1(57, J$.W(49, 'S$', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'S$', 21, false)), S$, 3));
            J$.X1(889, J$.F(881, J$.R(865, 'verify', verify, 1), 0)(J$.R(873, 'flowTest', flowTest, 1)));
        } catch (J$e) {
            J$.Ex(1009, J$e);
        } finally {
            if (J$.Sr(1017)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
