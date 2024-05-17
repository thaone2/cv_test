import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBook, FaMusic, FaShoppingBasket } from "react-icons/fa";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import Home from "./router/Home";
import LearnEnglish from "./router/LearnEnglish";
import ListMusic from "./router/ListMusic";
import Shop from "./router/Shop";
import React from "react";
function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="">
      <nav className=" fixed top-0 w-full z-10 dark:bg-[#000000] dark:text-white text-[#6B7384] bg-white">
        <ul className="flex bold text-lg">
          <li className="m-1 p-1   hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/">
              <span className="mr-1">
                <FaHome />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className="m-1 p-1  hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/learn-english">
              <span className="mr-1">
                <FaBook />
              </span>
              <span>Learn English</span>
            </Link>
          </li>
          <li className="m-1 p-1  hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/list-music">
              <span className="mr-1">
                <FaMusic />
              </span>
              <span>List nhạc hay</span>
            </Link>
          </li>
          <li className="m-1 p-1  hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/shop">
              <span className="mr-1">
                <FaShoppingBasket />
              </span>
              <span>Shop</span>
            </Link>
          </li>

          <div className="flex p-1 m-1 hover:text-[#77d6ff] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <button onClick={() => darkModeHandler()}>
              {
                dark && <IoSunnySharp /> // render sunny when dark is true
              }
              {
                !dark && <IoMoon /> // render moon when dark is false
              }
            </button>
          </div>
        </ul>
      </nav>
      {/* <nav className="fixed top-0 w-full z-10 dark:bg-[#000000] dark:text-white text-[#6B7384] bg-white">
        <ul className="flex items-center justify-between md:justify-start bold text-lg">
          <li className="m-1 p-1 hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/">
              <span className="mr-1">
                <FaHome />
              </span>
              <span>Home</span>
            </Link>
          </li>

          <div className="flex md:hidden p-1 m-1 hover:text-[#77d6ff] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <button onClick={darkModeHandler}>
              {dark ? <IoSunnySharp /> : <IoMoon />}
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <li className="m-1 p-1 hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
              <Link className="flex items-center" to="/learn-english">
                <span className="mr-1">
                  <FaBook />
                </span>
                <span>Learn English</span>
              </Link>
            </li>
            <li className="m-1 p-1 hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
              <Link className="flex items-center" to="/list-music">
                <span className="mr-1">
                  <FaMusic />
                </span>
                <span>List nhạc hay</span>
              </Link>
            </li>
            <li className="m-1 p-1 hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
              <Link className="flex items-center" to="/shop">
                <span className="mr-1">
                  <FaShoppingBasket />
                </span>
                <span>Shop</span>
              </Link>
            </li>
            <div className="p-1 m-1 hover:text-[#77d6ff] hover:bg-slate-100 hover:rounded-xl hover:p-1">
              <button onClick={darkModeHandler}>
                {dark ? <IoSunnySharp /> : <IoMoon />}
              </button>
            </div>
          </div>
        </ul>
      </nav> */}

      {/* dark:bg-[#0F172A] */}
      <div className="pt-12 dark:bg-black dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-english" element={<LearnEnglish />} />
          <Route path="/list-music" element={<ListMusic />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
