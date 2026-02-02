const qtyButtons = document.querySelectorAll('.quantity-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const prices = document.querySelectorAll('.item-price');
const quantities = document.querySelectorAll('.item-quantity');
const totalPriceEl = document.querySelector('#total-price');

// Function to update total
function updateTotal() {
    let total = 0;
    prices.forEach((priceEl, index) => {
        const price = parseFloat(priceEl.textContent.replace('$',''));
        const quantity = parseInt(quantities[index].textContent);
        total += price * quantity;
    });
    totalPriceEl.textContent = `$${total.toFixed(2)}`;
}

// Handle quantity buttons
qtyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = e.target.closest('.cart-item');
        const quantityEl = item.querySelector('.item-quantity');
        let quantity = parseInt(quantityEl.textContent);

        if (button.classList.contains('plus')) {
            quantity++;
        } else if (button.classList.contains('minus') && quantity > 0) {
            quantity--;
        }

        quantityEl.textContent = quantity;
        updateTotal();
    });
});

// Handle delete buttons
deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = e.target.closest('.cart-item');
        item.remove();
        updateTotal();
    });
});

// Handle like buttons
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked'); // Add CSS class .liked { color: red; } 
    });
});

// Initialize total price on page load
updateTotal();
