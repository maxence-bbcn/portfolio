import Button from "./Button";
import CustomInput from "./CustomInput";

export default function CustomFooter() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-16 bg-pattern-diag self-center w-full justify-center items-center py-16 xl:py-32 px-4 xl:px-32">
        <h2 className="text-center text-3xl font-title xl:text-5xl px-4 xl:px-32">
          Des projets web plus classiques ? Je suis aussi là pour ça.
        </h2>
        <p className="text-primary-200 text-center leading-relaxed px-4 xl:px-32 xl:text-2xl">
          Mes compétences en design et développement web me permettent de
          réaliser des projets variés, du site vitrine au e-commerce. Ensemble,
          nous pouvons donner vie à votre projet !
        </p>
        <div className="bg-linear-to-b from-primary-400 to-primary-800/80 p-px rounded-2xl xl:w-3/5 ">
          <form
            action="fonction à créer"
            method="post"
            className="flex flex-col items-end gap-5 p-8 bg-linear-180 from-primary-800 to-primary-bg rounded-2xl"
          >
            <CustomInput fieldName={"Nom"} placeholder={"Votre nom"} />
            <CustomInput fieldName={"Prénom"} placeholder={"Votre prénom"} />
            <CustomInput
              fieldName={"Mail"}
              placeholder={"Votre adresse e-mail"}
            />
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor={"Message"}>Message *</label>
              <textarea
                rows={7}
                type="text"
                required
                id={"Message"}
                name={"Message"}
                placeholder={"Votre message"}
                className="border rounded-lg p-6 bg-primary-bg border-primary-500/50"
              />
            </div>
            <Button type="submit">J&apos;envoie un message</Button>
          </form>
        </div>
      </div>
      <footer className="px-4 xl:px-32">
        <h2 className="text-center text-2xl font-bold py-16 xl:text-4xl xl:text-left">
          Travaillons ensemble !
        </h2>
        <div className="border-t-[1px] border-b-[1px] border-white/20 flex flex-col xl:flex-row xl:justify-between gap-16 py-16">
          <div className="flex flex-col gap-10 xl:gap-14 items-center xl:items-start xl:w-2/5">
            <p className="font-semibold text-2xl">Maxence Barbançon</p>
            <p className="xl:text-xl leading-loose text-primary-200 text-center xl:text-left">
              Je conçois des applications web sur mesure pensées autour de vos
              besoins réels.
            </p>
            <p className="font-semibold text-2xl">Contact :</p>
            <div className="flex flex-row gap-2">
              <img src="src/ui/assets/icons/mail.svg" alt="icône e-mail" />
              <p>maxence.barbancon@gmail.com</p>
            </div>
            <Button>Je réserve un appel gratuit</Button>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-6">
            <p className="font-semibold text-2xl">Services</p>
            <p className="text-primary-200">Développement sur mesure</p>
            <p className="text-primary-200">Site vitrine et portfolio</p>
            <p className="text-primary-200">Autres projets web</p>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-6">
            <p className="font-semibold text-2xl">À propos</p>
            <p className="text-primary-200">À propos de moi</p>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-6">
            <p className="font-semibold text-2xl">Pages légales</p>
            <p className="text-primary-200">Mentions légales</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse xl:justify-between items-center gap-10 py-8">
          <div className="flex flex-row gap-4 items-center">
            <img src="src/ui/assets/logos/linkedin.svg" alt="logo LinkedIn" />
            <p>Connectons-nous sur LinkedIn !</p>
          </div>
          <p>Maxence Barbançon ©2025</p>
        </div>
      </footer>
    </div>
  );
}
