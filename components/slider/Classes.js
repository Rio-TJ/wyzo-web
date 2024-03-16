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
          backgroundColor: "#e0f1f4",
        }}
        direction="vertical"
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
            spaceBetween: 80,
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
          <SwiperSlide key={i} className={`swiper-slide`} style={{}}>
            <div
              className="card-wrapper"
              style={{
                paddingTop: "20px", // Отступ вверху карточки
                paddingBottom: "20px", // Отступ внизу карточки
                height: "calc(100% - 40px)", // 100% высоты минус верхний и нижний отступы
                display: "flex", // Используем Flexbox
                justifyContent: "center", // Центрируем изображение по вертикали
                alignItems: "center", // Центрируем изображение по горизонтали
              }}
            >
              <img
                src={`assets/imgs/page/homepage7/${item.img} `}
                alt="iori"
                className="card-image"
                style={{
                  width: "100%",
                  height: "150px",

                  // Изображение не должно превышать ширину карточки
                  borderRadius: "8px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Classes;
