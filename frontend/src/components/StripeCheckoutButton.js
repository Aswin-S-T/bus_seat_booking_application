import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // Convert price to cents

  const onToken = (token) => {
    // Handle the token received from Stripe API
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Store"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      currency="USD"
      token={onToken}
      stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
    />
  );
};

export default StripeCheckoutButton;
