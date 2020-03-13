# U07AngularMovieApp - Andréas Ny

## Quick start with terminal

- Get your own API key from [The Movie Database](https://www.themoviedb.org/documentation/api)
- Clone or fork the repo
  - `git clone https://github.com/andreasnyh/u07-angular-movie-app.git`
- Install all the dependencies
  - `npm install`
- Find this file `src\app\api-service.ts`
  - ~~Remove or comment this import if you've cloned the project~~
    - ~~`import { environment } from "../environments/environment-api";`~~
  - Replace the key value with your own API key
    - `private key = '?api_key=YourKey';`
- To run the application in the browser
  - `ng serve --open`

## Prerequisites

### Node.js

Angular requires a current, active LTS, or maintenance LTS version of Node.js. See the engines key for the specific version requirements in our package.json.

To check your version, run node -v in a terminal/console window.

To get Node.js, go to nodejs.org.

### npm package manager

Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This setup guide uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

### Step 1: Install the Angular CLI

You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:

`npm install -g @angular/cli`

___

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

___

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.
