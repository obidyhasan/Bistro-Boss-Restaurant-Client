import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { showSweetAlert } from "../../utility/showSweetAlert";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialMedia from "../../components/SocialMedia";

const Register = () => {
  const { userRegisterInFirebase, userProfileUpdateInFirebase } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userRegisterInFirebase(data.email, data.password)
      .then(() => {
        userProfileUpdateInFirebase(data.name, data.photo).then(() => {
          // Create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };

          axiosPublic
            .post("/api/users", userInfo)
            .then((result) => {
              console.log(result.data);
              reset();
              showSweetAlert("success", "Register Successfully");
              navigate("/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
        showSweetAlert("error", "Something went wrong!");
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 min-h-screen flex items-center justify-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-3xl mt-7">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photo")}
              placeholder="photo url"
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
              {...register("password", {
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
              className="input input-bordered"
              required
            />
            {errors.password?.type === "minLength" && (
              <small className="text-orange-600 mt-1">
                Password must be 6 character
              </small>
            )}
            {errors.password?.type === "pattern" && (
              <small className="text-orange-600 mt-1">
                Password must have one uppercase, one lower case, one number and
                one special character.
              </small>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        <p className="text-center mb-5">
          {"Already have an account? "}
          <Link to={"/login"} className="underline text-primary font-semibold ">
            Login
          </Link>
        </p>

        <div className="px-8 pb-5 -mt-4">
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Register;
