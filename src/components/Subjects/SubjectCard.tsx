import { subject } from "./StudentsLearn";

interface subjectCard {
  card: subject;
}

export const SubjectCard = ({ card }: subjectCard) => {
  return (
    <div
      className="relative bg-white rounded-xl shadow-card-shadow lg:w-[31.25%] w-[100%] flex flex-col justify-center items-center
               gap-[30px] xl:gap-[40px] 2xl:gap-[50px] p-[1.875rem] xl:p-[2.5rem] 2xl:p-[3.125rem] mb-[30px] xl:mb-[40px] 2xl:mb-[50px]"
    >
      <div className="absolute bg-Orange_95 w-[25%] h-[65%] 2xl:h-[70%] top-0 border-2 border-Grey_15 rounded-b-xl z-0"></div>
      <img src={card.image} className="z-10" alt={card.name} />
      <div className="text-center flex flex-col ">
        <h5
          className="mb-[10px] xl:mb-[14px] 2xl:mb-[20px] text-[22px] 
                xl:text-[24px] 2xl:text-[28px] font-[700] text-[#1A1A1A]"
        >
          {card.name}
        </h5>
        <p
          className="text-[20px] 
                 xl:text-[16px] 2xl:text-[20px] font-[500] text-Grey_30"
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};