import icon from './image/titleimg.png';
import img1 from './image/banner.jpeg';
import img2 from './image/banner2.jpeg';
import img3 from './image/banner3.jpeg';
import JC from './image/JClogo.png';

const content = document.getElementById("content");

//add header elements
const createHeader = function() {
    const header = document.createElement("div");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");

    const logoTxt = document.createElement("h1");
    logoTxt.textContent = "パン";

    const logoIcon = new Image();
    logoIcon.src = icon;
    logoIcon.alt = "Bun パン"
    logoIcon.setAttribute("id","icon");

    logo.appendChild(logoIcon);
    logo.appendChild(logoTxt);
    header.appendChild(logo);
    content.appendChild(header);
}();
    
//add main elements
const createMain = function() {
    const main = document.createElement("div");
    main.classList.add("main");

    const container = document.createElement("div");
    container.classList.add("container");

    const slideContainer = document.createElement("div");
    slideContainer.classList.add("slideContainer")

    for (let x=0; x<3; x++) {
        let slide = document.createElement("div");
        slide.classList.add("slide");
        slide.setAttribute("id",`slide${x}`);
        slideContainer.appendChild(slide);
    }

    container.appendChild(slideContainer);
    main.appendChild(container);
    content.appendChild(main);

    //add nav to main div
    const nav = document.createElement("div");
    nav.classList.add("nav");
    
    for (let x=0; x<3; x++) {
        let menuBtn = document.createElement("button");
        menuBtn.classList.add("btn");
        menuBtn.setAttribute("id",`btn${x}`);
        nav.appendChild(menuBtn);
    }

    main.appendChild(nav);
}();

//add footer elements
const createFooter = function() {
    const footer = document.createElement("div"); 
    footer.classList.add("footer");
    const copyright = document.createElement("p");
    copyright.setAttribute("id","copyright");
    copyright.textContent = "© 2024 Janelle Choo. All rights reserved.";
    const JClogo = new Image();
    JClogo.src = JC;
    JClogo.setAttribute("id","JClogo");
    footer.appendChild(JClogo);
    footer.appendChild(copyright);
    content.appendChild(footer);
}();

export function loadHomepage() {
    //add btn text
    document.getElementById("btn0").textContent = "About";
    document.getElementById("btn1").textContent = "Menu";
    document.getElementById("btn2").textContent = "Contact";

    //add slideshow elements
    const slideImg1 = new Image();
    slideImg1.src = img1;
    slideImg1.classList.add("slideImg")

    const slideImg2 = new Image();
    slideImg2.src = img2;
    slideImg2.classList.add("slideImg")

    const slideImg3 = new Image();
    slideImg3.src = img3;
    slideImg3.classList.add("slideImg");

    const slide1 = document.getElementById("slide0");
    const slide2 = document.getElementById("slide1");
    const slide3 = document.getElementById("slide2");

    slide1.appendChild(slideImg1);
    slide2.appendChild(slideImg2);
    slide3.appendChild(slideImg3);
        
    //add slideshow animation
    let slideIndex = 0;    
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change image every 3 seconds
    };
};