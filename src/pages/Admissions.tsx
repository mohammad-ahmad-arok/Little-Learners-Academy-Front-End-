import {
  AddmisionProcess,
  programs,
  AdditionalServices,
} from "../constants/index";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { layout } from "../styles";
import ProcessCard from "../components/ProcessCard/ProcessCard";
// import Overview from "../components/overview/Overview";
import Hero from "../components/Hero/Hero";
import { useEffect, useState } from "react";
type process = {
  step: string;
  description: string;
};
type service = {
  service: string;
  price: string;
};
type program = {
  program: string;
  ageGroup: string;
  annualTuition: string;
  registrationFee: string;
  activityFee: string;
};

const Admissions = () => {
  const [process, setprocess] = useState<process[]>([]);
  const [Fee, setFee] = useState<program[]>([]);
  const [services, setservices] = useState<service[]>([]);

  useEffect(() => {
    // fetch api to get all features
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/admission-process"
    )
      .then((response) => response.json())
      // .then((data) => console.log(data.data))
      .then((data) => setprocess(data.data))
      .catch((error) => console.error("Error:", error));
    //////////////////////////////////////////
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/fee-structure"
    )
      .then((response) => response.json())
      .then((data) => setFee(data.data))
      .catch((error) => console.error("Error:", error));
    ///////////////////////////////////////////////////////
    fetch(
      "https://little-learners-academy-back-end-j3iu.onrender.com/api/additional-services"
    )
      .then((response) => response.json())
      .then((data) => setservices(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      {/*  Overview Section */}
      <Hero
        page="Admission"
        title="Join Our Family of Young Learners"
        description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school."
      />
      {/* <section className={` flex flex-col items-center`}>
        <Overview
          sub="Admission"
          title="Join Our Family of Young Learners"
          para="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
        />
      </section> */}

      {/*  Addmission Process */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          supTitle="Process"
          title="Admission Process"
          para="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        <div
          className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-20 mt-24`}
        >
          {process.map((ele, index) => {
            return (
              <ProcessCard
                key={index}
                title={ele.step}
                desc={ele.description}
                number_step={`${index < 10 ? "0" + (index + 1) : index + 1}`}
              />
            );
          })}
        </div>
      </section>

      {/*  Fee Structure */}
      <section className={`${layout.section} flex-col`}>
        <SectionHeader
          supTitle="Our Features"
          title="Fee Structure"
          para="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
        />

        {/* First Table */}
        <div className="p-6 bg-white table-auto   shadow-md border border-black mt-24 md:shadow-custom-lg shadow-black overflow-x-auto ">
          <table className=" border-separate   overflow-hidden border-spacing-0 ">
            <thead>
              <tr className="bg-Orange_95  shadow border border-black text-Grey_15 text-[20px]">
                <th className="border border-black p-4 w-[295px] text-left font-medium h-20 rounded-tl-xl">
                  Program
                </th>
                <th className="border border-black p-4  w-[295px] text-left font-medium">
                  Age Group
                </th>
                <th className="border border-black p-4  w-[295px] text-left font-medium">
                  Annual Tuition
                </th>
                <th className="border border-black p-4  w-[295px] text-left font-medium">
                  Registration Fee
                </th>
                <th className="p-4  w-[295px] text-left font-medium border border-black rounded-tr-xl ">
                  Activity Fee
                </th>
              </tr>
            </thead>

            {/* <tbody>
              <tr>
                <td></td>
              </tr>

              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody> */}

            <tbody>
              {Fee.map((ele, index) => (
                <tr
                  key={index}
                  className={`bg-white shadow border border-Grey_15 text-Grey_15 text-[20px] ${
                    index === 0 ? "rounded-t-md" : ""
                  } ${index === programs.length - 1 ? "rounded-b-md" : ""}`}
                >
                  <td
                    className={`border border-Grey_15 p-4  w-[295px] text-left h-20 font-medium ${
                      index === 0 ? "rounded-tl-xl" : " "
                    } ${index === programs.length - 1 ? "rounded-bl-xl" : ""} `}
                  >
                    {ele.program}
                  </td>
                  <td className="border border-Grey_15 p-4  w-[295px] text-left font-medium">
                    {ele.ageGroup}
                  </td>
                  <td className="border border-Grey_15 p-4  w-[295px] text-left font-medium">
                    {ele.annualTuition}
                  </td>
                  <td className="border border-Grey_15 p-4  w-[295px] text-left font-medium">
                    {ele.registrationFee}
                  </td>
                  <td
                    className={`border border-Grey_15 p-4  w-[295px] text-left h-20 font-medium ${
                      index === 0 ? "rounded-tr-xl" : " "
                    } ${index === programs.length - 1 ? "rounded-br-xl" : ""} `}
                  >
                    {ele.activityFee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* First Table */}

        {/* Second Table */}

        <div className="p-6 bg-white   shadow-md border border-black mt-24 md:shadow-custom-lg shadow-black overflow-x-auto ">
          <table className=" border-separate border border-Grey_15 w-full   overflow-hidden  border-spacing-0 mb-4 rounded-xl">
            <thead>
              <tr className="bg-Orange_95   shadow  text-Grey_15 text-[30px] ">
                <th className=" p-4  text-left font-bold h-20 " colSpan={2}>
                  Additional Services
                </th>
              </tr>
            </thead>
          </table>

          <table className=" border-separate border border-Grey_15 w-full   overflow-hidden  border-spacing-0 rounded-xl">
            <tbody>
              {services.map((ele, index) => (
                <tr
                  key={index}
                  className={`bg-white shadow  text-Grey_15 text-[20px]  font-medium`}
                >
                  <td className=" p-4 border-r-2 border-b-2 border-Grey_15 text-left w-[600px]   h-20 ">
                    {ele.service}
                  </td>
                  <td className=" p-4 border-r-2 border-b-2 border-Grey_15 text-left  w-[600px]  h-20">
                    {ele.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Second Table */}
      </section>
    </>
  );
};

export default Admissions;
