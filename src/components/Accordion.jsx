import {React , useState} from "react";
import {sections } from "../data"

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  return <div className="w-full mx-auto">
    {sections.map((section, index) => (
      <div key={index} className="mb-2">
        <button 
          type="button"
          className="flex justify-between items-center w-full h-16 py-2 px-4 font-medium text-left bg-[#7A3BB5] text-gray-50 hover:bg-[#AC64A5] focus:outline-none focus:bg-[#AC64A5]" 
          onClick={()=> toggleAccordion(index)}
        >
          <span>{section.title}</span>
          <span>{activeIndex === index ? "-" : "+"}</span>
        </button>
        {activeIndex === index && (
          <div className="border border-purple-900 bg-[#461066] h-16 text-gray-50 px-4 py-2 flex items-center">
            <p className="w-full">{section.content}</p>
          </div>
        )}
      </div>

    ))
    }
  </div>;
};
