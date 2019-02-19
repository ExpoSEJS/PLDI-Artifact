/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

function buildTestList() {
    var testList = [];

    function buildTest(file, expectPaths, expectErrors) {
        testList.push({
            path: file,
            expectPaths: expectPaths,
            expectErrors: expectErrors
        });
    }
    /**
     * Regular Expression Feature Test
     */

    /**
     * Core language tests
     */
    buildTest('regex/core/alternation/simple.js', 4, 4);
    buildTest('regex/core/alternation/many.js', 4, 4);
    buildTest('regex/core/alternation/words.js', 4, 4);
    buildTest('regex/core/alternation/exhaustive_simple.js', 5, 5);
    buildTest('regex/core/alternation/multiple_related.js', 7, 7);
    buildTest('regex/core/johannes', 5, 4);

    buildTest('regex/core/literals/simple_one.js', 2, 1);
    buildTest('regex/core/literals/simple_two.js', 2, 1);
    buildTest('regex/core/literals/long_example.js', 2, 2);
    buildTest('regex/core/literals/empty_example.js', 2, 2);
    buildTest('regex/core/literals/mixed_escaped.js', 3, 3); //TODO: Should this be 2 */
    buildTest('regex/core/literals/non_alpha.js', 2, 2);
    buildTest('regex/core/literals/multiple.js', 4, 4);

    /**
    *    TODO: Find out of unicode support is possible through some screwing with Z3 strings
    *    buildTest('regex/core/escaping/hex.js', 5, 4);
    *    buildTest('regex/core/escaping/unicode.js', 6, 5);
    *    buildTest('regex/core/escaping/unicode_mode.js', 6, 5);
    */

    buildTest('regex/core/escaping/ranges.js', 8, 8);
    buildTest('regex/core/escaping/negative_ranges.js', 3, 2);
    buildTest('regex/core/escaping/space_class.js', 8, 7);
    buildTest('regex/core/escaping/word.js', 3, 2);
    buildTest('regex/core/escaping/digit.js', 3, 2);

    buildTest('regex/core/star/star.js', 7, 7);
    buildTest('regex/core/star/online.js', 11, 10);
    buildTest('regex/core/star/lazy.js', 7, 7);
    buildTest('regex/core/star/multiple.js', 5, 5);

    buildTest('regex/core/plus/plus.js', 12, 11);
    buildTest('regex/core/plus/lazy.js', 12, 11);

    buildTest('regex/core/plus/online.js', 11, 10);
    buildTest('regex/core/plus/multiple.js', 4, 4);

    buildTest('regex/core/loops/fixed_loop.js', 3, 2);
    buildTest('regex/core/loops/between_loop.js', 9, 8);
    buildTest('regex/core/loops/minimum_loop.js', 6, 5);

    buildTest('regex/core/optional/base.js', 13, 12);
    buildTest('regex/core/optional/combined.js', 9, 8);
    buildTest('regex/core/optional/no_greed.js', 13, 12);

    buildTest('regex/core/optional/range.js', 3, 2);

    /**
     * Lazy Operator Tests
     */

    buildTest('regex/lazy/lazy_1.js', 3, 2);
    buildTest('regex/lazy/lazy_2.js', 2, 1);
    buildTest('regex/lazy/lazy_3.js', 3, 2);
    buildTest('regex/lazy/lazy_4.js', 2, 1);
    buildTest('regex/lazy/lazy_5.js', 3, 2);

    buildTest('regex/lazy/lazy_6.js', 3, 2);

    /**
     * Anchors Tests
     */
    buildTest('regex/anchors/left.js', 3, 3);
    buildTest('regex/anchors/none.js', 4, 4);
    buildTest('regex/anchors/both.js', 2, 1);

    /**
     * Assertion Tests
     */

    buildTest('regex/assertions/ahead.js', 1, 0);
    buildTest('regex/assertions/ahead_2.js', 2, 1);
    buildTest('regex/assertions/ahead_3.js', 2, 1);
    buildTest('regex/assertions/ahead_4.js', 4, 3);
    buildTest('regex/assertions/ahead_6.js', 2, 1);
    buildTest('regex/assertions/ahead_7.js', 2, 1);
    buildTest('regex/assertions/ahead_8.js', 2, 1);
    buildTest('regex/assertions/ahead_9.js', 2, 1);

    /**
     * Backreference Tests
     */
    buildTest('regex/backreferences/closed.js', 2, 1);
    buildTest('regex/backreferences/closed_limited.js', 2, 1);
    buildTest('regex/backreferences/closed_range.js', 3, 2);
    buildTest('regex/backreferences/closed_limited.js', 3, 1); //Extra path from assume

    //These we can fail because of restrictions on S
    buildTest('regex/backreferences/closed_loop.js', 2, 1);
    buildTest('regex/backreferences/closed_loop_minor.js', 2, 1);
    buildTest('regex/backreferences/closed_loop_interleaved.js', 2, 1);
    buildTest('regex/backreferences/closed_loop_complex.js', 3, 2);

    //Start of open group tests, these will fail often due to restriction on S
    buildTest('regex/backreferences/open.js', 5, 4);
    buildTest('regex/backreferences/open_two.js', 4, 3);
    buildTest('regex/backreferences/open_three.js', 4, 3);

    /**
     * End of backreference tests
     */

    buildTest('regex/captures/greedy2.js', 3, 2);
    buildTest('regex/captures/greedy_capture.js', 3, 2);
    buildTest('regex/captures/simple.js', 4, 3);
    buildTest('regex/captures/anchors.js', 4, 3);
    buildTest('regex/captures/related.js', 3, 2);
    buildTest('regex/captures/multiple_locked.js', 2, 1);

    buildTest('regex/exec/greed/anchors.js', 4, 3);
    buildTest('regex/exec/greed/optionals.js', 3, 2);
    buildTest('regex/exec/greed/related.js', 3, 2);

    /**
     * Match Tests
     */

    buildTest('regex/match/captures/greedy2.js', 3, 2);
    buildTest('regex/match/captures/greedy_capture.js', 3, 2);
    buildTest('regex/match/captures/simple.js', 4, 3);
    buildTest('regex/match/captures/anchors.js', 4, 3);
    buildTest('regex/match/captures/related.js', 3, 2);
    buildTest('regex/match/captures/multiple_locked.js', 2, 1);

    buildTest('regex/match/greed/anchors.js', 4, 3);
    buildTest('regex/match/greed/optionals.js', 3, 2);
    buildTest('regex/match/greed/related.js', 3, 2);

    buildTest('regex/match/global/test1.js', 7, 2);

    /**
     * Replace application model tests
     */

		 buildTest('regex/replace/single/callback.js', 4, 2);
     buildTest('regex/replace/single/single_replace.js', 5, 3);
     buildTest('regex/replace/single/replace_2.js', 3, 2);
     buildTest('regex/replace/single/replace_3.js', 4, 3);
     buildTest('regex/replace/substitute/substitute.js', 2, 2);

		 buildTest('regex/replace/global/global_cb.js', 10, 6);

     /**
      * Split application model tests
      */
 
     buildTest('regex/split/split_2', 6, 0);
     buildTest('regex/split/split_3', 15, 3);
     buildTest('regex/split/split_4', 35, 0);

    /**
     * Sticky model tests
     */
    buildTest('regex/test/flags/sticky', 3, 1);
    buildTest('regex/test/flags/sticky2.js', 3, 2);
 
    /**
     * Search application model tests
     */

    buildTest('regex/search/simple.js', 2, 2);
    buildTest('regex/search/ambiguous1.js', 3, 2);
    buildTest('regex/search/ambiguous2.js', 3, 1); //One extra path spawned by assume command
    buildTest('regex/search/ambiguous3.js', 3, 2); //One extra path spawned by assume command
    buildTest('regex/search/ambiguous4.js', 6, 2); //Forking on test creates redundent (but correct) paths 
    buildTest('regex/search/alt.js', 3, 3);
    buildTest('regex/search/not_at_start.js', 3, 3);
    buildTest('regex/search/test_at_start.js', 5, 4);

    /**
     * End of regular expression feature tests
     */

    return testList;
}

exports["default"] = buildTestList();
module.exports = exports["default"];
