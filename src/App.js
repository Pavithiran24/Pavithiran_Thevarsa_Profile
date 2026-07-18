import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Research />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
