import { FaMinus, FaPlus } from "react-icons/fa";
import "./FAQ.css";

interface FAQProps {
  faq: any;
  index: any;
  toggleFAQ: any;
}

const FAQ: React.FC<FAQProps> = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={
        "faq bg-Orange_95 px-6 py-7 rounded-xl border-2 border-black  " +
        (faq.open ? "open bg-white" : "")
      }
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question md:text-[22px] text-[18px] font-[600] flex justify-between items-center">
        {faq.question}
        <span className="p-3 rounded-md border-2 text-sm bg-Orange_97 border-black cursor-pointer">
          {faq.open ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      <div className="faq-answer">
        <hr className="h-[2px] bg-Grey_15 my-6" />
        <p className="md:text-[20px] text-[16px] font-[500]">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
