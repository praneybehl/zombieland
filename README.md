# ZombieLand ![Node CI](https://github.com/praneybehl/zombieland/workflows/Node%20CI/badge.svg)[![tscov](https://img.shields.io/badge/dynamic/json.svg?label=tscov&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.minCoverage&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjeroenouw%2Fliftr-tscov%2Fmaster%2Fpackage.json)](https://github.com/jeroenouw/liftr-tscov)
```bash
  _____   ___    __  __   ____    ___   _____   _          _      _   _   ____
 |__  /  / _ \  |  \/  | | __ )  |_ _| | ____| | |        / \    | \ | | |  _ \
   / /  | | | | | |\/| | |  _ \   | |  |  _|   | |       / _ \   |  \| | | | | |
  / /_  | |_| | | |  | | | |_) |  | |  | |___  | |___   / ___ \  | |\  | | |_| |
 /____|  \___/  |_|  |_| |____/  |___| |_____| |_____| /_/   \_\ |_| \_| |____/
```
**Zombie Apocalypse v4.5 - interactive command-line application for Ailo coding challenge**

## Table of Contents

* [Background](#user-content-background)
* [Description](#user-content-description)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Continuous integration & testing](#user-content-continuous-integration-testing)
* [Installation and Prerequisites](#user-content-installation-and-prerequisites)
* [Getting Started](#user-content-getting-started)
* [Directory Structure](#user-content-directory-structure)
* [Version Control](#user-content-version-control)
* [NPM scripts dictionary ](#user-content-npm-scripts-dictionary)

# Background
After the nuclear war, a strange and deadly virus has infected the planet. Living creatures are becoming zombies that spread their zombiness by an unfriendly bite. The world consists of an ​n​ x​ n​ grid on which ​zombies​ ​and ​creatures​ live.

Zombies can move across the grid and infect poor living creatures that live amongst them. Zombies can also move across the edge of the grid and appear on the opposite side.

# Description
ZombieLand is an interactive command-line application that lets the user to choose their preferred way of entering data i.e. text, json or visually via command-line prompts.

This application showcases a minimalistic design with an strong focus on user-experience, testing and strong design principles for **production ready** application.

# Continuous integration & testing
This project uses Github Actions for CI pipelines for continuous build and testing.

## Tech used
This project mainly relies on the following platform, tools and libraries:
Node.js, TypeScript, mocha, chai, sinon, tsdocs and inquirer.

## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: mocha, chai and sinon`
`Typescript coverage: tscov`
`Linting: tslint`


## Installation and Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/en/download/). And use the latest version of NodeJS (>= v10).


## Getting started

1. Clone this repo
```bash
$ git clone https://github.com/praneybehl/zombieland
$ cd zombieland
```

2. NPM scripts dictionary Install Dependencies
```bash
$ npm install
```

3. Build the project and start the application.
```bash
$ npm start
```
(Note: After starting first time, the application self installs globally and can then be exceuted by running `Zombieland` command.)

4. Build the project for production.
```bash
$ npm run build
```

5. Run Linting and Unit tests.
```bash
$ npm run test
```

6. Run Types coverage.
```bash
$ npm run tscov
```

## Directory Structure

The the structure of the project is set to follow the hierarchy:

The project doesn't make use of any frameworks and just the simple setup.
Below you can find full details about significant files and folders.

```bass
.                                       // Project folder.
├── bin                                 // Node excutable folder
├── .sample-input                       // Sample input files.
├── src                                 // All app source lies here
│   ├── actions                         // Actions for execution steps
│   ├── models                          // Model, interfaces & constants
│   ├── parser                          // File data parser functions.
│   ├── questions                       // Command-line question prompts
│   ├── utils                           // Logger utilities functions.
│   └── validate                        // Validation functions.
└── test                                // Testing config.
├── .editorconfig                       // Editor configuration.
├── .gitignore                          // Files & folders ignored from version control.
├── .npmrc                              // NPM registry configuration.
├── .nvmrc                              // Node version configuration.
├── package.json                        // Project dependencies.
├── tsconfig.json                       // TypeScript configuration.
├── tslint.json                         // TypeScript linting configuration.
└── README.md                           // Documentation for project.
```

## Version Control
This project is git version control along with [Conventional Commits](https://www.conventionalcommits.org/)
specification for adding human and machine readable meaning to commit messages. Along with that the project
is also setup with git pre commit hooks to lint staged changes to prevent pipeline failures.


## NPM scripts dictionary

`npm start`:			Build and Start application.

`npm run  build`:		Creates a production build.

`npm run test`:			Run linting & unit tests.

`npm run test:unit`:	Run unit tests only.

`npm run lint`:		    Run linting.

`npm run global`:	    Builds application and installs it as global package, exposed global name `Zombieland`.

`npm run clean:some`:	Cleans the ./lib and ./docs folders.

`npm run clean:all`:	Cleans node_modules, package-lock and above.

`npm run tscov`:        Runs typescript coverage report.

`npm run publish-package`: Builds and publishes package to npm.

`npm run docs`:         Build documentation using tsdocs.
