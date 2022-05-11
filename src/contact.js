import Component from "./index";
import Menu from "./menu";

const contact = () => {
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
    navbarItem2.addEventListener("click", () => {
        document.body.innerHTML = "";
        Menu();
    });
    navbar.appendChild(navbarItem2);

    // Contact button
    const navbarItem3 = document.createElement("h3");
    navbarItem3.innerText = "Contact";
    navbarItem3.classList = "navitem";
    navbar.appendChild(navbarItem3);

    // Got a question
    const contactMessage = document.createElement("h1");
    contactMessage.innerText = "Got a question? Call us!"
    contactMessage.classList = "center";
    element.appendChild(contactMessage);

    // Phone number
    const phoneNumber = document.createElement("h2");
    phoneNumber.innerText = "1-800-867-5309";
    phoneNumber.classList = "center";
    element.appendChild(phoneNumber);

    return element;
}

const addContact = () => {
    document.body.appendChild(contact());
}

export default addContact;