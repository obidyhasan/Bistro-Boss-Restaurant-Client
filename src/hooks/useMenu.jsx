import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false);
  //     });
  // }, []);

  const axiosPublic = useAxiosPublic();
  const {
    data: menus = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/menus");
      return res.data;
    },
  });

  return [menus, loading, refetch];
};

export default useMenu;
