import { useEffect, useState } from "react";

export default function Button({ children, type = "button", className }) {
  const [size, setSize] = useState("small");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setSize("large");
    }
  }, [windowWidth]);

  return (
    <button
      type={type}
      className={`button-bg-gradient w-fit rounded-full px-6 py-2 text-white ${
        size === "small" ? "text-base" : "text-xl"
      } ${className}`}
    >
      {children}
    </button>
  );
}
