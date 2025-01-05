import  { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles, { layout } from "../../styles";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";

const Awards = () => {
  const [Awards, setAwards] = useState([]);
  //get all Awards
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/awards",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAwards(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);
  return (
    <section className={`${layout.section} flex-col`}>
      <SectionHeader
        title="Our Awards and Recognitions"
        supTitle=" Our Achievements"
        para="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <Slider>
        {Awards.map((el: any, index) => {
          return (
            <SwiperSlide key={index} className="p-2 py-10">
              <div
                className={`BenefitCard ${styles.cardStyle} relative md:px-12 px-6 pt-20 pb-12  w-full`}
                key={index}
              >
                <div className="header">
                  <div className="icon-box bg-Orange_90 border-2 border-black rounded-lg absolute -top-8 left-5">
                    <div className="p-5 ">
                      <img
                        src={el.icon || "/assets/images/Vector.png"}
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="bode">
                    <h4 className="md:text-[28px] text-[22px] font-[700]">
                      {el.title}
                    </h4>
                    <p className=" md:text-[20px] text-[16px] font-[500] text-Grey_30 mt-4">
                      {el.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
    </section>
  );
};

export default Awards;
