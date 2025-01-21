import { FaArrowRight } from "react-icons/fa";
import "./Header.css";
import styles from "../../styles";

const Header = () => {
  // const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   fadeIn(imageRef.current, 0.9);
  // }, []);

  return (
    <div className={`${styles.paddingX} sm:mt-5 mt-7 cursor-pointer`}>
      <div
        className={` Header relative overflow-hidden bg-Orange_90 border-2 border-Grey_15 rounded-lg w-full`}
      >
        <img
          src="/assets/images/Abstract Design.webp"
          className="absolute top-0 left-0 sm:w-56 w-12 sm:h-auto h-12 "
          alt="Abstract Design"
        />
        <img
          src="/assets/images/Abstract Design-01.webp"
          className="absolute top-0 right-0 sm:w-56 w-12 sm:h-auto h-12"
          alt="Abstract Design"
        />
        <img
          src="/assets/images/Abstract Design-02.webp"
          className="absolute bottom-0  sm:right-[25%] right-0 sm:w-10 w-12"
          alt="Abstract Design"
        />
        <img
          src="/assets/images/Abstract Design-03.webp"
          className="absolute top-0 sm:left-[25%] left-0 sm:w-[72px] w-8"
          alt="Abstract Design"
          // ref={imageRef}
        />
        <div className="text w-full py-3 flex items-center justify-center gap-3">
          <span className={`${styles.paragraph} sm:!text-[20px] !text-[14px]`}>
            Admission is Open, Grab your seat now
          </span>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
