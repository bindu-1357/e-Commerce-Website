const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})



document.addEventListener('DOMContentLoaded', function() {
  const cartItemsContainer = document.getElementById('cart-items-list');
  const wishlistItemsContainer = document.getElementById('wishlist-items-list');
  const cartTotalElement = document.getElementById('cart-total');
  const cartSection = document.getElementById('cart-section');

  let cartTotal = 0;

  window.addToCart = function (name, price) {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${name}</span>
      <span>$${price.toFixed(2)}</span>
      <span class="remove-item" onclick="removeFromCart(this, ${price})">X</span>
    `;

    cartItemsContainer.appendChild(cartItem);

    cartTotal += price;
    cartTotalElement.innerText = cartTotal.toFixed(2);

    // Show the cart section when an item is added to the cart
    cartSection.style.display = 'block';
  }

  window.addToWishlist = function (name) {
    const wishlistItem = document.createElement('li');
    wishlistItem.innerHTML = `
      <span>${name}</span>
      <span class="remove-item" onclick="removeFromWishlist(this)">X</span>
    `;

    wishlistItemsContainer.appendChild(wishlistItem);
  }

  window.removeFromCart = function (element, price) {
    const cartItem = element.parentElement;
    cartItemsContainer.removeChild(cartItem);

    cartTotal -= price;
    cartTotalElement.innerText = cartTotal.toFixed(2);

    // Hide the cart section if there are no items in the cart
    if (cartItemsContainer.childElementCount === 0) {
      cartSection.style.display = 'none';
    }
  }

  window.removeFromWishlist = function (element) {
    const wishlistItem = element.parentElement;
    wishlistItemsContainer.removeChild(wishlistItem);
  }

  window.toggleCartSection = function () {
    // Toggle the visibility of the cart section
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
      cartSection.style.display = 'block';
    } else {
      cartSection.style.display = 'none';
    }
  }
});

