import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function Navbar({ toggleMobileMenu }) {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="bg-primary-bg fixed top-0 right-0 left-0 z-10 flex flex-row items-center justify-between px-6 py-4 md:px-10 md:py-6 xl:px-16"
    >
      <Link to="/" className="flex w-1/3 gap-3">
        <img src="/assets/logos/moi.svg" alt="Logo" />
        <p className="font-title hidden text-xl font-bold md:block">
          Maxence Barbançon
        </p>
      </Link>
      <img
        src="/assets/icons/menu.svg"
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
        <Button
          size="small"
          onClick={() =>
            window
              .open("https://cal.com/maxence-barbancon-w75rjo", "_blank")
              .focus()
          }
        >
          Planifiez un appel
        </Button>
      </div>
    </motion.nav>
  );
}
