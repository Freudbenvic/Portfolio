import { CodeXml } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-4 md:px-[15%] py-4 sticky top-0 z-50 bg-base-100">
            <a href="#accueil" className="flex items-center font-bold text-3xl md:text-xl">
                <CodeXml />
                FREUD
                <span className="text-accent"> XTIME </span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#accueil" className="btn btn-sm btn-ghost">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#apropos" className="btn btn-sm btn-ghost">
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#experiences" className="btn btn-sm btn-ghost">
                        Mes expériences
                    </a>
                </li>
                <li>
                    <a href="#projets" className="btn btn-sm btn-ghost">
                        Mes projets
                    </a>
                </li>
                <li>
                    <a href="#contact" className="btn btn-sm btn-ghost">
                        Contacts
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;