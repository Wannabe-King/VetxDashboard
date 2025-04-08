import InnerNav from "../components/innernavbar";
import Experiencesection from "../components/ProfileComponents/ExperienceSection";
import CompainesSection from "../components/ProfileComponents/CompaniesSection";
import ProfileOverviewSection from "../components/ProfileComponents/ProfileOverviewSection";
import ContentLayout from "../components/ProfileComponents/ContentLayout";
import GridSection from "../components/ProfileComponents/GridSection";
import { PageInnerNavigation } from "../db/profileNavigation";
import Overview from "../components/AnalyticsComponents/Overview";

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
