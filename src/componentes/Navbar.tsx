import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TipoDocumento } from "../interfaces/documento";

export enum ModoNavbar {
    Escuro = 1,
    Transparente = 3 
};

type CoresNavbar = {
    background: string,
    texto: string,
    hover: string,
    shadow?: string
};

const coresNavbar: Record<ModoNavbar, CoresNavbar> = {
    [ModoNavbar.Escuro]: {
        background: "bg-black-translucent",
        texto: "text-white",
        hover: "hover:text-gray-300",
        shadow: "shadow-md"
    },
    [ModoNavbar.Transparente]: {
        background: "bg-none",
        texto: "text-white",
        hover: "hover:text-gray-300",
    }
};

const LinkItem = ({ to, texto, modoNavbar }: { to: string, texto: string, modoNavbar: ModoNavbar }) => {
    return (
        <li className="relative group">
            <Link to={to} className={`${coresNavbar[modoNavbar].texto} ${coresNavbar[modoNavbar].hover}`}>{texto}</Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 transform translate-y-0.5"></span>
        </li>
    );
};

const Navbar = ({ modoNavbar, className }: { modoNavbar: ModoNavbar, className?: string }) => {
    return (
        <nav className={`w-full ${coresNavbar[modoNavbar].background} ${coresNavbar[modoNavbar].shadow} ${className}`}>
            <div className="max-w-9/12 mx-auto flex justify-between items-center text-xs uppercase py-6 z-50">
                <ul className="flex space-x-6 z-50">
                    <LinkItem to="/" texto="Início" modoNavbar={modoNavbar} />
                    <LinkItem to={`/documentos?tipo=${TipoDocumento.Artigo}`} texto="Artigos" modoNavbar={modoNavbar} />
                    <LinkItem to={`/documentos?tipo=${TipoDocumento.Tutorial}`} texto="Tutoriais" modoNavbar={modoNavbar} />
                </ul>
                <div className="flex space-x-4 z-50">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${coresNavbar[modoNavbar].texto}`}>
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={`${coresNavbar[modoNavbar].texto}`}>
                        <FaXTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${coresNavbar[modoNavbar].texto}`}>
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
