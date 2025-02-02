"use client";

import About from "./pages/about";
import Header from "./pages/header";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import { cn } from "@/lib/utils";
import DotPattern from "./components/ui/dot-pattern";
import BlurFade from "./components/ui/blur-fade";
import Studies from "./pages/studies";
import Experience from "./pages/experience";

export default function Home() {
  const {darkMode, toggleDarkMode} = useDarkModeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const BLUR_FADE_DELAY = 0.25;

  return (
    <div className="relative">
      <div className="w-full h-1/2 text-center text-white bg-[#1E3A8A] py-4 z-10">RECHERCHE ACTIVEMENT UNE ALTERNANCE POUR MON MASTERE EN DEVELOPPEMENT FULLSTACK SUR RENNES OU NANTES POUR SEPTEMBRE PROCHAIN</div>
      <div className="opacity-40">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "fixed"
          )}
        />
      </div>
      <main
        className="w-1/2 font-sans flex flex-col justify-center items-center my-12 mx-auto transition-colors duration-300"
      >
        <div className="flex justify-end w-full">
          <button
            onClick={toggleDarkMode}
            className="px-2 py-2 rounded dark:bg-[#1C1C1C] dark:hover:bg-[#1C1C1C] bg-slate-200 transition-all duration-300"
          >
            {darkMode ? (
              <LightModeIcon style={{ color: "#4E4E4E" }} />
            ) : (
              <ModeNightIcon style={{ color: "#C1C1C1" }} />
            )}
          </button>
        </div>
        <BlurFade className="w-full" delay={BLUR_FADE_DELAY}>
          <Header />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <About />
        </BlurFade>
        {/* <BlurFade delay={BLUR_FADE_DELAY} className="mt-8 flex justify-center w-2/5 rounded-3xl">
          <Video />
        </BlurFade> */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Experience />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Projects />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Studies />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY} className="w-full">
          <Skills />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <footer className="text-center text-gray-500 mt-10 text-base">
            © 2024 by Tanguy David. All rights reserved.
          </footer>
        </BlurFade>
      </main>
    </div>
  );
}
