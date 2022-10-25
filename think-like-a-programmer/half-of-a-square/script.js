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
        `symbol` a total of `columns` times.

Now that we can write a single line, we need a way to repeat the line
and reduce the total # symbols by 1 on each line.

Algorithm - Write multiple lines:
    - Create an empty string variable named output.
    - Concatenate the output variable by calling singleLine() 5 times, 
    reducing each 'columns' argument by a value of 1 each time.
    */

const singleLine = (symbol, columns) => {
    if (columns > 1) {
        // Repeat the symbol by the numeric value of `columns`.
        symbol += singleLine(symbol, columns -1);
    };
    // Return the result. Add new line if all done.
    return columns <= 1 ? symbol + '\n' : symbol;
}

const multiLine = (symbol, rows) => {
    // Holds the result.
    let output = '';
    // Build rows of symbols.
    while (rows >= 1) {
        // Build a single row of symbols.
        output += singleLine(symbol, rows);
        rows--;       
    }
    return output;
}

// console.log(singleLine('#', 5));
console.log(multiLine('#', 5));