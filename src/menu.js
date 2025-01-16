export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
   
    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    headline.classList.add('headline');
    content.appendChild(headline);

    function createMenuSection(title, items) {
        const menuTitle = document.createElement('h2');
        menuTitle.classList.add('menuTitle');
        menuTitle.textContent = title;
        content.appendChild(menuTitle);

        const menuContainer = document.createElement("div");
        menuContainer.classList.add('menuContainer');
        content.appendChild(menuContainer);

        items.forEach(item => {
            const menuCell = document.createElement("div");
            menuCell.classList.add('menuCell');
            
            const itemName = document.createElement("h3");
            itemName.textContent = item.name;
            itemName.classList.add('itemName');
            menuCell.appendChild(itemName);
            
            const itemPrice = document.createElement("p");
            itemPrice.classList.add('price');
            itemPrice.textContent = `$${item.price.toFixed(2)}`;
            menuCell.appendChild(itemPrice);
            
            const itemDescription = document.createElement("p");
            itemDescription.classList.add('description');
            itemDescription.textContent = item.description;
            menuCell.appendChild(itemDescription);
            
            menuContainer.appendChild(menuCell);
        });
    }

    const menuData = [
        {
            title: 'Beverages',
            items: [
                {
                    name: 'Turkish Coffee',
                    price: 4.50,
                    description: 'Traditional unfiltered coffee, served with Turkish delight'
                },
                {
                    name: 'Cappuccino',
                    price: 3.75,
                    description: 'Espresso with steamed milk and thick foam'
                },
                {
                    name: 'Fresh Mint Tea',
                    price: 3.25,
                    description: 'Fresh mint leaves steeped in hot water'
                }
            ]
        },
        {
            title: 'Dessert',
            items: [
                {
                    name: 'Cheesecake',
                    price: 6.99,
                    description: 'New York style cheesecake with graham cracker crust'
                },
                {
                    name: 'Brownie',
                    price: 5.99,
                    description: 'Warm chocolate brownie served with vanilla ice cream'
                },
                {
                    name: 'Tiramisu',
                    price: 7.50,
                    description: 'Classic Italian dessert with coffee-soaked ladyfingers'
                }
            ]
        },
        {
            title: 'Pizza',
            items: [
                {
                    name: 'Margherita',
                    price: 14.99,
                    description: 'Fresh tomatoes, mozzarella, basil, and olive oil'
                },
                {
                    name: 'Pepperoni',
                    price: 16.99,
                    description: 'Classic pepperoni with mozzarella and tomato sauce'
                },
                {
                    name: 'Vegetarian',
                    price: 15.99,
                    description: 'Bell peppers, mushrooms, onions, olives, and tomatoes'
                },
                {
                    name: 'Hawaiian',
                    price: 16.99,
                    description: 'Ham, pineapple, and mozzarella cheese'
                },
                {
                    name: 'Diavola',
                    price: 18.99,
                    description: 'Tomatoes, mozzarella, spicy salami, chili flakes, oregano - bold, fiery flavours'
                }
            ]
        }
    ];

    menuData.forEach(section => {
        createMenuSection(section.title, section.items);
    });
}