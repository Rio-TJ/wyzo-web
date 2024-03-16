import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Classes = ({ data }) => {
  return (
    <>
      <Swiper
        style={{
          height: "100vh",
        }}
        direction="vertical"
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={{
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        {data.map((item, i) => (
          <SwiperSlide className={`swiper-slide`} style={{}}>
            <div className="card-image" style={{ padding: "40px 0" }}>
              <img
                src={`assets/imgs/page/homepage7/${item.img} `}
                alt="iori"
                style={{ height: "200px", width: "85%" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Classes;
