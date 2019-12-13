# Product Catalog

[![Build Status](https://travis-ci.org/IamRaviTejaG/product-catalog.svg?branch=master)](https://travis-ci.org/IamRaviTejaG/product-catalog)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

## Contents
- [Getting Started](#getting-started)
- [Dependencies &amp; Packages](#dependencies-amp-packages)
- [Running locally](#running-locally)
  - [The .env file](#the-env-file)
  - [npm scripts](#npm-scripts)
- [API endpoints](#api-endpoints)
  - [1. /insert](#1-insert)
  - [2. /search](#2-search)
    - [2.1. By name (/search/name/:searchQuery)](#21-by-name-searchnamesearchquery)
    - [2.2. By brandName (/search/brand/:searchQuery)](#22-by-brandname-searchbrandsearchquery)
    - [2.3. By category (/search/category/:searchQuery)](#23-by-category-searchcategorysearchquery)
  - [3. /update](#3-update)

### Getting Started
Start by cloning the repository using: `git clone https://github.com/IamRaviTejaG/product-catalog.git` followed by `cd product-catalog`.

Install all the dependencies using the `npm install` or `npm i` command. Optionally, use the `--only=dev` flag to install developer dependencies only. Once the dependencies are installed, use `npm start` to start the server.

Use an API testing tool like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/) to send/receive HTTP requests.

### Dependencies & Packages
- `body-parser`
- `dotenv`
- `express`
- `mongoose`
- `morgan`

Developer dependencies:

- `@babel/cli`
- `@babel/core` (Transpiling ES6 code for use with NodeJS)
- `@babel/present-env`
- `@babel/register`
- `chai` (Assertion)
- `mocha` (Testing)
- `nyc` (Test coverage)
- `request`
- `request-promise`
- `rimraf` (The UNIX rm -rf command for Node)
- `standard` (Linting)

### Running locally
#### The `.env` file
The `.env` file holds the important variables for the whole application which include the database URL, database port, application port, JWT Secret, etc.

**NOTE**: When running tests, make sure to point the `MONGO_URL` at the test database in order to avoid garbage collection in the main database.

#### npm scripts
The `package.json` file contains five scripts for running locally: `linter`, `test`, `coverage`, `build` & `start`.

- `"linter": "standard --fix"`

Runs the StandardJS linter along with the `--fix` flag, which lints code to a great extent. The traceback (if one shows up) is the list of errors that need to be fixed manually.

- `"test": "mocha --require @babel/register --timeout 5000 --exit"`

Runs **only** the tests.

- `"coverage": "nyc --reporter=text mocha --require @babel/register --timeout 5000 --exit"`

Runs the test coverage & shows up detailed report.

- `"build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files"`

Builds the project.

- `"start": "npm run build && node dist/index.js --no-deprecation"`

First builds and then starts the server.

### API endpoints
#### 1. `/insert`
```
Request type: POST
Data parameters: name, category, brandName, images
```

#### 2. `/search`
##### 2.1. By name (/search/name/:searchQuery)
```
Request type: GET
Data parameters: name
```

##### 2.2. By brandName (/search/brand/:searchQuery)
```
Request type: GET
Data parameters: brandname
```

##### 2.3. By category (/search/category/:searchQuery)
```
Request type: GET
Data parameters: category
```

#### 3. `/update`
```
Request type: PATCH
Data parameters: newName, newCategory, newBrandName, newImages
```