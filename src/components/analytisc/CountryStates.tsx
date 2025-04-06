import { ArrowRight } from "lucide-react";

const countries = [
  {
    name: "India",
    percent: 40,
    color: "bg-[#4834D4]",
    flag: "in",
  },
  {
    name: "USA",
    percent: 25,
    color: "bg-[#BD5302]",
    flag: "us",
  },
  {
    name: "CANADA",
    percent: 10,
    color: "bg-[#E9C16B]",
    flag: "ca",
  },
  {
    name: "UAE",
    percent: 7,
    color: "bg-[#579560]",
    flag: "ae",
  },
];

export default function CountryStats() {
  return (
    <div className=" lg:max-w-[240px] -mt-4 w-full bg-black  text-white space-y-5">
      {countries.map((country, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-2.5"
        >

        <span className={`inline-block h-[28px]! w-[40px]! mt-1.5 rounded-[2px]! fi fi-${country.flag}`}></span>
        
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between text-sm mb-0.5">
                <span className="font-semibold text-base">{country.name}</span>
                <span className="text-[10px] text-semibold">{country.percent}%</span>
            </div>

            <div className="h-2 w-full bg-[#1D1D1D] rounded-full overflow-hidden">
              <div
                className={`h-full ${country.color} rounded-full`}
                style={{ width: `${country.percent}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="border-t border-[#1D1D1D] mt-3.5 pt-4 flex items-center justify-end">
        <span className="inline-flex items-center cursor-pointer gap-3">
          <p className="text-[10px]">View all countries </p>
          <ArrowRight size={16} stroke="#FFFFFF" />
        </span>
      </div>
    </div>
  );
}
