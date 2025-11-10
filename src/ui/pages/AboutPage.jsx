import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import DegreeCard from "../components/DegreeCard";
import Navbar from "../components/NavBar";
import TechItem from "../components/techItem";

export default function AboutPage() {
  const techStack = [
    {
      image: "src/ui/assets/logos/react.svg",
      name: "React",
    },
    {
      image: "src/ui/assets/logos/node.svg",
      name: "Node.js",
    },
    {
      image: "src/ui/assets/logos/express.svg",
      name: "Express.js",
    },
    {
      image: "src/ui/assets/logos/next.svg",
      name: "Next.js",
    },
    {
      image: "src/ui/assets/logos/git.svg",
      name: "Github",
    },
    {
      image: "src/ui/assets/logos/figma.svg",
      name: "Figma",
    },
  ];

  const degrees = [
    {
      image: "src/ui/assets/icons/code.svg",
      title: "React",
      subtitle: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      link: "https://www.udemy.com/course/the-ultimate-react-course",
      source: "Udemy - 2025",
    },
    {
      image: "src/ui/assets/icons/design.svg",
      title: "Figma",
      subtitle: "Figma UI UX Design Advanced",
      link: "https://www.udemy.com/course/figma-ui-ux-design-advanced-tutorial/",
      source: "Udemy - 2025",
    },
    {
      image: "src/ui/assets/icons/award.svg",
      title: "Ingénieur",
      subtitle: "Informatique et Systèmes d'Information",
      link: "https://www.utt.fr/formations/diplome-d-ingenieur/informatique-et-systemes-d-information",
      source: "UTT - 2023",
    },
  ];

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
      <main>
        <section
          id="hero"
          className="mt-16 flex flex-col items-center gap-16 px-6 pb-16 md:mt-32 md:gap-24 md:px-10 xl:mx-auto xl:w-2/3 xl:gap-32 xl:px-16"
        >
          <h1 className="font-title text-center text-5xl leading-tight font-bold xl:text-6xl">
            Développeur web fullstack
          </h1>
          <p className="text-primary-200 text-center text-xl leading-relaxed xl:text-2xl">
            Passionné par la création de projets qui ont du sens !
          </p>
          <Button>Je planifie un appel gratuit</Button>
        </section>
        <section
          id="presentation"
          className="flex flex-col items-center gap-16 px-4 pt-16 md:mt-32 md:gap-24 md:px-10 xl:mx-auto xl:w-2/3 xl:gap-32 xl:px-16"
        >
          <p className="text-center text-xl leading-loose">
            Du concept initial au produit opérationnel, je combine{" "}
            <span className="font-semibold">technologie</span> et{" "}
            <span className="font-semibold">design</span> pour bâtir des
            expériences esthétiques, solides et pensées pour durer, au service
            de vos besoins d&apos;aujourd&apos;hui et de demain.
          </p>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-10">
              <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
                Domaines d&apos;expertises
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((item, index) => (
                  <TechItem item={item} key={index} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
                Dernières mises à jours
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {degrees.map((item, index) => (
                  <DegreeCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
