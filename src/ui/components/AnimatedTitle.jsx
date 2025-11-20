import { motion } from "motion/react";

const AnimatedWords = ({ words, ascentWordPos }) => {
  console.log(words);
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className={`${i >= ascentWordPos?.[0] && i <= ascentWordPos?.[1] && "font-ascent italic"} inline-block whitespace-nowrap`}
        >
          {word.split("").map((letter, j) => (
            <motion.span
              key={j}
              className={`inline-block`}
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
    </>
  );
};

export default function AnimatedTitle({ title, tag, ascentWordPos }) {
  const words = title.split(" ");
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };
  const containerViewport = { once: true, amount: 1 };

  return tag === "h1" ? (
    <motion.h1
      className="font-title w-full text-center text-5xl leading-tight xl:text-6xl"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={containerViewport}
    >
      <AnimatedWords words={words} ascentWordPos={ascentWordPos} />
    </motion.h1>
  ) : (
    <motion.h2
      className="font-title text-center text-3xl md:text-4xl xl:text-5xl"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={containerViewport}
    >
      <AnimatedWords words={words} ascentWordPos={ascentWordPos} />
    </motion.h2>
  );
}
