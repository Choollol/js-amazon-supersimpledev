import * as orderSummaryModule from "./checkout/orderSummary.js";
import * as paymentSummaryModule from "./checkout/paymentSummary.js";
import * as productsModule from "../data/products.js";
import * as cartModule from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  try {
    // throw "error1";

    await Promise.all([
      productsModule.loadProductsFetch(),

      new Promise((resolve, reject) => {
        // throw "error2";
        cartModule.loadCart(() => {
          // reject("error3");
          resolve();
        });
      })
    ]);
  }
  catch (error) {
    console.log("Unexpected error. Please try again later.");
  }

  orderSummaryModule.renderOrderSummary();
  paymentSummaryModule.renderPaymentSummary();
}
loadPage();

/* Promise.all([
  productsModule.loadProductsFetch(),
  new Promise((resolve) => {
    cartModule.loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  orderSummaryModule.renderOrderSummary();
  paymentSummaryModule.renderPaymentSummary();
}); */

/* new Promise((resolve) => {
  productsModule.loadProducts(() => {
    resolve("value1");
  });
  
}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    cartModule.loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  orderSummaryModule.renderOrderSummary();
  paymentSummaryModule.renderPaymentSummary();
}); */

/* productsModule.loadProducts(() => {
  cartModule.loadCart(() => {
    orderSummaryModule.renderOrderSummary();
    paymentSummaryModule.renderPaymentSummary();
  });
});
 */