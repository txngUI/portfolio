import ThemeToggle from "./components/ThemeToggle";
import Announce from "./components/Announce";
import Header from "./components/Header";
import ToggleSwitch from "./components/ToggleSwitch";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Studies from "./components/Studies";

export default function Home() {
  return (
    <div>
      <Announce />
      <ThemeToggle />
      <ToggleSwitch />
      <main className="w-1/2 mx-auto mt-10">
        <Header />
        <About />
        <Projects />
        <Career />
        <Studies />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
