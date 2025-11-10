import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, props }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <article
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
            src={project.image}
            alt="aperçu du projet"
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
                className="max-h-[80%] max-w-[90%] scale-100 transform rounded-2xl shadow-lg transition-transform duration-300"
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
    </article>
  );
}
