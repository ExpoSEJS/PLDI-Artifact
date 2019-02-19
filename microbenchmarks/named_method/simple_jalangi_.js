J$.iids = {"9":[3,10,3,12],"17":[3,10,3,12],"25":[3,10,3,12],"33":[5,1,5,3],"41":[6,2,6,9],"49":[6,14,6,18],"57":[6,2,6,19],"59":[6,2,6,13],"65":[6,2,6,20],"73":[5,8,7,2],"81":[5,8,7,2],"89":[5,8,7,2],"97":[5,8,7,2],"105":[5,1,7,2],"113":[5,1,7,3],"121":[9,1,9,3],"129":[9,1,9,7],"131":[9,1,9,5],"137":[9,1,9,8],"145":[1,1,9,8],"153":[1,1,9,8],"161":[5,8,7,2],"169":[5,8,7,2],"177":[1,1,9,8],"185":[1,1,9,8],"nBranches":0,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/named_method/simple.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/named_method/simple_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar me = {};\n\nme.q = function hi() {\n\tconsole.log('Hi');\n}\n\nme.q();\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(145, '/home/blake/artifact/ExpoSE/tests/named_method/simple_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/named_method/simple.js');
            J$.N(153, 'me', me, 0);
            var me = J$.X1(25, J$.W(17, 'me', J$.T(9, {}, 11, false), me, 3));
            J$.X1(113, J$.P(105, J$.R(33, 'me', me, 1), 'q', J$.T(97, function hi() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            hi = J$.N(89, 'hi', hi, 0);
                            J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, 'Hi', 21, false)));
                        } catch (J$e) {
                            J$.Ex(161, J$e);
                        } finally {
                            if (J$.Fr(169))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 73), 0));
            J$.X1(137, J$.M(129, J$.R(121, 'me', me, 1), 'q', 0)());
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
