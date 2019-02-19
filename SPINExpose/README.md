## ExpoSE.js

A simple symbolic execution engine for JavaScript, built using _Jalangi 2_.

### Installation

Requires `node` version v7.5.0 (Others should work but no support is guarenteed), `npm`, `clang`, `clang++`, `gnuplot`, `mitmproxy` (Depends libxml2-dev, libxslt-dev, libssl-dev), `python2` (as python in path). In addition ExpoSE will use tools in the common packages `build-essential` and `coreutils`.

To build all other dependancies and install, simply execute

```sh
$ npm install
```

from the command line.

Note: no administrator privilages are required, but the environment assumes either Mac OS X or a standard(ish) Linux distribution.

This will also add ExpoSE to your path, restarting your terminal should allow expoSE to be executed from anywhere.

### ExpoSE GUI

Start the ExpoSE dashboard with

```sh
$ npm start
```

### ExpoSE CLI

All basic ExpoSE functionality is exposed through the expoSE CLI script. Valid options are `setup`, `test`, `replay` and `test_suite`.

`setup` sets up the environment and pulls most dependancies.
`test` symbolically executes a given test.
`replay` replays a test case with a specific input.
Finally `test_suite` is used to test whether any changes break the interpretter.

### Environment Flags

All environment flags work both with the ExpoSE Dashboard and ExpoSE CLI

### Run without rebuilding

The environment flag NO_COMPILE=1 will make the expoSE script stop recompiling the entire framework between runs (Useful if no source changes are being made)

Example:

```sh
$ NO_COMPILE=1 expoSE target/hello.js
```

NOTE: Logging instructions are removed from the output at compile time so this command conflicts with EXPOSE_LOG_LEVEL being changed

### Printing output of each execution

The environment variable EXPOSE_PRINT_PATHS can be used to toggle whether stdout of each test case will be printed to the terminal. It defaults to false

### Setting log levels

The environment variable EXPOSE_LOG_LEVEL can be used to control the level, with 0 being NONE, 1 being BASE and 2 and 3 increasing logging debug information presented.

Example:
```sh
$ EXPOSE_LOG_LEVEL=1 expoSE target/hello.js
```

### Setting max concurrent tests

The environment variable EXPOSE_MAX_CONCURRENT can be used to set the maximum number of concurrent test cases being checked.

Example:
```sh
$ EXPOSE_MAX_CONCURRENT=10 expoSE target/hello.js
```

### Setting test timeout

To set the test timeout in milliseconds the EXPOSE_TEST_TIMEOUT environment variable can be used.

### Setting max paths

The environment variable EXPOSE_MAX_PATHS can be used to set the maximum number of paths to be executed before terminating the symbolic execution.

Example:
```sh
$ EXPOSE_MAX_PATHS=1 expoSE target/hello.js
```

### Setup without Cleanup
In some rare cases you may want to rerun setup without the cleanup script executing. The environment flag NO_CLEANUP=1 can be used to force this.

```sh
$ NO_CLEANUP=1 ./setup
```
