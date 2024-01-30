import { useState } from "react";

const Accordion = (props) => {
  const [toggleFaq, setToggleFaq] = useState(props.toggle_faq || false);

  function toggle() {
    setToggleFaq(!toggleFaq);
  }

  return (
    <div>
      <div className="mb-2">
        <div
          className="flex items-center justify-between my-3 cursor-pointer hover:text-[#ad28eb]"
          onClick={toggle}
        >
          <h3 className="font-medium">{props.question}</h3>
          <img
            src={
              toggleFaq
                ? "../../public/images/icon-minus.svg"
                : "../../public/images/icon-plus.svg"
            }
            alt="toggle icon"
          />
        </div>
        {toggleFaq && (
          <div>
            <p className="text-slate-500">{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
