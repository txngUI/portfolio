import About from "./pages/about";
import Career from "./pages/career";
import Header from "./pages/header";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Career />
    </div>
  );
}
