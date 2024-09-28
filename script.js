let cartCount = 0;

document.querySelector('.add-to-cart').addEventListener('click', () => {
    cartCount++;
    alert('Product added to cart! Total items: ' + cartCount);
});
<script>
    window.SnipcartSettings = {
        publicApiKey: 'MGM5NTUyMmItY2FkYy00ODgyLWFmY2MtYTQ2MjJjZmYxMDM4NjM4NjMxMDM0OTU1NzI4ODU1',
        loadStrategy: 'on-user-interaction',
    };

    (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(`src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`),n=document.querySelector(`link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=`${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`,t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
</script>

const spaceId = 'lta28vhnl4pz';
const accessToken = '1WWaY_3IgVsh9OqIHf7l9PjpBcrcOTr7P0yzIDBvxDI';

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
            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function to fetch products
fetchProducts();

