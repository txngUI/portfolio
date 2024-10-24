"use client";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState, useEffect } from "react";
import About from "./pages/about";
import Career from "./pages/career";
import Header from "./pages/header";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`transition-colors duration-300 text-black`}>
      <button
        onClick={toggleDarkMode}
        className="absolute bg-left-bottom px-2 py-2 rounded dark:bg-[#1C1C1C] dark:hover:bg-[#1C1C1C] bg-slate-200 transition-all duration-300"
      >
        {darkMode ? (
          <LightModeIcon style={{ color: "#4E4E4E" }} />
        ) : (
          <ModeNightIcon style={{ color: "#C1C1C1" }} />
        )}
      </button>
      <Header darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Career />
      <Skills darkMode={darkMode}  />
      <footer className="text-center text-gray-500 mt-10 text-base">
        © 2024 by Tanguy David. All rights reserved.
      </footer>
    </div>
  );
}
