import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <PaymentElement></PaymentElement>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
