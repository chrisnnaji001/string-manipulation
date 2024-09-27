// Function to update total price based on quantity and deleted items
function updateTotal() {
    let total = 0;
    const items = document.querySelectorAll('.cart-item');

    items.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
    });

    document.querySelector('#total-price').textContent = `$${total.toFixed(2)}`;
}

// Add event listeners to the plus and minus buttons to adjust quantity
document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('.quantity-input');
        let quantity = parseInt(input.value);

        if (this.classList.contains('plus')) {
            quantity++;
        } else if (this.classList.contains('minus')) {
            if (quantity > 1) {
                quantity--;
            }
        }

        input.value = quantity;
        updateTotal();
    });
});

// Add event listeners to delete buttons to remove items from the cart
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.parentElement.remove(); // Removes the item from the DOM
        updateTotal(); // Update total after removing item
    });
});

// Add event listeners to heart buttons to like/unlike items
document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('liked'); // Toggle liked class to change heart color
    });
});

// Initialize the total price on page load
updateTotal();

