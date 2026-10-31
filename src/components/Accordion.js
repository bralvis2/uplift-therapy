// components/Accordion.js
import React, { useState } from "react";
import { ReactComponent as ChevronUp } from '../assets/SVG-icons/chevron-up-tupe-icon.svg';
import { ReactComponent as ChevronDown } from '../assets/SVG-icons/chevron-down-tupe-icon.svg';

import "./Accordion.css";
import '../App.css';

const AccordionItem = ({ 
    question, 
    answer,
    faqBgColor = "tupe-light-bg",
    questionColor = "tupe-dark"
 }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item box-shadow ${faqBgColor}`}>
      <button
        className={`accordion-question ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className={`h5 ${questionColor}`}>{question}</h3>

        {/* Use your SVG icons */}
        <span className="chevron" aria-hidden="true">
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      {open && (
        <div className="accordion-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ 
    items, 
    faqBgColor, 
    questionColor 
  }) => (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
  
          // always use the FAQ content from the item
          question={item.question}
          answer={item.answer}
  
          // apply page-level overrides OR the item's override OR defaults
          faqBgColor={faqBgColor || item.faqBgColor || "tupe-light-bg"}
          questionColor={questionColor || item.questionColor || "tupe-dark"}
        />
      ))}
    </div>
  );
  

export default Accordion;
