export default function TechItem({ item, props }) {
  return (
    <article
      className="border-primary-600 bg-primary-bg flex h-[60px] w-fit gap-6 rounded-xl border px-4 py-2"
      {...props}
    >
      <img src={item.image} alt={`logo ${item.name}`} width={"21px"} />
      <p className="text-center text-xl leading-loose">{item.name}</p>
    </article>
  );
}
