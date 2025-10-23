import AppsAsset from "../assets/images/apps circles.png";
import FingerprintAsset from "../assets/images/Fingerprint.png";
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

  return (
    // nav here
    <main>
      <section
        id="hero"
        className="px-6 flex flex-col gap-16 items-center pb-16"
      >
        <h1 className="font-title text-5xl text-center leading-tight">
          <strong>Simplifiez</strong> vos worflows avec des outils conçus pour{" "}
          <strong>votre métier</strong>.
        </h1>
        <p className="text-primary-200 text-xl leading-relaxed text-center">
          Optimisez chaque étape de votre activité grâce à des solutions sur
          mesure, pensées et développées pour vous.
        </p>
        <Button>Je planifie un appel gratuit</Button>
      </section>
      <section id="brands" className="flex flex-col gap-3 items-center">
        <p className="text-primary-200 font-extralight italic">
          {"Ils m'ont fait confiance !"}
        </p>
        <div className="flex gap-3 p-4 w-full justify-between items-center">
          {brandLogos.map((brand, index) => (
            <div key={index} className="w-full flex justify-center">
              <img src={brand.logo} alt={brand.alt} />
            </div>
          ))}
        </div>
      </section>
      <section id="problem" className="flex flex-col gap-16 py-16 px-4">
        <h2 className="text-center text-3xl font-title">
          Des outils génériques qui ne comprennent pas vos besoins
        </h2>
        <p className="font-extralight italic text-center leading-loose">
          Les logiciels standards que vous utilisez ne sont pas adaptés à vos
          méthodes de travail ? Ils vous imposent des contraintes ? Vous
          obligent à trouver des solutions détournées et rendent chaque tâche
          plus complexe qu&apos;elle ne devrait l&apos;être ?
        </p>
        <div className="p-px rounded-2xl border-primary-gradient overflow-x-visible">
          <div className="pt-6 rounded-2xl flex flex-col w-full bg-primary-bg">
            <p className="text-xl leading-loose px-8">
              Vos équipes{" "}
              <span className="font-semibold">perdent en efficacité</span>,
              l&apos;information circule mal entre les services, et{" "}
              <span className="font-semibold">
                les tâches répétitives s&apos;accumulent
              </span>
              . Sans outil adapté, la centralisation des données devient
              complexe,
              <span className="font-semibold">les erreurs se multiplient</span>,
              et vos collaborateurs passent plus de temps à gérer des
              contraintes qu&apos;à{" "}
              <span className="font-semibold">créer de la valeur</span>.
            </p>
            <div className="h-80 overflow-y-clip overflow-x-visible relative">
              <img
                src={IPhoneAsset}
                alt="Illustration d'un téléphone saturé par des notifications"
                width="970px"
                className="min-w-[400px] absolute -right-10"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="agitate" className="flex flex-col gap-16 py-16 px-4">
        <h2 className="text-center text-3xl font-title">
          Ces workflows inefficaces vous coûtent plus cher que vous ne le pensez
        </h2>
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col gap-6 w-full">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="w-full min-h-56 border-primary-gradient p-px rounded-2xl"
              >
                <div className="w-full h-full min-h-56 bg-primary-bg rounded-2xl px-6 pt-6 pb-2 flex flex-col gap-4 items-center">
                  <div className="flex flex-col gap-0 items-center">
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
                    className="self-end text-2xs text-primary-200 underline decoration-dotted"
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
      <section id="solution" className="flex flex-col gap-16 py-16 px-4">
        <h2 className="text-center text-3xl font-title">
          Des applications web sur mesure, pensées pour vous
        </h2>
        <p className="font-extralight italic text-center leading-loose">
          Je conçois des applications web sur mesure, parfaitement intégrées à
          vos outils et processus existants. Que vous cherchiez à automatiser
          des tâches, centraliser vos données ou structurer vos workflows,
          chaque solution est pensée autour de vos besoins réels.
        </p>
        {/* Carte accompagnement */}
        <div className="flex flex-col gap-10">
          <div className="overflow-x-visible w-full rounded-2xl flex flex-col pt-6 border border-primary-800 relative">
            <div className="px-6 gap-8 flex flex-col">
              <h3 className="font-medium text-2xl">
                Un accompagnement sur-mesure, <strong>du début à la fin</strong>
              </h3>
              <p className="font-extralight italic leading-normal text-lg">
                Écoute, pédagogie et réactivité : vous avancez en confiance,
                avec un interlocuteur unique qui comprend vos enjeux et reste
                disponible.
              </p>
            </div>
            <div className="h-70 overflow-y-clip overflow-x-hidden relative "></div>
            <div className="mask-right">
              <img
                src={TextsAsset}
                alt="Illustration d'un échange de sms"
                width="598px"
                className="min-w-[500px] absolute -right-1/4"
              />
            </div>
          </div>
          {/* Carte interface */}
          <div className="overflow-x-visible w-full rounded-2xl flex flex-col pt-6 gap-2 border border-primary-800 relative">
            <div className="px-6 gap-8 flex flex-col">
              <h3 className="font-medium text-2xl">
                Une interface pensée pour <strong>vos utilisateurs</strong>
              </h3>
              <p className="font-extralight italic leading-normal text-lg">
                L’interface est simple à prendre en main, agréable à utiliser au
                quotidien, et parfaitement adaptée à vos usages métier.
              </p>
              <Button>Planifiez un appel</Button>
            </div>
            <div className="h-64 overflow-visible relative">
              <img
                src={UiModsAsset}
                alt="Illusatration d'une interface utilisateur"
                className="absolute left-1/10"
              />
            </div>
          </div>
          {/* Carte mise en prod */}
          <div className=" w-full rounded-2xl overflow-hidden flex flex-col py-6 gap-2 border border-primary-800">
            <div className="px-6 gap-8 flex flex-col relative">
              <h3 className="font-medium text-2xl">
                Mise en ligne <strong>rapide</strong>, sans compromis sur la{" "}
                <strong>qualité</strong>
              </h3>
              <div className="flex flex-row -gap-2 h-fit">
                <p className="font-extralight italic leading-normal text-lg w-3/4">
                  Vos outils sont opérationnels rapidement pour que vous
                  puissiez gagner en efficacité sans attendre.
                </p>
                <div className="w-1/4 relative h-60">
                  <img
                    src={ZapAsset}
                    alt="Illustration d'un éclair"
                    className="absolute min-w-80 -right-20 -top-6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Carte évolutivité */}
          <div className="w-full rounded-2xl overflow-hidden flex flex-col pt-6 gap-2 border border-primary-800">
            <div className="pl-6 gap-8 flex flex-col relative">
              <h3 className="font-medium text-2xl pr-6">
                Une solution pensée pour <strong>grandir avec vous</strong>
              </h3>
              <div className="flex flex-row -gap-2 h-fit">
                <p className="font-extralight italic leading-normal text-lg w-5/6 pr-6">
                  Architecture modulaire, fonctionnalités extensibles, votre
                  outil s’adapte à vos futurs besoins.
                </p>
                <div className="w-1/6 relative h-50">
                  <img
                    src={GraphAsset}
                    alt="Illustration d'une courbe qui monte"
                    className="absolute min-w-64 right-0 bottom-0"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Carte compatibilité */}
          <div className=" w-full rounded-2xl overflow-hidden flex flex-col items-center pt-6 px-6 gap-8 border border-primary-800 h-[400px]">
            <h3 className="font-medium text-2xl">
              <strong>Compatible</strong> avec vos outils existants
            </h3>
            <p className="font-extralight italic leading-normal text-lg">
              Connexions possibles avec vos logiciels, API ou plateformes déjà
              en place.
            </p>
            <img
              src={AppsAsset}
              alt="Logos de plusieurs outils liés par des cercles concentriques"
            />
          </div>
          {/* Carte solution sur mesure */}
          <div className="w-full rounded-2xl overflow-hidden flex flex-col pt-6 px-6 gap-8 border border-primary-800 relative h-[360px]">
            <h3 className="font-medium text-2xl">
              Une solution vraiment faire <strong>pour vous</strong>
            </h3>
            <p className="font-extralight italic leading-normal text-lg">
              Chaque projet part de vos contraintes réelles : vous obtenez une
              solution unique, conçue pour fonctionner dans votre contexte.
            </p>
            <img
              src={FingerprintAsset}
              alt="Illustration d'une emprunte digitale"
              className="absolute top-40"
            />
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="flex flex-col gap-16 py-16 px-4 bg-pattern-straight"
      >
        <h2 className="text-center text-3xl font-title">
          Ils ont gagné en efficacité grâce à des solutions pensées pour eux
        </h2>
        <div className="flex flex-row flex-wrap gap-10">
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
      <section id="cta" className="px-4 py-16">
        <CTACard />
      </section>
      <section id="faq" className="flex flex-col gap-16 py-16 px-4">
        <h2 className="text-center text-3xl font-title">
          Questions fréquentes
        </h2>
        <div className="flex flex-col">
          <CollaspibleQuestion>
            1. Combien de temps faut-il pour développer un outil sur-mesure ?
          </CollaspibleQuestion>
          <CollaspibleQuestion>
            2. Est-ce que vous pouvez intégrer l&apos;outil avec les logiciels
            que nous utilisons déjà ?
          </CollaspibleQuestion>
          <CollaspibleQuestion>
            3. Je n&apos;ai pas de cahier des charges précis, est-ce un problème
            ?
          </CollaspibleQuestion>
          <CollaspibleQuestion>
            4. Quel budget faut-il prévoir pour un projet comme le mien ?
          </CollaspibleQuestion>
          <CollaspibleQuestion>
            5. Et si j&apos;ai besoin de faire évoluer l&apos;outil plus tard ?
          </CollaspibleQuestion>
        </div>
      </section>
    </main>
  );
}
