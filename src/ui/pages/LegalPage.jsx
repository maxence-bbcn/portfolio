export default function LegalPage() {
  const titles = [
    "Article 1 - L'éditeur",
    "Article 2 - L'hébergeur",
    "Article 3 - Accès au site",
    "Article 4 - collecte des données",
  ];

  const intro =
    "Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l' « Utilisateur », du site https://maxence-barbancon.com , ci-après le « Site », les présentes mentions légales. La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».";
  const editor =
    "L'édition du Site est assurée par Maxence Barbançon EI Micro-entreprise au capital de 0 euros, immatriculée au Registre du Commerce et des Sociétés de Troyes sous le numéro 98243734500019 dont le siège social est situé au 2 rue valtat 10000 Troyes,";
  const email = "Adresse e-mail : maxence.barbancon@gmail.com.";
  const director =
    "Le Directeur de la publication est Maxence Barbançon, ci-après l'« Editeur ».";

  const hebergeur =
    "L'hébergeur du Site est la société o2switch au capital de 100000€, dont le siège social est situé au Chemin des Pardiaux 63000 Clermond-Ferrand, France, avec l'adresse mail de contact : support@o2switch.fr.";
  const access =
    "Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance.";
  const responsability =
    "En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.";

  const data =
    "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l'Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.";

  return (
    <section
      id="hero"
      className="mt-16 flex w-full flex-col items-center gap-16 px-6 pb-16 md:mt-32 md:gap-24 md:px-10 xl:px-32"
    >
      <div className="legal-header">
        <h2 className="font-title text-center text-3xl md:text-4xl xl:text-5xl">
          Mentions Légales
        </h2>
        <p className="pt-2 text-center italic">En vigueur au 08/12/2025</p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p>{intro}</p>
        <h3 className="font-title text-2xl md:text-3xl xl:text-4xl">
          {titles[0]}
        </h3>
        <p>{editor}</p>
        <p>{email}</p>
        <p>{director}</p>
        <h3 className="font-title text-2xl md:text-3xl xl:text-4xl">
          {titles[1]}
        </h3>
        <p>{hebergeur}</p>
        <h3 className="font-title text-2xl md:text-3xl xl:text-4xl">
          {titles[2]}
        </h3>
        <p>{access}</p>
        <p>{responsability}</p>
        <h3 className="font-title text-2xl md:text-3xl xl:text-4xl">
          {titles[3]}
        </h3>
        <p>{data}</p>
      </div>
    </section>
  );
}
