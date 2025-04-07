import { UserRound } from "lucide-react";

const ProfileOverviewSection = () => {
  return (
    <div className="bg-black px-10 py-7 w-full flex sm:items-center sm:flex-row flex-col gap-3.5 sm:gap-8 rounded-[10px] border border-[#272727] ">
      <div className="p-5 sm:inline-block hidden">
        <UserRound size={120} fill="#FFFFFF" color="#26282b" />
      </div>

      <div className="">
        <div className="flex gap-5 items-center flex-nowrap">
          <h1 className="text-[24px] font-bold ">Mr.A</h1>
          <img
            src="/verifiedIcon.svg"
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
          <span className="sm:mt-3 mr-auto rounded-[2px] align-top max-sm:mt-1.5 inline-block bg-white text-black text-[10px] font-medium px-1 py-0.5">
            Entrepreneur
          </span>

          <div className="inline-flex sm:flex gap-5 items-center sm:mt-8">
            <img
              height={40}
              width={40}
              src="/linkedin.svg"
              alt="LinkedIn Icon"
            />
            <img height={40} width={40} src="/x.svg" alt="X.com icon" />
            <img height={40} width={40} src="/email.svg" alt="Email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewSection;
