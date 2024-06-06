import _ from 'lodash';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

export default function switchPage(e) {
    const activeBtn = document.querySelector(".active");
    const btn = e.target;

    if (activeBtn === btn) { return };

    if (activeBtn) activeBtn.classList.remove("active");
    btn.classList.add("active");
    
    content.textContent = "";

    if (btn.textContent === 'KOMOREBI') {
        loadHome();
    } else if (btn.textContent === 'MENU') {
        loadMenu();
    } else if (btn.textContent === 'CONTACT') {
        loadContact();
    }
};