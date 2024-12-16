
import React from "react";
// Import assets
import topImg from "../../Assets/AboutPageAssets/Abstract Design.svg";
import emailIcon from "../../Assets/email-icon.png";
import phoneIcon from "../../Assets/phone-icon.png";
import locationIcon from "../../Assets/location-icon.png";
import clockIcon from "../../Assets/hours-icon.png";
import StudentForm from "../../components/ContactPage/StudentForm";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page bg-light flex flex-col items-center py-12 px-4">
      {/* Main Container */}
      <div
        className="3xl:w-[1820px] 2xl:w-[1280px] lg:w-[960px] xs:w-[358px] border-r-8 border-b-8 border-l-2 border-t-2 border-[#262626]
        my-12 rounded-lg bg-white gap-[50px] flex flex-col lg:flex-row items-center justify-around relative lg:p-28 xs:p-6"
      >
        {/* Top Image */}
        <img
          src={topImg}
          className="absolute left-0 top-0 xs:w-[100px] lg:w-[200px]"
          alt="Abstract Design"
        />

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <p className="text-lg font-medium border-2 rounded-lg w-[117px] text-center">
            Contact Us
          </p>
          <h1 className="3xl:text-[48px] 2xl:text-[38px] xs:text-[28px] font-bold max-w-[765px]">
            Feel Free To Connect With Us
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="3xl:text-[20px] xs:text-base text-center lg:text-left">
            We value open communication and are eager to assist you with any
            inquiries. Feel free to reach out to us through any of the following
            contact methods.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            {/* Email Card */}
            <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
              <img
                src={emailIcon}
                alt="Email Icon"
                className="w-8 h-8 mr-4"
              />
              <span className="text-sm font-medium">hello@littlelearners.com</span>
            </div>

            {/* Phone Card */}
            <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
              <img
                src={phoneIcon}
                alt="Phone Icon"
                className="w-8 h-8 mr-4"
              />
              <span className="text-sm font-medium">+91 91813 23 2309</span>
            </div>

            {/* Location Card */}
            <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
              <img
                src={locationIcon}
                alt="Location Icon"
                className="w-8 h-8 mr-4"
              />
              <span className="text-sm font-medium">Somewhere in the World</span>
            </div>

            {/* Hours Card */}
            <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
              <img
                src={clockIcon}
                alt="Office Hours Icon"
                className="w-8 h-8 mr-4"
              />
              <span className="text-sm font-medium">Office Hours - 9am - 6pm</span>
            </div>
          </div>
        </div>
      </div>
      <StudentForm/>
    </div>
  );
};

export default ContactPage;

