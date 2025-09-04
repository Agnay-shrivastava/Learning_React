import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook. It uses a component-based architecture.",
  },
  {
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from parent to child components, while state is used to manage data within a component.",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are special functions that let you use React features like state and lifecycle methods in functional components.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that looks similar to HTML, used in React to describe UI elements.",
  },
  {
    question: "How does useEffect work?",
    answer:
      "useEffect lets you run side effects (like fetching data or updating the DOM) after render. You can control when it runs by providing dependencies.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="p-4 text-white flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Accordion</h1>
      {faqData.map((faq, index) => {
        const  isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="relative  text-left bg-yellow-500 w-md rounded-lg p-4 flex  flex-col "
          >
            {openIndex === index ? (
              <FiMinus
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setOpenIndex(null)}
              />
            ) : (
              <FiPlus
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setOpenIndex(index)}
              />
            )}
            <h2>{faq.question}</h2>
            {isOpen && <p className="mt-2 ">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
