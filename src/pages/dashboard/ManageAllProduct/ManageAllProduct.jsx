import { MdDelete } from "react-icons/md";
import Heading from "../../../components/Heading";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";

const ManageAllProduct = () => {
  const [menus, , refetch] = useMenu();

  console.log(menus);
  function handelItemDelete(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
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
                    <button
                      onClick={() => handelItemDelete(menu)}
                      className="btn btn-ghost text-2xl"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handelItemDelete()}
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
