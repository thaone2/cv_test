import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBook, FaMusic } from "react-icons/fa";
import Home from "./router/Home";
import LearnEnglish from "./router/LearnEnglish";
import ListMusic from "./router/ListMusic";
function App() {
  return (
    <div>
      <nav className="fixed top-0 w-full z-10">
        <ul className="flex bold text-xl  border-b-2 bg-white">
          <li className="m-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
            <Link className="flex items-center" to="/">
              <span className="mr-1">
                <FaHome className="text-green-400" />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className="m-2 bg-gradient-to-r from-pink-600 via-green-500 to-blue-500 inline-block text-transparent bg-clip-text">
            <Link className="flex items-center" to="/learn-english">
              <span className="mr-1">
                <FaBook className="text-blue-400" />
              </span>
              <span>Learn English</span>
            </Link>
          </li>
          <li className="m-2 bg-gradient-to-r from-red-700 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text">
            <Link className="flex items-center" to="/list-music">
              <span className="mr-1">
                <FaMusic className="text-red-400" />
              </span>
              <span>List nhạc hay</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pt-12">
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
