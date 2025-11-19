import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedTitle({ text }) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const words = text.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;

    const measureLines = () => {
      const spans = Array.from(
        containerRef.current.querySelectorAll("span.word"),
      );
      const linesMap = new Map();

      spans.forEach((span) => {
        const rects = span.getClientRects();
        for (const rect of rects) {
          const key = rect.top.toFixed(2);
          if (!linesMap.has(key)) linesMap.set(key, []);
          linesMap.get(key).push(span.textContent);
        }
      });

      setLines(Array.from(linesMap.values()));
    };

    measureLines();

    // Pour recalculer si la taille de l'écran change avant l'animation
    const observer = new ResizeObserver(() => measureLines());
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [text]);

  return (
    <motion.h1
      ref={containerRef}
      className="font-title text-center text-5xl leading-tight xl:text-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {lines.length === 0
        ? // rendu simple pour les spans initiaux
          words.map((word, i) => (
            <span key={i} className="word inline-block">
              {word}&nbsp;
            </span>
          ))
        : // rendu final avec animation ligne par ligne
          lines.map((lineWords, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {lineWords.map((word, j) => (
                <motion.span
                  key={j}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.div>
          ))}
    </motion.h1>
  );
}
