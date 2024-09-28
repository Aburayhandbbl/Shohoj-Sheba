const spaceId = 'lta28vhnl4pz';
const accessToken = '1WWaY_3IgVsh9OqIHf7l9PjpBcrcOTr7P0yzIDBvxDI';
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=product`;

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayProducts(data.items);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const { title, description, price, image } = product.fields;
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${title}</h2>
            <img src="${image.fields.file.url}" alt="${title}" width="150">
            <p>${description}</p>
            <p>Price: $${price}</p>
        `;
        productList.appendChild(productElement);
    });
}

// Initialize fetching products
fetchProducts();
