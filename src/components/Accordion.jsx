import React from 'react';

const Accordion = ({ title, content, bgColor, icons }) => {
  return (
    <div className={`relative overflow-hidden ${bgColor}`}>
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div className="h-12 w-full pl-5 flex items-center font-bold text-gray-600">
            <h1>
                {title}
            </h1>
            {/* <RiBarChart2Fill className="ml-3"/> */}
            {icons}
        </div>
        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-full">
            <div className="p-5 border-t">{content}</div>
        </div>
    </div>
  )
}

export default Accordion