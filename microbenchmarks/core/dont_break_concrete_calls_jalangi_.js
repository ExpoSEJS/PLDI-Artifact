J$.iids = {"8":[6,5,6,32],"9":[6,5,6,12],"10":[6,5,6,32],"16":[10,5,10,20],"17":[6,20,6,21],"18":[14,5,14,23],"24":[14,5,14,23],"25":[6,23,6,24],"26":[18,5,18,24],"32":[18,5,18,24],"33":[6,5,6,25],"34":[26,5,26,25],"35":[6,5,6,19],"40":[22,5,22,23],"41":[6,30,6,32],"42":[31,5,31,23],"48":[26,5,26,25],"49":[7,8,7,23],"56":[31,5,31,23],"57":[7,8,7,23],"65":[7,2,7,24],"73":[10,5,10,11],"81":[10,17,10,19],"89":[10,5,10,20],"91":[10,5,10,16],"97":[11,8,11,23],"105":[11,8,11,23],"113":[11,2,11,24],"121":[14,6,14,12],"129":[14,18,14,22],"137":[14,6,14,23],"139":[14,6,14,17],"145":[15,8,15,23],"153":[15,8,15,23],"161":[15,2,15,24],"169":[18,6,18,10],"177":[18,20,18,23],"185":[18,6,18,24],"187":[18,6,18,19],"193":[19,8,19,23],"201":[19,8,19,23],"209":[19,2,19,24],"217":[22,5,22,9],"225":[22,19,22,22],"233":[22,5,22,23],"235":[22,5,22,18],"241":[23,8,23,23],"249":[23,8,23,23],"257":[23,2,23,24],"265":[26,5,26,9],"273":[26,16,26,19],"281":[26,5,26,20],"283":[26,5,26,15],"289":[26,24,26,25],"297":[27,2,27,9],"305":[27,14,27,18],"313":[27,25,27,28],"321":[27,14,27,29],"323":[27,14,27,24],"329":[27,2,27,30],"331":[27,2,27,13],"337":[27,2,27,31],"345":[28,8,28,23],"353":[28,8,28,23],"361":[28,2,28,24],"369":[31,5,31,9],"377":[31,16,31,17],"385":[31,5,31,18],"387":[31,5,31,15],"393":[31,22,31,23],"401":[32,8,32,23],"409":[32,8,32,23],"417":[32,2,32,24],"425":[1,1,33,2],"433":[6,1,8,2],"441":[10,1,12,2],"449":[14,1,16,2],"457":[18,1,20,2],"465":[22,1,24,2],"473":[26,1,29,2],"481":[31,1,33,2],"489":[1,1,33,2],"497":[1,1,33,2],"nBranches":14,"originalCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/dont_break_concrete_calls.js","instrumentedCodeFileName":"/home/blake/artifact/ExpoSE/tests/core/dont_break_concrete_calls_jalangi_.js","code":"/**\n * This test case checks that we don't break concrete calls for some modelled functions\n * (As the concrete pathway is the same for all modelled calls hopefully this non-exhaustive list will be sufficient)\n */\n\nif (\"Hello\".substr(0, 0) !== \"\") {\n\tthrow 'Unreachable 1';\n}\n\nif (/^..$/.test('')) {\n\tthrow 'Unreachable 2';\n}\n\nif (!/^..$/.test('ab')) {\n\tthrow 'Unreachable 3';\n}\n\nif (!\"ab\".includes('a')) {\n\tthrow 'Unreachable 4';\n}\n\nif (\"ab\".includes('c')) {\n\tthrow 'Unreachable 5';\n}\n\nif (Math.round(5.5) != 6) {\n\tconsole.log(Math.round(5.5));\n\tthrow 'Unreachable 6';\n}\n\nif (Math.round(5) != 5) {\n\tthrow 'Unreachable 7';\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(425, '/home/blake/artifact/ExpoSE/tests/core/dont_break_concrete_calls_jalangi_.js', '/home/blake/artifact/ExpoSE/tests/core/dont_break_concrete_calls.js');
            if (J$.X1(433, J$.C(8, J$.B(10, '!==', J$.M(33, J$.T(9, "Hello", 21, false), 'substr', 0)(J$.T(17, 0, 22, false), J$.T(25, 0, 22, false)), J$.T(41, "", 21, false), 0)))) {
                throw J$.X1(65, J$.Th(57, J$.T(49, 'Unreachable 1', 21, false)));
            }
            if (J$.X1(441, J$.C(16, J$.M(89, J$.T(73, /^..$/, 14, false), 'test', 0)(J$.T(81, '', 21, false))))) {
                throw J$.X1(113, J$.Th(105, J$.T(97, 'Unreachable 2', 21, false)));
            }
            if (J$.X1(449, J$.C(24, J$.U(18, '!', J$.M(137, J$.T(121, /^..$/, 14, false), 'test', 0)(J$.T(129, 'ab', 21, false)))))) {
                throw J$.X1(161, J$.Th(153, J$.T(145, 'Unreachable 3', 21, false)));
            }
            if (J$.X1(457, J$.C(32, J$.U(26, '!', J$.M(185, J$.T(169, "ab", 21, false), 'includes', 0)(J$.T(177, 'a', 21, false)))))) {
                throw J$.X1(209, J$.Th(201, J$.T(193, 'Unreachable 4', 21, false)));
            }
            if (J$.X1(465, J$.C(40, J$.M(233, J$.T(217, "ab", 21, false), 'includes', 0)(J$.T(225, 'c', 21, false))))) {
                throw J$.X1(257, J$.Th(249, J$.T(241, 'Unreachable 5', 21, false)));
            }
            if (J$.X1(473, J$.C(48, J$.B(34, '!=', J$.M(281, J$.R(265, 'Math', Math, 2), 'round', 0)(J$.T(273, 5.5, 22, false)), J$.T(289, 6, 22, false), 0)))) {
                J$.X1(337, J$.M(329, J$.R(297, 'console', console, 2), 'log', 0)(J$.M(321, J$.R(305, 'Math', Math, 2), 'round', 0)(J$.T(313, 5.5, 22, false))));
                throw J$.X1(361, J$.Th(353, J$.T(345, 'Unreachable 6', 21, false)));
            }
            if (J$.X1(481, J$.C(56, J$.B(42, '!=', J$.M(385, J$.R(369, 'Math', Math, 2), 'round', 0)(J$.T(377, 5, 22, false)), J$.T(393, 5, 22, false), 0)))) {
                throw J$.X1(417, J$.Th(409, J$.T(401, 'Unreachable 7', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
