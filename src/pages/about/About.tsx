import Awards from "../../components/Awards/Awards";
import History from "../../components/history/History";
import Overview from "../../components/overview/Overview";
import Team from "../../components/Team/Team";
import Values from "../../components/valuesandmisson/Values";

const About = () => {
  return (
    <div className="bg-[#FFF5F0] flex flex-col items-center">
      <Overview
        sub="Overview"
        title="Welcome to Little Learners Academy"
        para="       A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <Values />
      <Awards />
      <History />
      <Team />
    </div>
  );
};

export default About;
