import * as cartModule from "../../data/cart.js";
import * as productModule from "../../data/products.js"
import * as deliveryOptionsModule from "../../data/deliveryOptions.js"
import * as moneyModule from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let totalQuantity = 0;

  cartModule.cart.forEach((cartItem) => {
    const product = productModule.getProductById(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = deliveryOptionsModule.getDeliveryOptionById(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

    totalQuantity += cartItem.quantity;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${totalQuantity}):</div>
      <div class="payment-summary-money">$${moneyModule.formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${moneyModule.formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${moneyModule.formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${moneyModule.formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${moneyModule.formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}