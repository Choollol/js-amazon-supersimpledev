function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ?? [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
        deliveryOptionId: "2",
      }];
    },
  
    saveCartToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
    addToCart(productId, quantity) {
      const matchingItem = this.findCartItemById(productId);
    
      if (matchingItem) {
        matchingItem.quantity += quantity;
      }
      else {
        this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId: "1",
        });
      }
      this.saveCartToStorage();
    },
  
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((cartItem) => cartItem.productId !== productId);
      this.saveCartToStorage();
    },
    
    updateDeliveryOption(productId, deliveryOptionId) {
      const matchingItem = this.findCartItemById(productId);
    
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveCartToStorage();
    },
  
    findCartItemById(productId) {
      return this.cartItems.find((cartItem) => cartItem.productId === productId);
    },
  };

  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);