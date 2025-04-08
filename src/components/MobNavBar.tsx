import { Link } from "react-router-dom";
import UserProfile from "./userProfileIconwithStatus";
import { EllipsisVertical } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="lg:hidden py-4 px-2 flex justify-between gap-2 items-center">
      <Link to={"/profile"}>
        <UserProfile
          profileUrl="https://randomuser.me/api/portraits/men/75.jpg"
          isOnline={true}
        />
      </Link>

      <span className="h-[30px] w-[30px] inline-flex items-center justify-center rounded-full bg-white">
        <img src="/vertxLogo.png" alt="Vertex Logo" className="h-4 w-4" />
      </span>

      <EllipsisVertical size={30} />
    </div>
  );
};

export default MobileNav;
