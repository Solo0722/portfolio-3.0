"use client";

import { FlipWords } from "../components/ui/flip-words";
import { COLORS, SOCIAL_MEDIA_LINKS } from "../lib/constants";
import { Icon } from "@iconify/react";
import animationData from "../assets/animation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const socialButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="flex flex-rol w-full h-screen items-center relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full h-full px-8 md:px-24 lg:px-36 -mt-20 flex flex-col justify-center items-center md:items-start">
        <motion.div
          className="tracking-wide font-bold pb-4"
          variants={itemVariants}
        >
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
        </motion.div>
        <motion.div
          className="animation-text w-full md:w-3/5 text-center md:text-left lg:text-left text-accent-foreground text-sm leading-loose"
          variants={itemVariants}
        >
          Hello there, I am <strong>Solomon</strong>, a software developer and
          data scientist from Ghana. Experienced in collaborating effectively
          with cross-functional teams to deliver high-quality solutions that
          meet user needs and enhance overall user experience. Possesses a
          strong understanding of both front-end and back-end development, along
          with expertise in data analysis techniques.
        </motion.div>
        <motion.div
          className="mt-5 flex flex-row gap-2"
          variants={itemVariants}
        >
          {SOCIAL_MEDIA_LINKS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialButtonVariants}
              custom={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="button animation-text p-4 rounded-md border border-accent-foreground hover:text-white hover:border-white">
                <Icon icon={item.icon} color={COLORS.TEXT_COLOR} />
              </button>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute top-[20%] right-[5%] -z-10 opacity-100 hidden md:flex"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
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
        />
      </motion.div>
    </motion.section>
  );
};

export default Landing;
