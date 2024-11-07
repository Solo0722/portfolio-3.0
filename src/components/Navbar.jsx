import { navItems } from "../lib/constants";
import NavDrawer from "./NavDrawer";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  let scroll_position = 30;
  let scroll_direction;

  const changeNavVisibility = () => {
    scroll_direction =
      document.body.getBoundingClientRect().top > scroll_position
        ? "up"
        : "down";
    scroll_position = document.body.getBoundingClientRect().top;

    if (scroll_direction === "up") {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    setNavbar(true);
    window.addEventListener("scroll", changeNavVisibility);
  }, []);

  return (
    <nav
      className={`w-full flex justify-between absolute py-[20px] items-center px-8 md:px-24 lg:px-36 z-10 ${
        navbar
          ? "top-0 opacity-100 visible pointer-events-auto backdrop-blur-md"
          : "-top-[10%] opacity-0 invisible pointer-events-none"
      } sticky transition-all duration-300 ease-in`}
    >
      <div className="">
        <img src="/logo.svg" alt="my-logo" width={30} height={30} />
      </div>
      <ul className="list-none hidden md:flex flex-row items-center justify-between">
        {navItems.map((item) => (
          <li key={item.name} className="list-none px-4">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <a
        href="https://ik.imagekit.io/5kwcgtj3iv/images/Solomon_Owusu_Ansah_CV.pdf?updatedAt=1720100955055"
        download="https://ik.imagekit.io/5kwcgtj3iv/images/Solomon_Owusu_Ansah_CV.pdf?updatedAt=1720100955055"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="px-4 py-2 rounded-md border border-accent-foreground hidden md:flex"
        >
          Download CV
        </button>
      </a>
      <div className="flex md:hidden">
        {/* <NavDropDownMenu/> */}
        <NavDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
