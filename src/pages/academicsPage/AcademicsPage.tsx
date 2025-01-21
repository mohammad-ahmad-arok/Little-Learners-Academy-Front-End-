import Hero from "../../components/Hero/Hero";
import Rooms from "../../components/Rooms/Rooms";
import StudentsLearn, {
  subject,
} from "../../components/Subjects/StudentsLearn";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import { layout } from "../../styles";

import { useState, useEffect } from "react";
const AcademicsPage = () => {
  const [Features, setFeatures] = useState<subject[]>([]);
  useEffect(() => {
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/specialfeatures"
    )
      .then((response) => response.json())
      .then((data) => setFeatures(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Hero
        page="Academics"
        title="Nurturing Young Minds for Success"
        description=" Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school's academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration."
      />
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
                icon={el.image.url}
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
