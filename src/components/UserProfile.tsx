import { LucideIcon, User2Icon } from "lucide-react";
import React from "react";

interface UserProfileIconProps {
  profileUrl?: string; 
  isOnline?: boolean;
  Icon?: LucideIcon;
  className ?: string
}

const UserProfileIcon: React.FC<UserProfileIconProps> = ({ profileUrl, isOnline, Icon , className="" }) => {

  return (
    <div className={`relative h-[50px] w-[49px] flex items-center justify-center ${className}`}>
      <div className={`h-[30px] w-[30px] flex items-center justify-center overflow-hidden rounded-full ${!Icon ? "bg-white" : "bg-transparent"}`}>
        {profileUrl ? (
          <img
            className="h-full w-full object-cover object-center"
            src={profileUrl}
            alt="user profile"
          />
        ) : (
            Icon 
            ? <Icon size={24} stroke="#ffffff" /> 
            : <User2Icon size={24} fill="#000000" />
        )}
      </div>
        {
            !Icon && <div
              className={`absolute bottom-[11px] right-[11px] z-10 h-2 w-2 rounded-full ${
                isOnline ? "bg-[#01754F]" : "bg-[#aaaaaa]"
              }`}
            ></div>

        }

    </div>
  );
};

export default UserProfileIcon;
