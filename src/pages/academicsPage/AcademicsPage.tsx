import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Rooms from "../../components/Rooms/Rooms";
import StudentsLearn, {
  subject,
} from "../../components/Subjects/StudentsLearn";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import { layout } from "../../styles";

import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
const AcademicsPage = () => {
  const [Features, setFeatures] = useState<subject[]>([]);
  useEffect(() => {
    // fetch api to get all features
    fetch("http://localhost:5000/api/specialfeatures")
      .then((response) => response.json())
      .then((data) => setFeatures(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);
  // console.log(Features);

  return (
    <>
      <Hero />
      <section
        className={`${layout.section} flex-col  mb-[80px] lg:mb-[150px] `}
      >
        <SectionHeader
          title="Our Special Features"
          supTitle="Our  Features"
          para="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />
        <div className={`${layout.cardContainer} gap-x-10 gap-y-20 mt-24`}>
          {Features.map((el, index) => {
            return (
              <BenefitCard
                key={index}
                icon={el.image}
                title={el.name}
                para={el.description}
              />
            );
          })}
        </div>
      </section>
      <StudentsLearn />
      <Rooms />
    </>
  );
};

export default AcademicsPage;
