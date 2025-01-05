import { useEffect, useState } from "react";
import styles from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";

const Values = () => {
  const [missionAndVision, setmissionAndVision] = useState([]);
  //get all missionAndVision
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/mission-vision",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setmissionAndVision(data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center xs:text-center lg:text-left gap-5">
      <SectionHeader
        title="Our Mission & Visions"
        supTitle="Misson & Visions"
        para="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />

      <div className={`flex xs:flex-col lg:flex-row gap-10 ${styles.paddingX}`}>
        {missionAndVision.map((el: any, index) => (
          <div className={`${styles.cardStyle} p-12`} key={index}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-5xl">{el.title}</h2>
              <img
                src={el.img || "/src/Assets/AboutPageAssets/visions.svg"}
                alt="visions"
              />
            </div>
            <p className="mt-12 3xl:text-lg">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
