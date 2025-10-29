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
      <div className="rounded-2xl bg-cta-gradient flex flex-col gap-10 px-6 py-8 items-center xl:grid grid-cols-2 grid-rows-4 xl:p-16 xl:gap-10">
        <h2 className="text-center text-2xl font-medium leading-normal xl:text-4xl xl:font-medium xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-span-3 xl:text-left">
          Parlons de votre projet - gratuitement et sans engagement
        </h2>
        <div className=" gap-4 flex flex-col items-center xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-span-4 xl:items-start">
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
        <Button className="xl:hidden">Je réserve un appel gratuit</Button>
        <Button className="hidden xl:block xl:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-5">
          Je réserve un appel gratuit maintenant
        </Button>
      </div>
    </article>
  );
}
