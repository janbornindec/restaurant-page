import _, { create } from 'lodash';
import './style.css';
import loadHome from './home'
import switchPage from './pages';

const content = document.getElementById("content");

function addFooter() {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    const copyright = document.createElement("div");
    const copyrightTxt = document.createElement("p");
    copyrightTxt.textContent = "by Janelle Choo";
    copyright.appendChild(copyrightTxt);
    footer.appendChild(copyright);
    body.appendChild(footer);
}

(function buttonListener() {
    const buttons = document.querySelectorAll("button");
    const buttonsArray = [...buttons];
    buttonsArray.forEach(btn => {
        btn.setAttribute("id",`${btn.textContent}`.toLowerCase());
        btn.addEventListener('click', switchPage);
    });
})();

const homeBtn = document.getElementById("komorebi");

(function initLoad() {
    loadHome();
    addFooter();
    homeBtn.classList.add("active");
})();
