import { Parallax } from "react-scroll-parallax";
import { FlipWords } from "../components/ui/flip-words";
import { COLORS, SOCIAL_MEDIA_LINKS } from "../lib/constants";
import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <Parallax speed={-20}>
      <section className="flex flex-rol w-full h-screen items-center relative">
        <div className="w-full h-full px-8 md:px-24 lg:px-36 pt-20 flex flex-col justify-center">
          <div className="tracking-wide font-bold pb-4">
            <h1 className="text-[40px] md:text-6xl lg:text-7xl font-extrabold">
              Building{" "}
              <FlipWords
                words={["innovative", "creative", "beautiful", "real-world"]}
                className="headertext-clip"
              />
            </h1>
            <h1 className="text-[40px] md:text-6xl lg:text-7xl font-extrabold">
              solutions with technology.
            </h1>
          </div>
          <div className="w-3/5 text-accent-foreground text-sm leading-loose">
            Hello there, I am <strong>Solomon</strong>, a software developer and
            data scientist from Ghana. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Facilis mollitia, nesciunt eveniet ut enim
            incidunt quidem.
          </div>
          <div className="mt-5 flex flex-row gap-2">
            {SOCIAL_MEDIA_LINKS.map((item) => (
              <button
                key={item.name}
                href={item.link}
                className="p-4 rounded-md border border-accent-foreground"
              >
                <Icon icon={item.icon} color={COLORS.TEXT_COLOR} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Landing;
