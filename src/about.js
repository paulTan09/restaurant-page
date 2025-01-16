export function loadAboutPage() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "About Us";
    headline.classList.add('headline');
    content.appendChild(headline);

    const descriptionContainer1 = document.createElement("div");
    descriptionContainer1.classList.add('descriptionContainer');
    content.appendChild(descriptionContainer1);

    const descriptionPara1 = document.createElement("p");
    descriptionPara1.classList.add('descriptionPara');
    descriptionPara1.textContent = `
        At Papa's Pizzeria, our story is as rich and flavorful as our pizza. What started as a humble family venture has grown into a beloved local spot, where community and quality go hand in hand.

        Our kitchen is the heart of our pizzeria, where tradition meets creativity. From our signature sauces simmered to perfection to the blend of cheeses carefully selected for their melt and flavor, every detail matters. We take pride in crafting more than just pizza — we create experiences, one bite at a time.

    `;
    descriptionContainer1.appendChild(descriptionPara1);

    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add('descriptionContainer');
    content.appendChild(descriptionContainer2);

    const descriptionPara2 = document.createElement("p");
    descriptionPara2.classList.add('descriptionPara');
    descriptionPara2.textContent = `
        But Papa's Pizzeria is more than just great food. We're a place where friends gather, families celebrate, and laughter echoes. Our team is passionate about making every visit memorable, whether you're sharing a pizza with loved ones or discovering a new favorite from our seasonal specials.

        Thank you for being part of our story. Your support inspires us to keep doing what we love — serving up authentic flavors with a touch of homegrown hospitality.
        
    `;
    descriptionContainer2.appendChild(descriptionPara2);

}