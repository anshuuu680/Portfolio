import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function Layout() {
  return (
    <div className="min-h-[100vh] bg-primary">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default Layout;
