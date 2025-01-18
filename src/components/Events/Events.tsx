// import { useEffect, useState } from "react";
// import imag1 from "../../assets/academics/Image1.jpg";

import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { subject } from "../Subjects/StudentsLearn";
import Event from "./Event";
import Event2 from "./Event2";

const Events = () => {
  const [events, setevents] = useState<subject[]>([]);

  useEffect(() => {
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/events"
    )
      .then((response) => response.json())
      .then((data) => setevents(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79] flex flex-col mb-[50px] sm:pt-[6.3rem] pt-10">
      <SectionHeader
        title="Events & Celebrations"
        supTitle="Our Features "
        para="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />

      <div
        data-aos="zoom-in-up"
        className="flex flex-col lg:flex-row flex-wrap gap-[3%] mt-24"
      >
        {events.map((item: any, index: any) => {
          if (index == 1 || index == 4)
            return <Event key={index} card={item} />;
          else return <Event2 key={index} card={item} />;
        })}
      </div>
    </div>
  );
};

export default Events;
