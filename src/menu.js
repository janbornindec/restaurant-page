import _ from 'lodash';

const menu = document.createElement("div");
menu.setAttribute("id","menu");

//create each category in menu
function createMenuCategory(name, num) {
    //create category container
    const menuCategory = document.createElement("div");
    menuCategory.setAttribute("class","menuCategory");
    menuCategory.classList.add(name);

    //add category heading
    const categoryHeading = document.createElement("p");
    categoryHeading.textContent = name.toUpperCase();
    menuCategory.appendChild(categoryHeading);

    //add category to menu
    menu.appendChild(menuCategory);

    //add item container to category
    for (let i=0; i<num; i++) {
        const menuItem = document.createElement("div");
        menuItem.setAttribute("class",`${name}Item${i}`);
        menuCategory.appendChild(menuItem);
    }

    //return menuCategory for further manipulation
    return menuCategory;
}

//create item card for each menu item
function createMenuItemCards(name, wordings, price) {
    //create item card container
    const itemCard = document.createElement("div");
    itemCard.setAttribute("class","itemCard");

    //add item name
    const itemName = document.createElement("p");
    itemName.setAttribute("class","itemName");
    itemName.textContent = name;

    //add item description
    const itemDetails = document.createElement("p");
    itemDetails.setAttribute("class","itemDetails");
    itemDetails.textContent = wordings;

    //add item price
    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class","itemPrice");
    itemPrice.textContent = price;

    //add all details to item
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemDetails);
    itemCard.appendChild(itemPrice);

    //return itemCard for further manipulation
    return itemCard;
}

//create a classics category to menu
function createClassics() {
    //create classics category and add 2 item containers
    createMenuCategory("classics", 2);
    const item1 = document.querySelector(".classicsItem0");
    const item2 = document.querySelector(".classicsItem1");

    //create first item card
    const itemCard1 = createMenuItemCards("Croissant", "Traditional French croissant, prepared over 3 days.", "$7.10");
    item1.appendChild(itemCard1);

    //create second item card
    const itemCard2 = createMenuItemCards("Pain Au Chocolat", "Traditional chocolate croissant, with two dark chocolate batons.", "$7.90");
    item2.appendChild(itemCard2);
}

//create menu and add to content div
function createMenu() {
    content.appendChild(menu);
    createClassics();
}

//display menu
export default function loadMenu() {
    createMenu();
}