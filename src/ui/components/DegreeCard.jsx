import { Link } from "react-router-dom";

export default function DegreeCard({ item, props }) {
  return (
    <article
      className="border-primary-600 flex w-44 flex-col items-center gap-2 rounded-2xl border p-4"
      {...props}
    >
      <img
        src={item.image}
        alt="Icône symbolisant le diplôme"
        width={"24px"}
        className="self-start"
      />
      <h5 className="text-center text-xl leading-loose font-bold">
        {item.title}
      </h5>
      <Link
        to={item.link}
        className="text-center text-sm font-extralight italic"
      >
        {item.subtitle}
      </Link>
      <p className="text-center text-sm leading-relaxed text-white/50">
        {item.source}
      </p>
    </article>
  );
}
