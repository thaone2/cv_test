import { Routes, Route, Link } from "react-router-dom";
import Home from "./router/Home";
import LearnEnglish from "./router/LearnEnglish";
function App() {
  return (
    <div className="">
      <nav>
        <ul className="flex bold text-xl p-4 bg-gray-500 text-white">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/learn-english">Learn English</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-english" element={<LearnEnglish />} />
      </Routes>
    </div>
  );
}

export default App;
