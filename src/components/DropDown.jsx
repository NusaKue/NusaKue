import { useState } from "react";

const DropDown = ({ label, icon, options = [], selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 bg-white border border-black-40 rounded-lg px-4 py-2 md:py-3 lg:py-4 lg:mx-28 text-left text-primary-100 font-poppins text-body-md-regular"
      >
        <span>{selected || label}</span>
        <img src={icon} alt="" className="w-4 lg:w-5 object-contain" />
      </button>

      {isOpen && (
        <ul className="absolute mt-1 bg-white border border-black-40 rounded-lg shadow-lg z-10 lg:mx-28">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-black-20 text-primary-100 font-poppins text-body-md-regular"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
