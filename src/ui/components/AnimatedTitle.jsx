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

export default function AnimatedTitle({
  title,
  tag: Tag = "h1",
  ascentWordPos,
}) {
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

  const additionnalProps =
    Tag === "h1" ? { initial: "hidden", whileInView: "visible" } : {};

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={`${Tag === "h1" ? "font-title w-full text-center text-5xl leading-tight xl:text-6xl" : "font-title text-center text-3xl md:text-4xl xl:text-5xl"}`}
      variants={containerVariant}
      {...additionnalProps}
      viewport={containerViewport}
    >
      <AnimatedWords words={words} ascentWordPos={ascentWordPos} />
    </MotionTag>
  );
}
