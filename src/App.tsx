import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBook, FaMusic } from "react-icons/fa";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import Home from "./router/Home";
import LearnEnglish from "./router/LearnEnglish";
import ListMusic from "./router/ListMusic";
import React from "react";
function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="">
      <nav className="fixed top-0 w-full z-10 dark:bg-[#0F172A] dark:text-white text-[#6B7384] bg-white">
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
          {/* bg-gradient-to-r from-red-700 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text */}
          <li className="m-1 p-1  hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/list-music">
              <span className="mr-1">
                <FaMusic />
              </span>
              <span>List nhạc hay</span>
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

      <div className="pt-12 dark:bg-[#0F172A] dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-english" element={<LearnEnglish />} />
          <Route path="/list-music" element={<ListMusic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
