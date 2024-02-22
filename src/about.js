import img from './image/aboutimg.jpeg';

export function loadAbout() {
    const main = document.querySelector(".main");
    const nav = document.querySelector(".nav");
    const container = document.querySelector(".container");

    //create container for the whole space next to nav
    const about = document.createElement("div");
    about.classList.add("about");

    //create top container within about div for image
    const top = document.createElement("div");
    top.classList.add("topContainer");
    const aboutImg = new Image();
    aboutImg.src = img;
    aboutImg.alt = "Bun Bakery";
    aboutImg.setAttribute("id","aboutImg")
    top.appendChild(aboutImg);
    
    //create bottom container within about div for texts
    const bottom = document.createElement("div");
    bottom.classList.add("bottomContainer");
    const description = document.createElement("p");
    description.classList.add("text");
    description.textContent = "パン means Bread or Bun in Japanese. Bun Bakery is owned by Janelle and Guy, a couple living in Brisbane, Australia. Janelle is born in Malaysia and Guy is born in Australia. Our menu draws heavily on local produce and combines classics with more inventive dishes. We support local businesses like Tanglewood Organic Sourdough Bakery, Noosa Cleanse cold pressed juice and source produce that is free range, grass fed and where possible certified organic. We take our food, our community and our service seriously but not ourselves.";
    bottom.appendChild(description);

    //add both containers inside about div
    about.appendChild(top);
    about.appendChild(bottom);

    container.appendChild(about);

    //add div to main and make sure the new div stays on the top of nav
    main.insertBefore(container, nav);
};