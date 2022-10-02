import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51LoLSBIxLpXFQtN9gUh7LfiHsoYlCHi1HkBpQYuwYoBuRQi0spVggPKWBvsVdHwTlOLSOZ9LXEPVcmcWNvcaMuVS00XYTRTCdR";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Stripe Pay"
      currency="USD"
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      shippingAddress
      billingAddress={true}
      amount={priceForStripe}
      description={`Your total is $${price}`}
      panelLabel="Give Money"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
