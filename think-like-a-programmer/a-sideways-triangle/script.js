/*

CONSTRAINTS:
1. Outputs only # and \n using only `console.log('#')` and `console.log('\n')`

BREAK THE PROBLEM DOWN:

Start with what we know.

We already solved most of this problem in the previous exercise, 
'half-of-a-square'. In that exercise, we developed a way to output a
right angle triangle. We can use those functions as a starting point to
build the bottom half of the triangle required in this exercise. Copy
the files. 

Now, we need a way to build the top half of the triangle.

We can probably change multiLine() iteration behaviour. For the first 
half of the 'rows' argument value, increment. For the second half, 
decrement instead.

Algorithm - Write the top-half of the triangle: 
    - Because we want to maintain a shape resembling a sharp triangle,
    we don't want even numbered rows as that would produce a shape
    of a blunt triangle.
        - If `rows` can be divided by 2 with a remainder, add 1 to its
        value
    - Iterate forward (increment) until at rows/2 + 1 (the centre line)
    - Iterate backwards (decrement) until rows >= 1.
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