import { useState } from "react";
import { categoryList } from "../../config/dummyData";
import { WorldMap } from "../UI/world-map";
import DropDown from "../UI/DropDown";
import CountryStats from "./CountryStates";

const LOCATIONS = [
  { lat: 23.2599, lng: 77.4126, label: "India", lineColor: "#6366f1" },
  { lat: 37.7749, lng: -122.4194, label: "USA", lineColor: "#ea580c" },
  { lat: 37.7749, lng: -143.4194, label: "USA", lineColor: "#ea580c" },
  { lat: 45.4215, lng: -75.6995, label: "Canada", lineColor: "#facc15" },
  { lat: 25.276987, lng: 55.296249, label: "UAE", lineColor: "#10b981" },
];

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
        <WorldMap dots={LOCATIONS} />
        <CountryStats />
      </div>
    </div>
  );
};

export default Demographics;
