> [!CAUTION]
> This app is in alpha and does not have a UI yet.

# Plus 5 to hit - Initiative Tracker

If your Game Master screen has creature notes like this...

> "The Chomper - giant "fish", looks like boulder, swims/eats through mountain rock, pops into cave. multi-a +5 1d6 slash 1d8 pierc, DC12 acrob/athlet save or restrained"

...this initiative tracker might be for you.

It's as quick and easy as working with post-it notes or whiteboard magnets, but better.

It is not meant to replace complete character sheets, monster books or a VTT. It's an initiative tracker to keep a birds eye overview during combat.

Two-monitor split view: One view with all your notes faces you, the game master; a reduced, larger tracker faces your players.

# Set up

## Public instance

There will be a hosted version in the future. When that happens the link will go here and you can simply use it from your browser.

## On Linux/Ubuntu

### Requirements

* git
* npm
* up to date browser like Firefox, Zen, Chrome or Chromium.

### Installation

1. Use git clone to download this repository.
1. Run `npm install` from the root directory.
1. Run `npm start`.
1. The terminal should tell you which ip address and port to navigate to in your browser.

# Development

## Requirements

* Linux/Ubuntu (build process uses `cp`)
* git
* npm
* php 8

## Installation

1. Use git clone to download this repository.
1. Run `npm install --save-dev` from the root directory.

## Structure

* `src/` source code
* `dist/` the packaged app as served to the end-user
* `test/` unit tests using mocha and chai to check if all parts of the software are running as expected

## Build & run

`npm start` spins up a small local web server using the current state of the `dist/` directory.

To see changes after you worked in the `src/` folder, you need to re-package and build the app using the build script:

```bash
npm run build
```

## Coding Guidelines

* you SHOULD use modern ES6 JavaScript
* classes SHOULD be made immutable by using `immer:
  * `immerable = true`
  * use the withSomething pattern and clone with `produce()`
* common tools SHOULD be passed into objects using `dependencyInjection` singleton
* you MUST create unit tests for new functionality
* existing unit tests MUST still pass