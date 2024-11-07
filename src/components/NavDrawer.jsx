import { useLayoutEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { navItems } from "../lib/constants";

function NavDrawer() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    // tl.fromTo(".animation-nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".animation-navLink",
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, stagger: 0.25 },
      "-=1"
    );
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul>
          {navItems.map((navLink) => (
            <SheetClose asChild key={navLink.name}>
              <li className="animation-navLink">
                <a href={navLink.link}>
                  <p>{navLink.name}</p>
                </a>
              </li>
            </SheetClose>
          ))}
          <li className="animation-navLink">
            <a
              href="https://ik.imagekit.io/5kwcgtj3iv/images/Solomon_Owusu_Ansah_CV.pdf?updatedAt=1720100955055"
              download={true}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="primary"
                style={{ fontSize: 12 }}
                className="css-button-sliding-to-left--black"
              >
                Download CV
              </Button>
            </a>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
export default NavDrawer;
