import { MdDelete } from "react-icons/md";
import Heading from "../../../components/Heading";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { showSweetAlert } from "../../../utility/showSweetAlert";
import { Link } from "react-router-dom";

const ManageAllProduct = () => {
  const [menus, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  function handelItemDelete(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/api/menus/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          showSweetAlert("success", "Deleted Item Successfully");
        }
      }
    });
  }

  return (
    <div>
      <Heading heading={"Manage All Items"} subHeading={"Hurry Up"}></Heading>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={menu.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{menu.name}</td>
                  <td>{menu.price}</td>
                  <th>
                    <Link to={`/dashboard/admin/update-product/${menu._id}`}>
                      <button className="btn btn-ghost text-2xl">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handelItemDelete(menu)}
                      className="btn btn-ghost text-orange-600 text-2xl"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProduct;
