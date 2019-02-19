J$.iids = {"9":[3,30,3,31],"17":[3,30,3,33],"25":[3,30,3,33],"33":[3,23,3,34],"41":[3,9,3,35],"49":[3,9,3,35],"57":[3,9,3,35],"65":[3,9,3,35],"73":[3,9,3,35],"81":[3,9,3,35],"89":[4,9,4,24],"97":[4,9,4,24],"105":[4,9,4,24],"113":[4,9,4,24],"121":[4,9,4,24],"129":[4,9,4,24],"137":[5,1,5,2],"145":[5,7,5,8],"153":[5,1,5,8],"161":[5,1,5,9],"169":[6,1,6,2],"177":[6,1,6,4],"185":[6,1,6,6],"193":[6,1,6,7],"201":[1,1,6,7],"209":[1,1,6,7],"217":[1,1,6,7],"225":[3,9,3,35],"233":[3,9,3,35],"241":[4,9,4,24],"249":[4,9,4,24],"257":[1,1,6,7],"265":[1,1,6,7],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/lamda.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/lamda_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar x = function() { return x.y; };\nvar y = function() {};\nx.y = y;\nx()();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(201, '/home/blake/artifact/ExpoSE/tests/core/lamda_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/core/lamda.js');
            J$.N(209, 'x', x, 0);
            J$.N(217, 'y', y, 0);
            var x = J$.X1(81, J$.W(73, 'x', J$.T(65, function x() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            x = J$.N(57, 'x', x, 0);
                            return J$.X1(33, J$.Rt(25, J$.G(17, J$.R(9, 'x', x, 0), 'y', 0)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 41), x, 3));
            var y = J$.X1(129, J$.W(121, 'y', J$.T(113, function y() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            y = J$.N(105, 'y', y, 0);
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 89), y, 3));
            J$.X1(161, J$.P(153, J$.R(137, 'x', x, 1), 'y', J$.R(145, 'y', y, 1), 0));
            J$.X1(193, J$.F(185, J$.F(177, J$.R(169, 'x', x, 1), 0)(), 0)());
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
