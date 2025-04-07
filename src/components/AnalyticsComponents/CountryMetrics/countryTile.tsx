import { Key } from "react";

interface CountryTileProp {
  key: Key;
  flag: string;
  name: string;
  color: string;
  percent: number;
}

export const CountryTile = ({
  key,
  flag,
  name,
  color,
  percent,
}: CountryTileProp) => {
  return (
    <div key={key} className="flex items-center justify-between gap-2.5">
      <span
        className={`inline-block h-[28px]! w-[40px]! mt-1.5 rounded-[2px]! fi fi-${flag}`}
      ></span>

      <div className="flex-1 w-full">
        <div className="flex items-center justify-between text-sm mb-0.5">
          <span className="font-semibold text-base">{name}</span>
          <span className="text-[10px] text-semibold">{percent}%</span>
        </div>

        <div className="h-2 w-full bg-[#1D1D1D] rounded-full overflow-hidden">
          <div
            className={`h-full ${color} rounded-full`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
