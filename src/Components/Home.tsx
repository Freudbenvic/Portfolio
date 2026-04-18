import { Mail} from "lucide-react";
import img from '../assets/Fix.jpg'
const Home = () => {
  return (
    <div id="accueil" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 mb-4">
            Bonjour, <br />
              je suis <span className="text-accent">Freud</span>
        </h1>
        <p className=" my-4 text-lg text-center md:text-left">
            Développeur web passionné
            <br /> spécialisé dans la création de sites web modernes et réactifs.
            <br /> Avec une expertise en HTML, CSS, JavaScript et React, je m'efforce de créer des expériences utilisateur exceptionnelles. 
            <br />Mon objectif est de transformer vos idées en réalité numérique, en utilisant les dernières technologies pour offrir des solutions innovantes et efficaces.
        </p>
        <div className="flex gap-4 items-center">
          <button className="btn btn-accent">
              <Mail size={18} />
            Contactez-moi
            </button>
          <a href="/cv.pdf" download className="btn btn-outline">
              Télécharger mon CV
          </a>
        </div>
      </div>
      <div className="md:nl-60">
        <img src={img} alt="" className="w-96 h-96 object-cover border -8 border-accent shadow-x1"
        style={{
            borderRadius : "100% 100% 100%/ 100% 100% 100% 100%"
        }}/>
      </div>
    </div>
  )
}

export default Home
