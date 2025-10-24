import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ toggleMobileMenu }) {
  return (
    <nav className="px-6 xl:px-16 py-4 xl:py-8 flex flex-row justify-between items-center relative">
      <div className="w-1/3 flex gap-3">
        <img src="src/ui/assets/logos/moi.svg" alt="Logo" />
        <p className="hidden xl:block font-bold text-xl font-title">
          Maxence Barbançon
        </p>
      </div>
      <img
        src="src/ui/assets/icons/menu.svg"
        alt="Icône menu"
        className="select-none xl:hidden"
        onClick={() => toggleMobileMenu((prevState) => !prevState)}
      />
      <div className="hidden xl:flex flex-row justify-center w-1/3 gap-8">
        <Link to="/services" className="xl:text-xl">
          Mes services
        </Link>
        <Link to="/projects" className="xl:text-xl">
          Mes projets
        </Link>
        <Link to="/about" className="xl:text-xl">
          Qui suis-je ?
        </Link>
      </div>
      <div className="hidden xl:flex flex-row w-1/3 justify-end">
        <Button>Planifiez un appel</Button>
      </div>
    </nav>
  );
}
