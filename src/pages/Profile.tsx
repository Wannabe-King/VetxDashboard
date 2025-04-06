import Overview from "../components/analytisc/Overview";
import InnerNav from "../components/InnerNav"
import ExperienceCard from "../components/profile/ExperienceCard";
import FounderCompainesCard from "../components/profile/FounderCompainesCard";
import ProfileOverviewCard from "../components/profile/ProfileOverviewCard";


const PageInnerNavigation = [
  {
    id: 0,
    title: "Overview",
    className: "border-l-0 lg:border-r max-lg:px-4",
  },
  {
    id: 1,
    title: "Portfolio",
    className: "border-l-0 lg:border-r lg:px-4 max-lg:px-4",
  },
  {
    id: 2,
    title: "Experience",
    className: "border-l-0 lg:border-r lg:px-4 max-lg:px-4",
  },
  {
    id: 3,
    title: "Media",
    className: "border-l-0 lg:border-r lg:px-4 max-lg:px-4",
  },
];


const Profile = () => {
  return (
    <section className="bg-[#080808] w-full h-auto lg:h-[calc(100vh-50px)] overflow-y-auto no-scrollbar">
    <InnerNav navItems={PageInnerNavigation} />

    <div className="py-7 lg:py-9 px-6 lg:px-12 space-y-4 w-full lg:max-w-[calc(100%-100px)]">
      <Overview children={
          <div className='lg:mt-[24px]'>
            <ProfileOverviewCard/>
           </div>
      }/>
      <div className="w-full grid max-md:grid-rows-2 md:grid-cols-2 gap-4">
        <FounderCompainesCard/>
        <ExperienceCard/>
      </div>
    </div>
  </section>
  )
}

export default Profile