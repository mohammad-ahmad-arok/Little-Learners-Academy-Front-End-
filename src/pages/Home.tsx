import { SwiperSlide } from "swiper/react";
import BenefitCard from "../components/BenefitCard/BenefitCard";
import FAQ from "../components/FAQ/FAQ";
import NavigatePagesCard from "../components/NavigatePagesCard/NavigatePagesCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Slider from "../components/Slider/Slider";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import {
  BenefitsCards,
  navigatePagesCards,
  testimonialsData,
} from "../constants";
import { layout } from "../styles";
import { useState } from "react";

const Home = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: true,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: any) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      {/* hero */}
      <section
        className={`${layout.section} md:flex-row flex-col items-center md:gap-14 gap-10 `}
      >
        <div className="img-container md:w-1/2 w-full">
          <img src="/assets/images/hero.webp" className="" alt="hero" />
        </div>
        <div className="text-container md:w-1/2 w-full md:text-start text-center ">
          <div className="hrade border-b-2 border-Grey_15 w-fit ">
            <p className=" md:text-[22px] text-[18px] text-Grey_15 ">
              Welcome to Little Learners Academy
            </p>
          </div>
          <h1 className="md:text-[54px] text-[30px] font-[800] mt-2">
            Where Young Minds Blossom and
            <span className="text-primary ml-2">Dreams Take Flight.</span>
          </h1>
          <p className="md:mt-7 mt-4 md:text-[20px] text-[16px] text-Grey_20">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="md:mt-14 mt-10 bg-Orange_95 border-2 border-Grey_15 rounded-xl md:shadow-custom-lg shadow-custom-md shadow-primary ">
            <ul className="md:pl-12 md:py-6 flex md:flex-row flex-col gap-3 text-Grey_15">
              <li className="md:border-0 border-b-2 border-Grey_15 md:p-0 p-10">
                <span className="text-[44px] font-[800]">+7000</span>
                <p className="text-[18px] font-[500]">Students Passed Out</p>
              </li>
              <li className="md:border-0 border-b-2 border-Grey_15 md:p-0 p-10">
                <span className="text-[44px] font-[800]">+37</span>
                <p className="text-[18px] font-[500]">Awards & Recognitions</p>
              </li>
              <li className="md:p-0 p-10">
                <span className="text-[44px] font-[800]">+15</span>
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
          {BenefitsCards.map((el, index) => {
            return (
              <BenefitCard
                key={index}
                icon={el.icon}
                title={el.title}
                para={el.para}
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
          {testimonialsData.map((el, index) => {
            return (
              <SwiperSlide key={index} className="p-2">
                <TestimonialsCard
                  image={el.image}
                  name={el.name}
                  star={el.star}
                  text={el.comment}
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

        <div className="faqs w-full grid md:grid-cols-2 grid-cols-1 md:mt-24 mt-12  items-start justify-center gap-x-12 gap-y-7">
          {faqs.map((faq, index) => (
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
              <NavigatePagesCard key={index} title={el.title} para={el.para} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
