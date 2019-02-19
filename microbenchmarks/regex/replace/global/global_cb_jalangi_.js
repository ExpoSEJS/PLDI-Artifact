J$.iids = {"8":[11,12,11,21],"9":[1,20,1,27],"10":[5,11,5,25],"16":[9,5,9,13],"17":[1,28,1,32],"18":[9,5,9,13],"25":[1,20,1,33],"26":[11,12,11,21],"33":[1,20,1,33],"41":[1,20,1,33],"49":[2,26,2,38],"57":[2,26,2,45],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,5,4,7],"129":[4,15,4,18],"137":[4,20,4,22],"145":[4,5,4,23],"147":[4,5,4,14],"153":[4,5,4,23],"161":[4,1,4,24],"169":[5,1,5,3],"177":[5,11,5,12],"185":[5,11,5,19],"193":[5,23,5,25],"201":[5,1,5,26],"203":[5,1,5,10],"209":[5,1,5,27],"217":[6,9,6,10],"225":[6,19,6,29],"233":[7,12,7,15],"241":[7,12,7,15],"249":[7,5,7,16],"257":[6,31,8,2],"265":[6,31,8,2],"273":[6,31,8,2],"281":[6,31,8,2],"289":[6,31,8,2],"297":[6,9,8,3],"299":[6,9,6,18],"305":[6,9,8,3],"313":[6,9,8,3],"321":[9,5,9,6],"329":[9,10,9,13],"337":[10,11,10,24],"345":[10,11,10,24],"353":[10,5,10,25],"361":[11,12,11,13],"369":[11,17,11,21],"377":[12,11,12,24],"385":[12,11,12,24],"393":[12,5,12,25],"401":[1,1,13,2],"409":[1,1,13,2],"417":[1,1,13,2],"425":[1,1,13,2],"433":[1,1,13,2],"441":[6,31,8,2],"449":[6,31,8,2],"457":[11,8,13,2],"465":[9,1,13,2],"473":[1,1,13,2],"481":[1,1,13,2],"nBranches":4,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/global/global_cb.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/replace/global/global_cb_jalangi_.js","code":"var S$ = require('S$');\n\nx = S$.symbol('X', '');\n\nS$.assume(x.length <= 10);\n\nvar y = x.replace(/He(l)lo/g, function(zero, one) {\n\treturn one;\n});\n\nif (y == 'l') {\n\tthrow 'Reachable 1';\n} else if (y == 'll') {\n\tthrow 'Reachable 2';\n}\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(401, '/home/blake/artifact/microbenchmarks/regex/replace/global/global_cb_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/replace/global/global_cb.js');
            J$.N(409, '__secret__S$', __secret__S$, 0);
            J$.N(417, '__secret__traits__', __secret__traits__, 0);
            J$.N(425, 'S$', S$, 0);
            J$.N(433, 'y', y, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            J$.X1(161, x = J$.W(153, 'x', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'X', 21, false), J$.T(137, '', 21, false)), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            J$.X1(209, J$.M(201, J$.R(169, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<=', J$.G(185, J$.R(177, 'x', x, 2), 'length', 0), J$.T(193, 10, 22, false), 0)));
            var y = J$.X1(313, J$.W(305, 'y', J$.M(297, J$.R(217, 'x', x, 2), 'replace', 0)(J$.T(225, /He(l)lo/g, 14, false), J$.T(289, function (zero, one) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            zero = J$.N(273, 'zero', zero, 4);
                            one = J$.N(281, 'one', one, 4);
                            return J$.X1(249, J$.Rt(241, J$.R(233, 'one', one, 0)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 257)), y, 3));
            if (J$.X1(465, J$.C(16, J$.B(18, '==', J$.R(321, 'y', y, 1), J$.T(329, 'l', 21, false), 0)))) {
                throw J$.X1(353, J$.Th(345, J$.T(337, 'Reachable 1', 21, false)));
            } else if (J$.X1(457, J$.C(8, J$.B(26, '==', J$.R(361, 'y', y, 1), J$.T(369, 'll', 21, false), 0)))) {
                throw J$.X1(393, J$.Th(385, J$.T(377, 'Reachable 2', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
