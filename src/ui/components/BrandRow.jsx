import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const BrandRow = () => {
  const brandLogos = [
    {
      logo: "/assets/logos/mazette.svg",
      alt: "Logo de l'entreprise Mazette",
      style: "h-full w-96 md:min-w-[10rem]",
    },
    {
      logo: "/assets/logos/cht.svg",
      alt: "Logo du centre hospitalier de Troyes",
      style: "h-full w-96 md:min-w-[4rem]",
    },
    {
      logo: "/assets/logos/univers-kids.svg",
      alt: "Logo de l'entreprise Univers Kids",
      style: "h-3/4 w-96 md:min-w-[6rem]",
    },
    {
      logo: "/assets/logos/deflorenne-location.svg",
      alt: "Logo de l'entreprise Delorenne Location",
      style: "h-full w-96 md:min-w-[6rem]",
    },
    {
      logo: "/assets/logos/alexandre-sebille.svg",
      alt: "Logo de l'entreprise Alexandre Sebille",
      style: "h-full w-48",
    },
  ];

  const logosList = [
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
  ];
  const animatedLogoX = useMotionValue(0);
  const brandRowContainerRef = useRef(null);
  const brandContentWidth = useRef(0);

  useEffect(() => {
    const container = brandRowContainerRef.current;
    if (!container) return;

    // Attendre que les images du container soient chargées
    const images = Array.from(container.querySelectorAll("img"));
    let loaded = 0;

    const onImageLoad = () => {
      loaded++;
      if (loaded === images.length) {
        // Une fois toutes les images chargées, le layout devient stable
        requestAnimationFrame(() => {
          brandContentWidth.current = container.scrollWidth / 2;

          // On lance l'animation dasn le requestAnimationFrame pour être sûr d'animer le layout final.
          const controls = animate(animatedLogoX, -brandContentWidth.current, {
            type: "tween",
            ease: "linear",
            duration: 60,
            repeat: Infinity,
            repeatType: "loop",
            onUpdate(value) {
              if (value <= -brandContentWidth.current) {
                animatedLogoX.set(0);
              }
            },
          });

          return () => controls.stop();
        });
      }
    };

    images.forEach((img) => {
      if (img.complete) onImageLoad();
      else img.onload = onImageLoad;
    });
  }, [animatedLogoX]);

  return (
    <div className="brand-row-shadow">
      <motion.div
        className="flex w-full items-center gap-20 p-4 whitespace-nowrap md:gap-32 lg:gap-36"
        ref={brandRowContainerRef}
        style={{ x: animatedLogoX }}
      >
        {logosList.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.alt}
            className={`${brand.style}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BrandRow;
