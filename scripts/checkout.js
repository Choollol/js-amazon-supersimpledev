import * as orderSummaryModule from "./checkout/orderSummary.js";
import * as paymentSummaryModule from "./checkout/paymentSummary.js";
import * as productsModule from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

productsModule.loadProducts(() => {
  orderSummaryModule.renderOrderSummary();
  paymentSummaryModule.renderPaymentSummary();
});
