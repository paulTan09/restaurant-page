export function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    headline.classList.add('headline');
    content.appendChild(headline);

    const descriptionContainer1 = document.createElement("div");
    descriptionContainer1.classList.add('descriptionContainer');
    content.appendChild(descriptionContainer1);

    const descriptionPara1 = document.createElement("p");
    descriptionPara1.classList.add('descriptionPara');
    descriptionPara1.textContent = `
Have a complaint, compliment, or question? We'd love to hear from you!
    
        To file a complaint, send us an email at:
            complaints@papaspizzeria.com

        To share a compliment or ask a question, send us an email at:
            prdept@papaspizzeria.com

        For business-related inquiries, send us an email at:
            business@papaspizzeria.com

    `;
    descriptionContainer1.appendChild(descriptionPara1);
}