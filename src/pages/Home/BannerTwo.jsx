import Heading from "../../components/Heading";
import img from "../../assets/home/featured.jpg";
const BannerTwo = () => {
  return (
    <div className="bg-banner2-bg bg-cover bg-center bg-nor">
      <div className="max-w-7xl mx-auto px-5 py-10 text-white">
        <Heading
          subHeading={"Check it out"}
          heading={"From Our Menu"}
        ></Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <figure>
            <img src={img} className="rounded-md" alt="" />
          </figure>
          <div className="flex flex-col justify-center items-start">
            <p>March 20, 2024</p>
            <h2 className="font-semibold text-2xl my-1">
              Where Can I Get Some?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn mt-3">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
