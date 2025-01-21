import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin-stats");
      return res.data;
    },
  });

  const { data: chartInfo = [] } = useQuery({
    queryKey: ["chart-info"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin-chart");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome, {user ? user.displayName : "Back"}
      </h1>

      <div className="mt-10">
        <div className="stats shadow flex lg:flex-nowrap flex-wrap">
          <div className="stat place-items-center">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">$ {stats?.revenue}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Customer</div>
            <div className="stat-value text-secondary">{stats?.users}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Product</div>
            <div className="stat-value">{stats?.products}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Order</div>
            <div className="stat-value">{stats?.orders}</div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-2">
        <div className="w-full">
          <BarChart
            className="w-full"
            width={500}
            height={300}
            data={chartInfo}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartInfo.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
