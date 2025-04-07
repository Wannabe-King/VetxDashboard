import { ArrowRight } from "lucide-react";
import { useState } from "react";
import DropDown from "../UI/DropDown";
import { categoryList } from "../../db/dummyData";

const InsightsCard = () => {
  const [selectedOption, setSelectedOption] = useState<number>(
    categoryList[0].id
  );

  const handleChangeDropdownVal = (value: React.SetStateAction<number>) => {
    setSelectedOption(value);
  };

  return (
    <div className=" text-white px-5 py-[12px] rounded-lg border border-[#1D1D1D] w-full lg:w-[274px] bg-black">
      <div className="flex items-center justify-between gap-1 mb-3">
        <h2 className="text-[20px] font-bold">Insights</h2>

        <DropDown
          className="min-w-[120px]"
          itemList={categoryList}
          selectedValue={selectedOption}
          onChange={handleChangeDropdownVal}
        />
      </div>

      <div className="space-y-3 flex max-lg:gap-10 lg:flex-col">
        <div>
          <p className="text-base font-semibold">Founders</p>
          <div className="flex items-center gap-4">
            <h3 className="text-[32px] font-extrabold">7.4K</h3>
            <span className="flex flex-col">
              <p className="text-xs text-[#01754F] font-semibold">+000%</p>
              <p className="text-xs text-[#555555] font-semibold ">(000)</p>
            </span>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold">Investors</p>
          <div className="flex items-center gap-4">
            <h3 className="text-[32px] font-extrabold ">6.09K</h3>
            <span className="flex flex-col">
              <p className="text-xs text-[#01754F] font-semibold">+000%</p>
              <p className="text-xs text-[#555555] font-semibold ">(000)</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1D1D1D] mt-3.5 pt-4 flex items-center justify-end">
        <span className="inline-flex items-center cursor-pointer gap-3">
          <p className="text-[10px]">View detailed insights</p>
          <ArrowRight size={16} stroke="#FFFFFF" />
        </span>
      </div>
    </div>
  );
};

export default InsightsCard;
