import { motion } from "motion/react";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/Button";
import CTACard from "../components/CTACard";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      logo: "/assets/logos/deflorenne-location.svg",
      title: "Site vitrine",
      status: 0,
      description:
        "Ce projet a pour vocation de mettre en avant les produits mise à la location par Deflorenne Location. Le design se veut esthétique, minimaliste et accessible. Le site permet à l'utilisateur d'ajouter du mobilier ou des produits dans son panier pour ensuite envoyer automatiquement une demande de devis personnalisé.",
      image: "/assets/images/project-deflorenne-location.webp",
      stackIcons: [
        "/assets/logos/figma.svg",
        "/assets/logos/react.svg",
        "/assets/logos/git.svg",
      ],
      link: "",
    },
    {
      logo: "/assets/logos/univers-kids.svg",
      title: "Site e-commerce",
      status: 1,
      description:
        "L'objectif de cette mission était de permettre à Univers Kids d'accroître son potentiel marketing en vendant sur internet via un outil esthétique qui rappelle les couleurs et les valeurs de la boutique, mais aussi performant permettant au gérant de constituer sa base de données de stocks, de la modifier et de la faire vivre en totale autonomie via un dashboard administrateur et permettant également aux clients d'acheter sereinement et efficacement via le site e commerce.",
      image: "/assets/images/project-univers-kids.webp",
      stackIcons: [
        "/assets/logos/figma.svg",
        "/assets/logos/react.svg",
        "/assets/logos/node.svg",
        "/assets/logos/express.svg",
        "/assets/logos/git.svg",
      ],
      link: "",
    },
  ];

  return (
    <main>
      <section
        id="hero"
        className="flex flex-col items-center gap-16 px-4 pt-16 md:gap-24 md:px-10 md:pt-32 xl:gap-32 xl:p-32"
      >
        <AnimatedTitle title="Mes projets, un aperçu de mon travail" tag="h1" />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-primary-200 text-center text-xl leading-relaxed xl:text-2xl"
        >
          Des solutions concrètes et adaptées aux besoins de mes clients, mais
          aussi des expériences et explorations qui nourrissent ma créativité et
          mon savoir-faire.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() =>
              window
                .open("https://cal.com/maxence-barbancon-w75rjo", "_blank")
                .focus()
            }
          >
            Je planifie un appel gratuit
          </Button>
        </motion.div>
      </section>
      <section className="flex flex-col gap-8 px-4 pt-16 md:gap-24 md:px-10 md:pt-32 xl:gap-16 xl:p-32">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </section>
      <section id="cta" className="px-4 py-16 xl:p-32">
        <CTACard />
      </section>
    </main>
  );
}
