import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-obidy.web.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
