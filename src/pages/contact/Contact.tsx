import Abstract from "../../assets/AboutPageAssets/Abstract Design.svg";
import emailIcon from "../../Assets/email-icon.png";
import phoneIcon from "../../Assets/phone-icon.png";
import locationIcon from "../../Assets/location-icon.png";
import clockIcon from "../../Assets/hours-icon.png";
import StudentForm from "../../components/ContactPage/StudentForm";
import { layout } from "../../styles";
const ContactPage: React.FC = () => {
  return (
    <>
      <section className={`${layout.section} flex-col`}>
        <div
          className="bg-white mx-[auto] w-[91.79vw] xl:w-[88.89vw] 2xl:[94.79] relative
     flex flex-col xl:flex-row px-[6.25%] py-[50px] xl:py-[100px] 2xl:py-[152.5px] gap-5 xl:gap-[50px]
     justify-center items-center border-2 border-[#262626] rounded-[10px] 
     shadow-section-shadow mb-[80px] lg:mb-[150px]   "
        >
          <img
            src={Abstract}
            className="lg:w-[11%] w-[28%] absolute top-0 left-0"
            alt="Abstract-Design"
          />
          <div className="w-full flex flex-col items-center xl:items-start">
            <button
              className="text-[14px] xl:text-[16px]  font-[500] text-[#333333] 
        w-[101px] h-[37px] xl:w-[110px] xl:h-[40px] border-2 rounded-md border-[#262626] mb-[10px]"
            >
              Contact Us
            </button>
            <h3 className="text-[28px] xl:text-[34px] font-[700] text-center xl:text-start text-[#1A1A1A]">
              Feel Free To Connect With Us
            </h3>
          </div>
          <div className="flex w-full flex-col">
            <p className=" text-[16px] 2xl:text-[20px] font-[500] text-[#333333] text-center xl:text-start">
              We value open communication and are eager to assist you with any
              inquiries. Feel free to reach out to us through any of the
              following contact methods.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
              {/* Email Card */}
              <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="w-8 h-8 mr-4"
                />
                <span className="text-sm font-medium">
                  hello@littlelearners.com
                </span>
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
                <span className="text-sm font-medium">
                  Somewhere in the World
                </span>
              </div>

              {/* Hours Card */}
              <div className="flex items-center border-2 rounded-lg p-3 w-full lg:w-[250px] shadow-md">
                <img
                  src={clockIcon}
                  alt="Office Hours Icon"
                  className="w-8 h-8 mr-4"
                />
                <span className="text-sm font-medium">
                  Office Hours - 9am - 6pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <StudentForm />
      </section>
    </>
  );
};

export default ContactPage;
