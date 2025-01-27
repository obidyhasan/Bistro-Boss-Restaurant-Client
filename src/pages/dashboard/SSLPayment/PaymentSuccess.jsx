import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <p className="text-3xl font-bold text-green-400">Payment successfully</p>
      <Link to={"/"} className="btn">
        Go To Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
