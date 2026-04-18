import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projets from "./Components/Projets"

export default function App() { 
  return ( 
    <div> 
      <Navbar />  {/* ← navbar sortie, tout en haut */}
      <div className="p-4 md:px-[15%]"> 
        <Home /> 
      </div> 
      <div> 
        <About /> 
      </div> 
      <div> 
        <Experience /> 
      </div> 
      <div>
        <Projets />
      </div>
    </div> 
  ) 
}