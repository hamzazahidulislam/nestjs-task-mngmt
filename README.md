## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to Use the Project

```bash
# Get All Tasks
$ http://localhost:3000/tasks

# Get Task by filter
$ http://localhost:3000/tasks?status=OPEN&search=best

# Create Task POST Method
$ http://localhost:3000/tasks/

# Task Get by ID
http://localhost:3000/tasks/5444c39e-83ab-4b5d-9e34-dfce1c6f5eb4

# Update Status PATCH Method
$ http://localhost:3000/tasks/0f431dab-edab-4d79-b29d-f54914bdcba1/status

```

### POST /auth/signup

Signup Api: http://localhost:3000/auth/signup

Request body:

    {
     "username":"hamza",
     "password":"your_passwod"
    }

### POST /auth/sigIn

SignIn Api: http://localhost:3000/auth/signin

Request body:

    {
     "username":"hamza",
     "password":"your_password"
    }

## Stay in touch

- Author - [Hamza Zahidul Islam](https://hamzazahid.com/)
- Twitter - [@hamza_zahidul](hhttps://twitter.com/hamza_zahidul)

## License

This Project is licensed under the [MIT licensed](LICENSE).
