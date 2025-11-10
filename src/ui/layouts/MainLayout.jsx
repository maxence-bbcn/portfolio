import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CustomFooter from "../components/CustomFooter";
import Navbar from "../components/NavBar";

export default function MainLayout({ children }) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "90vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "auto";
    }
  }, [mobileMenuVisible]);

  return (
    <>
      {mobileMenuVisible && (
        <div
          className="absolute z-10 flex h-full w-full justify-end backdrop-blur-xs max-md:landscape:h-screen"
          onClick={(event) => {
            if (event.target !== menuRef.current) setMobileMenuVisible(false);
          }}
        >
          <div
            ref={menuRef}
            className="mobile-menu-bg-gradient glow--menu flex h-full w-2/3 flex-col items-center justify-center gap-6 pt-24 pb-16 md:gap-12 max-md:landscape:gap-3"
          >
            <Link
              to="/about"
              className="text-xl font-medium md:text-2xl max-md:landscape:text-lg"
            >
              Qui suis-je ?
            </Link>
            <Link
              to="/projects"
              className="text-xl font-medium md:text-2xl max-md:landscape:text-lg"
            >
              Mes projets
            </Link>
            <span className="py-4 max-md:landscape:hidden md:landscape:hidden" />
            <Button>Planifiez un appel</Button>
          </div>
        </div>
      )}
      <Navbar toggleMobileMenu={setMobileMenuVisible} />
      {children}
      <CustomFooter />
    </>
  );
}
