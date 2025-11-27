import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function CollaspibleQuestion({ question, answer }) {
  const [open, setOpen] = useState(false);

  const iconAnimationVariant = {
    open: { rotate: 180 },
    closed: {},
  };

  return (
    <div
      className="flex h-fit cursor-pointer flex-col border-b border-white py-8"
      onClick={() => setOpen((prevState) => !prevState)}
    >
      <div className="flex flex-row justify-between gap-4 px-3">
        <p className="text-lg">{question}</p>
        <motion.img
          variants={iconAnimationVariant}
          animate={open ? "open" : "closed"}
          className="origin-center"
          src="/assets/icons/Chevron bottom.svg"
          alt=""
          width={"24px"}
          height={"auto"}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key={"content"}
            initial={{ height: 0, opacity: 0, paddingTop: 0 }}
            animate={{ height: "auto", opacity: 1, paddingTop: "16px" }}
            exit={{ height: 0, opacity: 0, paddingTop: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-clip pl-4 text-lg"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
