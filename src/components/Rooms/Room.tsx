// import imag from "../../assets/academics/Image1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore */}
import "swiper/css";
// @ts-ignore */}
import "swiper/css/pagination";
// @ts-ignore */}
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useRef } from "react";
import { RoomType } from "./Rooms";

interface RoomProps {
  room: RoomType;
}

export const Room = ({ room }: RoomProps) => {
  const swiperRef = useRef<null | any>(null);
  // console.log(room);

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div data-aos="zoom-in-up" className="relative ">
      <div className="mx-[3.125%]">
        <Swiper
          ref={swiperRef}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}

          loop={true}
          modules={[FreeMode, Pagination]}
          className="cursor-pointer"
        >
          {room.images.map((item: any, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={item.url}
                  alt={room.name}
                  className=" rounded-xl border-2 border-[Grey_15] w-auto"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className="lg:pt-[12%] top-[60%] pt-[40%] md:pt-[20%] w-[100%]   bg-white border-2
           rounded-xl border-Grey_15 shadow-card-shadow absolute
      "
      >
        <div
          className="flex justify-between items-center xl:flex-row flex-col-reverse mx-[3.125%]
                xl:mb-[30px] mb-[20px] 2xl:mb-[40px] gap-[20px]
      "
        >
          <h1 className="font-[700] text-[28px] xl:text-[34px] 2xl:text-[40px]">
            {room.name}
          </h1>
          <div className="w-[37.5%] xl:w-[9%] flex gap-4 justify-end">
            <button
              onClick={goToPrevSlide}
              className="w-[42.8%] border-2 hover:bg-Orange_95 border-[#333333] flex items-center justify-center
                      rounded-lg p-[14px] "
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goToNextSlide}
              className="w-[42.8%] border-2 hover:bg-Orange_95 border-[#333333] flex items-center justify-center
          rounded-lg p-[1px] 2xl:p-[14px]
          "
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <p className="px-[3.125%] text-center lg:text-start mb-[40px] text-[18px] font-[500] xl:text-[20px] 2xl:text-[22px]">
          {room.description}
        </p>
      </div>
    </div>
  );
};
