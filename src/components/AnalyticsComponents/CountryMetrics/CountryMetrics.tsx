import { ArrowRight } from "lucide-react";
import { countriesData } from "../../../db/countriesData";
import { CountryTile } from "./countryTile";

export default function CountryStats() {
  return (
    <div className=" lg:max-w-[240px] -mt-4 w-full bg-black  text-white space-y-5">
      {countriesData.map((country, index) => (
        <CountryTile
          key={index}
          flag={country.flag}
          name={country.name}
          color={country.color}
          percent={country.percent}
        />
      ))}
      <div className="border-t border-[#1D1D1D] mt-3.5 pt-4 flex items-center justify-end">
        <span className="inline-flex items-center cursor-pointer gap-3">
          <p className="text-[12px]">View all countries </p>
          <ArrowRight size={16} stroke="#FFFFFF" />
        </span>
      </div>
    </div>
  );
}
