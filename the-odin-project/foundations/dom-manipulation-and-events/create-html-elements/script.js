const createElement = (elementType, elementId, elementClasses, elementContent) => {
    // Create the html element.
    const element = document.createElement(elementType);
    // Add classes.
    if (elementClasses) {
        // If a list of class names was provided, add them to the new element.
        if (typeof(elementClasses) === "string") {
            // Split the list into an array.
            elementClasses = elementClasses.split(" ");
        };
        for (const className of elementClasses) {
            element.classList.add(className);
        };
    };               
    // Add text content, if included.
    if (elementContent) {element.textContent = elementContent};
    // Add element id, if included.
    if (elementId) {element.setAttribute('id', elementId)};
    // Return the element.
    return element;
}

const container = document.querySelector('#container');

// Add a **`<p>`** with red text that says “Hey I’m red!”
container.appendChild(createElement('p', '', 'warning', "Hey I'm red!"));

// Add an **`<h3>`** with blue text that says “I’m a blue h3!”
container.appendChild(createElement('h3', '', 'heading', "I'm a blue h3!"));

/* 
 * Add a **`<div>`** with a black border and pink background color with 
 * the following elements inside of it: 
 *   - another **`<h1>`** that says “I’m in a div”
 *   - a **`<p>`** that says “ME TOO!”
 */
container.appendChild(createElement('div', 'content', 'highlight bordered bordered--dark', ""));
// Select the new div.
const content = document.querySelector('#content');
// Add another **`<h1>`** that says “I’m in a div”
content.appendChild(createElement('h1', '', '', "I'm in a div"));
// Add another **`<p>`** that says “ME TOO!”
content.appendChild(createElement('p', '', '', "ME TOO!"));




// Now, complete the exercise using JavaScript's built in methods.
const vanillaContainer = document.querySelector('#container');

// Add a **`<p>`** with red text that says “Hey I’m red!”
const p1 = document.createElement('p');
p1.classList.add('warning');
p1.textContent = "Hey I'm red!";
vanillaContainer.appendChild(p1);

// Add another **`<h1>`** that says “I’m in a div”
const h3 = document.createElement('h3');
h3.classList.add('heading');
h3.textContent = "I'm a blue h3!";
vanillaContainer.appendChild(h3);