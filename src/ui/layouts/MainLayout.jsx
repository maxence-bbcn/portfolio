import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import Navbar from "../components/NavBar";

const CustomFooter = lazy(() => import("../components/CustomFooter"));

export default function MainLayout({ children }) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <AnimatePresence>
        {mobileMenuVisible && (
          <div className="fixed z-50 flex h-screen w-full justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-primary-bg absolute h-screen w-full border blur-3xl"
              onClick={(event) => {
                if (event.target !== menuRef.current)
                  setMobileMenuVisible(false);
              }}
            ></motion.div>
            <motion.div
              initial={{ x: "150%" }}
              animate={{ x: 0 }}
              exit={{ x: "150%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={menuRef}
              className="mobile-menu-bg-gradient glow--menu fixed top-0 right-0 flex h-screen w-3/4 flex-col items-center justify-center gap-6 pt-24 pb-16 md:w-1/2 md:gap-12 max-md:landscape:gap-3"
            >
              <button
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => setMobileMenuVisible(false)}
              >
                <img src="/assets/icons/x.svg" alt="X" />
              </button>
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
              <Button
                onClick={() =>
                  window
                    .open("https://cal.com/maxence-barbancon-w75rjo", "_blank")
                    .focus()
                }
              >
                Planifiez un appel
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Navbar toggleMobileMenu={setMobileMenuVisible} />
      <br />
      <br />
      {children}
      <Suspense fallback={null}>
        <CustomFooter />
      </Suspense>
    </>
  );
}
