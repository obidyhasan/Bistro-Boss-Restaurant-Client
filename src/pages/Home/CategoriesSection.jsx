import Heading from "../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Home.css";

const CategoriesSection = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <Heading
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></Heading>

      <div className="mt-10">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-10">
            <div className="relative">
              <figure>
                <img
                  src={img1}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </figure>
              <h1 className="absolute bottom-10 w-full text-center text-white font-semibold text-2xl uppercase ">
                Salads
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <figure>
                <img
                  src={img2}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </figure>
              <h1 className="absolute bottom-10 w-full text-center text-white font-semibold text-2xl uppercase ">
                Soups
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <figure>
                <img
                  src={img3}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </figure>
              <h1 className="absolute bottom-10 w-full text-center text-white font-semibold text-2xl uppercase ">
                Pizzas
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <figure>
                <img
                  src={img4}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </figure>
              <h1 className="absolute bottom-10 w-full text-center text-white font-semibold text-2xl uppercase ">
                Desserts
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <figure>
                <img
                  src={img5}
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </figure>
              <h1 className="absolute bottom-10 w-full text-center text-white font-semibold text-2xl uppercase ">
                Salads
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoriesSection;
