import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [cart] = useCart();
  const [clientSecret, setClientSecret] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/api/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setErrorMessage(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErrorMessage("");
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent is success", paymentIntent);
    }
  };

  return (
    <div>
      <div className="my-20">
        <form onSubmit={handelSubmit}>
          <CardElement
            className="mb-5 bg-gray-50 p-5 rounded-md"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          ></CardElement>
          <button
            disabled={!stripe || !clientSecret}
            type="submit"
            className="btn"
          >
            Pay
          </button>
        </form>
        <p className="text-red-500">{errorMessage}</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
