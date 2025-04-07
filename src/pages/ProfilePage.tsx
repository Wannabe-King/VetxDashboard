import Overview from "../components/analytisc/Overview";
import InnerNav from "../components/InnerNav";
import Experiencesection from "../components/ProfileComponents/ExperienceSection";
import CompainesSection from "../components/ProfileComponents/CompaniesSection";
import ProfileOverviewSection from "../components/ProfileComponents/ProfileOverviewSection";
import { PageInnerNavigation } from "../config/profileNavigation";
import ContentLayout from "../components/ProfileComponents/ContentLayout";
import GridSection from "../components/ProfileComponents/GridSection";

const ProfilePage = () => {
  return (
    <section className="bg-[#080808] w-full h-auto lg:h-[calc(100vh-50px)] overflow-y-auto no-scrollbar">
      <InnerNav navItems={PageInnerNavigation} />

      <ContentLayout>
        <Overview
          children={
            <div className="lg:mt-[24px]">
              <ProfileOverviewSection />
            </div>
          }
        />
        <GridSection
          leftComponent={<CompainesSection />}
          rightComponent={<Experiencesection />}
        />
      </ContentLayout>
    </section>
  );
};

export default ProfilePage;
