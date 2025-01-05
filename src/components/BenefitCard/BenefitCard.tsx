import React from "react";
import styles from "../../styles";
import "./BenefitCard.css";

interface BenefitCardProps {
  title: string;
  para: string;
  icon: string;
}
const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, para }) => {
  return (
    <div
      className={`BenefitCard ${styles.cardStyle} relative md:px-12 px-6 pt-20 pb-12 md:w-[30%] w-full`}
    >
      <div className="header">
        <div
          className="icon-box bg-Orange_90 border-2 border-black rounded-lg
          absolute -top-8 left-5"
        >
          <div className="p-5 ">
            <img src={icon} alt="icon" className="max-w-8" />
          </div>
        </div>
        <div className="bode">
          <h4 className="md:text-[28px] text-[22px] font-[700]">{title}</h4>
          <p className=" md:text-[20px] text-[16px] font-[500] text-Grey_30 mt-4">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
