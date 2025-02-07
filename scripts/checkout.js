import * as orderSummaryModule from "./checkout/orderSummary.js";
import * as paymentSummaryModule from "./checkout/paymentSummary.js";
import * as productsModule from "../data/products.js";
import * as cartModule from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  await Promise.all([
    productsModule.loadProductsFetch(),

    new Promise((resolve) => {
      cartModule.loadCart(() => {
        resolve();
      });
    })
  ]);

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