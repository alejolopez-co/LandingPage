import { About } from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
