// import { FaGraduationCap } from "react-icons/fa";
import Abstract from "../Assets/Abstract-Design.png";
import BenefitCard from "../components/BenefitCard/BenefitCard";
import Events from "../components/Events/Events";
import SectionHeader from "../components/SectionHeader/SectionHeader";
// import { BenefitsCards } from "../constants";
import { layout } from "../styles";
import { subject } from "../components/Subjects/StudentsLearn";
import { useEffect, useState } from "react";
const StudentLife = () => {
  const [activities, setactivities] = useState<subject[]>([]);
  const [StudentSupport, setStudentSupport] = useState<subject[]>([]);

  // const StudentSupportCards = [
  //   {
  //     icon: <FaGraduationCap size={30} />,
  //     title: "Holistic Learning Approach",
  //     para: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  //   },
  //   {
  //     icon: <FaGraduationCap size={30} />,
  //     title: "Holistic Learning Approach",
  //     para: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  //   },
  //   {
  //     icon: <FaGraduationCap size={30} />,
  //     title: "Holistic Learning Approach",
  //     para: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  //   },
  // ];

  useEffect(() => {
    // fetch api to get all features
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/activities"
    )
      .then((response) => response.json())
      .then((data) => setactivities(data.data))
      .catch((error) => console.error("Error:", error));
    //////////////////////////////////////////
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/benefits?limit=3"
    )
      .then((response) => response.json())
      .then((data) => setStudentSupport(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  // console.log(StudentSupport);

  return (
    <div>
      {/* Hero */}
      <div
        className="bg-white mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79]  relative
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
      w-[169px] h-[37px] xl:w-[189px] xl:h-[40px] border-2 rounded-md border-[#262626] mb-[10px]"
          >
            Enriching Student Life
          </button>
          <h3 className="text-[28px] xl:text-[38px] font-[700] text-center xl:text-start text-[#1A1A1A]">
            Embracing Learning with Discovery and Joy{" "}
          </h3>
        </div>
        <p
          className="xl:w-[42%] text-[16px] 2xl:text-[20px]
     font-[500] text-[#333333] text-center xl:text-start"
        >
          Welcome to our Student Life page, where the magic of childhood comes
          alive through the enriching experiences and adventures that our
          students embark on each day. At our kindergarten school, we believe
          that learning goes beyond textbooks, and we strive to create a
          holistic and engaging environment that nurtures every aspect of a
          child's development.{" "}
        </p>
      </div>
      {/* features */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Extracurricular Activities"
          supTitle="Our Features"
          para="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
        />
        <div className={`${layout.cardContainer} gap-x-10 gap-y-20 mt-24`}>
          {activities.map((el, index) => {
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
      {/* events */}
      <Events />
      {/* Student Support */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Student Support"
          supTitle="Our Features"
          para="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
        />
        <div className={`${layout.cardContainer} gap-x-10 gap-y-20 mt-24`}>
          {StudentSupport.map((el, index) => {
            return (
              <BenefitCard
                key={index}
                icon={el.icon.url}
                title={el.name}
                para={el.description}
              />
            );
            // StudentSupportCards.map((el, index) => {
            //   return (
            //     <BenefitCard
            //       key={index}
            //       icon={el.icon}
            //       title={el.title}
            //       para={el.para}
            //     />
            //   );
          })}
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
