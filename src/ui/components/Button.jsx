export const Button = ({ children, type = "button", size = "normal" }, ref) => {
  return (
    <button
      type={type}
      className={`group to-primary-900/80 relative h-fit w-fit cursor-pointer overflow-hidden rounded-full border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-900/40 ${size === "small" ? "px-6 py-2" : "px-7 py-3"} text-base font-normal text-indigo-300 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-indigo-400/60 hover:text-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 md:text-sm lg:text-base xl:text-xl`}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent transition-transform duration-1000 ease-out will-change-transform group-hover:translate-x-full"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 transition-opacity duration-500 will-change-transform group-hover:opacity-100"></div>
      {children}
    </button>
  );
};
