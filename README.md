# ZombieLand ![Node CI](https://github.com/praneybehl/zombieland/workflows/Node%20CI/badge.svg)  [![tscov](https://img.shields.io/badge/dynamic/json.svg?label=tscov&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.minCoverage&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjeroenouw%2Fliftr-tscov%2Fmaster%2Fpackage.json)](https://github.com/jeroenouw/liftr-tscov)
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
* [Considerations & Decisions](#considerations--decisions)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Continuous integration & testing](#continuous-integration--testing)
* [Input Formats](#input-formats)
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

## Considerations & Decisions
I must say I had fun working on this coding challenge. Several considerations and decisions were made while attempting this coding challenge.
I really liked the way the problem was crafted and presented in a gamified way, thus I
chose to create a slightly gamified and interactive command-line interface along with rather simple file input methods.

The solution to this coding challenge takes more functional approach to programming while not being baised for it.

**_`Language choice:`_**
- I decided to use Node.js for this project as Javascript/Typescript over Python is my stronger skill keeping time constraints in mind for deliverability. However, it could have been fun to build in Python as well.

**_`Typescript:`_**
- For static types checking, code completion intellisense for better developer experience and helps prevent type conversion bugs early on.

**_`Possible Improvements:`_**
- Further improvement can be made to this solution. Due to limitation of time, I decided to write tests for more critical parts of the solution, this can be improved by adding more coverage.
- Further inline jsDoc comments can be added for improving the functional docs.


## Tech used
This project mainly relies on the following platform, tools and libraries:
Node.js, TypeScript, mocha, chai, sinon, tsdocs and inquirer.

## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: mocha, chai and sinon`
`Typescript coverage: tscov`
`Linting: tslint`


## Continuous integration & testing
This project uses [Github Actions](https://github.com/praneybehl/zombieland/actions) for CI pipelines for continuous build and testing.

## Input Formats
This application allows the user to provide input in multiple formats, using .txt file, .json file and interactive commandline.
Sample file input data is provided in the `.sample-input/` folder for your reference.

### Command-line interface(CLI)
When you start the application, it automatically takes you into the command-line interface where you can provide inputs for the Zombieland dataset.
All inputs in the CLI are validated, thus preventing users from accidentally providing incorrect information. Default inputs are added for convenience.

`**Input Options**`

1. `Interactive command-line input`
```shell
  _____   ___    __  __   ____    ___   _____   _          _      _   _   ____
 |__  /  / _ \  |  \/  | | __ )  |_ _| | ____| | |        / \    | \ | | |  _ \
   / /  | | | | | |\/| | |  _ \   | |  |  _|   | |       / _ \   |  \| | | | | |
  / /_  | |_| | | |  | | | |_) |  | |  | |___  | |___   / ___ \  | |\  | | |_| |
 /____|  \___/  |_|  |_| |____/  |___| |_____| |_____| /_/   \_\ |_| \_| |____/

Zombie Apocalypse v4.5 - interactive command-line application for Ailo coding challenge
? Please select your preferred input method:
❯ Interactive command-line input
  Text file
  JSON file

? Input Zombieland area size (N) for an NxN grid. eg.: 4: 4

One zombie needs to awaken, enter it's position in coordinates:
? x axis between (0-3): 2
? y axis between (0-3): 1

Poor creature live amongst Zombies, let's add some creature to spice it up
Add a poor creature, enter it's position in coordinates:
? x axis between (0-3): 0
? y axis between (0-3): 1
? Add more poor creature to Zombieland? Yes
Add a poor creature, enter it's position in coordinates:
? x axis between (0-3): 1
? y axis between (0-3): 2
? Add more poor creature to Zombieland? Yes
Add a poor creature, enter it's position in coordinates:
? x axis between (0-3): 3
? y axis between (0-3): 1
? Add more poor creature to Zombieland? No

Zombies are hungry, let's move the zombies so they can bite some poor creatures,
Select Zombmie moves directions: D, U, L, R
where D=Down, U=Up, L=Left, R=Right

? Select a Zombie move direction DOWN
? Add more Zombie move step? Yes
? Select a Zombie move direction LEFT
? Add more Zombie move step? Yes
? Select a Zombie move direction UP
? Add more Zombie move step? Yes
? Select a Zombie move direction UP
? Add more Zombie move step? Yes
? Select a Zombie move direction RIGHT
? Add more Zombie move step? Yes
? Select a Zombie move direction RIGHT
? Add more Zombie move step? No
```

2. `Text file`
```shell
? Please select your preferred input method:
  Interactive command-line input
❯ Text file
  JSON file
? Enter text file location. eg.: ./.sample-input/input.txt .sample-input/input.txt
```

3. `JSON file`
```shell
? Please select your preferred input method:
  Interactive command-line input
  Text file
❯ JSON file
? Enter json file location. eg.: ./.sample-input/input.json .sample-input/input.json
```

**Logs and Output**:
```shell

      Starting Zombieland Apocalypse V4.5!

SUCCESS: Zombies scored at position: x: 1, y: 2

SUCCESS: Zombies scored at position: x: 0, y: 1

SUCCESS: Zombies scored at position: x: 3, y: 1


      Zombieland Apocalypse Complete

Zombies Score:  3
Zombies Positions:  (3, 0) (2, 1) (1, 0) (0, 0)
Alive Creatures Positions:  😱  All dead!
```


### Text file input
Text file must be formatted in the following way for the application to be able to parse the information:
```text
4
2,1
0,1 1,2 3,1
DLUURR
```
P.S. for position coordinates, user must provide `x, y` pairs separated by single space ` ` for multiples.

### JSON file Input
JSON File structure is as follows:
```json
{
	"worldDimension": 4,
	"zombiePosition": { "x": "2", "y": "1" },
	"creaturePositions": [
            { "x": "0", "y": "1" },
            { "x": "1", "y": "2" },
            { "x": "3", "y": "1" }
	],
	"moveSteps": [ "D",	"L", "U", "U", "R", "R"	]
}
```

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
(Note: After starting first time, the application self installs globally and can then be executed by running `zombieland` command.)

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
