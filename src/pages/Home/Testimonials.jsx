import Heading from "../../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
      <Heading
        subHeading={"What Our clients Say"}
        heading={"Testimonials"}
      ></Heading>

      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
