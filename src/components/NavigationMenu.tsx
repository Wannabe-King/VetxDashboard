import { useLocation } from "react-router-dom";
import Button from "./CustomButton";

const NavigationMenu = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden h-[50px] lg:flex justify-between gap-2 items-center border-b border-[#1D1D1D]">
      <h3 className="flex-1 py-3.5 px-6 font-semibold text-base text-white">
        {pathname === "/" ? "Analytics" : "Profile"}
      </h3>
      <div className="">
        <Button children={"Activity"} />
        <Button children={"Log out"} />
      </div>
    </div>
  );
};

export default NavigationMenu;
