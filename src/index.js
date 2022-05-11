import Pizza from "../src/images/pizza.jpeg";
import Menu from "./menu";
import Contact from "./contact";

console.log("started")

function component() {
    const element = document.createElement("div");
    element.classList = "content";

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
    navbarItem1.classList = "navitem";
    navbarItem1.addEventListener("click", () => {
        document.body.innerHTML = "";
        document.body.appendChild(component());
    });
    navbar.appendChild(navbarItem1);

    // Menu button
    const navbarItem2 = document.createElement("h3");
    navbarItem2.innerText = "Menu";
    navbarItem2.classList = "navitem";
    navbarItem2.addEventListener("click", () => {
        document.body.innerHTML = "";
        Menu();
    });
    navbar.appendChild(navbarItem2);

    // Contact button
    const navbarItem3 = document.createElement("h3");
    navbarItem3.innerText = "Contact";
    navbarItem3.classList = "navitem";
    navbarItem3.addEventListener("click", () => {
        document.body.innerHTML = "";
        Contact();
    });
    navbar.appendChild(navbarItem3);

    // Description
    const description = document.createElement("h3");
    description.innerText = "We sell pizzas";
    element.appendChild(description);

    // Pizza description
    const pizzaDesc = document.createElement("h1");
    pizzaDesc.innerText = "This is what they look like:";
    element.appendChild(pizzaDesc);

    // Pizza image
    const pizzaImg = new Image();
    pizzaImg.src = Pizza;
    pizzaImg.classList = "img";
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

const addComponent = () => {
    document.body.appendChild(component());
}
addComponent();

export default addComponent;