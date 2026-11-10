# ProjetoWireframe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.28.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS version recommended). Angular 21 requires Node `^20.19.0`, `^22.12.0` or `^24.0.0`. npm comes bundled with Node.js.

You can check your installed versions with:

```bash
node -v
npm -v
```

The Angular CLI (`ng` command) is optional. To install it globally, run:

```bash
npm install -g @angular/cli
```

If you prefer not to install it globally, you can prefix the commands below with `npx` (for example, `npx ng serve`).

## Getting started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Maicon-Quevedo/wireframe-tde.git
cd wireframe-tde
npm install
```

The `npm install` step is required the first time on any new machine, since the `node_modules` folder is not versioned.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.