// Add your JavaScript code here

function searchProducts() {
    // Implement product search functionality
    // Update the product-container with search results
}

function showCategory(category) {
    // Implement category-specific product display
    // Update the product-container with products from the selected category
}

function addToCart(productId, productName) {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');

    cartCountElement.innerText = parseInt(cartCountElement.innerText) + 1;

    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartItemsElement.appendChild(listItem);
}

function openCartModal() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}
