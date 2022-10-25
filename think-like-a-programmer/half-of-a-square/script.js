/*

CONSTRAINTS:
1. Outputs only # and \n using only `console.log('#')` and `console.log('\n')`

BREAK THE PROBLEM DOWN:

We need a way to output a single line of five `console.log('#')` with a 
`console.log('\n')` on the end.

Start with what we know.

Algorithm - Write a single line: 
    - we can use a loop to output multiple `console.log('#') 5 times.`
    - we can output `console.log('\n')` after the loop has completed.
    OR
    - we can also do this with recursion.
        - function parameters provide the symbol to repeat, and the
        total times to repeat it.
        - use a recursive function call to duplicate the value of 
        `symbol` a total of `count` times.

    */

const singleLine = (symbol, count) => {
    if (count > 1) {
        symbol += singleLine(symbol, count -1);
    };
    return symbol;
}

console.log(singleLine('#', 5));