const createElement = (elementType, classNames, textContent) => {
    // Create the html element.
    const element = document.createElement(elementType);
    // Add classes from the provided array.
    if (classNames) {
        if (Array.isArray(classNames)) {
            for (const className of classNames) {
                element.classList.add(className);
            };
        } else {
            element.classList.add(className); 
        }
    };               
    // Add text content, if included.
    element.textContent = textContent;
    // Return the element.
    return element;
}

const container = document.querySelector('#container');
container.appendChild(createElement('p', ['warning','test'], 'Hey I’m red!'));

