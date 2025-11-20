import { motion } from "motion/react";

export default function TestimonialCard({ content, author, pp, ...props }) {
  return (
    <motion.article
      {...props}
      className="border-primary-gradient rounded-2xl p-px md:max-w-2/3 xl:max-w-2/5 max-md:landscape:w-2/3"
    >
      <div className="bg-primary-bg grid grid-cols-3 grid-rows-1 gap-4 rounded-2xl p-6 md:grid-rows-2 md:gap-8">
        <img
          src={pp}
          alt={`Photo du client ${author}`}
          width={"90px"}
          height={"90px"}
          className="col-start-1 col-end-2 row-start-1 row-end-2 aspect-square h-[90px] min-w-[90px] rounded-full bg-gray-300 p-px md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 max-md:landscape:col-start-1 max-md:landscape:col-end-2 max-md:landscape:row-start-1 max-md:landscape:row-end-3"
        />
        <p className="col-start-1 col-end-4 row-start-2 row-end-4 leading-relaxed font-extralight italic md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 max-md:landscape:col-start-2 max-md:landscape:col-end-4 max-md:landscape:row-start-1 max-md:landscape:row-end-3">
          {content}
        </p>
        <p className="col-start-2 col-end-4 row-start-1 row-end-2 h-fit text-right underline decoration-dotted md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 max-md:landscape:col-start-3 max-md:landscape:col-end-4 max-md:landscape:row-start-3 max-md:landscape:row-end-4">
          {author}
        </p>
      </div>
    </motion.article>
  );
}
