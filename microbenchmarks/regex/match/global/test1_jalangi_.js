J$.iids = {"8":[7,5,7,18],"9":[1,20,1,27],"10":[5,11,5,25],"16":[12,13,12,19],"17":[1,28,1,32],"18":[7,5,7,18],"24":[11,21,11,35],"25":[1,20,1,33],"26":[11,21,11,35],"32":[10,5,10,8],"33":[1,20,1,33],"34":[11,37,11,40],"41":[1,20,1,33],"49":[2,26,2,38],"50":[11,37,11,40],"57":[2,26,2,45],"58":[12,13,12,19],"65":[2,26,2,45],"73":[2,26,2,45],"81":[3,10,3,17],"89":[3,18,3,22],"97":[3,10,3,23],"105":[3,10,3,23],"113":[3,10,3,23],"121":[4,9,4,11],"129":[4,19,4,22],"137":[4,24,4,26],"145":[4,9,4,27],"147":[4,9,4,18],"153":[4,9,4,27],"161":[4,9,4,27],"169":[5,1,5,3],"177":[5,11,5,12],"185":[5,11,5,19],"193":[5,23,5,25],"201":[5,1,5,26],"203":[5,1,5,10],"209":[5,1,5,27],"217":[6,11,6,12],"225":[6,19,6,27],"233":[6,11,6,28],"235":[6,11,6,18],"241":[6,11,6,28],"249":[6,11,6,28],"257":[7,5,7,6],"265":[7,10,7,18],"273":[8,11,8,22],"281":[8,11,8,22],"289":[8,5,8,23],"297":[10,5,10,8],"305":[11,18,11,19],"313":[11,18,11,19],"321":[11,18,11,19],"329":[11,21,11,22],"337":[11,25,11,28],"345":[11,25,11,35],"361":[11,37,11,38],"369":[11,37,11,40],"385":[12,13,12,14],"393":[12,18,12,19],"401":[13,19,13,30],"409":[13,19,13,30],"417":[13,13,13,31],"425":[1,1,16,2],"433":[1,1,16,2],"441":[1,1,16,2],"449":[1,1,16,2],"457":[1,1,16,2],"465":[1,1,16,2],"473":[1,1,16,2],"481":[7,1,9,2],"489":[12,9,14,10],"497":[11,5,15,6],"505":[11,5,15,6],"513":[10,1,16,2],"521":[1,1,16,2],"529":[1,1,16,2],"nBranches":8,"originalCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/global/test1.js","instrumentedCodeFileName":"/home/blake/artifact/microbenchmarks/regex/match/global/test1_jalangi_.js","code":"var S$ = require('S$');\nvar a = S$.symbol('A', '');\n\nS$.assume(a.length <= 20);\n\nvar res = a.match(/Testi/g);\n\n//Test that other string constraints will still get generated after a match\nif (a == \"HotDog\") {\n\tthrow 'Reachable';\n} \n\n//Test that we can find this enumeration-required case in a match operation\nif (res) {\n\tfor (var i = 0; i < res.length; i++) {\n\t\tif (i == 3) {\n\t\t\tthrow 'Reachable';\n\t\t}\n\t}\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(425, '/home/blake/artifact/microbenchmarks/regex/match/global/test1_jalangi_.js', '/home/blake/artifact/microbenchmarks/regex/match/global/test1.js');
            J$.N(433, '__secret__S$', __secret__S$, 0);
            J$.N(441, '__secret__traits__', __secret__traits__, 0);
            J$.N(449, 'S$', S$, 0);
            J$.N(457, 'a', a, 0);
            J$.N(465, 'res', res, 0);
            J$.N(473, 'i', i, 0);
            var __secret__S$ = J$.X1(41, J$.W(33, '__secret__S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), __secret__S$, 3));
            var __secret__traits__ = J$.X1(73, J$.W(65, '__secret__traits__', J$.G(57, J$.R(49, '__secret__S$', __secret__S$, 1), 'Traits', 0), __secret__traits__, 3));
            var S$ = J$.X1(113, J$.W(105, 'S$', J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, 'S$', 21, false)), S$, 3));
            var a = J$.X1(161, J$.W(153, 'a', J$.M(145, J$.R(121, 'S$', S$, 1), 'symbol', 0)(J$.T(129, 'A', 21, false), J$.T(137, '', 21, false)), a, 3));
            J$.X1(209, J$.M(201, J$.R(169, 'S$', S$, 1), 'assume', 0)(J$.B(10, '<=', J$.G(185, J$.R(177, 'a', a, 1), 'length', 0), J$.T(193, 20, 22, false), 0)));
            var res = J$.X1(249, J$.W(241, 'res', J$.M(233, J$.R(217, 'a', a, 1), 'match', 0)(J$.T(225, /Testi/g, 14, false)), res, 3));
            if (J$.X1(481, J$.C(8, J$.B(18, '==', J$.R(257, 'a', a, 1), J$.T(265, 'HotDog', 21, false), 0)))) {
                throw J$.X1(289, J$.Th(281, J$.T(273, 'Reachable', 21, false)));
            }
            if (J$.X1(513, J$.C(32, J$.R(297, 'res', res, 1)))) {
                for (var i = J$.X1(321, J$.W(313, 'i', J$.T(305, 0, 22, false), i, 3)); J$.X1(497, J$.C(24, J$.B(26, '<', J$.R(329, 'i', i, 1), J$.G(345, J$.R(337, 'res', res, 1), 'length', 0), 0))); J$.X1(505, J$.B(50, '-', i = J$.W(369, 'i', J$.B(42, '+', J$.U(34, '+', J$.R(361, 'i', i, 1)), J$.T(353, 1, 22, false), 0), i, 2), J$.T(377, 1, 22, false), 0))) {
                    if (J$.X1(489, J$.C(16, J$.B(58, '==', J$.R(385, 'i', i, 1), J$.T(393, 3, 22, false), 0)))) {
                        throw J$.X1(417, J$.Th(409, J$.T(401, 'Reachable', 21, false)));
                    }
                }
            }
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
