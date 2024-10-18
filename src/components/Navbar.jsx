import { navItems } from "../lib/constants";

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between absolute py-[20px] items-center px-8 md:px-24 lg:px-36 z-10">
      <div className="">
        <img src="/logo.svg" alt="my-logo" width={30} height={30} />
      </div>
      <ul className="list-none flex flex-row items-center justify-between">
        {navItems.map((item) => (
          <li key={item.name} className="list-none px-4">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="px-4 py-2 rounded-md border border-accent-foreground"
      >
        Download CV
      </button>
    </nav>
  );
};

export default Navbar