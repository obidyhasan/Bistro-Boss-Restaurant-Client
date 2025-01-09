import { useForm } from "react-hook-form";
import Heading from "../../../components/Heading";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
