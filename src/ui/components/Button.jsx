export default function Button({ children, type = "button", className }) {
  return (
    <button
      type={type}
      className={`${className} button-bg-gradient h-fit w-fit rounded-full px-6 py-2 text-base text-white md:text-sm lg:text-base xl:text-xl`}
    >
      {/* <div className="button-bg-gradient"></div> */}
      {children}
    </button>
  );
}
