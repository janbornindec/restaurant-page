import map from './image/googlemap.png';

export function loadContact() {
    const main = document.querySelector(".main");
    const nav = document.querySelector(".nav");
    const container = document.querySelector(".container");

    //create container for the whole space next to nav
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
    const mapImg = new Image();
    mapImg.src = map;
    mapImg.alt = "Bun Bakery's location";
    mapImg.setAttribute("id","mapImg")
    imgContainer.appendChild(mapImg);

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    const contactText = document.createElement("p");
    contactText.innerHTML = "13 Bun Street, Melbourne Vic 3333. <br><br> 07 3333 4567 <br><br> bun.bakery@gmail.com";
    textContainer.appendChild(contactText);

    contact.appendChild(imgContainer);
    contact.appendChild(textContainer);
    container.appendChild(contact);

    //add div to main and make sure the new div stays on the top of nav
    main.insertBefore(container, nav);
};