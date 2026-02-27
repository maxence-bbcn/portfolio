import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const projectImagesProps = [
  {
    srcset: "",
     sizes:
      "",
    src: "",
    alt: "Aperçu du projet",
    width: "7680",
    height: "4320",
    loading: "lazy",
  },
  {
    srcset:
      "/assets/images/project--deflorenne-location-400w.webp 400w, /assets/images/project--deflorenne-location-600w.webp 600w, /assets/images/project--deflorenne-location-800w.webp 800w, /assets/images/project--deflorenne-location-1000w.webp 1000w, /assets/images/project--deflorenne-location-1200w.webp 1200w, /assets/images/project--deflorenne-location-1600w.webp 1600w, /assets/images/project--deflorenne-location-2000w.webp 2000w",
    sizes:
      "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px",
    src: "/assets/images/project--deflorenne-location.webp",
    alt: "Aperçu du projet",
    width: "7680",
    height: "4320",
    loading: "lazy",
  },
  {
    srcset:
      "/assets/images/project--univers-kids-400w.webp 400w, /assets/images/project--univers-kids-600w.webp 600w, /assets/images/project--univers-kids-800w.webp 800w, /assets/images/project--univers-kids-1000w.webp 1000w, /assets/images/project--univers-kids-1200w.webp 1200w, /assets/images/project--univers-kids-1600w.webp 1600w, /assets/images/project--univers-kids-2000w.webp 2000w",
    sizes:
      "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px",
    src: "/assets/images/project--univers-kids.webp",
    alt: "Aperçu du projet",
    width: "7680",
    height: "4320",
    loading: "lazy",
  },
];

export default function ProjectCard({ project, index, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        backgroundColor: "rgba(49, 46, 129, 0.1)",
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="border-primary-600 flex flex-col justify-end gap-6 rounded-2xl border px-10 pt-10 pb-8 lg:gap-10"
      {...props}
    >
      <div className="flex w-full items-center gap-3 xl:gap-6">
        <img
          src={project.logo}
          alt="Logo de l'entreprise"
          width={"50px"}
          className="xl:w-[60px]"
        />
        <h3 className="font-title text-xl lg:text-3xl xl:text-4xl">
          {project.title}
        </h3>
        <div className="border-primary-600 ml-auto hidden items-center gap-6 rounded-xl border px-4 py-2 lg:flex">
          <span
            className={`h-3 w-3 rounded-full ${project.status === 0 ? "bg-[#FFCF67]" : "bg-[#0DD87F]"} `}
          ></span>
          <p className="leading-loose xl:text-lg">
            {project.status === 0 ? "En cours" : "Terminé"}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 lg:flex-row-reverse lg:justify-between xl:gap-12">
        <div className="border-primary-200 flex w-full flex-wrap gap-2 lg:w-fit lg:flex-col lg:border-l lg:pl-4 xl:pl-10">
          {project.stackIcons.map((icon, index) => (
            <div
              key={index}
              className="border-primary-600 flex h-[50px] w-[50px] items-center justify-center rounded-xl border p-3"
            >
              <img src={icon} alt="logo de la stack technique" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-6 md:flex-row lg:justify-between xl:gap-24 max-lg:landscape:flex-row">
          <p className="1-2xl:leading-loose leading-relaxed font-extralight italic md:w-1/2 max-lg:landscape:w-1/2">
            {project.description}
          </p>
          <img
            {...projectImagesProps[index]}
            className="aspect-video h-fit w-full cursor-pointer rounded-2xl object-cover transition hover:opacity-80 md:w-1/2 max-lg:landscape:w-1/2"
            onClick={handleOpen}
          />
          {isOpen && (
            <div
              className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/70"
              onClick={handleClose}
            >
              <img
                src={project.image}
                alt="Image du projet"
                className="max-h-[90%] max-w-full scale-100 transform rounded-2xl shadow-lg transition-transform duration-300"
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l’image
              />
            </div>
          )}
        </div>
      </div>
      {project.link && (
        <Link to={project.link} className="text-right underline">
          Voir le projet
        </Link>
      )}
    </motion.article>
  );
}
