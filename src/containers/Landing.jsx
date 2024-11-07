import { FlipWords } from "../components/ui/flip-words";
import { COLORS, SOCIAL_MEDIA_LINKS } from "../lib/constants";
import { Icon } from "@iconify/react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import animationData from "../assets/animation.json";
import Lottie from "lottie-react";

const Landing = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(
      ".animation-text",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, stagger: 0.5 },
      "-=1"
    );

    tl.from(
      ".reveal-image",
      {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        duration: 1.5,
        ease: "power1.out",
      }
      // "+=1"
    );
  }, []);

  return (
    // <Parallax speed={-20}>
    <section
      id="home"
      className="flex flex-rol w-full h-screen items-center relative"
    >
      <div className="w-full h-full px-8 md:px-24 lg:px-36 -mt-20 flex flex-col justify-center items-center md:items-start">
        <div className="tracking-wide font-bold pb-4">
          <h1 className="animation-text text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left lg:text-left">
            Building{" "}
            <FlipWords
              words={["innovative", "creative", "beautiful", "real-world"]}
              className="headertext-clip animation-text"
            />
          </h1>
          <h1 className="animation-text text-5xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left lg:text-left">
            solutions with technology.
          </h1>
        </div>
        <div className="animation-text w-full md:w-3/5 text-center md:text-left lg:text-left text-accent-foreground text-sm leading-loose">
          Hello there, I am <strong>Solomon</strong>, a software developer and
          data scientist from Ghana. Experienced in collaborating effectively
          with cross-functional teams to deliver high-quality solutions that
          meet user needs and enhance overall user experience. Possesses a
          strong understanding of both front-end and back-end development, along
          with expertise in data analysis techniques
        </div>
        <div className="mt-5 flex flex-row gap-2">
          {SOCIAL_MEDIA_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`animation-text p-4 rounded-md border border-accent-foreground`}
              >
                <Icon icon={item.icon} color={COLORS.TEXT_COLOR} />
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute top-[20%] right-[5%] -z-10 opacity-100 hidden md:flex">
        <Lottie
          loop
          autoPlay
          autoplay
          animationData={animationData}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{
            width: 650,
            height: 650,
          }}
          // className="reveal-image"
        />
      </div>
    </section>
    // {/* </Parallax> */}
  );
};

export default Landing;
