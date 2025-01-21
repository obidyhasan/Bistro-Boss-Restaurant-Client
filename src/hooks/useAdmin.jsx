import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/api/user/admin/${user?.email}`);
        return res.data?.isAdmin;
      }
      return null;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
