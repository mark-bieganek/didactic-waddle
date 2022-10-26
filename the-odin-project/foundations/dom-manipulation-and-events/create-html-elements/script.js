const createElement = (elementType, classNames, textContent) => {
    // Create the html element.
    const element = document.createElement(elementType);
    // Add classes.
    if (classNames) {
        // If a list of class names was provided, in an array, add them.
        if (Array.isArray(classNames)) {
            for (const className of classNames) {
                element.classList.add(className);
            };
        } else {
            // Add the list of classNames as-is.
            element.classList.add(classNames); 
        }
    };               
    // Add text content, if included.
    element.textContent = textContent;
    // Return the element.
    return element;
}

const container = document.querySelector('#container');

// Add a **`<p>`** with red text that says “Hey I’m red!”
container.appendChild(createElement('p', 'warning', "Hey I'm red!"));

// an **`<h3>`** with blue text that says “I’m a blue h3!”
container.appendChild(createElement('h3', 'heading', "I'm a blue h3!"));
