import { Outlet } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobNavBar";
import MobileSidebar from "./components/MobSidebar";

function App() {
  return (
    <section className="h-screen w-screen grid max-lg:grid-rows-[60px_1fr] lg:grid-cols-[240px_1fr]">
      <Sidebar />
      <MobileNav/>
      <div className="">
        <NavigationMenu />
        <div className="">
          <Outlet />
        </div>
      </div>
      <MobileSidebar/>
    </section>
  );
}

export default App;
