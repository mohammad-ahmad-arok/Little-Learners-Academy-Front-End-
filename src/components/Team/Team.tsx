import { useEffect, useState } from "react";
import styles, { layout } from "../../styles";
import SectionHeader from "../SectionHeader/SectionHeader";
import { IoMdMail } from "react-icons/io";

const Team = () => {
  const [team, setTeam] = useState([]);
  //get all Team
  useEffect(() => {
    try {
      fetch(
        "https://little-learners-academy-back-end-j3iu.onrender.com/api/team-member",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setTeam(data.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <section className={`${layout.section} flex-col`}>
      <SectionHeader
        title="Our Team Members"
        supTitle="Our Teachers With Experties"
        para="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 xs:grid-rows-1 gap-6 mt-8">
        {team.map((el: any, index) => (
          <div
            data-aos="fade-down"
            className={`p-12 ${styles.cardStyle}`}
            key={index}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <img
                  src={el.img}
                  className="border-2 border-black rounded w-24"
                  alt=""
                />
                <h2 className="font-extrabold text-2xl ml-3">{el.name}</h2>
              </div>
              <span className="p-3 rounded-md border-2 text-sm bg-Orange_97 border-black cursor-pointer">
                <IoMdMail size={24} />
              </span>
            </div>

            <div className=" bg-[#FFF5F0] mt-5 border-2 border-black p-7 rounded-lg">
              <p className="font-semibold text-xl text-left xs:p-2 p-6">
                {el.qualification}
              </p>
              <p className="font-medium">{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
