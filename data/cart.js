const CART_STORAGE_NAME = "cart";

export let cart = JSON.parse(localStorage.getItem(CART_STORAGE_NAME)) ?? [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 1,
},
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 2,
}];

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  }
  else {
    cart.push({
      productId,
      quantity: 1,
    });
  }
  saveCartToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveCartToStorage();
}

function saveCartToStorage() {
  localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cart));
}