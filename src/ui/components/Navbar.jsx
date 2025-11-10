import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ toggleMobileMenu }) {
  return (
    <nav className="relative flex flex-row items-center justify-between px-6 py-4 md:px-10 md:py-6 xl:px-16 xl:py-8">
      <div className="flex w-1/3 gap-3">
        <img src="src/ui/assets/logos/moi.svg" alt="Logo" />
        <p className="font-title hidden text-xl font-bold md:block">
          Maxence Barbançon
        </p>
      </div>
      <img
        src="src/ui/assets/icons/menu.svg"
        alt="Icône menu"
        className="z-50 select-none xl:hidden"
        onClick={() => toggleMobileMenu((prevState) => !prevState)}
      />
      <div className="hidden w-1/3 flex-row justify-center gap-8 xl:flex">
        <Link to="/about" className="lg:text-lg 2xl:text-xl">
          Qui suis-je ?
        </Link>
        <Link to="/projects" className="lg:text-lg 2xl:text-xl">
          Mes projets
        </Link>
      </div>
      <div className="hidden w-1/3 flex-row justify-end xl:flex">
        <Button>Planifiez un appel</Button>
      </div>
    </nav>
  );
}
