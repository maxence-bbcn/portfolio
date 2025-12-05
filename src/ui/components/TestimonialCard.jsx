import { motion } from "motion/react";
import { forwardRef } from "react";

export default forwardRef(function TestimonialCard(
  { testimonial, ...props },
  ref,
) {
  const { author, role, catchphrase, content, logo } = testimonial;
  return (
    <motion.article
      ref={ref}
      {...props}
      className="border-primary-gradient w-full shrink-0 rounded-2xl p-px"
    >
      <div className="bg-primary-bg flex w-full flex-col gap-8 rounded-2xl p-6">
        <div className="flex w-full items-start gap-6 md:items-end">
          <img
            src={logo}
            alt={`Photo du client ${author}`}
            width={"75px"}
            height={"75px"}
            className="col-start-1 col-end-2 row-start-1 row-end-2 p-px md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 max-md:landscape:col-start-1 max-md:landscape:col-end-2 max-md:landscape:row-start-1 max-md:landscape:row-end-3"
          />
          <div className="flex w-2/3 flex-col">
            <p className="text-lg font-semibold lg:text-xl 2xl:text-2xl">
              {author}
            </p>
            <p className="text-xs lg:text-sm">{role}</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:px-4">
          <p className="pb-2 text-lg leading-relaxed font-medium lg:text-xl">
            {catchphrase}
          </p>
          {content.map((line, index) => {
            if (line.type === "text")
              return (
                <p key={index} className="">
                  {line.text}
                </p>
              );
            else if (line.type === "list") {
              return (
                <ul key={index} className="list-disc">
                  {line.text.map((item, j) => (
                    <li key={j} className="ml-8">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
          })}
        </div>
      </div>
    </motion.article>
  );
});
