const spaceId = 'lta28vhnl4pz'; // Ensure this is correct
const accessToken = '1WWaY_3IgVsh9OqIHf7l9PjpBcrcOTr7P0yzIDBvxDI'; // Ensure this is correct

async function fetchProducts() {
    try {
        const response = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`);
        if (!response.ok) throw new Error('Network response was not ok');

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
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to load products. Please try again later.'); // User-friendly error
    }
}

// Call the function to fetch products
fetchProducts();
