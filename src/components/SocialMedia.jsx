import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { showSweetAlert } from "../utility/showSweetAlert";

const SocialMedia = () => {
  const { userLoginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  function handelGoogleLogin() {
    userLoginWithGoogle().then((result) => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
      };

      axiosPublic
        .post("/api/users", userInfo)
        .then((res) => {
          showSweetAlert("success", "User login successfully");
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handelGoogleLogin} className="btn w-full">
        <FaGoogle></FaGoogle> Continue with Google
      </button>
    </div>
  );
};

export default SocialMedia;
