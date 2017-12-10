[![Build Status](https://travis-ci.org/teraxas/bullshit-app-front.svg?branch=master)](https://travis-ci.org/teraxas/bullshit-app-front)
[![Heroku](https://heroku-badge.herokuapp.com/?app=bullshit-app)]

# IT'S NOT CRAP. IT'S BULLSHIT! #

This is a simple app with facts as questions, either true or bullshit. 
I started it with a target of learning some new stuff about AngularJS and Spring Boot.
After some time rewrote whole thing to use Angular (2+).

The app is hosted on Heroku: [bullshit-app](https://bullshit-app.herokuapp.com/)

Spring boot based API: 

* [bullshit-app-api at heroku](https://bullshit-app-api.herokuapp.com/)
* [bullshit-app-api at bitbucket](https://bitbucket.org/teraxas/bullshit-app/)

## Pipelines

On commit to master, pipelines deploy app automatically to Heroku.

## Docker

Dockerfile allows building and running Docker image of this app.
To run it, you must have docker installed and use npm scripts sequentially:

* ```dockerBuild``` - builds image
* ```dockerRun``` - runs image
* ```dockerKill``` - kills image

## Angular CLI

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
