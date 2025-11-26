import { motion } from "motion/react";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/Button";
import CTACard from "../components/CTACard";
import DegreeCard from "../components/DegreeCard";
import TechItem from "../components/techItem";
import MainLayout from "../layouts/MainLayout";

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

  return (
    <MainLayout>
      <main>
        <section
          id="hero"
          className="bg-pattern-straight flex flex-col items-center gap-16 px-4 pt-16 md:gap-24 md:px-10 md:pt-32 xl:gap-32 xl:p-32"
        >
          <AnimatedTitle title={"Développeur web fullstack"} tag="h1" />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-primary-200 text-center text-xl leading-relaxed lg:text-2xl"
          >
            Passionné par la création de projets qui ont du sens !
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
          <div className="flex w-full flex-col items-center gap-16 pt-16 md:gap-24 xl:gap-32">
            <motion.p
              initial={{ opacity: 0, y: 40, scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-center text-xl leading-loose lg:text-2xl"
            >
              Du concept initial au produit opérationnel, je combine{" "}
              <span className="font-semibold">technologie</span> et{" "}
              <span className="font-semibold">design</span> pour bâtir des
              expériences esthétiques, solides et pensées pour durer, au service
              de vos besoins d&apos;aujourd&apos;hui et de demain.
            </motion.p>
            <div className="flex flex-col gap-16 lg:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-10 lg:w-5/12"
              >
                <h2 className="font-title text-center text-3xl md:text-4xl lg:text-left xl:text-5xl">
                  Domaines d&apos;expertises
                </h2>
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {techStack.map((item, index) => (
                    <TechItem item={item} key={index} />
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-10 lg:w-7/12"
              >
                <h2 className="font-title text-center text-3xl md:text-4xl lg:text-right xl:text-5xl">
                  Dernières mises à jours
                </h2>
                <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
                  {degrees.map((item, index) => (
                    <DegreeCard item={item} key={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="approach"
          className="flex flex-col items-center gap-16 px-4 pt-16 md:gap-24 md:px-10 xl:gap-32 xl:p-32"
        >
          <AnimatedTitle
            title="Mon approche : simple, efficace, personnalisée"
            tag="h2"
          />
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center leading-loose font-extralight italic 2xl:text-xl"
          >
            Disponible et réactif quand vous en avez besoin, je m&apos;adapte à
            vos priorités tout au long du projet. Du premier atelier à la mise
            en production, chaque étape est maîtrisée
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center text-xl leading-loose lg:text-left 2xl:text-2xl"
          >
            Je vous propose bien plus qu&apos;un simple développement technique.
            Vous bénéficiez d&apos;un{" "}
            <span className="font-semibold">accompagnement personnalisé</span>,
            avec une écoute attentive et professionnelle de vos besoins, pour
            créer un outil{" "}
            <span className="font-semibold">réellement utile</span> et{" "}
            <span className="font-semibold">adapté</span> à votre
            fonctionnement.
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            viewport={{ once: true }}
            className="text-center text-xl leading-loose lg:text-left 2xl:text-2xl"
          >
            Je suis profondément convaincu que la réussite d&apos;un projet
            repose avant tout sur une{" "}
            <span className="font-semibold">bonne communication</span>,
            c&apos;est pourquoi je favorise les échanges{" "}
            <span className="font-semibold">simples</span>,{" "}
            <span className="font-semibold">clairs</span> et{" "}
            <span className="font-semibold">transparents</span>.
          </motion.p>
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            className="flex w-full flex-wrap justify-center gap-2 md:justify-evenly"
          >
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              viewport={{ once: true }}
              className="border-primary-600 rounded-xl border p-4"
            >
              <p className="text-center leading-loose font-semibold 2xl:text-2xl">
                Développement sur mesure
              </p>
            </motion.article>
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              viewport={{ once: true }}
              className="border-primary-600 rounded-xl border p-4"
            >
              <p className="text-center leading-loose font-semibold 2xl:text-2xl">
                Tests rigoureux
              </p>
            </motion.article>
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              viewport={{ once: true }}
              className="border-primary-600 rounded-xl border p-4"
            >
              <p className="text-center leading-loose font-semibold 2xl:text-2xl">
                Déploiement fiable et accompagné
              </p>
            </motion.article>
          </motion.div>
        </motion.section>
        <section id="cta" className="px-4 pt-16 pb-24 xl:p-32">
          <CTACard />
        </section>
      </main>
    </MainLayout>
  );
}
