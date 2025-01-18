import styles from "../../styles";
import "./SectionHeader.css";

interface SectionHeaderProps {
  supTitle?: string;
  title: string;
  para: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  supTitle,
  title,
  para,
}) => {
  return (
    <div className="SectionHeader w-full flex items-center justify-center text-center">
      <div className="contianer ">
        <span
          data-aos="fade-up"
          data-aos-duration="3000"
          className="px-5 py-2 md:text-[18px] text-[14px] font-[500] text-Grey_20 bg-white border-2 border-black rounded-lg "
        >
          {supTitle}
        </span>
        <h2 className={`${styles.heading} mt-5`} data-aos="fade-up">
          {title}
        </h2>
        <p
          data-aos="zoom-in-down"
          className={`${styles.paragraph} mt-5 max-w-[999px]`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
