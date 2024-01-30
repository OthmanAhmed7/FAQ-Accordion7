import Accordion from "./Accordion";
import { paragraph } from "../constants/data";

const Faq = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-8 transform">
      <div className="bg-[#fff] p-6 rounded-xl max-w-[40rem]">
        <div className="flex items-center mb-6">
          <img src="../../public/images/icon-star.svg" alt="star icon" />
          <h1 className="ml-6 font-bold text-[45px]">FAQs</h1>
        </div>

        <div className="divide-y">
          {paragraph.map((index) => (
            <Accordion
              key={index}
              answer={index.answer}
              question={index.question}
              toggle_faq={index.toggle_faq}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
