# Motivation

Basically, When we start a new project we have to do a whole bunch of boring work before starting the actual work,
right? Also, we have to provide some kind of basic protection as well. This project trying to solve this problem.

This repository is a boilerplate for API-based development and it is a simple start kit (blueprint), that provides
minimal/common functionality to start building an API based on the ExpressJS framework and TypeScript.

## Requirements

- [Node](https://nodejs.org/en/) `^16.15.0`
- [NPM](https://www.npmjs.com/) `^8.5.5`

## Installation

After confirming that your environment meets the
above [requirements](#requirements), it is time to clone the project
locally by doing the following:

```bash
$ git clone git@github.com:DeanHristov/ts-express-starter-kit.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, run the following command:

```bash
$ npm install # or yarn install
```

## The starter comes with built-in functionality

- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution (hpp)
- Add headers for security (helmet)
- Use cors to make API public

## Project Structure

The project structure presented in this boilerplate is **flatten**, where
functionality is grouped primarily by feature rather than the file type.

```

├── build                           # Auto-generated directory. Contains **production-ready** code.
│   └── *.js
│   └── [dir-name]                  # Sub directory
│       └── *.js
├── docs                            # Contains files in *.md format with documentation of each API route.
│   └── *.md                        # Represent a *.md with the route documentation.
├── src                             # Application source code is stored here.
│   ├── controllers                # A directory contains files that control the behavior of the routes.
│       └── *.ts                    # Controlling how the user interacts with a route.
│   ├── core                        # The core functionality is stored here.
│       └── *.ts                    # Usually, represent models.
│   ├── middlewares                 # A directory that contains files with expressjs-based middlewares.
│       └── *.ts                    # Each file contains a single middleware.
│   ├── routes                      # Contains files that represent endpoints (URIs) and respond to client requests.
│       └── *.ts                    # Represent a single endpoint.
│   ├── utils                       # A directory that contains utility files.
│       └── *.ts                    # A utility file - Common used functionality.
│   ├── mocks                       # A directory that could contain fake-data. It is used only for seeding the data.
│       └── *.json                  # A single unit, that contains fake data.
│   ├── App.ts                      # The entry point of the app.
├── .env                            # App-related ENV variables are stored here. MUST be created manually!
├── .env.example                    # A template which contains important variables for the app.
├── .eslintignore                   # Config file for ESLint
├── .eslintrc                       # Config file for ESLint
├── .gitignore                      # Config file for GIT
├── .prettierrc                     # Config file for Prettier
├── jest.config.js                  # Config file for Jestjs
├── nodemon.json                    # Config file for nodemon
├── package.json                    # The heart of the app. It holds important metadata about a project like scripts dependencies
├── package-lock.json               # Place where we control the dependencies
├── README.md                       # A documentation file
├── tsconfig.json                   # Config file for typescript
```

## Main tasks

All tasks automation are based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                     | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `npm run start:dev`       | Running the app in **dev** mode                |
| `npm run build`           | Building the code in **production-ready** mode |
| `npm run start`           | Running the app in **prod** mode               |
| `npm run test`            | Running the unit tests (by using jest)         |
| `npm run test:watch`      | Running the unit tests in "watch" mode         |
| `npm run prettier-format` | Code formatting                                |

## Running the Project

Before starting the app you must create **~/.env** file with the following
variables:

```dotenv
NODE_PORT=3002

API_VERSION=/api/v1

USE_COOKIE=false

# 1m = 60000
# 10m = 600000
# 1h = 3600000ms
JWT_EXPIRE=10m

# 1m = 60000ms
# 10m = 600000ms
# 1h = 3600000ms
JWT_COOKIE_EXPIRE=10m
JWT_SECRET=super-secret-word
```

Running the app in **development** mode.

```bash
$ npm run start:dev
```

## Running the Project in production mode.

Firstly, build the app with the following command:

```bash
$ npm run build
```

Running the app in **development** mode.

```bash
$ npm start
```

## Used technologies

- NodeJS- https://nodejs.org/en/
- Git - https://git-scm.com/
- TypeScript - https://www.typescriptlang.org/
- ExpressJS - https://expressjs.com/

## NPM Packages

- [dotenv](https://github.com/motdotla/dotenv#readme)
- [morgan](https://github.com/expressjs/morgan)
- [colors](https://github.com/Marak/colors.js)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [xss-clean](https://github.com/jsonmaur/xss-clean)
- [helmet](https://helmetjs.github.io/)
- [hpp](https://github.com/analog-nico/hpp)
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit)
- [cors](https://github.com/expressjs/cors)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [typescript](https://www.npmjs.com/package/typescript)
- [prettier](https://www.npmjs.com/package/prettier)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [jest](https://www.npmjs.com/package/jest)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)

## Made by

Author: [D. Hristov](https://dhristov.eu/) | Version: [1.0.0](/docs/) |
License: [MIT](https://opensource.org/licenses/MIT)
