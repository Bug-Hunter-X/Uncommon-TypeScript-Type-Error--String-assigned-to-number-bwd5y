# Uncommon TypeScript Type Error: String assigned to number

This repository demonstrates an uncommon scenario where the TypeScript compiler throws a type error, 'Type 'string' is not assignable to type 'number'. This error, while seemingly common, can sometimes manifest in unexpected ways, particularly when dealing with implicit type conversions or complex data structures.

## The Bug

The `bug.ts` file contains a simple addition function that is explicitly typed to accept two numbers and return a number.  However, the function is called with a string ('1') and a number (2). This leads to the TypeScript compiler throwing the type error.

## The Solution

The `bugSolution.ts` file demonstrates how to fix this error by explicitly converting the string argument to a number using `Number()` or `parseInt()`, ensuring that the function receives the correct data type.

## How to reproduce
1. Clone the repository.
2. Open the `bug.ts` file in a TypeScript compiler such as tsc.
3. Compile the file. You will encounter the error. 
4. Open `bugSolution.ts` and compare the solution.