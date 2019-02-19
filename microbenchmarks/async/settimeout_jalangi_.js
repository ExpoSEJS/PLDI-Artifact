J$.iids = {"8":[11,8,11,14],"9":[3,10,3,17],"10":[8,6,8,12],"16":[8,6,8,12],"17":[3,18,3,22],"18":[11,8,11,14],"25":[3,10,3,23],"33":[3,10,3,23],"41":[3,10,3,23],"49":[5,1,5,11],"57":[6,10,6,12],"65":[6,20,6,23],"73":[6,25,6,26],"81":[6,10,6,27],"83":[6,10,6,19],"89":[6,10,6,27],"97":[6,10,6,27],"105":[8,6,8,7],"113":[8,10,8,12],"121":[9,3,9,10],"129":[9,15,9,23],"137":[9,3,9,24],"139":[9,3,9,14],"145":[9,3,9,25],"153":[10,3,10,13],"161":[11,8,11,9],"169":[11,12,11,14],"177":[12,5,12,12],"185":[12,17,12,22],"193":[12,5,12,23],"195":[12,5,12,16],"201":[12,5,12,24],"209":[13,11,13,17],"217":[13,11,13,17],"225":[13,5,13,18],"233":[10,14,15,4],"241":[10,14,15,4],"249":[10,14,15,4],"257":[15,6,15,9],"265":[10,3,15,10],"273":[10,3,15,11],"281":[17,3,17,10],"289":[17,15,17,24],"297":[17,3,17,25],"299":[17,3,17,14],"305":[17,3,17,26],"313":[5,12,20,2],"321":[5,12,20,2],"329":[5,12,20,2],"337":[5,12,20,2],"345":[20,4,20,7],"353":[5,1,20,8],"361":[5,1,20,9],"369":[1,1,20,9],"377":[1,1,20,9],"385":[11,4,14,5],"393":[10,14,15,4],"401":[10,14,15,4],"409":[8,2,18,3],"417":[5,12,20,2],"425":[5,12,20,2],"433":[1,1,20,9],"441":[1,1,20,9],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/async/settimeout.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/async/settimeout_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar S$ = require('S$');\n\nsetTimeout(function() {\n\tvar x = S$.symbol('X', 5);\n\t\n\tif (x > 10) {\n\t\tconsole.log('X > 10');\n\t\tsetTimeout(function() {\n\t\t\tif (x < 20) {\n\t\t\t\tconsole.log('Err');\n\t\t\t\tthrow 'AAAH';\n\t\t\t}\n\t\t}, 200);\n\t} else {\n\t\tconsole.log('X <= 10');\n\t}\n\n}, 150);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(369, '/home/blake/artifact/ExpoSE/tests/async/settimeout_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/async/settimeout.js');
            J$.N(377, 'S$', S$, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            J$.X1(361, J$.F(353, J$.R(49, 'setTimeout', setTimeout, 2), 0)(J$.T(337, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            J$.N(329, 'x', x, 0);
                            var x = J$.X1(97, J$.W(89, 'x', J$.M(81, J$.R(57, 'S$', S$, 1), 'symbol', 0)(J$.T(65, 'X', 21, false), J$.T(73, 5, 22, false)), x, 1));
                            if (J$.X1(409, J$.C(16, J$.B(10, '>', J$.R(105, 'x', x, 0), J$.T(113, 10, 22, false), 0)))) {
                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, 'X > 10', 21, false)));
                                J$.X1(273, J$.F(265, J$.R(153, 'setTimeout', setTimeout, 2), 0)(J$.T(249, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(233, arguments.callee, this, arguments);
                                                arguments = J$.N(241, 'arguments', arguments, 4);
                                                if (J$.X1(385, J$.C(8, J$.B(18, '<', J$.R(161, 'x', x, 0), J$.T(169, 20, 22, false), 0)))) {
                                                    J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 'Err', 21, false)));
                                                    throw J$.X1(225, J$.Th(217, J$.T(209, 'AAAH', 21, false)));
                                                }
                                            } catch (J$e) {
                                                J$.Ex(393, J$e);
                                            } finally {
                                                if (J$.Fr(401))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 233), J$.T(257, 200, 22, false)));
                            } else {
                                J$.X1(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 'X <= 10', 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 313), J$.T(345, 150, 22, false)));
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
