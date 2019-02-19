J$.iids = {"8":[10,16,10,28],"9":[1,20,1,27],"10":[6,9,6,19],"16":[8,16,8,26],"17":[1,28,1,32],"18":[8,16,8,26],"24":[6,9,6,19],"25":[1,20,1,33],"26":[10,16,10,28],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,1,5,2],"177":[5,11,5,21],"185":[6,9,6,12],"193":[6,16,6,19],"201":[7,15,7,28],"209":[7,15,7,28],"217":[7,9,7,29],"225":[8,16,8,19],"233":[8,23,8,26],"241":[9,15,9,28],"249":[9,15,9,28],"257":[9,9,9,29],"265":[10,16,10,19],"273":[10,23,10,28],"281":[11,15,11,28],"289":[11,15,11,28],"297":[11,9,11,29],"305":[5,23,13,2],"313":[5,23,13,2],"321":[5,23,13,2],"329":[5,23,13,2],"337":[5,23,13,2],"345":[5,1,13,3],"347":[5,1,5,10],"353":[5,1,13,4],"361":[1,1,13,4],"369":[1,1,13,4],"377":[1,1,13,4],"385":[1,1,13,4],"393":[1,1,13,4],"401":[10,12,12,6],"409":[8,12,12,6],"417":[6,5,12,6],"425":[5,23,13,2],"433":[5,23,13,2],"441":[1,1,13,4],"449":[1,1,13,4],"nBranches":6,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/callback.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/single/callback_jalangi_.js","code":"var S$ = require('S$');\nvar x = S$.symbol('A', '');\n\nx.replace(/^.+(.).+/, function(zero, one) {\n\tif (one == 'p') {\n\t\tthrow 'Reachable 1';\n\t} else if (one == 'c') {\n\t\tthrow 'Reachable 2';\n\t} else if (one == \"dog\") {\n\t\tthrow 'Unreachable';\n\t}\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(361, '/home/blake/artifact/microbenchmarks/regex/replace/single/callback_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/replace/single/callback.js');
            J$.N(369, '__secret__S$', __secret__S$, 0);
            J$.N(377, '__secret__traits__', __secret__traits__, 0);
            J$.N(385, 'S$', S$, 0);
            J$.N(393, 'x', x, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var x = J$.X1(161, J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'A', 21, false), J$.T(137, '', 21, false)), x, 3));
            J$.X1(353, J$.M(345, J$.R(169, 'x', x, 1), 'replace', 0)(J$.T(177, /^.+(.).+/, 14, false), J$.T(337, function (zero, one) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            zero = J$.N(321, 'zero', zero, 4);
                            one = J$.N(329, 'one', one, 4);
                            if (J$.X1(417, J$.C(24, J$.B(10, '==', J$.R(185, 'one', one, 0), J$.T(193, 'p', 21, false), 0)))) {
                                throw J$.X1(217, J$.Th(209, J$.T(201, 'Reachable 1', 21, false)));
                            } else if (J$.X1(409, J$.C(16, J$.B(18, '==', J$.R(225, 'one', one, 0), J$.T(233, 'c', 21, false), 0)))) {
                                throw J$.X1(257, J$.Th(249, J$.T(241, 'Reachable 2', 21, false)));
                            } else if (J$.X1(401, J$.C(8, J$.B(26, '==', J$.R(265, 'one', one, 0), J$.T(273, 'dog', 21, false), 0)))) {
                                throw J$.X1(297, J$.Th(289, J$.T(281, 'Unreachable', 21, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305)));
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
