const spaceId = 'lta28vhnl4pz'; // Ensure this is correct
const accessToken = '1WWaY_3IgVsh9OqIHf7l9PjpBcrcOTr7P0yzIDBvxDI'; // Ensure this is correct

async function fetchProducts() {
    try {
        const response = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`);
        const data = await response.json();
        
        const productList = document.querySelector('.product-list');
        productList.innerHTML = ''; // Clear existing products
        
        data.items.forEach(item => {
            const product = item.fields;
            const productCard = document.createElement('div');
            productCard.className = 'product';
            productCard.setAttribute('data-snipcart-add-item', '');

            productCard.innerHTML = `
                <img src="${product.image.fields.file.url}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart" 
                    data-item-id="${item.sys.id}" 
                    data-item-price="${product.price}" 
                    data-item-url="/${item.sys.id}" 
                    data-item-name="${product.name}">
                    Add to Cart
                </button>
            `;

            // Append the product card to the list
            productList.appendChild(productCard);

            // Add event listener for the newly created button
            const addToCartButton = productCard.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', () => {
                alert(`Added ${product.name} to cart!`);
                // You can also integrate Snipcart's functionality here if needed
            });
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function to fetch products
fetchProducts();
