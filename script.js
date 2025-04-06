// Search Filter Functionality
const search = document.getElementById('search-item');
const products = document.querySelectorAll('.product');

search.addEventListener('keyup', function () {
    const searchText = search.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector('.p-details h2').textContent.toLowerCase();
        if (productName.includes(searchText)) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
});

// Add to Cart Functionality
let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');

products.forEach(product => {
    product.addEventListener('click', () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
    });
});
