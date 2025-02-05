import * as cartModule from "../../data/cart.js";

describe("test suite: addToCart", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem");
  });

  it("adds an existing product to the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }]);
    });
    cartModule.loadFromStorage();

    cartModule.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 1);
    expect(cartModule.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cartModule.cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cartModule.cart[0].quantity).toEqual(2);
  });

  it("adds a new product to the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    cartModule.loadFromStorage();
    
    cartModule.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 1);
    expect(cartModule.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cartModule.cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cartModule.cart[0].quantity).toEqual(1);
  });

  it("adds two new products to the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    cartModule.loadFromStorage();
    
    cartModule.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 2);
    expect(cartModule.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cartModule.cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cartModule.cart[0].quantity).toEqual(2);
  });

  it("adds two of an existing product to the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }]);
    });
    cartModule.loadFromStorage();
    
    cartModule.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", 2);
    expect(cartModule.cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cartModule.cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cartModule.cart[0].quantity).toEqual(3);
  });
});