import Component from "./index";
import Contact from "./contact";
import Pizza from "./images/pizza-menu.jpg";
import Soda from "./images/sodas.jpeg";

const menu = () => {
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
        Component();
    });
    navbar.appendChild(navbarItem1);

    // Menu button
    const navbarItem2 = document.createElement("h3");
    navbarItem2.innerText = "Menu";
    navbarItem2.classList = "navitem";
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

    // First menu item 
    const menuItem1 = document.createElement("h1");
    menuItem1.innerText = "Pizza";
    element.appendChild(menuItem1);

    // Pizza menu image
    const menuPizzaImg = new Image();
    menuPizzaImg.src = Pizza;
    menuPizzaImg.classList = "img";
    element.appendChild(menuPizzaImg);

    // Second menu item
    const menuItem2 = document.createElement("h1");
    menuItem2.innerText = "Soda";
    element.appendChild(menuItem2);

    // Soda menu image
    const menuSodaImg = new Image();
    menuSodaImg.src = Soda;
    menuSodaImg.classList = "img";
    element.appendChild(menuSodaImg);

    return element;
}

const addMenu = () => {
    document.body.appendChild(menu());
}

export default addMenu;