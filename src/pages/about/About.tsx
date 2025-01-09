import Awards from "../../components/Awards/Awards";
import Hero from "../../components/Hero/Hero";
import History from "../../components/history/History";
import Team from "../../components/Team/Team";
import Values from "../../components/valuesandmisson/Values";

const About = () => {
  return (
    <>
      <Hero
        page="Overview"
        title="Welcome to Little Learners Academy"
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />

      <Values />
      <Awards />
      <History />
      <Team />
    </>
  );
};

export default About;
