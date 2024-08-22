
const productsBtn = document.getElementById('productsBtn');
const cartBtn = document.getElementById('cartBtn');
const productsContainer = document.getElementById('productsContainer');
const productDetails = document.getElementById('productDetails');
const cartContainer = document.getElementById('cartContainer');

productsBtn.addEventListener('click', () => {
    productsContainer.style.display = 'block';
    productDetails.style.display = 'none';
    cartContainer.style.display = 'none';
});

cartBtn.addEventListener('click', () => {
    productsContainer.style.display = 'none';
    productDetails.style.display = 'none';
    cartContainer.style.display = 'block';
});

const card = document.querySelector('.card');
card.addEventListener('click', () => {
    productsContainer.style.display = 'none';
    productDetails.style.display = 'block';
    cartContainer.style.display = 'none';
});

const cartBtns = document.querySelectorAll('.cartBtn');
cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Add the product to the cart
    });
});
