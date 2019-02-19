J$.iids = {"8":[5,6,5,11],"9":[5,6,5,7],"10":[5,6,5,11],"17":[5,10,5,11],"18":[9,14,9,19],"25":[6,10,6,11],"26":[9,28,9,33],"33":[6,10,6,11],"34":[9,9,9,34],"41":[6,3,6,12],"49":[9,9,9,13],"57":[9,14,9,15],"65":[9,18,9,19],"73":[9,9,9,20],"81":[9,23,9,27],"89":[9,28,9,29],"97":[9,32,9,33],"105":[9,23,9,34],"113":[9,9,9,34],"121":[9,2,9,35],"129":[3,1,10,2],"137":[3,1,10,2],"145":[3,1,10,2],"153":[12,1,12,5],"161":[12,6,12,8],"169":[12,1,12,9],"177":[12,1,12,10],"185":[1,1,12,10],"193":[3,1,10,2],"201":[1,1,12,10],"209":[5,2,7,3],"217":[3,1,10,2],"225":[3,1,10,2],"233":[1,1,12,10],"241":[1,1,12,10],"nBranches":2,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/recursion.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/recursion_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nfunction fibs(n) {\n\t\n\tif (n < 2) {\n\t\treturn n;\n\t}\n\n\treturn fibs(n - 1) + fibs(n - 2);\n}\n\nfibs(15);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(185, '/home/blake/artifact/ExpoSE/tests/core/recursion_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/core/recursion.js');
            function fibs(n) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            n = J$.N(145, 'n', n, 4);
                            if (J$.X1(209, J$.C(8, J$.B(10, '<', J$.R(9, 'n', n, 0), J$.T(17, 2, 22, false), 0)))) {
                                return J$.X1(41, J$.Rt(33, J$.R(25, 'n', n, 0)));
                            }
                            return J$.X1(121, J$.Rt(113, J$.B(34, '+', J$.F(73, J$.R(49, 'fibs', fibs, 1), 0)(J$.B(18, '-', J$.R(57, 'n', n, 0), J$.T(65, 1, 22, false), 0)), J$.F(105, J$.R(81, 'fibs', fibs, 1), 0)(J$.B(26, '-', J$.R(89, 'n', n, 0), J$.T(97, 2, 22, false), 0)), 0)));
                        } catch (J$e) {
                            J$.Ex(217, J$e);
                        } finally {
                            if (J$.Fr(225))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fibs = J$.N(201, 'fibs', J$.T(193, fibs, 12, false, 129), 0);
            J$.X1(177, J$.F(169, J$.R(153, 'fibs', fibs, 1), 0)(J$.T(161, 15, 22, false)));
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
