import { FaCaretDown } from "react-icons/fa";
import React, { useState } from "react";

interface DropdownItemProps {
  itemList: { id: number; title: string }[];
  className?: string;
  onChange: (value: React.SetStateAction<number>) => void;
  selectedValue: number;
}

const DropDown: React.FC<DropdownItemProps> = ({
  itemList,
  className = "",
  selectedValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (id: number) => {
    setIsOpen(false);
    onChange(id);
    console.log(id);
  };

  return (
    <div className={`relative text-white ${className}`}>
      <div
        className={`mr-2 flex items-center justify-between bg-black px-2.5 py-1 border-2 border-[#1D1D1D] cursor-pointer ${(itemList.find((item) => item.id === selectedValue)?.title)?"" : "border-dashed"}  ${
          isOpen
            ? "rounded-b-none border-b-transparent rounded-md "
            : "rounded-[20px]"
        }`}
        onClick={handleToggleMenu}
      >
        <span className="text-[14px] text-nowrap font-semibold mr-[5px] inline-block">
          {itemList.find((item) => item.id === selectedValue)?.title || "+ Add"}
        </span>
        <FaCaretDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <>
          <div className="h-[1px] bg-[#1D1D1D] w-[calc(100%-0px)] mt-[-1px] mx-auto relative z-50"></div>
          <ul className="absolute w-full left-0 bg-black border border-[#1D1D1D] border-t-transparent rounded-b-lg overflow-hidden shadow-lg mt-[-1px] z-20 pb-2.5 pt-[1px] px-[1px] space-y-[1px]">
            {itemList.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item.id)}
                className={`text-[12px] text-nowrap font-semibold px-2.5 py-1.5 cursor-pointer ${
                  item.id === selectedValue
                    ? "bg-[#1D1D1D] text-white"
                    : "text-[#555555] hover:bg-[#1D1D1D] hover:text-white"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DropDown;
