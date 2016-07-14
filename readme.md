# Example Project

This example project demonstrates a (potential) issue with nyc source maps where the absolute source file path is incorrect.

There are two branches `master` and `javascript`.

The project uses `ts-node` as a mocha compiler to transpile TypeScript files when requested.

## Master

The master branch demonstrates the issue.  Running `npm run cover` will generate the code coverage.  From here you can investigate the generated json files inside `.nyc_output`.  The source file paths in the generated json files will not contain the project directory in the absolute paths.  So for example, if you installed the project to `~/projects/nyc-test/` the source map path for `src/calc.ts` will be `~/projects/src/calc.ts` and not the expected `~/projects/nyc-test/src/calc.ts`.

## Javascript

The `javascript` branch simply shows that changing the `src/calc.ts` file to `src/calc.js` fixes the issue.  I did also remove a TypeScript specific statement from the original `src/calc.ts` file - the removed statement is `declare var module;`.  No other changes were made, for example mocha is still using `ts-node` as the compiler`.