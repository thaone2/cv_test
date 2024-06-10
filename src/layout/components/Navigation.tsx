import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaMusic, FaShoppingBasket } from "react-icons/fa";
import { IoSunnySharp, IoMoon } from "react-icons/io5";

function Navigation() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex mb-12 ">
      <nav className=" fixed top-0 w-full  dark:bg-[#000000] dark:text-white text-[#6B7384] bg-white">
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
            <Link className="flex items-center" to="/learning-english">
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
          <li className="m-1 p-1  hover:text-[#38BDF8] hover:bg-slate-100 hover:rounded-xl hover:p-1">
            <Link className="flex items-center" to="/login">
              <span className="mr-1">
                <FaShoppingBasket />
              </span>
              <span>Login</span>
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
    </div>
  );
}

export default Navigation;
