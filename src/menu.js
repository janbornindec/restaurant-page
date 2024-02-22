export function loadMenu() {
    const main = document.querySelector(".main");
    const nav = document.querySelector(".nav");
    const container = document.querySelector(".container");

    //create container for the whole space next to nav
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    for (let i=0; i<8; i++) {
        const menuItem = document.createElement("p");
        menuItem.classList.add("menuItem");
        menuItem.setAttribute("id",`p${i}`);
        menu.appendChild(menuItem);
    };
    container.appendChild(menu);

    const p0 = document.querySelector("#p0");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    const p3 = document.querySelector("#p3");
    const p4 = document.querySelector("#p4");
    const p5 = document.querySelector("#p5");
    const p6 = document.querySelector("#p6");
    const p7 = document.querySelector("#p7");

    p0.textContent = `Coconut Yogurt, Fruit Compote, Wattle Seed Granola
$12.1`;
    p1.textContent = `Seasonal Fruit Salad
$8.3`;
    p2.textContent = `Toasted White or Seeded Sourdough
with choice of vegemite, strawberry jam or Beachmere honey
$7.5`;
    p3.textContent = `Smoked Ham and Gruyere Croissant
$9.9`;
    p4.textContent = `Bacon and Egg Brioche Burger with Swiss cheese and tomato relish or smoky BBQ sauce
$14.6`;
    p5.textContent = `Croque Monsieur
Classic Parisian grilled sandwich of smoked ham, gruyere and bechamel
$13.9`;
    p6.textContent = `Flammekueche (Alsatian Tart) 
$9`;
    p7.textContent = `Selection of stone-baked sourdough rolls, baguettes and sliced breads
with premium fillings served fresh (or toasted) with premium fillings
served fresh (or toasted) from our retail from our retail display cabinet (available Mon to Fri)`;

    //add div to main and make sure the new div stays on the left of nav
    main.insertBefore(container, nav);
}