import { Key } from "react";

export const CompanyTile = ({
  key,
  name,
  link,
}: {
  key: Key;
  name: string;
  link: string;
}) => {
  return (
    <div key={key} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-[2px] bg-[url('/placeholder.webp')] bg-cover" />
        <span className="text-[14px] font-medium">{name}</span>
      </div>
      <a href={link} className="text-[10px] font-medium">
        View Profile
      </a>
    </div>
  );
};
