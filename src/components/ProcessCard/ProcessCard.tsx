import styles from "../../styles";

interface ProcessCardProps {
  title: string;
  desc: string;
  number_step: string;
}
const ProcessCard: React.FC<ProcessCardProps> = ({
  number_step,
  title,
  desc,
}) => {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <h1
        className={`${styles.cardStyle} border-2 border-black rounded-lg
         px-6 py-3 lg:px-7 lg:py-4 text-4xl lg:text-6xl font-bold relative top-2`}
      >
        {number_step}
      </h1>
      <img src="/assets/images/Container.png" className="relative z-20" alt="" />

      <div
        className={`${styles.cardStyle} md:px-12 px-6 pt-20 pb-12  w-full h-full `}
      >
          <h4 className="md:text-[28px] text-[22px] font-[700]">{title}</h4>
          <p className=" md:text-[20px] text-[16px] font-[500] text-Grey_30 mt-4">
            {desc}
          </p>
      </div>
    </div>
  );
};

export default ProcessCard;