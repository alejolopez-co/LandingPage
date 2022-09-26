import { About } from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
