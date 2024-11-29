import { IoLogoTwitter, IoMail } from "react-icons/io5";
import "./Footer.css";
import { FaFacebook, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { shortLinks } from "../../constants";

const Footer = () => {
  return (
    <footer
      className="bg-white border-2 border-black md:pt-24 pt-14 md:px-28 px-7 md:pb-10 pb-7 md:shadow-normal md:m-12 m-4 rounded-xl
     shadow-custom-md shadow-black "
    >
      <div className="links flex justify-between md:flex-nowrap flex-wrap  gap-2 ">
        <div className="company md:max-w-[440px] max-w-full">
          <div className="info">
            <img
              src="/assets/Logo.png"
              className="md:w-56 w-44 mx-auto"
              alt="Logo"
            />
            <p className="md:text-[20px] text-[16px] md:text-start text-center font-medium mt-5 text-Grey_30 ">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="contact md:mt-12 mt-10">
            <ul className="md:text-[20px] text-[16px] font-medium text-Grey_15 flex flex-col gap-6">
              <li className="flex items-center gap-2">
                <span className="p-2 w-fit bg-Orange_97 border-2 border-Grey_15 rounded-md">
                  <IoMail />
                </span>
                <p>hello@littlelearners.com</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="p-2 w-fit bg-Orange_97 border-2 border-Grey_15 rounded-md">
                  <FaPhone />
                </span>
                <p>+91 91813 23 2309</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="p-2 w-fit bg-Orange_97 border-2 border-Grey_15 rounded-md">
                  <TiLocation />
                </span>
                <p>Somewhere in the World</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:mt-0 mt-10 shortLinks grid md:grid-cols-4 grid-cols-2 gap-4">
          {shortLinks.map((el, index) => {
            return (
              <div className="" key={index}>
                <h5 className="text-[20px] font-semibold ">{el.title}</h5>
                <ul>
                  {el.links.map((el, index) => {
                    return (
                      <li className="text-[18px] font-[300]" key={index}>
                        <a href={el.href}>{el.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="copyRights md:mt-12 mt-7">
        <hr className="h-[2px] bg-Grey_15" />
        <div className="flex md:justify-between gap-5 justify-center items-center flex-wrap md:py-7 py-4">
          <div className="link">
            <ul className="flex md:text-[18px] text-[14px] text-nowrap">
              <li className="border-Grey_15 md:pr-4 pr-1">Terms of Service</li>
              <li className="border-l-2 border-Grey_15 md:px-4 px-1">
                Privacy Policy
              </li>
              <li className="border-l-2 border-Grey_15 md:px-4 px-1">
                Cookie Policy
              </li>
            </ul>
          </div>
          <div className="follow ">
            <ul className="flex gap-5">
              <li>
                <div className="p-3 w-fit bg-Orange_90 border-2 border-Grey_15 rounded-md">
                  <FaFacebook />
                </div>
              </li>
              <li>
                <div className="p-3 w-fit bg-Orange_90 border-2 border-Grey_15 rounded-md">
                  <IoLogoTwitter />
                </div>
              </li>
              <li>
                <div className="p-3 w-fit bg-Orange_90 border-2 border-Grey_15 rounded-md">
                  <FaLinkedinIn />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[2px] bg-Grey_15" />

        <div className="copyRightstext text-center md:mt-7 mt-4 text-Grey_40">
          <p>
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
