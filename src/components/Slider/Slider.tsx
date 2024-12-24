import "./Slider.css";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

SwiperCore.use([Autoplay, Navigation]);

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiperElement = document.querySelector(".mySwiper") as HTMLElement & {
      swiper: SwiperCore;
    };
    if (swiperElement && swiperElement.swiper) {
      const swiperInstance = swiperElement.swiper;
      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== "boolean"
      ) {
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.navigation.update();
      }
    }
  }, []);
  return (
    <div className="w-full md:px-12 mx-auto relative md:mt-24 mt-12">
      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: ".controle-btns .custom-next",
          prevEl: ".controle-btns .custom-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <div className="controle-btns flex md:absolute top-1/2 md:-translate-y-1/2 left-0 w-full md:justify-between justify-center gap-5 md:mt-0 mt-10">
        <div
          ref={prevRef}
          className="custom-prev p-3 bg-white border border-black rounded-md w-fit"
        >
          <FaArrowLeft />
        </div>
        <div
          ref={nextRef}
          className="custom-next p-3 bg-white border border-black rounded-md w-fit"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
