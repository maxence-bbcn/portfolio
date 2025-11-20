import { animate } from "motion";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest.toFixed(0)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <p ref={ref} className="text-6xl font-black">
      {displayValue}
      <span className="text-base font-normal">%</span>
    </p>
  );
}
