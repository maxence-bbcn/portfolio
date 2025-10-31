import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AppsAsset from "../assets/images/apps circles.png";
import FingerprintAsset from "../assets/images/fingerprint.png";
import GraphAsset from "../assets/images/graph.png";
import IPhoneAsset from "../assets/images/Iphone - notifications.png";
import TextsAsset from "../assets/images/Iphone - texts.png";
import UiModsAsset from "../assets/images/ui mods.png";
import ZapAsset from "../assets/images/zap.png";
import LogoCHT from "../assets/logos/cht.svg";
import LogoMazette from "../assets/logos/mazette.svg";
import LogoUniversKids from "../assets/logos/univers-kids.svg";
import Button from "../components/Button";
import CollaspibleQuestion from "../components/CollaspsibleQuestion";
import CTACard from "../components/CTACard";
import CustomFooter from "../components/CustomFooter";
import Navbar from "../components/NavBar";
import TestimonialCard from "../components/TestimonialCard";

export default function Homepage() {
  const brandLogos = [
    {
      logo: LogoMazette,
      alt: "Logo de l'entreprise Mazette",
    },
    {
      logo: LogoCHT,
      alt: "Logo du centre hospitalier de Troyes",
    },
    {
      logo: LogoUniversKids,
      alt: "Logo de l'entreprise Univers Kids",
    },
  ];

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
          className="absolute z-10 flex h-full w-full justify-end backdrop-blur-xs"
          onClick={(event) => {
            if (event.target !== menuRef.current) setMobileMenuVisible(false);
          }}
        >
          <div
            ref={menuRef}
            className="mobile-menu-bg-gradient glow--menu flex h-full w-2/3 flex-col items-center justify-center gap-6 pt-24 pb-16 md:gap-12"
          >
            <Link to="/services" className="text-xl font-medium md:text-2xl">
              Mes services
            </Link>
            <Link to="/projects" className="text-xl font-medium md:text-2xl">
              Mes projets
            </Link>
            <Link to="/about" className="text-xl font-medium md:text-2xl">
              Qui suis-je ?
            </Link>
            <span className="py-4" />
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
          <h1 className="font-title text-center text-5xl leading-tight xl:text-6xl">
            <span className="font-bold">Simplifiez</span> vos worflows avec des
            outils conçus pour <span className="font-bold">votre métier</span>.
          </h1>
          <p className="text-primary-200 text-center text-xl leading-relaxed xl:text-2xl">
            Optimisez chaque étape de votre activité grâce à des solutions sur
            mesure, pensées et développées pour vous.
          </p>
          <Button>Je planifie un appel gratuit</Button>
        </section>
        <section
          id="brands"
          className="flex flex-col items-center gap-3 xl:px-32 xl:pb-16"
        >
          <p className="text-primary-200 font-extralight italic">
            Ils m&apos;ont fait confiance !
          </p>
          <div className="flex w-full items-center justify-between gap-3 p-4">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex w-full justify-center">
                {/* TODO srcset et sizes pour les images responsives */}
                <img src={brand.logo} alt={brand.alt} />
              </div>
            ))}
          </div>
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
          <div className="border-primary-gradient overflow-x-visible rounded-2xl p-px">
            <div className="bg-primary-bg flex w-full flex-col rounded-2xl md:relative md:flex-row">
              <p className="px-8 pt-6 text-xl leading-loose md:w-3/5 md:pb-6 md:text-base lg:w-2/3 lg:p-16 lg:text-lg 2xl:text-2xl">
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
              <div className="mask-notifications relative h-80 overflow-x-visible overflow-y-clip sm:min-h-[500px] md:h-auto md:min-h-0 md:w-1/2 lg:w-1/3 xl:overflow-y-visible">
                <img
                  src={IPhoneAsset}
                  alt="Illustration d'un téléphone saturé par des notifications"
                  width="970px"
                  className="absolute -right-10 xl:top-1/5 xl:left-0 2xl:top-0"
                />
              </div>
            </div>
          </div>
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
                      <p className="text-6xl font-black">
                        {stat.value}
                        <span className="text-base font-normal">%</span>
                      </p>
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
          <div className="flex grid-cols-12 grid-rows-12 flex-col gap-10 md:grid md:items-stretch md:gap-3">
            {/* Carte accompagnement */}
            <div className="border-primary-800 relative flex w-full flex-col overflow-x-visible rounded-2xl border pt-6 md:col-span-4 md:col-start-1 md:row-span-7 md:row-start-1">
              <div className="flex flex-col gap-8 px-6">
                <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl">
                  Un accompagnement sur-mesure,{" "}
                  <strong>du début à la fin</strong>
                </h3>
                <p className="text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed">
                  Écoute, pédagogie et réactivité : vous avancez en confiance,
                  avec un interlocuteur unique qui comprend vos enjeux et reste
                  disponible.
                </p>
              </div>
              <span className="relative h-70 overflow-x-hidden overflow-y-clip md:h-0 xl:h-0"></span>
              <div className="mask-sms">
                <img
                  src={TextsAsset}
                  alt="Illustration d'un échange de sms"
                  width="598px"
                  className="absolute top-0 left-0 w-full max-w-none md:top-10 md:left-7/12 md:w-5/9 lg:w-1/2 xl:top-12 xl:left-0 xl:w-[130%] 2xl:w-[110%]"
                />
              </div>
            </div>
            {/* Carte interface */}
            <div className="border-primary-800 relative flex w-full flex-col gap-2 overflow-x-visible rounded-2xl border pt-6 md:col-start-5 md:col-end-13 md:row-span-3 md:row-start-1 md:flex-row">
              <div className="flex flex-col gap-8 px-6 md:w-2/3 md:py-2 lg:w-3/5 lg:gap-6">
                <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl">
                  Une interface pensée pour <strong>vos utilisateurs</strong>
                </h3>
                <p className="text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed">
                  L&apos;interface est simple à prendre en main, agréable à
                  utiliser au quotidien, et parfaitement adaptée à vos usages
                  métier.
                </p>
                <Button>Planifiez un appel</Button>
              </div>
              <div className="relative h-64 overflow-visible md:h-full md:w-1/3 lg:w-2/5">
                <img
                  src={UiModsAsset}
                  alt="Illusatration d'une interface utilisateur"
                  className="1-2xl:w-[110%] 1-2xl:-top-5 absolute left-1/10 w-5/6 max-w-none md:-left-2/10 md:w-[150%] lg:-top-10 lg:w-[130%] xl:-top-8 xl:left-0 xl:w-[120%] 2xl:w-11/12"
                />
              </div>
            </div>
            {/* Carte mise en prod */}
            <div className="border-primary-800 col-end-9 flex w-full flex-col items-stretch gap-2 overflow-hidden rounded-2xl border py-6 md:col-start-5 md:row-span-4 md:row-start-4">
              <div className="relative flex flex-col gap-8 px-6 md:gap-4 lg:gap-8">
                <h3 className="text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl">
                  Mise en ligne <strong>rapide</strong>, sans compromis sur la{" "}
                  <strong>qualité</strong>
                </h3>
                <div className="-gap-2 flex h-fit flex-row">
                  <p className="w-3/4 text-lg leading-normal font-extralight italic md:text-sm lg:text-base xl:text-lg xl:leading-relaxed">
                    Vos outils sont opérationnels rapidement pour que vous
                    puissiez gagner en efficacité sans attendre.
                  </p>
                  <div className="relative h-60 w-1/4 md:h-fit lg:w-1/4">
                    <img
                      src={ZapAsset}
                      alt="Illustration d'un éclair"
                      className="1-2xl:-top-20 1-2xl:-left-44 1-2xl:w-[450%] absolute -top-6 -right-20 w-80 max-w-none md:top-0 md:-left-24 md:w-60 lg:-top-10 lg:-left-30 lg:w-76 xl:-top-10 xl:-left-30 xl:w-72 2xl:-top-32 2xl:-left-48 2xl:w-[400%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Carte évolutivité */}
            <div className="border-primary-800 flex w-full flex-col gap-2 overflow-hidden rounded-2xl border pt-6 md:col-start-9 md:col-end-13 md:row-span-4 md:row-start-4">
              <div className="relative flex h-full flex-col gap-8">
                <h3 className="pr-6 pl-6 text-2xl font-medium md:text-lg xl:text-2xl 2xl:text-3xl">
                  Une solution pensée pour <strong>grandir avec vous</strong>
                </h3>
                <div className="flex h-full flex-col">
                  <p className="w-5/6 pr-6 pl-6 text-lg leading-normal font-extralight italic md:w-full md:text-sm lg:text-base xl:w-3/4 xl:text-lg xl:leading-relaxed">
                    Architecture modulaire, fonctionnalités extensibles, votre
                    outil s&apos;adapte à vos futurs besoins.
                  </p>
                  <div className="relative h-full w-full xl:h-0">
                    <img
                      src={GraphAsset}
                      alt="Illustration d'une courbe qui monte"
                      className="ml-auto w-3/4 max-w-none md:ml-4 md:w-full lg:ml-8 xl:absolute xl:-top-6 xl:right-0 xl:w-3/4 2xl:-top-12"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Carte compatibilité */}
            <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 md:col-span-6 md:col-start-7 md:row-start-8 md:row-end-12 md:items-start lg:row-end-11">
              <h3 className="text-2xl font-medium md:text-xl lg:w-1/2 xl:text-2xl 2xl:text-3xl">
                <strong>Compatible</strong> avec vos outils existants
              </h3>
              <p className="text-lg leading-normal font-extralight italic md:text-base lg:w-1/2 xl:text-lg xl:leading-relaxed">
                Connexions possibles avec vos logiciels, API ou plateformes déjà
                en place.
              </p>
              <span className="relative h-30 overflow-x-hidden overflow-y-clip md:h-0"></span>
              <div className="mask-apps">
                <img
                  src={AppsAsset}
                  alt="Logos de plusieurs outils liés par des cercles concentriques"
                  className="mx-auto w-3/4 max-w-none lg:w-7/12 xl:w-1/2"
                />
              </div>
            </div>
            {/* Carte solution sur mesure */}
            <div className="border-primary-800 relative flex w-full flex-col gap-8 overflow-hidden rounded-2xl border px-6 pt-6 md:col-span-6 md:col-start-1 md:row-start-8 md:row-end-12 lg:row-end-11">
              <h3 className="text-2xl font-medium md:text-xl xl:text-2xl 2xl:text-3xl">
                Une solution vraiment faire <strong>pour vous</strong>
              </h3>
              <p className="text-lg leading-normal font-extralight italic md:text-base lg:w-3/4 xl:w-2/3 xl:text-lg xl:leading-relaxed 2xl:w-1/2">
                Chaque projet part de vos contraintes réelles : vous obtenez une
                solution unique, conçue pour fonctionner dans votre contexte.
              </p>
              <span className="relative h-30 overflow-x-hidden overflow-y-clip md:h-0"></span>
              <div className="mask-fingerprint">
                <img
                  src={FingerprintAsset}
                  alt="Illustration d'une emprunte digitale"
                  className="w-full max-w-none lg:w-4/5 xl:w-2/3 2xl:w-3/5"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-pattern-straight flex flex-col gap-16 px-4 py-16 xl:p-32"
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
        <CustomFooter />
      </main>
    </>
  );
}
