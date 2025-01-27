import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showSweetAlert } from "../../../utility/showSweetAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [cart, refetch] = useCart();
  const [clientSecret, setClientSecret] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [gateway, setGateway] = useState("Stripe");

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/api/create-payment-intent", { price: totalPrice })
        .then((res) => {
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

      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          data: new Date(), // utc data convert. use moment js to
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/api/payments", payment);
        if (res.data?.paymentResult?.insertedId) {
          showSweetAlert("success", "Thank you for Buy Our Product");
        }
        refetch();
        navigate("/dashboard/user/payment-history");
      }
    }
  };

  // Payment with SSLCommerez gateway
  function handelSSLPayment() {
    const productInfo = {
      email: user?.email,
      name: user?.displayName,
      cartIds: cart.map((item) => item._id),
    };
    axiosPublic
      .post("/api/ssl-payment-init", productInfo)
      .then((res) => {
        const gatewayURL = res?.data?.gatewayURL;
        window.location.replace(gatewayURL);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {/* Select Payment gateway */}
      <div className="mt-20">
        <select
          onChange={(e) => setGateway(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option>Stripe</option>
          <option>SSLCOMMERZ</option>
        </select>
      </div>

      <div className="my-10">
        {gateway === "Stripe" ? (
          <>
            {" "}
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
          </>
        ) : (
          <div>
            <div className="bg-base-200 rounded p-4">
              <p className="text-center font-semibold text-xl my-5">Checkout</p>
              <input
                defaultValue={user?.email}
                type="text"
                placeholder="Type here"
                className="input w-full "
              />
              <button
                onClick={handelSSLPayment}
                className="btn bg-black text-white my-5"
                type="button"
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
