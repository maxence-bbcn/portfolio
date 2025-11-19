import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import AppsAsset from "../assets/images/apps circles.png";
import FingerprintAsset from "../assets/images/fingerprint.png";
import GraphAsset from "../assets/images/graph.png";
import IPhoneAsset from "../assets/images/Iphone - notifications.png";
import TextsAsset from "../assets/images/Iphone - texts.png";
import UiModsAsset from "../assets/images/ui mods.png";
import ZapAsset from "../assets/images/zap.png";
import AnimatedNumber from "../components/AnimatedNumber";
import { Button } from "../components/Button";
import CollaspibleQuestion from "../components/CollaspsibleQuestion";
import CTACard from "../components/CTACard";
import TestimonialCard from "../components/TestimonialCard";
import MainLayout from "../layouts/MainLayout";

export default function Homepage() {
  // const title = [
  //   ["Simplifiez", "vos", "workflows"],
  //   ["avec", "des", "outils"],
  //   ["conçus", "pour", "votre", "métier"],
  // ];

  const title =
    "Simplifiez vos workflows avec des outils conçus pour votre métier";
  const words = title.split(" ");

  const brandLogos = [
    {
      logo: "src/ui/assets/logos/mazette.svg",
      alt: "Logo de l'entreprise Mazette",
      style: "h-full w-96 md:min-w-[10rem]",
    },
    {
      logo: "src/ui/assets/logos/cht.svg",
      alt: "Logo du centre hospitalier de Troyes",
      style: "h-full w-96 md:min-w-[4rem]",
    },
    {
      logo: "src/ui/assets/logos/univers-kids.svg",
      alt: "Logo de l'entreprise Univers Kids",
      style: "h-3/4 w-96 md:min-w-[6rem]",
    },
    {
      logo: "src/ui/assets/logos/deflorenne-location.svg",
      alt: "Logo de l'entreprise Delorenne Location",
      style: "h-full w-96 md:min-w-[6rem]",
    },
    {
      logo: "src/ui/assets/logos/alexandre-sebille.svg",
      alt: "Logo de l'entreprise Alexandre Sebille",
      style: "h-full w-48",
    },
  ];

  const logosList = [
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
  ];

  const animatedLogoX = useMotionValue(0);
  const brandRowContainerRef = useRef(null);
  const brandContentWidth = useRef(0);

  useEffect(() => {
    const container = brandRowContainerRef.current;
    brandContentWidth.current = container.scrollWidth / 2;

    const controls = animate(animatedLogoX, -brandContentWidth.current, {
      type: "tween",
      ease: "linear",
      duration: 60,
      repeat: Infinity,
      repeatType: "loop",
      onUpdate(value) {
        if (value <= -brandContentWidth.current) {
          animatedLogoX.set(0);
        }
      },
    });

    return () => controls.stop();
  }, [animatedLogoX]);

  const statistics = [
    {
      value: 26,
      catchphrase: "Du temps de travail perdu chaque jour",
      content:
        "Environ 26% du temps de travail quotidien est consacré à des tâches administratives inutiles ou redondantes...",
      source: "",
    },
    {
      value: 58,
      catchphrase: 'Du temps passé à du "work about work"',
      content:
        "Les employés passent 58% de leur temps à des activités de coordination, d'e-mails, de réunions ou de gestion de tâches administratives...",
      source: "",
    },
    {
      value: 30,
      catchphrase: "De perte de CA annuel",
      content:
        "Des processus inefficaces peuvent coûter entre 20 et 30% des revenus annuels d'une entreprise à cause de tâches redondantes...",
      source: "",
    },
  ];

  const testimonials = [
    {
      author: "Filler",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.",
      pp: "",
    },
    {
      author: "Filler",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.",
      pp: "",
    },
    {
      author: "Filler",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.",
      pp: "",
    },
  ];

  return (
    <MainLayout>
      <main>
        <section
          id="hero"
          className="mt-16 flex flex-col items-center gap-16 px-6 pb-16 md:mt-32 md:gap-24 md:px-10 xl:mx-auto xl:w-2/3 xl:gap-32 xl:px-16"
        >
          <motion.h1
            className="font-title w-full text-center text-5xl leading-tight xl:text-6xl"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.01,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className={`${(i === words.length - 1 || i === words.length - 2) && "font-ascent italic"} inline-block whitespace-nowrap`}
              >
                {word.split("").map((letter, j) => (
                  <motion.span
                    key={j}
                    className={`inline-block break-keep`}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
                &nbsp;
              </span>
            ))}
            {/* {title.map((line, i) => (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                    },
                  },
                }}
                key={i}
                className={`flex w-full flex-wrap items-center justify-center`}
              >
                {line.map((word, j) => (
                  <span
                    key={j}
                    className={`${i === title.length - 1 && (j === line.length - 1 || j === line.length - 2) && "font-ascent italic"} inline-block break-keep`}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </motion.p>
            ))} */}
          </motion.h1>
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
            <Button> Je planifie un appel gratuit</Button>
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
            <div className="brand-row-shadow">
              <motion.div
                className="flex w-full items-center gap-20 p-4 whitespace-nowrap md:gap-32 lg:gap-36"
                ref={brandRowContainerRef}
                style={{ x: animatedLogoX }}
              >
                {logosList.map((brand, index) => (
                  <img
                    key={index}
                    src={brand.logo}
                    alt={brand.alt}
                    className={`${brand.style}`}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="problem"
          className="flex flex-col items-center gap-16 px-4 py-16 md:px-10 md:py-24 xl:mx-auto xl:w-11/12 xl:p-32"
        >
          <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
            Des outils génériques qui ne comprennent pas vos besoins
          </h2>
          <p className="text-center leading-loose font-extralight italic md:text-lg xl:mb-10 xl:text-xl">
            Les logiciels standards que vous utilisez ne sont pas adaptés à vos
            méthodes de travail ? Ils vous imposent des contraintes ? Vous
            obligent à trouver des solutions détournées et rendent chaque tâche
            plus complexe qu&apos;elle ne devrait l&apos;être ?
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{
              opacity: [0, 1, 1, 1],
              y: [40, 0, 0, 0],
              scale: [0.8, 1.025, 1.025, 1],
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
              times: [0, 0.4, 0.7, 1],
            }}
            viewport={{ once: true, ease: "easeInOut", amount: 1 }}
            className="border-primary-gradient relative overflow-x-visible rounded-2xl p-px"
          >
            <div className="bg-primary-bg relative flex w-full flex-col rounded-2xl md:flex-row max-md:landscape:flex-row">
              <div className="relative overflow-hidden rounded-2xl">
                <p className="px-8 pt-6 text-xl leading-loose md:w-3/5 md:pb-6 md:text-base lg:w-2/3 lg:p-16 lg:text-lg 2xl:text-2xl max-md:landscape:w-3/5 max-md:landscape:pb-6 max-md:landscape:text-base">
                  Vos équipes
                  <span className="font-semibold"> perdent en efficacité</span>,
                  l&apos;information circule mal entre les services, et
                  <span className="font-semibold">
                    {" "}
                    les tâches répétitives s&apos;accumulent
                  </span>
                  . Sans outil adapté, la centralisation des données devient
                  complexe,
                  <span className="font-semibold">
                    les erreurs se multiplient
                  </span>
                  , et vos collaborateurs passent plus de temps à gérer des
                  contraintes qu&apos;à
                  <span className="font-semibold"> créer de la valeur</span>.
                </p>
                <motion.div
                  className="pointer-events-none absolute inset-0 top-0 left-0 rounded-2xl border"
                  initial={{ x: "0%", y: "0%" }}
                  whileInView={{
                    x: ["-150%", "150%"], // traverse en diagonale
                  }}
                  transition={{
                    delay: 0.7, // commence pendant la "pause"
                    duration: 1.1, // temps du passage
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.4) 50%, rgba(255,255,255,0) 100%)",
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
              <span className="relative h-70 overflow-x-hidden overflow-y-clip md:h-0 xl:h-0 max-md:landscape:h-0"></span>
              <div className="mask-notifications">
                <img
                  src={IPhoneAsset}
                  alt="Illustration d'un téléphone saturé par des notifications"
                  width="970px"
                  className="max-xs:w-full absolute w-full max-w-none max-md:landscape:w-full"
                />
              </div>
            </div>
          </motion.div>
        </section>
        <section
          id="agitate"
          className="flex flex-col gap-16 px-4 py-16 md:px-10 md:py-24 xl:gap-32 xl:p-32"
        >
          <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
            Ces workflows inefficaces vous coûtent plus cher que vous ne le
            pensez
          </h2>
          <div className="flex flex-col items-center gap-16">
            <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="border-primary-gradient w-full rounded-2xl p-px sm:max-w-2/3 md:w-3/5"
                >
                  <div className="bg-primary-bg flex h-full w-full flex-col items-center gap-4 rounded-2xl px-6 pt-6 pb-2 md:justify-evenly">
                    <div className="flex flex-col items-center gap-0">
                      <AnimatedNumber value={stat.value} />
                      <p className="text-sm">{stat.catchphrase}</p>
                    </div>
                    <p className="text-sm font-extralight italic">
                      {stat.content}
                    </p>
                    <a
                      href={stat.source}
                      className="text-2xs text-primary-200 self-end underline decoration-dotted"
                    >
                      Voir la source
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Button>J&apos;améliore mes workflows</Button>
          </div>
        </section>
        <section
          id="solution"
          className="flex flex-col gap-16 px-4 pt-16 md:px-10 md:py-24 xl:px-32 xl:pt-32"
        >
          <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
            Des applications web sur mesure, pensées pour vous
          </h2>
          <p className="text-center leading-loose font-extralight italic md:text-lg xl:text-xl">
            Je conçois des applications web sur mesure, parfaitement intégrées à
            vos outils et processus existants. Que vous cherchiez à automatiser
            des tâches, centraliser vos données ou structurer vos workflows,
            chaque solution est pensée autour de vos besoins réels.
          </p>
          <div className="flex grid-cols-12 grid-rows-12 flex-col gap-10 md:grid md:items-stretch md:gap-3 max-md:landscape:grid max-md:landscape:items-stretch max-md:landscape:gap-3">
            {/* Carte accompagnement */}
            <div className="border-primary-800 relative flex w-full flex-col overflow-x-visible rounded-2xl border pt-6 md:col-span-4 md:col-start-1 md:row-span-7 md:row-start-1 max-md:landscape:col-span-4 max-md:landscape:col-start-1 max-md:landscape:row-span-7 max-md:landscape:row-start-1">
              <div className="flex flex-col gap-8 px-6">
                <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                  Un accompagnement sur-mesure,{" "}
                  <strong>du début à la fin</strong>
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
                  src={TextsAsset}
                  alt="Illustration d'un échange de sms"
                  width="598px"
                  className="absolute top-0 left-0 w-full max-w-none md:top-10 md:left-7/12 md:w-5/9 lg:w-1/2 xl:top-12 xl:left-0 xl:w-[130%] 2xl:w-[110%] max-md:landscape:top-10 max-md:landscape:-left-15 max-md:landscape:w-[170%]"
                />
              </div>
            </div>
            {/* Carte interface */}
            <div className="border-primary-800 relative flex w-full flex-col gap-2 overflow-x-visible rounded-2xl border pt-6 md:col-start-5 md:col-end-13 md:row-span-3 md:row-start-1 md:flex-row max-md:landscape:col-start-5 max-md:landscape:col-end-13 max-md:landscape:row-span-3 max-md:landscape:row-start-1 max-md:landscape:flex-row">
              <div className="flex flex-col gap-8 px-6 md:w-2/3 md:py-2 lg:w-3/5 lg:gap-6 max-md:landscape:w-2/3 max-md:landscape:py-2">
                <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                  Une interface pensée pour <strong>vos utilisateurs</strong>
                </h3>
                <p className="text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed max-md:landscape:text-sm">
                  L&apos;interface est simple à prendre en main, agréable à
                  utiliser au quotidien, et parfaitement adaptée à vos usages
                  métier.
                </p>
                <Button>Planifiez un appel</Button>
              </div>
              <div className="relative h-64 overflow-visible md:h-full md:w-1/3 lg:w-2/5 max-md:landscape:h-full max-md:landscape:w-1/3">
                <img
                  src={UiModsAsset}
                  alt="Illusatration d'une interface utilisateur"
                  className="1-2xl:w-[110%] 1-2xl:-top-5 absolute left-1/10 w-5/6 max-w-none md:-left-2/10 md:w-[150%] lg:-top-10 lg:w-[130%] xl:-top-8 xl:left-0 xl:w-[120%] 2xl:w-11/12 max-md:landscape:-left-2/10 max-md:landscape:w-[150%]"
                />
              </div>
            </div>
            {/* Carte mise en prod */}
            <div className="border-primary-800 flex w-full flex-col items-stretch gap-2 overflow-hidden rounded-2xl border py-6 md:col-start-5 md:col-end-9 md:row-span-4 md:row-start-4 max-md:landscape:col-start-5 max-md:landscape:col-end-9 max-md:landscape:row-span-4 max-md:landscape:row-start-4">
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
                      src={ZapAsset}
                      alt="Illustration d'un éclair"
                      className="1-2xl:-top-20 1-2xl:-left-44 1-2xl:w-[450%] absolute -top-6 -right-20 w-80 max-w-none md:top-0 md:-left-24 md:w-60 lg:-top-10 lg:-left-30 lg:w-76 xl:-top-10 xl:-left-30 xl:w-72 2xl:-top-32 2xl:-left-48 2xl:w-[400%] max-md:landscape:top-0 max-md:landscape:w-60"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Carte évolutivité */}
            <div className="border-primary-800 flex w-full flex-col gap-2 overflow-hidden rounded-2xl border pt-6 md:col-start-9 md:col-end-13 md:row-span-4 md:row-start-4 max-md:landscape:col-start-9 max-md:landscape:col-end-13 max-md:landscape:row-span-4 max-md:landscape:row-start-4">
              <div className="relative flex h-full flex-col gap-8">
                <h3 className="pr-6 pl-6 text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl max-md:landscape:text-lg">
                  Une solution pensée pour <strong>grandir avec vous</strong>
                </h3>
                <div className="flex h-full flex-col">
                  <p className="w-5/6 pr-6 pl-6 text-lg leading-normal font-extralight italic md:w-full md:text-sm lg:text-base xl:w-3/4 xl:text-lg xl:leading-relaxed max-md:landscape:w-full max-md:landscape:text-sm">
                    Architecture modulaire, fonctionnalités extensibles, votre
                    outil s&apos;adapte à vos futurs besoins.
                  </p>
                  <div className="relative h-full w-full xl:h-0">
                    <img
                      src={GraphAsset}
                      alt="Illustration d'une courbe qui monte"
                      className="ml-auto w-3/4 max-w-none md:ml-4 md:w-full lg:ml-8 xl:absolute xl:-top-6 xl:right-0 xl:w-3/4 2xl:-top-12 max-md:landscape:mt-8 max-md:landscape:ml-4 max-md:landscape:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Carte compatibilité */}
            <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 md:col-span-6 md:col-start-7 md:row-start-8 md:row-end-12 md:items-start lg:row-end-11 max-md:landscape:col-span-6 max-md:landscape:col-start-7 max-md:landscape:row-start-8 max-md:landscape:row-end-11">
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
                  src={AppsAsset}
                  alt="Logos de plusieurs outils liés par des cercles concentriques"
                  className="mx-auto w-3/4 max-w-none lg:w-7/12 xl:w-1/2"
                />
              </div>
            </div>
            {/* Carte solution sur mesure */}
            <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 md:col-span-6 md:col-start-1 md:row-start-8 md:row-end-12 lg:row-end-11 max-md:landscape:col-span-6 max-md:landscape:col-start-1 max-md:landscape:row-start-8 max-md:landscape:row-end-11">
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
                  src={FingerprintAsset}
                  alt="Illustration d'une emprunte digitale"
                  className="w-full max-w-none lg:w-4/5 xl:w-2/3 2xl:w-3/5 max-md:landscape:w-4/5"
                />
              </div>
            </div>
          </div>
        </section>
        {testimonials.length > 0 && (
          <section
            id="testimonials"
            className="bg-pattern-straight flex flex-col gap-16 px-4 py-16 md:px-10 md:py-24 xl:p-32 xl:px-32"
          >
            <h2 className="font-title text-center text-3xl xl:text-5xl">
              Ils ont gagné en efficacité grâce à des solutions pensées pour eux
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-10 xl:gap-10">
              {testimonials.map(({ content, author, pp }, index) => (
                <TestimonialCard
                  key={index}
                  content={content}
                  author={author}
                  pp={pp}
                />
              ))}
            </div>
          </section>
        )}
        <section id="cta" className="px-4 py-16 xl:p-32">
          <CTACard />
        </section>
        <section id="faq" className="flex flex-col gap-16 px-4 py-16 xl:p-32">
          <h2 className="font-title text-center text-3xl xl:text-5xl">
            Questions fréquentes
          </h2>
          <div className="flex flex-col self-center xl:w-5/6">
            <CollaspibleQuestion>
              1. Combien de temps faut-il pour développer un outil sur-mesure ?
            </CollaspibleQuestion>
            <CollaspibleQuestion>
              2. Est-ce que vous pouvez intégrer l&apos;outil avec les logiciels
              que nous utilisons déjà ?
            </CollaspibleQuestion>
            <CollaspibleQuestion>
              3. Je n&apos;ai pas de cahier des charges précis, est-ce un
              problème ?
            </CollaspibleQuestion>
            <CollaspibleQuestion>
              4. Quel budget faut-il prévoir pour un projet comme le mien ?
            </CollaspibleQuestion>
            <CollaspibleQuestion>
              5. Et si j&apos;ai besoin de faire évoluer l&apos;outil plus tard
              ?
            </CollaspibleQuestion>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
