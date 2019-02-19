# ExpoSE Artifact Evaluation
  
The central technical contribution of this paper is a modification to the ExpoSE symbolic execution engine adding support for complex JavaScript regular expressions. The support for these regular expressions will often lead to better program analysis in JavaScript applications, as they are highly utilized. A core part of this support is the introduction of a CEGAR loop on top of the solver which can make small corrections to SMT problems to account for incorrect matching precedence.

This artifact submission accompanies our PLDI 2019 paper. We include an automatic installation script for the complete artifact and a virtual machine image. We recommend the use of the virtual machine image in most cases, however if trying to repeat the larger the experiments we encourage direct installation as the performance overhead significantly impacts coverage results.

# Getting Started

This section covers setting up an environment with ExpoSE as presented in our PLDI paper and ExpoSE as presented at SPIN 2017. We provide both a VirtualBox image and installation script. The following instructions are for direct installation via the script. If using a virtual machine then skip to Virtual Machine Image heading in getting started.

## System Requirements

The following libraries are required for ExpoSE to install properly. We have tested this installation on both Mac OS X and Ubuntu (16.04 Onward), similar systems should install painlessly, but troubleshooting may be more difficult. 

- Node.js 8.15.0 (as node in $PATH)
- Npm 6.4.1 (as npm in $PATH)
- clang (tested with 3.7)
- make

## Installation

The install script will prepare ExpoSE as presented in our PLDI 19 paper and in our SPIN 17 submission. It will also prepare a set of sample libraries to test the tool against. To install execute `$ ./install` on a system once all dependencies are installed. 

## Virtual Machine Image

We have prepared a VirtualBox image running Ubuntu server with our environment already installed. Once the machine has finished booting the user details

```
username: test
password: test
```

can be used to login to our sample user. From there the folder artifact will contain an exact copy of our artifact as it would be created by our installation script.

# General Usage

In this section we describe how to use ExpoSE on simple programs (microbenchmarks) and on full npm libraries (using our automated harness generation tool). The claims in our paper can be evaluated through execution of our microbenchmark suite and by execution of ExpoSE on real programs through an automated harness generator.

## Running ExpoSE

## Testing Each Feature

In ExpoSE all of the features described in the paper are now enabled by default. Environment flags are used to disable the features and can be used to test the impact of a specific feature on program coverage. The feature flags are:

- Disable regular expression support: Setting `EXPOSE_DISABLE_REGULAR_EXPRESSIONS=1 ...` will disable regular expressions entirely, forcing concretization. 
- Disable symbolic capture group support: Setting `EXPOSE_DISABLE_CAPTURE_GROUPS=1 ...` will disable symbolic modelling of the capture groups within regular expressions, but still generate paths for the regular expressions themselves.
- Disable CEGAR refinement scheme: `EXPOSE_DISABLE_REFINEMENTS=1 ...` will disable the CEGAR scheme. If this is set then created paths will not be checked for correctness and analysis may be unsound.

## Evaluating against micro benchmarks

To evaluate the claims made in the paper we provide a micro benchmark suite. The two scripts for this are:

- `./run_spin_on_microbenchmarks`: Execute the microbenchmarks with ExpoSE as it was in SPIN 17
- `./run_pldi_on_microbenchmarks`: Execute the microbenchmarks with ExpoSE as presented in our PLDI paper

After each test suite has finished executing it will provide an error 

## Executing on real libraries (with automated harness generation)


## Constructing your own test cases

# Repeating the experiments 

## Evaluation against a small sample of libraries

## Executing the full test battery

The experiments from the paper take a significant amount of time to run. As each library needs to be re-executed 4 times (once for each of the features tested). Run on a single machine the experiments may take several months to complete.
