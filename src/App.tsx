import { Routes, Route, Link } from "react-router-dom";
import Home from "./router/Home";
import LearnEnglish from "./router/LearnEnglish";
function App() {
  return (
    <div className="">
      <nav className="fixed top-0 w-full z-10">
        <ul className="flex bold text-xl text-blue-300  bg-white">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/learn-english">Learn English</Link>
          </li>
        </ul>
      </nav>
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-english" element={<LearnEnglish />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
