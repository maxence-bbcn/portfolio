export default function Button({ size, children, type = "button" }) {
  return (
    <button
      type={type}
      className={`bg-primary-gradient text-white rounded-full w-fit px-6 py-2 ${
        size === "small" ? "text-base" : "text-xl"
      }`}
    >
      {children}
    </button>
  );
}
