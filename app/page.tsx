import ThemeToggle from "./components/ThemeToggle";
import Announce from "./components/Announce";
import Header from "./components/Header";
import ToggleSwitch from "./components/ToggleSwitch";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Announce />
      <ThemeToggle />
      <main className="w-1/2 mx-auto mt-10 mb-10">
        <ToggleSwitch />
        <Header />
        <About />
        <Projects />
      </main>
    </div>
  );
}
