export default function Button({ children, type = "button", className }) {
  return (
    <button
      type={type}
      className={`${className} button-bg-gradient btn-shine h-fit w-fit rounded-full text-base text-white md:text-sm lg:text-base xl:text-xl`}
    >
      <div className="button-bg-gradient px-4">{children}</div>
    </button>
  );
}
