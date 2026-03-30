import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen font-inter bg-[#1A1A1A] relative">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8 pt-32 flex flex-col items-center gap-10">
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
