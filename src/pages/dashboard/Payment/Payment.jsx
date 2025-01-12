import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../components/Heading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Checkout/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK_Key);

const Payment = () => {
  return (
    <div>
      <Heading heading={"Payment"} subHeading={""}></Heading>

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
