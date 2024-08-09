// Assuming cart data is saved in local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Book details for demonstration purposes
const bookDetails = {
    book1: { title: "Book Title 1", price: 10.99, image: "book1.jpg" },
    book2: { title: "Book Title 2", price: 8.99, image: "book2.jpg" },
    book3: { title: "Book Title 3", price: 11.99, image: "book3.jpg" },
    book4: { title: "Book Title 4", price: 15.99, image: "book4.jpg" },
    book5: { title: "Book Title 5", price: 5.99, image: "book5.jpg" }
    // Add other books here
};

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const book = bookDetails[item.id];
        const itemTotal = book.price * item.quantity;
        totalPrice += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="cart-item-details">
                <h3>${book.title}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${book.price.toFixed(2)}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Proceed to checkout');
    // Implement checkout logic here
});

// Initialize the cart page
renderCartItems();
