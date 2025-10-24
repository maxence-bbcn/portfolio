import Button from "./Button";
import SparkleIcon from "/src/ui/assets/icons/sparkle.svg";

const CustomSparkleBulletListItem = ({ children }) => {
  return (
    <div className="flex flex-row items-start gap-3">
      <img
        src={SparkleIcon}
        alt="étoile pour liste à puce"
        width={"30px"}
        height={"30px"}
      />
      <p className="leading text-xl">{children}</p>
    </div>
  );
};

export default function CTACard() {
  return (
    <article className="rounded-2xl p-px border-cta-gradient glow">
      <div className="rounded-2xl bg-cta-gradient flex flex-col gap-10 px-6 py-8 items-center">
        <h2 className="text-center text-2xl font-medium leading-normal ">
          Parlons de votre projet - gratuitement et sans engagement
        </h2>
        <div className=" gap-4 flex flex-col items-center">
          <CustomSparkleBulletListItem>
            Un échange clair et accessible, sans jargon technique
          </CustomSparkleBulletListItem>
          <CustomSparkleBulletListItem>
            Une première analyse de vos besoins concrets et de vos contraintes
            métier
          </CustomSparkleBulletListItem>
          <CustomSparkleBulletListItem>
            Des réponses à vos questions techniques, pratiques ou stratégiques
          </CustomSparkleBulletListItem>
          <CustomSparkleBulletListItem>
            Une estimation réaliste des délais et du type de projet à envisager
          </CustomSparkleBulletListItem>
        </div>
        <Button>Je réserve un appel gratuit</Button>
      </div>
    </article>
  );
}
