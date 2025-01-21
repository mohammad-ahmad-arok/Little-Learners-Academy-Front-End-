import { SwiperSlide } from "swiper/react";
import BenefitCard from "../components/BenefitCard/BenefitCard";
import FAQ from "../components/FAQ/FAQ";
import NavigatePagesCard from "../components/NavigatePagesCard/NavigatePagesCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Slider from "../components/Slider/Slider";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import { navigatePagesCards } from "../constants";
import { layout } from "../styles";
import { useEffect, useRef, useState } from "react";
import { typingAnimation } from "../Animation/Typing";
import { counterAnimation } from "../Animation/counter";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);

  type FAQ = { question: string; answer: string; open?: boolean };
  const [commonquestions, setCommonquestions] = useState<FAQ[]>([]);

  const [Benefits, setBenefits] = useState([]);

  // toggle for open and close questions
  const toggleFAQ = (index: any) => {
    setCommonquestions(
      commonquestions.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  //get all testimonials
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/testimonials",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setTestimonials(data.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  //get all FAQs
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/commonquestions",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCommonquestions(data.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  //get all Benefits
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/benefits",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setBenefits(data.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  //animation
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterRef2 = useRef<HTMLDivElement>(null);
  const counterRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    typingAnimation(textRef.current, "Dreams Take Flight.");
    counterAnimation(counterRef.current, 7000, "+");
    counterAnimation(counterRef2.current, 37, "+");
    counterAnimation(counterRef3.current, 15, "+");
  }, []);
  return (
    <>
      {/* hero */}
      <section
        className={`${layout.section} md:flex-row flex-col items-center md:gap-14 gap-10 `}
      >
        <div className="img-container md:w-1/2 w-full ">
          <img src="/assets/images/hero.webp" className="" alt="hero" />
        </div>
        <div
          className="text-container md:w-1/2 w-full md:text-start text-center "
          data-aos="fade-left"
        >
          <div className="hrade border-b-2 border-Grey_15 md:text-center ">
            <p className=" md:text-[22px] text-[18px] text-Grey_15 ">
              Welcome to Little Learners Academy
            </p>
          </div>
          <h1 className="md:text-[54px] text-[30px] font-[800] mt-2">
            Where Young Minds Blossom and
            <div className="text-primary ml-2" ref={textRef}>
              0
            </div>
          </h1>
          <p className="md:mt-7 mt-4 md:text-[20px] text-[16px] text-Grey_20">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="md:mt-14 mt-10 bg-Orange_95 border-2 border-Grey_15 rounded-xl md:shadow-custom-lg shadow-custom-md shadow-primary ">
            <ul className="md:pl-12 md:py-6 flex md:flex-row flex-col gap-3 text-Grey_15">
              <li className="md:border-0 border-b-2 border-Grey_15 md:p-0 p-10">
                <span
                  className="text-[44px] font-[800]"
                  ref={counterRef}
                ></span>
                <p className="text-[18px] font-[500]">Students Passed Out</p>
              </li>
              <li className="md:border-0 border-b-2 border-Grey_15 md:p-0 p-10">
                <span className="text-[44px] font-[800]" ref={counterRef2}>
                  0
                </span>
                <p className="text-[18px] font-[500]">Awards & Recognitions</p>
              </li>
              <li className="md:p-0 p-10">
                <span className="text-[44px] font-[800]" ref={counterRef3}>
                  0
                </span>
                <p className="text-[18px] font-[500]">Experience Educators</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  Benefits */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Our Benefits"
          supTitle="Children Deserve Bright Future"
          para="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        />
        <div className={`${layout.cardContainer} gap-x-10 gap-y-20 mt-24`}>
          {Benefits.map((el: any, index) => {
            return (
              <BenefitCard
                key={index}
                icon={el.icon.url}
                title={el.title}
                para={el.description}
              />
            );
          })}
        </div>
      </section>

      {/*  Testimonials */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Our Testimonials"
          supTitle="Their Happy Words 🤗"
          para="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        />
        <Slider>
          {testimonials.map((el: any, index) => {
            return (
              <SwiperSlide key={index} className="p-2">
                <TestimonialsCard
                  image={el.image || "/assets/images/Vector.png"}
                  name={el.name}
                  star={el.evaluation}
                  text={el.description}
                />
              </SwiperSlide>
            );
          })}
        </Slider>
      </section>

      {/*  FAQs */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Frequently Asked Questions"
          supTitle="Solutions For The Doubts"
          para="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />

        <div
          data-aos="fade-up"
          className="faqs w-full grid md:grid-cols-2 grid-cols-1 md:mt-24 mt-12  items-start justify-center gap-x-12 gap-y-7"
        >
          {commonquestions.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </section>

      {/*  Pages */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          title="Navigate through our Pages"
          supTitle="Explore More"
          para="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <div className={`${layout.cardContainer} gap-12 mt-24`}>
          {navigatePagesCards.map((el, index) => {
            return (
              <NavigatePagesCard
                key={index}
                title={el.title}
                para={el.para}
                link={el.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
