import { motion } from "motion/react";
import { Button } from "./Button";

const CustomSparkleBulletListItem = ({ children }) => {
  return (
    <div className="flex flex-row items-start gap-3">
      <img
        src="/assets/icons/sparkle.svg"
        alt="étoile pour liste à puce"
        width={"30px"}
        height={"30px"}
      />
      <p className="leading text-lg">{children}</p>
    </div>
  );
};

export default function CTACard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.35 }}
      className="cta-card-border-gradient glow rounded-2xl p-px"
    >
      <div className="cta-card-bg-gradient flex grid-cols-2 grid-rows-4 flex-col items-center gap-10 rounded-2xl px-6 py-8 lg:grid lg:gap-10 lg:p-16">
        <h2 className="text-center text-2xl leading-normal font-medium lg:col-start-1 lg:col-end-2 lg:row-span-3 lg:row-start-1 lg:text-left lg:text-4xl lg:font-medium">
          Parlons de votre projet - gratuitement et sans engagement
        </h2>
        <div className="flex flex-col items-start gap-4 lg:col-start-2 lg:col-end-3 lg:row-span-4 lg:row-start-1">
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
        <Button className="lg:hidden">Je réserve un appel gratuit</Button>
        <Button
          className="hidden lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5 lg:inline-block"
          onClick={() =>
            window
              .open("https://cal.com/maxence-barbancon-w75rjo", "_blank")
              .focus()
          }
        >
          Je réserve un appel gratuit maintenant
        </Button>
      </div>
    </motion.article>
  );
}
