import _ from 'lodash';
import contactPic from '/src/images/contact.jpeg';

function createContact() {
    const contactImgContainer = document.createElement("div");
    contactImgContainer.setAttribute("id","contactImgContainer")

    const contactImg = document.createElement("img");
    contactImg.src = contactPic;
    contactImg.setAttribute("id","contactPic");
    contactImg.alt = "Komorebi Bakery";
    contactImgContainer.appendChild(contactImg);

    const contact = document.createElement("div");
    contact.setAttribute("id","contactDetails");
    const contactHeading = document.createElement("h1");
    const contactDetails = document.createElement("p");
    contactHeading.textContent = "Contact";
    contactDetails.innerHTML = "<p>Address: Shop 3 Bun Street, Bun Centre<br>Hours: Mon - Sun 7am - 12pm </p>"
    contact.appendChild(contactHeading);
    contact.appendChild(contactDetails);

    content.appendChild(contactImgContainer);
    content.appendChild(contact);
}

export default function loadContact() {
    createContact();
};