import LogoCHT from "../assets/logos/cht.svg";
import LogoMazette from "../assets/logos/mazette.svg";
import LogoUniversKids from "../assets/logos/univers-kids.svg";
import Button from "../components/Button";

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
      <section id="brands" className="flex flex-col grap-3 items-center">
        <p className="text-primary-200 font-light italic">
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
        <p className="font-light italic text-center leading-loose">
          {
            "Les logiciels standards que vous utilisez ne sont pas adaptés à vos méthodes de travail ? Ils vous imposent des contraintes ? Vous obligent à trouver des solutions détournées et rendent chaque tâche plus complexe qu'elle ne devrait l'être ?"
          }
        </p>
        <div></div>
      </section>
    </main>
  );
}
