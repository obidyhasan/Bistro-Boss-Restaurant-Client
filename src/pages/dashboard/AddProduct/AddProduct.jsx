import { useForm } from "react-hook-form";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { showSweetAlert } from "../../../utility/showSweetAlert";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // image upload to img-bb and then get and url
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const productInfo = {
        name: data.name,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
      };

      const result = await axiosSecure.post("/api/menus", productInfo);
      if (result.data.insertedId) {
        reset();
        showSweetAlert("success", "Item added successfully");
      }
    }
  };

  return (
    <div>
      <Heading heading={"Add an Item"} subHeading={"What's new?"}></Heading>

      <div>
        <div className="card w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Name*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Recipe name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soups</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  {...register("price")}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered min-h-32"
                placeholder="Recipe Details"
                required
              ></textarea>
            </div>

            <input
              {...register("image")}
              type="file"
              className="file-input mt-3 file-input-bordered w-full max-w-xs"
            />

            <div className="form-control mt-6">
              <button className="btn bg-orange-400">Add Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
