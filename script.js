function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is currently empty.</p>";
        cartTotal.innerHTML = "Total: KSh 0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(function(product) {
        total += product.price;

        cartItems.innerHTML += `
    <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>KSh ${product.price}</p>
        <button onclick="removeFromCart(${cart.indexOf(product)})">
            Remove
        </button>
    </div>
        `;
    });

    cartTotal.innerHTML = "Total: KSh " + total;
}

displayCart();

displayCart();

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}