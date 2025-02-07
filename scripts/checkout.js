import * as orderSummaryModule from "./checkout/orderSummary.js";
import * as paymentSummaryModule from "./checkout/paymentSummary.js";
import "../data/cart-class.js";

orderSummaryModule.renderOrderSummary();
paymentSummaryModule.renderPaymentSummary();