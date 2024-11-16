import { useState } from "react";
import Globe from "react-globe.gl";
import { Parallax } from "react-scroll-parallax";
import { InfiniteMovingIcons } from "../components/ui/infinite-moving-icons";
import { skillset } from "../lib/constants";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("owusuansahsolomon39@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

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
        damping: 12,
      },
    },
  };

  return (
    <Parallax speed={0}>
      <motion.section
        className="px-8 md:px-24 lg:px-36 pb-12"
        id="about"
        initial="hidden"
        animate={"visible"}
        variants={containerVariants}
      >
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <motion.div
            className="about-card col-span-1 xl:row-span-3"
            variants={itemVariants}
          >
            <div className="grid-container">
              <motion.img
                src="assets/my-image.jpg"
                alt="Solomon Owusu-Ansah"
                className="w-full sm:h-[276px] h-fit object-cover rounded-lg"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div>
                <p className="grid-headtext">
                  Hi, I&apos;m{" "}
                  <span className="headertext-clip">Solomon Owusu-Ansah</span>
                </p>
                <p className="grid-subtext">
                  I&apos;m a full-stack developer and data scientist with 4+
                  years of experience building user-focused web and mobile
                  applications. Skilled in both front-end and back-end, I thrive
                  in collaborative, fast-paced environments.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-card col-span-1 xl:row-span-3"
            variants={itemVariants}
          >
            <div className="grid-container">
              <motion.img
                src="assets/grid2.png"
                alt="Tech Stack"
                className="w-full sm:h-[276px] h-fit object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I utilize several tools and technologies in my work that
                  enhance my productivity and streamline my processes. I often
                  rely on a variety of programming languages to build efficient
                  and scalable applications. My workflow is supported by
                  frameworks that help me develop applications faster and more
                  effectively.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-card col-span-1 xl:row-span-4"
            variants={itemVariants}
          >
            <div className="grid-container">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 6.665375939298735,
                      lng: -1.604744744154722,
                      text: "Kumasi, Ghana",
                      color: "green",
                      size: 30,
                    },
                  ]}
                />
              </div>
              <div>
                <p className="grid-headtext">
                  I&apos;m very flexible with time zone communications & locations
                </p>
                <p className="grid-subtext">
                  I&apos;m based in Kumasi, Ghana and open to remote and onsite
                  work worldwide.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full mt-10">Contact Me</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-card xl:col-span-2 xl:row-span-3"
            variants={itemVariants}
          >
            <div className="grid-container">
              <motion.img
                src="assets/grid3.png"
                alt="Coding Passion"
                className="w-full sm:h-[266px] h-fit object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  Coding has been a defining passion throughout my academic and
                  professional journey. I discovered early on that programming
                  is more than just writing code—it&apos;s a tool for creating
                  solutions and bringing ideas to life. My journey began with a
                  deep interest in technology, which led me to pursue a degree
                  in Computer Engineering, where I excelled and maintained a
                  position on the Provost&apos;s Academic Excellence List each year.
                  As I continue to develop my skills, my passion for coding
                  remains as strong as ever, motivating me to push boundaries
                  and learn something new every day.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-card xl:col-span-1 xl:row-span-2"
            variants={itemVariants}
          >
            <div className="grid-container">
              <motion.img
                src="assets/grid4.png"
                alt="Contact"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <motion.div
                  className="copy-container"
                  onClick={handleCopy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hasCopied ? <Check /> : <Copy />}
                  <p className="grid-subtext lg:text-2xl md:text-x">
                    owusuansahsolomon39@gmail.com
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <InfiniteMovingIcons items={skillset} speed="slow" direction="left" />
        </motion.div>
      </motion.section>
    </Parallax>
  );
};

export default About;
