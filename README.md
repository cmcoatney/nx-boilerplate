# TODO

- [] CI/CD: environment by feature/PR
- [] Angular Posts Demo
- [] sdk command in package.json
- [] Angular Storybook/ui lib
- [] Angular Material lib
- [] Angular Material theme setup
- [] Angular Material icons
- [] NGRX
- [] rxjs library
- [] Auth lib api
- [] Auth Angular

1. Modify prisma schema
2. npx prisma format
3. npx prisma db push
4. Adjust NestJS GraphQL Model to switch Prisma Schema
5. Update query if needed (DataAccessService)
6. Use include to join tables as needed
7. update graphql query on client side
8. re-run yarn sdk to refenerate ApolloSDK stuff

# Nxws

This project was generated using [Nx](https://nx.dev).

# PRISMA

Prisma is a powerful tool. Not only does it generate code (client and schema) for you but it allows you to build your own generators. A generator can be useful for, say, generating an Angular auth frontend etc...

# Some code duplication --> Bring fields from Prisma Client as models

node_modules/.prisma/client/index.d.ts

Code First schema
write schema
generates changes in postgres and generates a client
prisma handles migrations

## Quick Start

### Serve Backend

```zsh
docker-compose up

nx run api:serve

```

### Prisma Studio

```zsh
npx prisma format
npx prisma db push
 yarn prisma studio
```

## Generate a library

Use NX COnsole to generate SCAM components in Angular lib

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nxws/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

PANNG STACK RESOURCES:
https://www.youtube.com/watch?v=VS1Z8JcrVe4

Angular Concepts:

. Routing table will generally describe your features
. A Feature will generally get a route
. A route will navigate to a container component
. Everything inside the container should be a presentation component
. A component should only do two things:
. Consume just enough data to satisfy its template
. Capture user events and Delegate them upward
. Components should be as thin as possible
. They should satisfy inputs using the async pipe
. and be oblivious to business logic and server communication
. they should be oblivious to application state
. Facades are effective delegation layer between components and the rest of the app
. Facades are for delegation only
. server communication and state management should be decoupled
. data models should be decoupled especially inside of a monorepo with client and API projects
. No unessessary/premature optimization: Refactor through promotion

1. Facade Pattern

# Roadmap...

Production Grade Angular @The Facade Pattern
NGRX
RXJS


# Issues
- after fixing codegen.yml from port 3333 to 3000 can now run `yarn sdk` but posts$ from sdk is still null 

- RUNNING CODEGEN: After running gen error shown requiring 'override' keyword added to generated code file graphql.ts

- Unknown error displying in console
