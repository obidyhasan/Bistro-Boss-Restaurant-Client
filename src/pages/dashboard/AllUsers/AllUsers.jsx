import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { showSweetAlert } from "../../../utility/showSweetAlert";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  // Tan Stack
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/api/users");
      return result.data;
    },
  });

  function handelUserToAdmin(user) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update user to admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/api/user/admin/${user._id}`)
          .then((result) => {
            if (result.data.modifiedCount) {
              refetch();
              showSweetAlert("success", "Update user to admin successfully");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  }

  function handelUserDelete(user) {
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
        axiosSecure.delete(`/api/users/${user._id}`).then((result) => {
          if (result.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  }

  return (
    <div>
      <h1 className="font-semibold text-xl">Total Users: {users.length}</h1>

      <div className="mt-5">
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <p>Admin</p>
                    ) : (
                      <button
                        onClick={() => handelUserToAdmin(user)}
                        className="btn"
                      >
                        <FaUsers className="text-xl"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handelUserDelete(user)}
                      className="btn text-orange-600 text-2xl"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
