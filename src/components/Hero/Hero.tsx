// import React from "react";
import Abstract from "../../assets/academics/Abstract-Design.png";
const Hero = () => {
  return (
    <div
      className="bg-white mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79] relative
     flex flex-col xl:flex-row px-[6.25%] py-[50px] xl:py-[100px] 2xl:py-[152.5px] gap-5 xl:gap-[50px]
     justify-center items-center border-2 border-[#262626] rounded-[10px] 
     shadow-section-shadow mb-[80px] lg:mb-[150px]  xl:mt-[60px] mt-[40px]"
    >
      <img
        src={Abstract}
        className="lg:w-[11%] w-[28%] absolute top-0 left-0"
        alt="Abstract-Design"
      />
      <div className="xl:w-[42%] flex flex-col items-center xl:items-start">
        <button
          className="text-[14px] xl:text-[16px]  font-[500] text-[#333333] 
        w-[101px] h-[37px] xl:w-[110px] xl:h-[40px] border-2 rounded-md border-[#262626] mb-[10px]"
        >
          Academics
        </button>
        <h3 className="text-[28px] xl:text-[38px] font-[700] text-center xl:text-start text-[#1A1A1A]">
          Nurturing Young Minds for Success
        </h3>
      </div>
      <p
        className="xl:w-[42%] text-[16px] 2xl:text-[20px]
       font-[500] text-[#333333] text-center xl:text-start"
      >
        Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school's academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration.
      </p>
    </div>
  );
};

export default Hero;
