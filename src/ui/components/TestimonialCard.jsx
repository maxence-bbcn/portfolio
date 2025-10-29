export default function TestimonialCard({ content, author, pp, ...props }) {
  return (
    <article
      {...props}
      className="border-primary-gradient p-px rounded-2xl xl:max-w-2/5"
    >
      <div className="flex flex-row gap-8 p-6 rounded-2xl bg-primary-bg">
        <img
          src={pp}
          alt={`Photo du client ${author}`}
          width={"90px"}
          height={"90px"}
          className="bg-gray-300 rounded-full w-[90px] h-[90px] p-px"
        />
        <div className="flex flex-col gap-4">
          <p className="italic font-extralight leading-relaxed">{content}</p>
          <p className="text-right underline decoration-dotted">{author}</p>
        </div>
      </div>
    </article>
  );
}
