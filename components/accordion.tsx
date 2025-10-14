import React, { useState } from "react";

interface AccordionProps {
  content: {
    question: string
    answer: string
  }
  isOpen: boolean
  onToggle: React.MouseEventHandler<HTMLButtonElement>
}

const Accordion:React.FC<AccordionProps> = ({ content, isOpen, onToggle }) => {

  return (
    <div className="">
      <button
        className="text-justify w-full flex justify-between items-center gap-4 p-8 max-xs:px-4 bg-zinc-950 text-primary max-xs:text-base text-lg"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        aria-label="Toggle Accordion"
      >
        <span className="flex-1 text-left">{content.question}</span>
        <span
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`M${
                isOpen
                  ? "19.5 8.25 12 15.75 4.5 8.25"
                  : "4.5 15.75 12 9.25 19.5 15.75"
              }`}
            />
          </svg>
        </span>
      </button>

      <div
        id="accordion-content"
        className={`bg-zinc-900 transition-all duration-300 ease-in-out text-lg overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-xs:px-4 p-8 max-xs:text-base text-lg text-accent/80">{content.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;