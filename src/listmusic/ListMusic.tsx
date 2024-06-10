import { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

import { SunIcon, MoonIcon, StarIcon, CloundIcon } from "@/assets/IconCustom";

function ListMusic() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <DayNightToggle
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
      />

      <div className="mt-8">
        <div
          onClick={toggleSwitch}
          className={`relative w-20 h-10 bg-gray-400 overflow-hidden rounded-full shadow-inner  duration-1000 transition-colors ${
            isOn ? "bg-sky-950" : "bg-sky-300"
          }`}
        >
          <div
            className={`absolute top-6 left-0 w-full h-4   ${
              isOn ? "bg-[#683b2b]" : "bg-[#b78978]"
            }`}
          />
          {/* Các ngôi sao */}
          <div className="">
            <div
              className={`absolute top-2 left-2 w-full h-4 duration-1000 transform transition-transform ${
                isOn
                  ? "translate-y-2 duration-700 "
                  : "translate-x-24 duration-700"
              }`}
            >
              <StarIcon />
            </div>
            <div
              className={`absolute top-3 left-6 w-full h-4 duration-1000 transform transition-transform ${
                isOn ? " " : "translate-x-24 duration-700"
              }`}
            >
              <StarIcon />
            </div>
            <div
              className={`absolute top-1 left-9 w-full h-4 duration-1000 transform transition-transform ${
                isOn ? " " : "translate-x-24 duration-700"
              }`}
            >
              <StarIcon />
            </div>
            <div
              className={`absolute top-1 left-16 w-full h-4 duration-1000 transform transition-transform ${
                isOn ? " " : "translate-x-24 duration-700"
              }`}
            >
              <StarIcon />
            </div>
          </div>
          {/* Clound */}
          <div>
            <div
              className={`absolute top-0 left-0 w-full h-4 duration-1000 transform transition-transform ${
                isOn ? "translate-x-24 duration-700 " : ""
              }`}
            >
              <CloundIcon />
            </div>
            <div
              className={`absolute top-0 left-11 w-full duration-1000 transform transition-transform ${
                isOn ? "translate-x-24 duration-700 " : ""
              }`}
            >
              <CloundIcon />
            </div>
          </div>

          {/* mặt trời mặt trăng */}
          <div
            className={`absolute z-1 top-2 left-0 w-6 h-6 items-center justify-center rounded-full shadow-2xl transform transition-transform duration-1000 ${
              isOn
                ? "translate-x-11 duration-700 "
                : "translate-x-2 duration-700"
            }`}
          >
            {isOn ? <MoonIcon /> : <SunIcon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMusic;
