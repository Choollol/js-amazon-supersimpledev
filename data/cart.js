const CART_STORAGE_NAME = "cart";

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem(CART_STORAGE_NAME)) ?? [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
    deliveryOptionId: "1",
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2,
    deliveryOptionId: "2",
  }];
}

export function addToCart(productId, quantity) {
  const matchingItem = findCartItemById(productId);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  }
  else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: "1",
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

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = findCartItemById(productId);

  matchingItem.deliveryOptionId = deliveryOptionId;
  saveCartToStorage();
}

function findCartItemById(productId) {
  return cart.find((cartItem) => cartItem.productId === productId);
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    console.log(xhr.response);

    fun();
  });

  xhr.open("GET", "https://supersimplebackend.dev/cart");
  xhr.send();
}