import Button from "./UI/Button";
import React, { useState } from "react";

interface InnerNavProps {
  navItems: { id: number; title: string; className?: string }[];
}

const InnerNav: React.FC<InnerNavProps> = ({ navItems }) => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="h-[50px] bg-black border-b border-[#1D1D1D] flex justify-between items-center gap-1 max-lg:mt-4">
      <div className="max-lg:flex max-lg:justify-between max-lg:gap-4 max-lg:h-full max-lg:w-full max-lg:px-7">
        {navItems.map((menu) => (
          <Button
            key={menu.id}
            onClick={() => setCurrentItem(menu.id)}
            children={menu.title}
            className={
              menu.className +
              ` ${currentItem === menu.id ? "text-white max-lg:border-b-[2px] max-lg:border-l-0 max-lg:border-white" : "text-[#555555]"}`
            }
          />
        ))}
      </div>

      <Button children={"More"} className="max-lg:hidden"/>
    </div>
  );
};

export default InnerNav;
