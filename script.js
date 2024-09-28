let cartCount = 0;

document.querySelector('.add-to-cart').addEventListener('click', () => {
    cartCount++;
    alert('Product added to cart! Total items: ' + cartCount);
});
const spaceId = 'lta28vhnl4pz'; // আপনার স্পেস আইডি
const accessToken = '1WWaY_3IgVsh9OqIHf7l9PjpBcrcOTr7P0yzIDBvxDI'; // আপনার অ্যাক্সেস টোকেন

async function fetchProducts() {
    const response = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`);
    const data = await response.json();
    return data.items;
}

fetchProducts().then(products => {
    products.forEach(product => {
        console.log(product.fields);
        // এখানে আপনি HTML তৈরি করে পণ্য প্রদর্শন করতে পারেন
    });
});
