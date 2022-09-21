import { About } from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Education from "./components/Education"
import Work from "./components/Work"
import Experience from "./components/Experience"

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Work />
      <Contact />
    </div>
  )
}

export default App
