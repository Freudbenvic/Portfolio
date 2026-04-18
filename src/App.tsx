import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Experience from "./Components/Experience"

export default function App() { 
  return ( 
    <div> 
      <div className="p-4 md:px-[15%]"> 
        <Navbar /> 
        <Home /> 
      </div> 
      <div> 
        <About /> 
      </div> 

       <div> 
        <Experience /> 
      </div> 
    </div> ) }