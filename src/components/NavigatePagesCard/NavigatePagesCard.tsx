import styles from "../../styles";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";

import "./NavigatePagesCard.css";

interface NavigatePagesCardProps {
  title: string;
  para: string;
}
const NavigatePagesCard: React.FC<NavigatePagesCardProps> = ({
  title,
  para,
}) => {
  return (
    <div
      className={`NavigatePagesCard ${styles.cardStyle} relative md:px-12 px-10 md:pt-20 pt-10 md:pb-12 pb-10 md:w-[45%] w-full text-center`}
    >
      <div className="header">
        <h4 className="md:text-[48px] text-[28px] font-[700]">{title}</h4>
        <div className="flex items-center md:mt-7 mt-5 md:mb-12 mb-7">
          <span className="w-3 h-3 block border-2 border-black rounded-full bg-white"></span>
          <div className="w-full relative">
            <div className="w-full h-2 line-dashed "></div>
            <div className="w-full h-[2px] line-dashed-2 absolute top-1 left-0"></div>
          </div>
          <span className="w-3 h-3 block border-2 border-black rounded-full bg-white"></span>
        </div>
      </div>
      <div className="bode">
        <p className=" md:text-[20px] text-[16px] font-[500] text-Grey_30">
          {para}
        </p>
      </div>
      <div className="footer md:mt-20 mt-10">
        <Button label="Learn More" icon={<FaArrowRight />} />
      </div>
    </div>
  );
};

export default NavigatePagesCard;
