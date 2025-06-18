import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Pages/Home"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Projects from "./components/Pages/Projects"
import Certificate from "./components/Pages/Certificate"


function App() {


  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/certificate" element={<Certificate/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
