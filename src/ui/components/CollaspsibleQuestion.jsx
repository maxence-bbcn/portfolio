export default function CollaspibleQuestion({ children }) {
  return (
    <div className="px-3 py-8 flex flex-row justify-between border-b border-white gap-4">
      <p className="text-lg">{children}</p>
      <img
        src="src\ui\assets\icons\Chevron bottom.svg"
        alt=""
        width={"24px"}
        height={"auto"}
      />
    </div>
  );
}
