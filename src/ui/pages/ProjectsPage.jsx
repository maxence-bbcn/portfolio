import { motion } from "motion/react";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import MainLayout from "../layouts/MainLayout";

export default function ProjectsPage() {
  const projects = [
    {
      logo: "src/ui/assets/logos/deflorenne-location.svg",
      title: "Site vitrine",
      status: 0,
      description:
        "Ce projet a pour vocation de mettre en avant les produits mise à la location par Deflorenne Location. Le design se veut esthétique, minimaliste et accessible. Le site permet à l'utilisateur d'ajouter du mobilier ou des produits dans son panier pour ensuite envoyer automatiquement une demande de devis personnalisé.",
      image: "src/ui/assets/images/project--deflorenne-location.png",
      stackIcons: [
        "src/ui/assets/logos/figma.svg",
        "src/ui/assets/logos/react.svg",
        "src/ui/assets/logos/git.svg",
      ],
      link: "",
    },
    {
      logo: "src/ui/assets/logos/univers-kids.svg",
      title: "Site e-commerce",
      status: 1,
      description:
        "L'objectif de cette mission était de permettre à Univers Kids d'accroître son potentiel marketing en vendant sur internet via un outil esthétique qui rappelle les couleurs et les valeurs de la boutique, mais aussi performant permettant au gérant de constituer sa base de données de stocks, de la modifier et de la faire vivre en totale autonomie via un dashboard administrateur et permettant également aux clients d'acheter sereinement et efficacement via le site e commerce.",
      image: "src/ui/assets/images/project--univers-kids.png",
      stackIcons: [
        "src/ui/assets/logos/figma.svg",
        "src/ui/assets/logos/react.svg",
        "src/ui/assets/logos/node.svg",
        "src/ui/assets/logos/express.svg",
        "src/ui/assets/logos/git.svg",
      ],
      link: "",
    },
  ];

  return (
    <MainLayout>
      <main>
        <section
          id="hero"
          className="flex flex-col items-center gap-16 px-4 pt-16 md:gap-24 md:px-10 md:pt-32 xl:gap-32 xl:p-32"
        >
          <AnimatedTitle
            title="Mes projets, un aperçu de mon travail"
            tag="h1"
          />

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
            aussi des expériences et explorations qui nourrissent ma créativité
            et mon savoir-faire.
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
            <Button>Je planifie un appel gratuit</Button>
          </motion.div>
        </section>
        <section className="flex flex-col gap-8 px-4 pt-16 md:gap-24 md:px-10 md:pt-32 xl:gap-16 xl:p-32">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
      </main>
    </MainLayout>
  );
}
