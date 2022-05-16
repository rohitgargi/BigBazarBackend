// npm i -D typescript @types/express @types/node

The DefinitelyTyped GitHub repository maintains the TypeScript type definitions for use directly in Node.js and other JavaScript projects, so you don’t have to define these types from scratch. To add these types or the declaration files related to a particular library or a module, you have to look for the packages that start with the @types namespace.

//npx tsc --init - To Generate tsconfig

We’ll also install another dev dependency called Concurrently, which will allow us to run multiple commands like nodemon to watch file changes and the tsc command to compile the code:

npm install -D concurrently nodemon