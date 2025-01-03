import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [cart] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className="flex items-center justify-between gap-5">
        <h2 className="font-semibold text-lg">Total Order: {cart.length}</h2>
        <h2 className="font-semibold text-lg">Total Price: $ {totalPrice}</h2>
        <button className="btn">Pay</button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-semibold text-base">{item.name}</p>
                  </td>
                  <td className="font-semibold">${item.price}</td>
                  <th>
                    <button className="btn btn-ghost text-orange-600 text-2xl">
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

export default Cart;
