import _ from 'lodash';

function createHome() {
    const homeImg = document.createElement("img");
    const about = document.createElement("div");
    about.setAttribute("id","about");
    const aboutHeader = document.createElement("h1");
    const aboutTxt = document.createElement("p");
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id","imgContainer")

    homeImg.src = '/src/images/almond_croissant.jpeg';
    homeImg.setAttribute("id","homePic");
    homeImg.alt = "Almond croissants";
    aboutHeader.textContent = "Komorebi { 木漏れ日 }";
    aboutTxt.innerHTML = "<p>koh-mo-reh-bee. tree (木) shine through (漏れ) sun (日). <br>The beautiful moment when the sunlight filters through the leaves on the trees.</p>"
    about.appendChild(aboutHeader);
    about.appendChild(aboutTxt);
    imgContainer.appendChild(homeImg);

    content.appendChild(imgContainer);
    content.appendChild(about);
}

export default function loadHome() {
    content.textContent = "";
    createHome();
};