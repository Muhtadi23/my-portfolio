import { domAnimation, LazyMotion } from "framer-motion"
import About from "./comp/About"
import Footer from "./comp/Footer"
import Introduc from "./comp/Introduc"
import Nav from "./comp/Nav"
import Projects from "./comp/Projects"
import Timeline from "./comp/Timeline"
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-[1440px] mx-auto">
        <Nav />
        <Introduc />
        <About />
        <Timeline />
        <Projects />
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
