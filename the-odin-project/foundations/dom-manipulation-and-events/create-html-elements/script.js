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

// Add a **`<div>`** with a black border and pink background color.”
container.appendChild(createElement('div', '', 'highlight bordered bordered--dark', "empty"));