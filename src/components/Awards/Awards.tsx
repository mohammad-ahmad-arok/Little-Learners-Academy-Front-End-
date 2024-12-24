import React, { useState } from "react";

const awards = [
  {
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: "📚",
  },
  {
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: "📊",
  },
  {
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon: "⚡",
  },
  {
    title: "Global Leadership Award",
    description:
      "Recognized for cultivating young leaders who are equipped to thrive in a globalized world and make a positive impact.",
    icon: "🌍",
  },
  {
    title: "Innovation in Education Award",
    description:
      "Awarded for integrating cutting-edge educational tools and techniques to enhance the learning experience.",
    icon: "💡",
  },
  {
    title: "Excellence in Community Engagement",
    description:
      "Awarded for fostering strong community engagement and partnerships to enhance student development.",
    icon: "🌟",
  },
  {
    title: "Leadership in Early Education",
    description:
      "Recognized for exemplary leadership and innovation in early education practices.",
    icon: "🏆",
  },
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Prevent advancing beyond the last set of awards
    if (currentIndex < awards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    // Prevent going below the first award
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center xs:text-center gap-5 pt-24">
      {/* Start */}
      <p className="text-lg bg-white border-2 border-black rounded-md text-center w-[187px] py-1 px-3">
        Our Achievements
      </p>
      <h2 className="text-5xl font-bold">Our Awards and Recognitions</h2>
      <p className="3xl:text-[20px] 2xl:text-[16px] 2xl:w-[880px] 3xl:w-[996px] xs:w-[358px]">
        Little Learners Academy takes pride in our commitment to delivering
        high-quality education and outstanding student experiences. We are
        honored to have received various awards and recognitions for our
        dedication to early childhood education. These accolades reflect our
        team's relentless efforts in creating an exceptional learning
        environment for our students.
      </p>

      {/* Awards */}
      <div className="flex items-center justify-around lg:flex-row xs:flex-col gap-24">
        {awards.slice(currentIndex, currentIndex + 3).map((award, index) => (
          <div
            key={index}
            className="3xl:w-[505px] 2xl:w-[405px] 3xl:h-[437px] 2xl:h-[350px] bg-white rounded pt-[80px] px-12 pb-[52px] border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626]"
          >
            <h2 className="font-bold 2xl:text-2xl 2xl:w-[326px] 3xl:text-[28px] 3xl:w-[405px] text-left">
              {award.title}
            </h2>
            <p className="text-left pt-4">{award.description}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-6 w-full">
          <p>{awards.length - currentIndex - 3} More Awards</p>

       <div className="flex items-center gap-5">
       <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 border rounded-lg ${
            currentIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= awards.length - 3}
          className={`px-4 py-2 border rounded-lg ${
            currentIndex >= awards.length - 3
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          Next
        </button>
       </div>

      </div>
    </div>
  );
};

export default Awards;
