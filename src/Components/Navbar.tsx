import { CodeXml} from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-content md:justify-between items-center p-4s">
            <a href="#"
            className="flex items-center font-bold text-3xl md:text-xl ">
                <CodeXml />
                    FREUD 
                    <span className="text-accent "> XTIME </span>
            </a>
            <ul 
                className="hidden md:flex space-x-4">
                    <li>
                        <a href="#"
                        className="btn btn-sm btn-ghost">
                            Acceuil
                        </a>
                    </li>

                     <li>
                        <a href="#"
                        className="btn btn-sm btn-ghost">
                            À propos
                        </a>
                    </li>

                     <li>
                        <a href="#"
                        className="btn btn-sm btn-ghost">
                            Mes expériences
                        </a>
                    </li>

                    <li>
                        <a href="#"
                        className="btn btn-sm btn-ghost">
                            Mes projets
                        </a>
                    </li>
            </ul>

        </div>
    )
}

export default Navbar;