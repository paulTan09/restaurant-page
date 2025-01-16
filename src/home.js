export function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Welcome!";
    headline.classList.add('headline');
    content.appendChild(headline);

    const descriptionContainer1 = document.createElement("div");
    descriptionContainer1.classList.add('descriptionContainer');
    content.appendChild(descriptionContainer1);

    const descriptionPara1 = document.createElement("p");
    descriptionPara1.classList.add('descriptionPara');
    descriptionPara1.textContent = `
      Welcome to Papa's Pizzeria, where every slice tells a story.

      Since 1985, we've been serving authentic Italian pizza, handcrafted with recipes passed down through generations.
      Our secret? Simple, fresh ingredients, hand-tossed dough made daily, and a passion for creating the perfect pie.

      Located in the heart of downtown, Papa's Pizzeria offers a warm, family-friendly atmosphere where memories are made and traditions are shared. Whether you're dining in our rustic dining room, grabbing a quick slice for lunch, or ordering a family-sized feast for delivery, you'll taste the difference that passion makes.

    `;
    descriptionContainer1.appendChild(descriptionPara1);

    const descriptionContainer2 = document.createElement("div");
    descriptionContainer2.classList.add('descriptionContainer');
    content.appendChild(descriptionContainer2);

    const descriptionPara2 = document.createElement("p");
    descriptionPara2.textContent = `
      Join us for our weekly specials:
      Monday: Family Night - One Large Pizza & 4 Sodas for $25
      Wednesday: Student Special - 15% off with valid ID
      Friday & Saturday: Live Music & Pizza Buffet

      Hours:
      Monday - Thursday: 11am - 10pm
      Friday - Saturday: 11am - 11pm
      Sunday: 12pm - 9pm

      Call us for reservations or delivery: (555) 123-4567
      
    `;
    descriptionPara2.classList.add('descriptionPara');
    descriptionContainer2.appendChild(descriptionPara2);
  }