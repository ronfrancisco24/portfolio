import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {
  
  return (
      <div className='min-h-screen font-inter bg-[#1A1A1A] relative'>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
     </div>
  )
}

export default App
