# "Sound Regular Expression Semantics for Dynamic Symbolic Execution of JavaScript" PLDI 2019 Paper#678 Artifact Evaluation
  
The central contribution of this paper is a modification to the ExpoSE symbolic execution engine adding support for complex JavaScript regular expressions. The support for these regular expressions will often lead to better program analysis in JavaScript applications as the feature is highly utilized. A core part of this support is the introduction of a CEGAR loop on top of the solver which can make small corrections to SMT problems to account for incorrect matching precedence.

This artifact submission accompanies our PLDI 2019 paper. We include an automatic installation script for the complete artifact and a virtual machine image. We recommend the use of the virtual machine image in most cases, however if trying to repeat the larger the experiments we encourage direct installation as the performance overhead significantly impacts coverage results.

## Getting Started

In order to evaluate the contributions made in the paper we require two versions of ExpoSE: 

- One including our modifications (as described in this work)
- One without (as originally presented in SPIN'17, [24])

This section covers setting up an environment with ExpoSE as presented in our PLDI paper and the original version. We provide both a VirtualBox image and installation script. The following instructions are for direct installation via the script. If using a virtual machine then skip to Virtual Machine Image heading in getting started.

### System Requirements

The following libraries are required for ExpoSE to install properly. We have tested this installation on both Mac OS X and Ubuntu (16.04 Onward), similar systems should install painlessly, but troubleshooting may be more difficult. 

- Node.js 8.15.0 (as node in $PATH)
- Npm 6.4.1 (as npm in $PATH)
- clang (tested with 3.7)
- make
- git
- python 2.7 (as python in $PATH)

### Installation

A Git repository containing the installation script is available at https://github.com/ExpoSEJS/PLDI-Artifact. The install script will prepare both versions of ExpoSE. It will also prepare a set of sample libraries to test the tool against. To install execute `$ ./install` on a system once all dependencies are installed. If installation is successful then all test cases should pass.

On most systems installation should be:
```
git clone https://github.com/ExpoSEJS/PLDI-Artifact.git
cd PLDI-Artifact
./install
```

On a successful installation, the script will output:
```
**************************
*         Summary        *
**************************
*        164 complete     *
*        0 errors        *
**************************
```
and 
```
**************************
*         Summary        *
**************************
*        26 complete     *
*        0 errors        *
**************************
```
somewhere in there output, corresponding to the tests of each version of ExpoSE. On some systems test cases may raise a warning because they take more than 60s to finish, this does not mean that an error has occurred.

### Virtual Machine Image

We have prepared a VirtualBox image running Ubuntu server with the artifact pre-installed. The VirtualBox image is available [TODO: HERE].

Once the machine has finished booting the user details

```
username: test
password: test
```

can be used to login to our sample user. From there the folder artifact will contain an exact copy of our artifact as it would be created by our installation script.

## Analysing Regular Expression Usage
In Section 7.1 of the paper we present a survey of regular expressions. In this artifact, we have included the crawler used to conduct this survey. We have also included a set of pre-packaged libraries, in order to make testing this crawler straightforward.

## The Regular Expression Crawler
Run the command 
```
./run_small_regex_crawl
```
to launch the crawler. In real-time, this will give information on each package as it processes them. This should be very quick on the small sample of packages we have provided. The crawler may raise some parsing errors. These are normal, and occur when files look like JavaScript but Acorn cannot correctly parse them. In these cases we progress as far as we can through a fail before discarding the rest.

A complete list of regular expressions found will be added to the file `OutputCrawl` in the same directory. Output lines are formatted JSON, an example of which is:
```
{"tag":"regex","regex":"Z|[+-]\\d\\d(?::?\\d\\d)?","cmod":"../SampleCrawlerPackages//moment-develop","cfile":"../SampleCrawlerPackages//moment-develop/src/lib/parse/regex.js","flags":"gi","v":{"pattern":"Z|[+-]\\d\\d(?::?\\d\\d)?","flags":"gi","value":{}}}
```
Each field is described as follows:

- The `regex` field specifies the full source of the regular expression
- The `flags` field contains the flags the regular expression was executed with
- The `cmod` field contains the package the regular expression was identified in
- The `cfile` field marks which file within the package the regular expression is contained within
- The `v` field contains debugging information and can be ignored

To analyze regular expression usage in a custom package:
- Add the desired package to the `SampleCrawlerPackages` directory
- Rerun `./run_small_regex_crawl`, the package will be automatically detected when the crawler is launched.  

### Repeating the Experiment 
In order to repeat the entire survey across npm, a tool called Scraper is provided in artifact/crawlr/Scraper/. To use this first an entire NPM database must be downloaded with the dl_all script. Next, the run script should be called with the downloaded database. Then each package on NPM will be downloaded as a tarball and extracted. The entire database is quite large and downloading it will take some time.

## Evaluating ExpoSE
In this section we show how to use ExpoSE on simple programs (microbenchmarks) and on full npm libraries (using our automated harness generation tool). Finally, we detail how you can construct your own symbolic test case and then analyze it with ExpoSE. The claims in our paper (Sections 7.2-7.4) can be evaluated through execution of our microbenchmark suite and by execution of ExpoSE on real programs through an automated harness generator. 

### Testing Each Feature

In ExpoSE all of the features described in the paper are now enabled by default. Environment flags are used to disable the features and can be used to test the impact of a specific feature on program coverage. The features represent the support levels described in Table 7 of the paper. The feature flags are:

- Disable regular expression support: Setting `EXPOSE_DISABLE_REGULAR_EXPRESSIONS=1 ...` will disable regular expressions entirely, forcing concretization. 
- Disable symbolic capture group support: Setting `EXPOSE_DISABLE_CAPTURE_GROUPS=1 ...` will disable symbolic modelling of the capture groups within regular expressions, but still generate paths for the regular expressions themselves.
- Disable CEGAR refinement scheme: `EXPOSE_DISABLE_REFINEMENTS=1 ...` will disable the CEGAR scheme. If this is set then created paths will not be checked for correctness and analysis may be unsound.

### Evaluating against micro benchmarks

To evaluate the claims made in the paper we provide a micro benchmark suite. The two scripts for this are:

- `./run_spin_on_microbenchmarks`: Execute the microbenchmarks with ExpoSE as in previous work at SPIN'17 [24].
- `./run_pldi_on_microbenchmarks`: Execute the microbenchmarks with ExpoSE as presented in this work.

After each test suite has finished executing it will provide an error count. We recommend executing the ExpoSE several times with the following configurations:

- `EXPOSE_DISABLE_REGULAR_EXPRESSIONS=1 ./run_pldi_on_microbenchmarks`: Execute ExpoSE with no support for regular expressions. 
- `EXPOSE_DISABLE_CAPTURE_GROUPS=1 ./run_pldi_on_microbenchmarks`: Execute ExpoSE with support for all regular expression features except capture groups.
- `EXPOSE_DISABLE_REFINEMENTS=1 ./run_pldi_on_microbenchmarks`: Execute ExpoSE with all features but no CEGAR refinement loop (Note: In this mode ExpoSE may produce different errors with each execution of the tests due to nondeterminism).
- `./run_pldi_on_microbenchmarks`: Execute ExpoSE with all features.
- `./run_spin_on_microbenchmarks`: Execute the legacy version of ExpoSE with limited support for regular expressions [24].

After executing each of these commands you should see the number of failing test cases decrease corresponding to the increased support. The test suite has cases for the regular expression methods match, split, exec, search and test and tests a variety of language features, including cases that are likely to fail if operator matching precedence is not correctly represented.

Note: The legacy version of ExpoSE [24] also supports capture groups and has limited backreference support. It still performs poorly in comparison to the current version of ExpoSE with capture groups enabled due to support for other features such as assertions, search, replace and split.

### Constructing your own test cases

We now detail how to construct your own test cases. Two more scripts are used for this:
- `./run_script_pldi FILE_NAME`: Execute a Node.js program with ExpoSE as presented in this work.
- `./run_script_spin FILE_NAME`: Execute a Node.js with the legacy version of ExpoSE [24].

To execute a script with ExpoSE we need to first mark some variables as symbolic. Imagine we want to test the simple program:
```
var emailAddress = input();

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
  throw 'This is an email address!';
}
```

We first import a hidden library, `S$`, which contains helper methods for constructing symbols.
```
var S$ = require('S$');
```

Next, we use the method `S$.symbol(SymbolName, InitialSeed)` to construct a new symbol. `SymbolName` should be a string, which will define the name of the symbol. `InitialSeed` is the initial concrete seed used in the analysis. Note that the type of `InitialSeed` defines the type of the symbolic variable.
```
var emailAddress = S$.symbol('Email Address', 'hello world');
```

Putting that all together we get the program:
```
var S$ = require('S$');
var emailAddress = S$.symbol('Email Address', 'hello world');

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
  throw 'This is an email address!';
}
```

Executing this with `./run_script_pldi ./example_script.js`. Because the regular expression is complex this might take a while is complete, but after execution we should see output like:
```
[+] {"_bound":0,"Email Address":"hello world"} took 0.31s
[+] {"Email Address":"_Y@3.P8","_bound":21} took 0.0013s
[!] This is an email address!
[!] expoSE replay '/home/artifact/example_script.js' '{"Email Address":"_Y@3.P8","_bound":21}'
```

The [+] lines here indicate test case inputs, and the [!] indicates an uncaught exception (triggered by our throw!).

### Executing on real libraries (with automated harness generation)

We provide an automated test harness generator to test the engine on real JavaScript libraries. This facility is provided through two scripts:

- `./run_automatic_harness_pldi LIBRARY_NAME`: Execute an automated harness with the version of ExpoSE presented in this paper.
- `./run_automatic_harness_spin LIBRARY_NAME`: Execute an automated harness with the legacy version of ExpoSE [24].

Each of these scripts will automatically fetch a specified library from NPM and then attempt to execute it using an automatically generated harness.

For example, in order to test the npm package minimist with the new version of ExpoSE, run the following command:
```
./run_automatic_harness_pldi minimist
```
As before each test case and exception will be added to the program output after execution, for example the following is a test case which failed because of an lookup on the field `length`:
```
[+] {"ExpandSwitch":false,"Constructed_Argument_t":"array_string","Constructed_Argument":["--\u0004\n\u0000"],"Constructed_Argument_2_t":"","CreateAsClass":false,"ExpandObjSwitcher":0,"_bound":46} took 0.0171s
[!] TypeError: Cannot read property 'length' of undefined
[!] expoSE replay '../lib/Harness/src/harness.js' '{"ExpandSwitch":false,"Constructed_Argument_t":"array_string","Constructed_Argument":["--\u0004\n\u0000"],"Constructed_Argument_2_t":"","CreateAsClass":false,"ExpandObjSwitcher":0,"_bound":46}'
```
Additionally, the output will contain statistics on how many queries and regular expression have been treated. These will look like:
```
[+] General Function Call: 4955
[+] Symbolic Values: 1470
[+] Symbolic Primitives: 1274
[+] Pure Symbols: 781
[+] Wrapped Constants: 5157
[+] Symbolic Binary: 4866
[+] Modeled Function Call: {"push":1597,"apply":169,"concat":418,"filter":363,"forEach":812,"test":7689,"split":52,"indexOf":23,"match":12,"slice":7}
[+] Max Queries (Any): 21
[+] Max Queries (Succesful): 21
[+] Symbolic Field: 239
[+] Symbolic Object Field Lookups: 443
[+] Symbolic Unary: 82
[+] Symbolic Arrays: 61
[+] Failed Queries: 53
[+] Regex Encoded: 195
[+] Regex Which May Need Checks: 195
[+] Regex Checks: 544
[+] Failed Regex Checks: 100
[+] Concretized Function Calls: {"slice":2,"Number":5}
```
This tells us that in this execution 195 regular expressions are encountered, triggering 544 CEGAR checks, 100 of which required further refinement.

Note: Error counts from automated harnesses should be ignored. As we do not know the expected type signatures of library methods we attempt to explore them through systematic type enumeration. This creates a large number of test cases which fail due to uncaught thrown exceptions.

### Viewing Solver Time Statistics

In Table 8 we describe the solver time statistics for packages and queries. In order to generate per-path query statistics the `EXPOSE_QUERY_DUMP="directory path"` environment variable must be set. For example, if we run:
```
mkdir ~/expose_query_info/; EXPOSE_QUERY_DUMP=~/expose_query_info/ ./run_automatic_harness_pldi minimist
```

After analysis has finished executed some paths, running `ls ~/expose_query_info` should display a set of files. Inside each of these files contains a set of JSON encoded information about query statistics for a given path. We have included a tool to interpret these results. Running:
```
node ./summarize_dump.js ~/expose_query_info/
```
will give summarized information about all queries in the path. It should look something like:
```
Queries took an average of 397ms (total time in solver 494447ms) (total queries 1245)
1201 / 1245 (96.5%) queries failed (unknown/unsat)
0 (0%) queries failed (unknown result) because max refinements was hit.
1291 attempts in 1245 queries (103.5%)
Max attempts: 22
Max attempts (with SAT): 22
CEGAR-potential queries: 67
CEGAR-using quries: 14
0% CEGAR uses hit max-limit
67 queries contained at least one RE
```
which gives detailed information about how many queries used CEGAR, how many queries hit the refinement limit, what the increased SMT query overhead has been from the CEGAR scheme (in this case 103%). It also lists how much time has been spent in the solver per query and in total. Note that failed queries are due to unsatisfiability or solver timeouts, and that the number of CEGAR queries that hit the max limit refers to the refinement limit in our paper. As these query directories are not cleaned up automatically between executions it is important to clear it (`rm ~/expose_query_info/*`) between executions.

Note: Query statistics are only supported on the new version of ExpoSE and the legacy version will ignore the flag.

## Repeating all experiments 

The experiments from the paper take a significant amount of time to run as each library needs to be re-executed 4 times (once for each of the features tested) and takes roughly an hour to execute each time. Running on a single machine the experiments may take several months to complete. If recreating the experiments we strongly recommend not using a virtual machine, as the decreased performance may reduce program coverage.
