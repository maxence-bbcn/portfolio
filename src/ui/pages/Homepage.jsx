import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/Button";
import CollaspibleQuestion from "../components/CollaspsibleQuestion";
import CTACard from "../components/CTACard";
import TestimonialCard from "../components/TestimonialCard";

const BrandRow = lazy(() => import("../components/BrandRow"));

const statistics = [
  {
    value: 258,
    unit: "h",
    catchphrase: "Perdues par an",
    content:
      "Environ 258 heures par an sont consacrées à des tâches répétitives ou à des réunions inutiles...",
    source: "HRM",
    sourceLink:
      "https://www.hrmonline.com.au/section/featured/average-worker-spends-58-of-their-time-on-work-about-work/",
  },
  {
    value: 58,
    unit: "%",
    catchphrase: 'Du temps passé à du "work about work"',
    content:
      "Les employés passent 58% de leur temps à des activités de coordination, d'e-mails, de réunions ou de gestion de tâches administratives...",
    source: "Asana / Anatomy of work 2023",
    sourceLink:
      "https://investors.asana.com/news-releases/news-release-details/asana-anatomy-work-global-index-2023-smart-collaboration-and",
  },
  {
    value: 75,
    unit: "%",
    catchphrase: "Des réunions considérées comme inutiles",
    content:
      "Près de trois quarts des réunions sont considérées comme inefficaces, souvent perçues comme du temps perdu…",
    source: "Atlassian",
    sourceLink:
      "https://fortune.com/2024/03/21/meetings-productivity-ineffective-atlassian-report/",
  },
];

const testimonials = [
  {
    author: "Daniel Duserre",
    role: "Responsable de la sécurité du système d'information, Responsable de la production, Relais DPO des Hôpitaux Champagne Sud",
    catchphrase:
      "J'ai eu l'opportunité de collaborer avec Monsieur BARBANÇON dans le cadre d'un projet stratégique visant à concevoir un portail patient offrant une vision à 360° du parcours de soins sur le territoire. Son expertise technique et sa capacité à comprendre les enjeux métiers ont été déterminantes pour l'avancement de ce projet.",
    content: [
      { type: "text", text: "Monsieur BARBANÇON se distingue par :" },
      {
        type: "list",
        text: [
          "Une forte compétence en conception et développement : il a contribué à imaginer et structurer un portail ergonomique et performant, répondant aux besoins des utilisateurs.",
          "La mise en place de solutions fiables et sécurisées : notamment pour des appels contextuels, garantissant la confidentialité et la robustesse des échanges.",
          "Un excellent esprit collaboratif : il a su travailler en étroite coordination avec nos équipes, en apportant des solutions pragmatiques et innovantes.",
        ],
      },
      {
        type: "text",
        text: "Grâce à son professionnalisme et son engagement, le projet a atteint ses objectifs avec succès. Je recommande vivement Monsieur BARBANÇON pour tout projet nécessitant une expertise technique pointue, une forte exigence en matière de sécurité et une capacité à délivrer rapidement des solutions fiables et performantes.",
      },
    ],
    logo: "/assets/logos/cht-colored.svg",
  },
  {
    author: "Michaël Diot",
    role: "Chef d'entreprise",
    catchphrase: "Je recommande vivement !",
    content: [
      {
        type: "text",
        text: "Un montage du site complet de A à Z avec un suivi impeccable.",
      },
      {
        type: "text",
        text: "Un accompagnement dans votre projet personnalisé, une personne à l'écoute, un SAV réactif et enfin la possibilité d'avoir un site sur mesure !",
      },
      {
        type: "text",
        text: "Un professionnel qui se plie en 4 pour donner le meilleur possible !",
      },
    ],
    logo: "/assets/logos/univers-kids-colored.svg",
  },
];

