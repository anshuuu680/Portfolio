import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Projects_Mobile from "./Pages/Projects_Mobile";
import Skills from "./Pages/Skills";
import ToolBox from "./Pages/ToolBox";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-skill-bg  relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-subheading/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-subheading/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-subheading/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <Hero />
          <ToolBox />
          <About />
          <Skills />
          <Projects_Mobile />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default Layout;
