import { useState } from "react";
import { Globe } from "./Globe";
import DropDown from "../../UI/DropDown";
import CountryStats from "../CountryStates";
import { location } from "../../../db/locationOfOffices";
import { categoryList } from "../../../db/dummyData";

const Demographics = () => {
  const [selectedOption, setSelectedOption] = useState<number>(
    categoryList[0].id
  );

  const handleChangeDropdownVal = (value: React.SetStateAction<number>) => {
    setSelectedOption(value);
  };

  return (
    <div className="bg-[#000000] relative border border-[#1D1D1D] rounded-[8px] py-3 px-4 flex-1 h-auto lg:h-[296px]">
      <h1 className="text-[20px] font-bold">Demographics</h1>

      <div className="top-[58px] z-[20] absolute">
        <DropDown
          className="w-[120px]"
          itemList={categoryList}
          selectedValue={selectedOption}
          onChange={handleChangeDropdownVal}
        />
      </div>

      <div className="w-[100%] h-auto lg:h-[200px] flex flex-wrap lg:flex-row flex-col gap-16 lg:gap-10 ">
        <Globe dots={location} />
        <CountryStats />
      </div>
    </div>
  );
};

export default Demographics;