export default function Homepage() {
  const openCal = () =>
    window.open("https://cal.com/maxence-barbancon-w75rjo", "_blank").focus();

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialContainerRef = useRef(null);
  const x = useMotionValue(0);

  const handleNextTestimonial = () => {
    setActiveTestimonial((i) => Math.min(testimonials.length - 1, i + 1));
  };

  const handlePreviousTestimonial = () => {
    setActiveTestimonial((i) => Math.max(0, i - 1));
  };

  useEffect(() => {
    if (testimonialContainerRef.current) {
      const containerWidth = testimonialContainerRef.current.offsetWidth;
      const gap = 32 * 4;
      const targetX =
        -activeTestimonial * containerWidth - gap * activeTestimonial;
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [activeTestimonial, x]);

  return (
    <main>
      <section
        id="hero"
        className="mt-16 flex flex-col items-center gap-16 px-6 pb-16 md:mt-32 md:gap-24 md:px-10 xl:mx-auto xl:w-2/3 xl:gap-32 xl:px-16"
      >
        <AnimatedTitle
          title="Simplifiez vos workflows avec des outils conçus pour votre métier"
          tag="h1"
          ascentWordPos={[8, 9]}
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
          Optimisez chaque étape de votre activité grâce à des solutions sur
          mesure, pensées et développées pour vous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Button onClick={openCal}> Je planifie un appel gratuit</Button>
        </motion.div>
      </section>
      <section
        id="brands"
        className="flex flex-col items-center gap-3 xl:px-32 xl:pb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.9 }}
          className="text-primary-200 font-extralight italic"
        >
          Ils m&apos;ont fait confiance !
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative w-full overflow-hidden lg:w-11/12"
        >
          <Suspense fallback={null}>
            <BrandRow />
          </Suspense>
        </motion.div>
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
        id="problem"
        className="flex flex-col items-center gap-16 px-4 py-16 md:px-10 md:py-24 xl:mx-auto xl:w-11/12 xl:p-32"
      >
        <AnimatedTitle
          title="Des outils génériques qui ne comprennent pas vos besoins"
          tag="h2"
        />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40, scale: 1.1 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
          className="text-center leading-loose font-extralight italic md:text-lg xl:mb-10 xl:text-xl"
        >
          Les logiciels standards que vous utilisez ne sont pas adaptés à vos
          méthodes de travail ? Ils vous imposent des contraintes ? Vous
          obligent à trouver des solutions détournées et rendent chaque tâche
          plus complexe qu&apos;elle ne devrait l&apos;être ?
        </motion.p>
        <div className="border-primary-gradient relative overflow-x-visible rounded-2xl p-px">
          <div className="bg-primary-bg relative flex w-full flex-col rounded-2xl max-md:overflow-hidden md:flex-row max-md:landscape:flex-row">
            <div className="relative rounded-2xl md:overflow-hidden max-md:landscape:overflow-hidden">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="px-8 pt-6 text-xl leading-loose md:w-3/5 md:pb-6 md:text-base lg:w-2/3 lg:p-16 lg:text-lg 2xl:text-2xl max-md:landscape:w-3/5 max-md:landscape:pb-6 max-md:landscape:text-base"
              >
                Vos équipes
                <span className="inline-block font-semibold">
                  &nbsp;perdent en efficacité
                </span>
                , l&apos;information circule mal entre les services, et
                <span className="inline-block font-semibold">
                  &nbsp;les tâches répétitives s&apos;accumulent.
                </span>
                &nbsp;Sans outil adapté, la centralisation des données devient
                complexe,
                <span className="inline-block font-semibold">
                  les erreurs se multiplient
                </span>
                , et vos collaborateurs passent plus de temps à gérer des
                contraintes qu&apos;à
                <span className="inline-block font-semibold">
                  &nbsp;créer de la valeur
                </span>
                .
              </motion.p>
            </div>
            <span className="relative h-70 overflow-x-hidden overflow-y-clip md:h-0 xl:h-0 max-md:landscape:h-0"></span>
            <div className="mask-notifications">
              <img
                srcSet="/assets/images/Iphone-notifications-400w.webp 400w, /assets/images/Iphone-notifications-600w.webp 600w, /assets/images/Iphone-notifications-800w.webp 800w, /assets/images/Iphone-notifications-1000w.webp 1000w, /assets/images/Iphone-notifications-1200w.webp 1200w, /assets/images/Iphone-notifications-1600w.webp 1600w"
                sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
                src="/assets/images/Iphone-notifications.webp"
                alt="Illustration d'un téléphone saturé par des notifications"
                width="1853"
                height="2256"
                loading="lazy"
                className="max-xs:w-full absolute w-full max-w-none max-md:landscape:w-full"
              />
            </div>
          </div>
        </div>
      </motion.section>
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
        viewport={{ once: true, amount: 0.18 }}
        id="agitate"
        className="flex flex-col gap-16 px-4 py-16 md:px-10 md:py-24 xl:mb-32 xl:gap-32 xl:p-32"
      >
        <AnimatedTitle
          title="Ces workflows inefficaces vous coûtent plus cher que vous ne le pensez"
          tag="h2"
        />
        <div className="flex flex-col items-center gap-16">
          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="border-primary-gradient w-full rounded-2xl p-px sm:max-w-2/3 md:w-3/5"
              >
                <div className="bg-primary-bg flex h-full w-full flex-col items-center gap-4 rounded-2xl px-6 pt-6 pb-2 md:justify-between">
                  <div className="flex flex-col items-center gap-0">
                    <AnimatedNumber value={stat.value} unit={stat.unit} />
                    <p className="text-sm">{stat.catchphrase}</p>
                  </div>
                  <p className="text-sm font-extralight italic">
                    {stat.content}
                  </p>
                  <a
                    href={stat.sourceLink}
                    target="_blank"
                    className="text-2xs text-primary-200 self-end underline decoration-dotted"
                    rel="noreferrer"
                  >
                    {stat.source}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Button onClick={openCal}>J&apos;améliore mes workflows</Button>
          </motion.div>
        </div>
      </motion.section>
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
        viewport={{ once: true, amount: 0.05 }}
        id="solution"
        className="flex flex-col gap-16 px-4 pt-16 md:px-10 md:py-24 xl:px-32 xl:py-0"
      >
        <AnimatedTitle
          title="Des applications web sur mesure, pensées pour vous"
          tag="h2"
        />
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40, scale: 1.1 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
          className="text-center leading-loose font-extralight italic md:text-lg xl:text-xl"
        >
          Je conçois des applications web sur mesure, parfaitement intégrées à
          vos outils et processus existants. Que vous cherchiez à automatiser
          des tâches, centraliser vos données ou structurer vos workflows,
          chaque solution est pensée autour de vos besoins réels.
        </motion.p>
        <div className="flex grid-cols-12 grid-rows-12 flex-col gap-10 md:grid md:items-stretch md:gap-3 max-md:landscape:grid max-md:landscape:items-stretch max-md:landscape:gap-3">
          {/* Carte accompagnement */}
          <div className="border-primary-800 relative flex w-full flex-col overflow-x-visible rounded-2xl border pt-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-span-4 md:col-start-1 md:row-span-7 md:row-start-1 max-md:landscape:col-span-4 max-md:landscape:col-start-1 max-md:landscape:row-span-7 max-md:landscape:row-start-1">
            <div className="flex flex-col gap-8 px-6">
              <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                Un accompagnement sur mesure, <strong>du début à la fin</strong>
              </h3>
              <p className="text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed max-md:landscape:text-sm">
                Écoute, pédagogie et réactivité : vous avancez en confiance,
                avec un interlocuteur unique qui comprend vos enjeux et reste
                disponible.
              </p>
            </div>
            <span className="relative h-70 overflow-x-hidden overflow-y-clip md:h-0 xl:h-0 max-md:landscape:h-0"></span>
            <div className="mask-sms">
              <img
                srcSet="/assets/images/iPhone-texts-400w.webp 400w, /assets/images/iPhone-texts-600w.webp 600w, /assets/images/iPhone-texts-800w.webp 800w, /assets/images/iPhone-texts-1000w.webp 1000w, /assets/images/iPhone-texts-1200w.webp 1200w, /assets/images/iPhone-texts-1600w.webp 1600w"
                sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                src="/assets/images/iPhone-texts-400w.webp"
                alt="Illustration d'un échange de sms"
                loading="lazy"
                className="absolute top-0 left-0 w-full max-w-none md:top-10 md:left-7/12 md:w-5/9 lg:w-1/2 xl:top-12 xl:left-0 xl:w-[130%] 2xl:w-[110%] max-md:landscape:top-10 max-md:landscape:-left-15 max-md:landscape:w-[170%]"
              />
            </div>
          </div>
          {/* Carte interface */}
          <div className="border-primary-800 relative flex w-full flex-col gap-2 overflow-x-visible rounded-2xl border pt-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-start-5 md:col-end-13 md:row-span-3 md:row-start-1 md:flex-row max-md:landscape:col-start-5 max-md:landscape:col-end-13 max-md:landscape:row-span-3 max-md:landscape:row-start-1 max-md:landscape:flex-row">
            <div className="flex flex-col gap-8 px-6 md:w-2/3 md:py-2 lg:w-3/5 lg:gap-6 max-md:landscape:w-2/3 max-md:landscape:py-2">
              <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                Une interface pensée pour <strong>vos utilisateurs</strong>
              </h3>
              <p className="text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed max-md:landscape:text-sm">
                L&apos;interface est simple à prendre en main, agréable à
                utiliser au quotidien, et parfaitement adaptée à vos usages
                métier.
              </p>
              <Button onClick={openCal}>Planifiez un appel</Button>
            </div>
            <div className="relative h-64 overflow-visible md:h-full md:w-1/3 lg:w-2/5 max-md:landscape:h-full max-md:landscape:w-1/3">
              <img
                srcSet="/assets/images/ui-400w.webp 400w, /assets/images/ui-600w.webp 600w, /assets/images/ui-800w.webp 800w, /assets/images/ui-1000w.webp 1000w, /assets/images/ui-1200w.webp 1200w"
                sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                src="/assets/images/ui-400w.webp"
                alt="Illustration d'une interface utilisateur"
                loading="lazy"
                className="1-2xl:w-[110%] 1-2xl:-top-5 absolute left-1/10 w-5/6 max-w-none md:-left-2/10 md:w-[150%] lg:-top-10 lg:w-[130%] xl:-top-8 xl:left-0 xl:w-[120%] 2xl:w-11/12 max-md:landscape:-left-2/10 max-md:landscape:w-[150%]"
              />
            </div>
          </div>
          {/* Carte mise en prod */}
          <div className="border-primary-800 flex w-full flex-col items-stretch gap-2 overflow-hidden rounded-2xl border py-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-start-5 md:col-end-9 md:row-span-4 md:row-start-4 max-md:landscape:col-start-5 max-md:landscape:col-end-9 max-md:landscape:row-span-4 max-md:landscape:row-start-4">
            <div className="relative flex flex-col gap-8 px-6 md:gap-4 lg:gap-8 max-md:landscape:gap-4">
              <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                Mise en ligne <strong>rapide</strong>, sans compromis sur la{" "}
                <strong>qualité</strong>
              </h3>
              <div className="-gap-2 flex h-fit flex-row">
                <p className="w-3/4 text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed max-md:landscape:text-sm">
                  Vos outils sont opérationnels rapidement pour que vous
                  puissiez gagner en efficacité sans attendre.
                </p>
                <div className="relative h-60 w-1/4 md:h-fit lg:w-1/4 max-md:landscape:h-fit">
                  <img
                    srcSet="/assets/images/zap-400w.webp 400w, /assets/images/zap-600w.webp 600w, /assets/images/zap-800w.webp 800w, /assets/images/zap-1000w.webp 1000w, /assets/images/zap-1200w.webp 1200w"
                    sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                    src="/assets/images/zap-400w.webp"
                    alt="Illustration d'un éclair"
                    loading="lazy"
                    className="1-2xl:-top-20 1-2xl:-left-44 1-2xl:w-[450%] absolute -top-6 -right-20 w-80 max-w-none md:top-0 md:-left-24 md:w-60 lg:-top-10 lg:-left-30 lg:w-76 xl:-top-10 xl:-left-30 xl:w-72 2xl:-top-32 2xl:-left-48 2xl:w-[400%] max-md:landscape:top-0 max-md:landscape:w-60"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Carte évolutivité */}
          <div className="border-primary-800 flex w-full flex-col gap-2 overflow-hidden rounded-2xl border pt-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-start-9 md:col-end-13 md:row-span-4 md:row-start-4 max-md:landscape:col-start-9 max-md:landscape:col-end-13 max-md:landscape:row-span-4 max-md:landscape:row-start-4">
            <div className="relative flex h-full flex-col gap-8">
              <h3 className="pr-6 pl-6 text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                Une solution pensée pour <strong>grandir avec vous</strong>
              </h3>
              <div className="flex h-full flex-col">
                <p className="w-5/6 pr-6 pl-6 text-lg leading-normal font-extralight italic md:w-full md:text-sm lg:text-base xl:w-3/4 xl:text-lg xl:leading-relaxed max-md:landscape:w-full max-md:landscape:text-sm">
                  Architecture modulaire, fonctionnalités extensibles : votre
                  outil s&apos;adapte à vos futurs besoins.
                </p>
                <div className="relative h-full w-full xl:h-0">
                  <img
                    srcSet="/assets/images/graph-400w.webp 400w, /assets/images/graph-600w.webp 600w, /assets/images/graph-800w.webp 800w, /assets/images/graph-1000w.webp 1000w"
                    sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                    src="/assets/images/graph-400w.webp"
                    alt="Illustration d'une courbe qui monte"
                    loading="lazy"
                    className="ml-auto w-3/4 max-w-none md:ml-4 md:w-full lg:ml-8 xl:absolute xl:right-0 xl:w-3/4 max-md:landscape:mt-8 max-md:landscape:ml-4 max-md:landscape:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Carte compatibilité */}
          <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-span-6 md:col-start-7 md:row-start-8 md:row-end-12 md:items-start lg:row-end-11 max-md:landscape:col-span-6 max-md:landscape:col-start-7 max-md:landscape:row-start-8 max-md:landscape:row-end-11">
            <h3 className="text-2xl font-medium md:text-lg lg:w-1/2 xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
              <strong>Compatible</strong> avec vos outils existants
            </h3>
            <p className="text-lg leading-normal font-extralight italic md:text-sm lg:w-1/2 xl:text-lg xl:leading-relaxed max-md:landscape:text-sm">
              Connexions possibles avec vos logiciels, API ou plateformes déjà
              en place.
            </p>
            <span className="relative h-30 overflow-x-hidden overflow-y-clip md:h-0 max-md:landscape:h-0"></span>
            <div className="mask-apps">
              <img
                srcSet="/assets/images/apps-400w.webp 400w, /assets/images/apps-600w.webp 600w, /assets/images/apps-800w.webp 800w, /assets/images/apps-1000w.webp 1000w, /assets/images/apps-1200w.webp 1200w"
                sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                src="/assets/images/apps-400w.webp"
                alt="Logos de plusieurs outils liés par des cercles concentriques"
                loading="lazy"
                className="mx-auto w-3/4 max-w-none lg:w-7/12 xl:w-1/2"
              />
            </div>
          </div>
          {/* Carte solution sur mesure */}
          <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 transition-colors duration-300 ease-in-out hover:bg-indigo-900/10 md:col-span-6 md:col-start-1 md:row-start-8 md:row-end-12 lg:row-end-11 max-md:landscape:col-span-6 max-md:landscape:col-start-1 max-md:landscape:row-start-8 max-md:landscape:row-end-11">
            <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
              Une solution vraiment faire <strong>pour vous</strong>
            </h3>
            <p className="text-lg leading-normal font-extralight italic md:text-sm lg:w-3/4 xl:w-2/3 xl:text-lg xl:leading-relaxed 2xl:w-1/2 max-md:landscape:text-sm">
              Chaque projet part de vos contraintes réelles : vous obtenez une
              solution unique, conçue pour fonctionner dans votre contexte.
            </p>
            <span className="relative h-30 overflow-x-hidden overflow-y-clip md:h-0 max-md:landscape:h-0"></span>
            <div className="mask-fingerprint">
              <img
                srcSet="/assets/images/fingerprint-400w.webp 400w, /assets/images/fingerprint-600w.webp 600w, /assets/images/fingerprint-800w.webp 800w, /assets/images/fingerprint-1000w.webp 1000w, /assets/images/fingerprint-1200w.webp 1200w"
                sizes="(max-width: 639px) 100vw,(max-width: 767px) 80vw,(max-width: 1023px) 70vw,(max-width: 1279px) 60vw,(max-width: 1535px) 50vw,50vw"
                src="/assets/images/fingerprint-400w.webp"
                alt="Illustration d'une emprunte digitale"
                loading="lazy"
                className="w-full max-w-none lg:w-4/5 xl:w-2/3 2xl:w-3/5 max-md:landscape:w-4/5"
              />
            </div>
          </div>
        </div>
      </motion.section>
      {testimonials.length > 0 && (
        <motion.section
          variants={{
            hidden: {},
            visible: {
              transition: {
                // staggerChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="testimonials"
          className="bg-pattern-straight flex flex-col items-center gap-16 px-4 py-16 md:px-10 md:py-24 xl:p-32 xl:px-32"
        >
          <AnimatedTitle
            title="Ils ont gagné en efficacité grâce à des solutions pensées pour eux"
            tag="h2"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-row flex-wrap justify-center gap-10 md:hidden xl:gap-10">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
            <div className="hidden w-full items-center justify-center md:flex md:gap-6 lg:gap-12">
              <button
                className="z-40 h-fit cursor-pointer"
                onClick={handlePreviousTestimonial}
              >
                <img
                  src="/assets/icons/Chevron bottom.svg"
                  width={32}
                  className="rotate-90"
                />
              </button>
              <div
                className="relative max-w-9/12"
                ref={testimonialContainerRef}
              >
                <motion.div
                  className="flex w-full items-center gap-32"
                  style={{ x }}
                >
                  {testimonials.map((item) => (
                    <TestimonialCard testimonial={item} key={item.author} />
                  ))}
                </motion.div>

                <div className="absolute -bottom-8 flex w-full justify-center gap-4">
                  {testimonials.map((item, index) => (
                    <span
                      onClick={() => setActiveTestimonial(index)}
                      key={index}
                      className={`${index === activeTestimonial ? "w-6" : "w-2"} h-2 cursor-pointer rounded-full bg-white transition-all duration-300`}
                    ></span>
                  ))}
                </div>
              </div>
              <button
                className="z-40 h-fit cursor-pointer"
                onClick={handleNextTestimonial}
              >
                <img
                  src="/assets/icons/Chevron bottom.svg"
                  width={32}
                  className="-rotate-90"
                />
              </button>
            </div>
          </motion.div>
        </motion.section>
      )}
      <section id="cta" className="px-4 py-16 xl:p-32">
        <CTACard />
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
        viewport={{ once: true, amount: 0.1 }}
        id="faq"
        className="flex flex-col gap-16 px-4 py-16 xl:p-32"
      >
        <AnimatedTitle title="Questions fréquentes" tag="h2" />
        <div className="flex flex-col self-center xl:w-5/6">
          <CollaspibleQuestion
            question={
              "1. Combien de temps faut-il pour développer un outil sur mesure ?"
            }
            answer={
              "Tout dépend de la complexité : quelques semaines pour un outil simple, plusieurs mois pour un projet avancé. Je vous donne toujours une estimation claire après avoir défini vos besoins."
            }
          />
          <CollaspibleQuestion
            question={
              "2. Est-ce que vous pouvez intégrer l'outil avec les logiciels que nous utilisons déjà ?"
            }
            answer={
              "Oui ! CRM, ERP, messageries… Je fais en sorte que votre nouvel outil s'intègre parfaitement à votre environnement actuel."
            }
          />
          <CollaspibleQuestion
            question={
              "3. Je n'ai pas de cahier des charges précis, est-ce un problème ?"
            }
            answer={
              "Pas du tout. Je vous aide à clarifier vos besoins et à définir les fonctionnalités clés avant de commencer le développement."
            }
          />
          <CollaspibleQuestion
            question={
              "4. Quel budget faut-il prévoir pour un projet comme le mien ?"
            }
            answer={
              "Le budget varie selon la complexité et le périmètre. Après un premier échange, je vous fournis une estimation claire et adaptée à vos objectifs."
            }
          />
          <CollaspibleQuestion
            question={
              "5. Et si j'ai besoin de faire évoluer l'outil plus tard ?"
            }
            answer={
              "Mes solutions sont conçues pour grandir avec vous : nouvelles fonctionnalités, adaptations ou intégrations futures, j'assure un suivi pour que l'outil reste performant et pertinent."
            }
          />
        </div>
      </motion.section>
    </main>
  );
}
