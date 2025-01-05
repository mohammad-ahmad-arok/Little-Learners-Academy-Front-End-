import { useEffect, useState } from "react";
import styles, { layout } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";

const History = () => {
  const [history, sethistory] = useState([]);
  //get all History
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/history",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          sethistory(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <section className={`${layout.section} flex-col`}>
      <SectionHeader
        title="Our History"
        supTitle="Our Progressive Journey"
        para="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <div
        className={`history flex justify-center mt-6 gap-32 relative ${styles.cardStyle}`}
      >
        <div className="md:p-36 p-5 relative">
          {history.map((el: any, index) => (
            <div key={index} className="mt-24">
              <div className="flex items-center gap-12 relative">
                <div className="absolute -ml-20 flex items-center ">
                  <span
                    className={`absolute ml-1.5 top-5 w-2 h-60 block  bg-primary rounded-md ${
                      index === history.length - 1 ? "hidden" : ""
                    }`}
                  ></span>
                  <span className=" w-5 h-5 block border-2 border-black rounded-full bg-white"></span>
                  <span className=" w-12 h-2 block  bg-primary rounded-md"></span>
                  <span className=" w-5 h-5 block border-2 border-black rounded-full bg-white"></span>
                </div>
                <div
                  className={`${styles.cardStyle} max-w-fit w-full flex px-12 py-7 gap-6`}
                >
                  <img
                    src="/src/Assets/AboutPageAssets/Abstract DesignHs.svg"
                    alt="Abstract"
                    className="w-20"
                  />
                  <h2 className="md:text-[68px] text-[32px] font-bold">
                    {el.year}
                  </h2>
                </div>
                <div className="">
                  <h3 className="md:text-[28px] text-[20px] font-[700]">
                    {el.title}
                  </h3>
                  <p className="md:text-[20px] text-[16px] font-[500] text-Grey_20">
                    {el.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
