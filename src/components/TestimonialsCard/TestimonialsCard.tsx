import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "../../styles";
import "./TestimonialsCard.css";
import { useEffect, useRef } from "react";
import { jumpingStarsAnimation } from "../../Animation/jump";

interface TestimonialsCardProps {
  image?: string;
  name?: string;
  star: number;
  text?: string;
}

const renderStars = (evaluation: number) => {
  const fullStars = Math.floor(evaluation);
  const halfStar = evaluation % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="stars w-full flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar className="star" key={index} size={20} color="#FF8C4C" />
      ))}
      {halfStar === 1 && (
        <FaStarHalfAlt className="star" size={20} color="#FF8C4C" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar className="star" key={index} size={20} color="#FF8C4C" />
      ))}
    </div>
  );
};

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  image,
  text,
  name,
  star,
}) => {
  // animation
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    jumpingStarsAnimation(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`TestimonialsCard ${styles.cardStyle} md:p-12 p-7`}
    >
      <div className="profile text-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto md:mb-3 mb-2 bg-Orange_97 border border-black"
        />
        <span className="text-Grey_15 font-semibold md:text-[24px] text-[20px]">
          {name}
        </span>
      </div>
      <div className="reate w-full md:py-7 py-5">{renderStars(star)}</div>
      <div className="">
        <p className="text-Grey_20 text-center font-medium md:text-[20px] text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
