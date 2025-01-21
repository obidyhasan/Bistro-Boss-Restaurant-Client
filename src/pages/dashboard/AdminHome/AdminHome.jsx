import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin-stats");
      return res.data;
    },
  });

  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome, {user ? user.displayName : "Back"}
      </h1>

      <div className="mt-10">
        <div className="stats shadow flex lg:flex-nowrap flex-wrap">
          <div className="stat place-items-center">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">$ {data?.revenue}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Customer</div>
            <div className="stat-value text-secondary">{data?.users}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Product</div>
            <div className="stat-value">{data?.products}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Order</div>
            <div className="stat-value">{data?.orders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
