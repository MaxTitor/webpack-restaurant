import Pizza from "../src/images/pizza.jpeg"

console.log("started")

function component() {
    const element = document.querySelector("body > div");

    // Logo
    const logo = document.createElement("h1");
    logo.classList = "center logo"
    logo.innerText = "Pizza";
    element.appendChild(logo);

    // Navbar
    const navbar = document.createElement("div");
    navbar.classList = "navbar";
    element.appendChild(navbar);

    // Home button
    const navbarItem1 = document.createElement("h3");
    navbarItem1.innerText = "Home";
    navbar.appendChild(navbarItem1);

    // Menu button
    const navbarItem2 = document.createElement("h3");
    navbarItem2.innerText = "Menu";
    navbar.appendChild(navbarItem2);

    // Contact button
    const navbarItem3 = document.createElement("h3");
    navbarItem3.innerText = "Contact";
    navbar.appendChild(navbarItem3);

    // Description
    const description = document.createElement("h3");
    description.innerText = "We sell pizza";
    element.appendChild(description);

    // Pizza description
    const pizzaDesc = document.createElement("h1");
    pizzaDesc.innerText = "This is what they look like:";
    element.appendChild(pizzaDesc);

    // Pizza image
    const pizzaImg = new Image();
    pizzaImg.src = Pizza;
    pizzaImg.classList = "pizza-img";
    element.appendChild(pizzaImg);

    // You want it?
    const youWantIt = document.createElement("h2");
    youWantIt.innerText = "You want it?";
    youWantIt.classList = "center";
    element.appendChild(youWantIt);

    // It's yours my friends
    const itsYours = document.createElement("h1");
    itsYours.innerText = "It's yours my friend!";
    itsYours.classList = "center";
    element.appendChild(itsYours);

    return element
}

document.body.appendChild(component());
