import _ from 'lodash';
import croissant from '/src/images/menu_items/traditional-croissant.jpg';
import painAuChocolat from "/src/images/menu_items/pain-au-chocolat.jpg";
import almondCroissant from "/src/images/menu_items/almond-croissant.jpg";
import kouignAmann from "/src/images/menu_items/kouign-amann.jpg";
import morningBun from "/src/images/menu_items/morning-bun.jpg";
import lemonCurdCruffin from "/src/images/menu_items/lemon-curd-cruffin.jpg";
import cardamomBun from "/src/images/menu_items/cardamom-bun .jpeg";
import blackForestCruffin from "/src/images/menu_items/black-forest-cruffin.jpeg";
import honeyJoyTb from "/src/images/menu_items/honey-joy-tb.jpeg";

//create each category in menu
function createMenuCategory(name, num) {
    //create category container
    const menuCategory = document.createElement("div");
    menuCategory.setAttribute("class","menuCategory");
    menuCategory.classList.add(name);

    //add category heading
    const categoryHeading = document.createElement("p");
    categoryHeading.setAttribute("class","categoryHeading");
    categoryHeading.textContent = name.toUpperCase();
    menuCategory.appendChild(categoryHeading);

    //add item container to category
    for (let i=0; i<num; i++) {
        const menuItem = document.createElement("div");
        menuItem.setAttribute("id",`${name}Item${i}`);
        menuItem.classList.add("menuItem");
        menuCategory.appendChild(menuItem);
    }

    //return menuCategory for further manipulation
    return menuCategory;
}

//create item card for each menu item
function createMenuItemCards(img, name, wordings, price) {
    //create item card container
    const itemCard = document.createElement("div");
    itemCard.classList.add("itemCard");

    //add item image
    const itemImage = document.createElement("img");
    itemImage.classList.add("itemImage");
    itemImage.src = img;
    itemCard.appendChild(itemImage);

    //add item name
    const itemName = document.createElement("p");
    itemName.classList.add("itemName");
    itemName.textContent = name;

    //add item description
    const itemDetails = document.createElement("p");
    itemDetails.classList.add("itemDetails");
    itemDetails.textContent = wordings;

    //add item price
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("itemPrice");
    itemPrice.textContent = price;

    //add text container for all details
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    textContainer.appendChild(itemName);
    textContainer.appendChild(itemDetails);
    textContainer.appendChild(itemPrice);

    itemCard.appendChild(textContainer);

    //return itemCard for further manipulation
    return itemCard;
}

//create a classics category to menu
function createClassics() {
    //create classics category and add 2 item containers
    const category = createMenuCategory("classics", 6);

    const item1 = category.querySelector("#classicsItem0");
    const item2 = category.querySelector("#classicsItem1");
    const item3 = category.querySelector("#classicsItem2");
    const item4 = category.querySelector("#classicsItem3");
    const item5 = category.querySelector("#classicsItem4");
    const item6 = category.querySelector("#classicsItem5");

    //create first item card
    const itemCard1 = createMenuItemCards(croissant, "Traditional French croissant, prepared over 3 days.", "$7.10");
    item1.appendChild(itemCard1);

    //create second item card
    const itemCard2 = createMenuItemCards(painAuChocolat,"Pain Au Chocolat", "Traditional chocolate croissant, with two dark chocolate batons.", "$7.90");
    item2.appendChild(itemCard2);

    //create third item card
    const itemCard3 = createMenuItemCards(almondCroissant,"Almond Croissant", "The original Croissant aux Amandes, prepared with almond frangipane & garnished with a healthy amount of flaked almonds.", "$11.70");
    item3.appendChild(itemCard3);

    //create fourth item card
    const itemCard4 = createMenuItemCards(kouignAmann,"Kouign Amann", "Traditional pastry from the Bretagne region of France, laminated with sugar and baked in a buttered, sugared mold until caramelised.", "$9.50");
    item4.appendChild(itemCard4);

    //create fifth item card
    const itemCard5 = createMenuItemCards(morningBun,"Morning Bun", "Croissant pastry baked with a brown sugar, cinnamon and orange zest filling, and rolled in that same deliciously spiced sugar.", "$9.20");
    item5.appendChild(itemCard5);

    //create sixth item card
    const itemCard6 = createMenuItemCards(lemonCurdCruffin,"Lemon Curd Cruffin", "Filled with a house-made lemon curd, rolled in citrus sugar and topped with candied lemon zest.", "$9.80");
    item6.appendChild(itemCard6);

    return category;
}


//create a specials category to menu
function createSpecials() {
    //create specials category and add 2 item containers
    const category = createMenuCategory("specials", 3);

    const item1 = category.querySelector("#specialsItem0");
    const item2 = category.querySelector("#specialsItem1");
    const item3 = category.querySelector("#specialsItem2");

    //create first item card
    const itemCard1 = createMenuItemCards(cardamomBun,"Cardamom Bun", "Lune's classic twist shape, filled with sweet cardamom and cinnamon butter. Baked with a raw sugar topping.", "$10.50");
    item1.appendChild(itemCard1);

    //create second item card
    const itemCard2 = createMenuItemCards(blackForestCruffin,"Black Forest Cruffin", "A Cruffin filled with cherry jam and chocolate cherry mousse. Finished with a dusting of chocolate powder, a ruffle of double cream, and flaked chocolate.", "$10.00");
    item2.appendChild(itemCard2);

    //create third item card
    const itemCard3 = createMenuItemCards(honeyJoyTb,"Honey Joy TB", "A traditional croissant twice-baked with cornflake frangipane. Topped with more frangipane, honey joys, honey cream, and honeycomb sugar.", "$15.50");
    item3.appendChild(itemCard3);

    return category;
}

//create menu and add to content div
function createMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.appendChild(createClassics());
    menu.appendChild(createSpecials());
    content.appendChild(menu);

}

//display menu
export default function loadMenu() {
    createMenu();
}