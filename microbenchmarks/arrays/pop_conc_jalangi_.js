J$.iids = {"8":[7,5,7,18],"9":[3,10,3,11],"10":[5,13,5,24],"16":[11,5,11,17],"17":[3,13,3,14],"18":[5,13,5,40],"24":[15,5,15,18],"25":[3,16,3,17],"26":[5,13,5,60],"33":[3,9,3,18],"34":[7,5,7,18],"41":[3,9,3,18],"42":[11,5,11,17],"49":[3,9,3,18],"50":[15,5,15,18],"57":[5,1,5,8],"65":[5,13,5,20],"73":[5,23,5,24],"81":[5,27,5,40],"89":[5,43,5,47],"97":[5,58,5,59],"105":[5,43,5,60],"107":[5,43,5,57],"113":[5,1,5,61],"115":[5,1,5,12],"121":[5,1,5,62],"129":[7,5,7,6],"137":[7,5,7,13],"145":[7,17,7,18],"153":[8,11,8,26],"161":[8,11,8,26],"169":[8,5,8,27],"177":[11,5,11,6],"185":[11,5,11,12],"187":[11,5,11,10],"193":[11,16,11,17],"201":[12,11,12,26],"209":[12,11,12,26],"217":[12,5,12,27],"225":[15,5,15,6],"233":[15,5,15,13],"241":[15,17,15,18],"249":[16,11,16,26],"257":[16,11,16,26],"265":[16,5,16,27],"273":[1,1,17,2],"281":[1,1,17,2],"289":[7,1,9,2],"297":[11,1,13,2],"305":[15,1,17,2],"313":[1,1,17,2],"321":[1,1,17,2],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/pop_conc.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/arrays/pop_conc_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\n\nvar x = [1, 2, 3];\n\nconsole.log('X is ' + x + ' and JSONd ' + JSON.stringify(x));\n\nif (x.length != 3) {\n    throw 'Unreachable 1';\n}\n\nif (x.pop() != 3) {\n    throw 'Unreachable 2';\n}\n\nif (x.length != 2) {\n    throw 'Unreachable 3';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(273, '/home/blake/artifact/ExpoSE/tests/arrays/pop_conc_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/arrays/pop_conc.js');
            J$.N(281, 'x', x, 0);
            var x = J$.X1(49, J$.W(41, 'x', J$.T(33, [
                J$.T(9, 1, 22, false),
                J$.T(17, 2, 22, false),
                J$.T(25, 3, 22, false)
            ], 10, false), x, 3));
            J$.X1(121, J$.M(113, J$.R(57, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(65, 'X is ', 21, false), J$.R(73, 'x', x, 1), 0), J$.T(81, ' and JSONd ', 21, false), 0), J$.M(105, J$.R(89, 'JSON', JSON, 2), 'stringify', 0)(J$.R(97, 'x', x, 1)), 0)));
            if (J$.X1(289, J$.C(8, J$.B(34, '!=', J$.G(137, J$.R(129, 'x', x, 1), 'length', 0), J$.T(145, 3, 22, false), 0)))) {
                throw J$.X1(169, J$.Th(161, J$.T(153, 'Unreachable 1', 21, false)));
            }
            if (J$.X1(297, J$.C(16, J$.B(42, '!=', J$.M(185, J$.R(177, 'x', x, 1), 'pop', 0)(), J$.T(193, 3, 22, false), 0)))) {
                throw J$.X1(217, J$.Th(209, J$.T(201, 'Unreachable 2', 21, false)));
            }
            if (J$.X1(305, J$.C(24, J$.B(50, '!=', J$.G(233, J$.R(225, 'x', x, 1), 'length', 0), J$.T(241, 2, 22, false), 0)))) {
                throw J$.X1(265, J$.Th(257, J$.T(249, 'Unreachable 3', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
