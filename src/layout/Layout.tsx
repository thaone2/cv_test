import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 md:grid-cols-7 dark:bg-gray-900 dark:text-white ">
        <div className="hidden md:flex">
          <LeftContent />
        </div>
        <div className="md:col-span-5 mt-12">
          <Outlet />
        </div>
        <div className="hidden md:flex">
          <RightContent />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
