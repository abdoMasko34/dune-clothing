import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51LwKJ7HAHsuYdEXIgtajixTsf2eYBjwY71FIFVtPANDrz3hXd47gguVK5zvNjEy2VbiFm08njJhiweC5m1uBeVNm00f02Gkl3l";

  const onToken = (token) => {
    console.log(token);
    axios
      .post("payment", { amount: priceForStripe, token })
      .then((res) => alert("payment successful"))
      .catch((err) => {
        console.log("payment Error", JSON.parse(err));
        alert("There were issue with your payment");
      });
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
