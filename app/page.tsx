"use client";

import About from "./pages/about";
import Career from "./pages/career";
import Header from "./pages/header";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Career />
      <Skills />
      <footer className="text-center text-gray-500 mt-10 text-base">
        © 2024 by Tanguy David. All rights reserved.
      </footer>
    </div>
  );
}
