import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { showSweetAlert } from "../../utility/showSweetAlert";
import SocialMedia from "../../components/SocialMedia";

const Login = () => {
  const { userLoginInFirebase } = useAuth();
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  function handelValidateCaptcha(e) {
    if (validateCaptcha(e.target.value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  function handelOnSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLoginInFirebase(email, password)
      .then(() => {
        showSweetAlert("success", "User Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        showSweetAlert("error", "Something went wrong!");
      });
  }

  return (
    <div className="max-w-7xl mx-auto px-5 min-h-screen flex items-center justify-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-3xl mt-7">Login</h1>

        <form onSubmit={handelOnSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <label className="label">
            <LoadCanvasTemplate />
          </label>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Captcha</span>
            </label>
            <input
              onBlur={handelValidateCaptcha}
              type="text"
              placeholder="captcha"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button disabled={disable} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mb-5">
          {"Don't have an account? "}
          <Link
            to={"/register"}
            className="underline text-primary font-semibold "
          >
            Register
          </Link>
        </p>

        <div className="px-8 pb-5 -mt-4">
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Login;
