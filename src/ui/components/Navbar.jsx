export default function Navbar({ toggleMobileMenu }) {
  return (
    <nav className="px-6 py-4 flex flex-row justify-between relative">
      <img src="src/ui/assets/logos/moi.svg" alt="Logo" />
      <img
        src="src/ui/assets/icons/menu.svg"
        alt="Icône menu"
        className="select-none"
        onClick={() => toggleMobileMenu((prevState) => !prevState)}
      />
    </nav>
  );
}
