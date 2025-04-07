import Demographics from "../components/analytisc/Demographics";
import InsightsCard from "../components/analytisc/InsightsCard";
import Overview from "../components/analytisc/Overview";
import GraphComponent from "../components/analytisc/OverviewGraph";
import InnerNav from "../components/InnerNav";

const PageInnerNavigation = [
  {
    id: 0,
    title: "Overview",
    className: "border-l-0 lg:border-r max-lg:px-4",
  },
  {
    id: 1,
    title: "Reports",
    className: "lg:hidden max-lg:px-4 border-l-0",
  },
  {
    id: 2,
    title: "Demographics",
    className: "border-l-0 lg:border-r lg:px-4 max-lg:px-4",
  },
];

const AnalyticsPage = () => {
  return (
    <section className="bg-[#080808] w-full h-auto lg:h-[calc(100vh-50px)] overflow-y-auto no-scrollbar">
      <InnerNav navItems={PageInnerNavigation} />

      <div className="py-7 lg:py-9 px-6 lg:px-12 space-y-4 w-full lg:max-w-[calc(100%-100px)]">
        <Overview
          children={
            <div className="flex gap-4 flex-col lg:flex-row items-stretch lg:h-[273px] lg:mt-[34px]">
              <GraphComponent />
              <InsightsCard />
            </div>
          }
        />
        <Demographics />
      </div>
    </section>
  );
};

export default AnalyticsPage;
