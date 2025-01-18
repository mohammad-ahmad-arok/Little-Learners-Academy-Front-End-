import { useEffect, useState } from "react";
// import imag1 from "../../assets/academics/Image1.jpg";
import { SubjectCard } from "./SubjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";

export type subject = {
  name: string;
  description: string;
  image?: any;
  icon?: any;
};
const StudentsLearn = () => {
  const [subjects, setsubjects] = useState<subject[]>([]);

  useEffect(() => {
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/subjects"
    )
      .then((response) => response.json())
      .then((data) => setsubjects(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79] flex flex-col mb-[50px]">
      <SectionHeader
        title="What Students Learn"
        supTitle="Our Features "
        para="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      />
      <div className="flex flex-col lg:flex-row flex-wrap gap-[3%] py-10 sm:py-[6.3rem]">
        {subjects.map((item, index) => {
          return <SubjectCard key={index} card={item} />;
        })}
      </div>
    </div>
  );
};

export default StudentsLearn;
