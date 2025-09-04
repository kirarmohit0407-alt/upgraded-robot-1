function updateCartCount() {
  const cartCountElem = document.getElementById('cart-count');
  if (!cartCountElem) return;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  cartCountElem.textContent = totalCount;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
