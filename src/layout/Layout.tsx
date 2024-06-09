import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="grid grid-cols-7 ">
        <LeftContent />
        <div className="col-span-5">
          <Outlet />
        </div>
        <RightContent />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
