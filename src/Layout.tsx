import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function Layout() {
  return (
    <div className="min-h-[100vh] bg-skill-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Layout;
