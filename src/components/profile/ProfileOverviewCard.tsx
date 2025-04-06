import { User } from "lucide-react";

const ProfileOverviewCard = () => {
  return (
    <div className="bg-black px-10 py-7 w-full flex sm:items-center sm:flex-row flex-col gap-3.5 sm:gap-8 rounded-[10px] border border-[#272727] ">
      <div className="p-5 sm:inline-block hidden" >
        <User size={80} fill="#FFFFFF" />
      </div>
      <img src="/checkbox.webp" alt="user profile" className="h-[146px] w-[146px] rounded-[10px] sm:hidden inline-block" />

      <div className="">
        <div className="flex gap-2 justify-between items-center flex-nowrap">
          <h1 className="text-[24px] font-bold w-[200px]">Mr.ABC</h1>
          <img
            src="/verifiedBadge.svg"
            alt="varified-icon"
            className="h-[24px] w-[24px]"
          />
        </div>

        <p className="text-[12px] font-medium flex items-center flex-nowrap">
          Co-Founder & CEO @Vertx
          <img
            src="/vertxLogo.png"
            className="ml-1.5"
            alt="Vertx Logo"
            height={12}
            width={12}
          />
        </p>

        <div className="flex items-start justify-between gap-2 sm:flex-col">

        <span className="sm:mt-3 mr-auto rounded-[2px] align-top max-sm:mt-1.5 inline-block bg-white text-black text-[8px] font-medium px-1 py-0.5">
          Entrepreneur
        </span>

        <div className="inline-flex sm:flex gap-2 items-center sm:mt-8">
          <img height={30} width={30} src="/linkedin.svg" alt="varified-icon" />
          <img height={30} width={30} src="/x.svg" alt="varified-icon" />
          <img height={30} width={30} src="/mail.svg" alt="varified-icon" />
        </div>
                  
        </div>

      </div>
    </div>
  );
};

export default ProfileOverviewCard;
