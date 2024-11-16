"use client";

import { useRef } from "react";
import { Briefcase, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import TitleBar from "../components/TitleBar";


const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="px-8 md:px-24 lg:px-36 py-12" id="experience" ref={ref}>
      <TitleBar title1="My" title2="Experiences" />
      <motion.div
        className="work-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div>
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="work-content_container group"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full justify-start items-center py-2">
                <motion.div
                  className="work-content_logo flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.type === "work" ? (
                    <Briefcase size={24} />
                  ) : (
                    <GraduationCap size={24} />
                  )}
                </motion.div>
                <div className="work-content_bar" />
              </div>

              <div className="sm:p-5 px-2.5 py-5">
                <motion.p
                  className="font-bold text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.jobTitle}
                </motion.p>
                <motion.p
                  className="text-sm mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.organisation}
                </motion.p>
                <motion.ul className="list-disc pl-5 group-hover:text-white transition-all ease-in-out duration-500">
                  {item.workDone.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  className="mt-5 flex flex-row gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xs text-gray-400 flex items-center">
                    <CalendarDays size={14} className="mr-1" /> {item.duration}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center">
                    <MapPin size={14} className="mr-1" /> {item.location}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const experiences = [
  {
    organisation: "SpringKnight Limited",
    duration: "Sep. 2024 - Present",
    jobTitle: "Software Developer (FullTime - Remote)",
    location: "London, United Kingdom",
    workDone: [
      "Feature Implementation: Implemented a generic exam feature in both the mobile and web app of a school management system, SchoolDesk, allowing users to create, manage, and take exams efficiently. Developed and integrated a messaging system within the app to facilitate communication between users, enhancing the overall user experience.",
      "Bug Fixes: Identified and resolved various bugs and issues in the mobile and web applications, contributing to the overall stability and performance of the systems. Collaborated with the development team to implement timely bug fixes, ensuring a smooth user experience for both platforms.",
      "App Testing: Conducted thorough testing of both mobile and web applications to identify and report bugs and inconsistencies. Developed and executed test cases, ensuring the reliability and functionality of implemented features.",
      "User Training: Conducted training sessions for schools on how to effectively use the mobile and web app systems. Provided detailed instructions and guidance to users, ensuring they were proficient in utilizing the features and functionalities of the applications.",
      "Collaboration with Teams: Collaborated with cross-functional teams, including designers and other developers, to ensure a cohesive and integrated user experience across both platforms. Engaged in regular communication to address challenges, provide updates, and coordinate feature implementations and bug fixes.",
    ],
    type: "work",
  },
  {
    organisation: "Asqii LLC.",
    duration: "Sep. 2023 - Jan. 2024",
    jobTitle: "Mobile Developer (Internship - Remote)",
    location: "London, United Kingdom",
    workDone: [
      "Feature Implementation: Implemented a generic exam feature in both the mobile and web app of a school management system, SchoolDesk, allowing users to create, manage, and take exams efficiently. Developed and integrated a messaging system within the app to facilitate communication between users, enhancing the overall user experience.",
      "Bug Fixes: Identified and resolved various bugs and issues in the mobile and web applications, contributing to the overall stability and performance of the systems. Collaborated with the development team to implement timely bug fixes, ensuring a smooth user experience for both platforms.",
      "App Testing: Conducted thorough testing of both mobile and web applications to identify and report bugs and inconsistencies. Developed and executed test cases, ensuring the reliability and functionality of implemented features.",
      "User Training: Conducted training sessions for schools on how to effectively use the mobile and web app systems. Provided detailed instructions and guidance to users, ensuring they were proficient in utilizing the features and functionalities of the applications.",
      "Collaboration with Teams: Collaborated with cross-functional teams, including designers and other developers, to ensure a cohesive and integrated user experience across both platforms. Engaged in regular communication to address challenges, provide updates, and coordinate feature implementations and bug fixes.",
    ],
    type: "work",
  },
  {
    organisation: "JLS Trading Co.",
    duration: "Sep. 2022 - Dec. 2022",
    jobTitle: "Frontend Developer (Internship - Remote)",
    location: "Charlotte, North Carolina, USA",
    workDone: [
      "Quality Assurance (QA), Testing and Debugging: Conducted thorough testing of the inventory app built to identify and report and debug bugs. Collaborated with other developers to prioritise and address identified issues.",
      "Backend integration: Worked on integrating backend data into the inventory web app, ensuring seamless communication between the frontend and backend components. Implemented data retrieval and display functionalities, transforming raw data into a user-friendly format for the inventory list.",
      "Communication and Collaboration: Engaged in regular communication with cross-functional teams, including developers, designers, and project managers, to ensure alignment on project goals.",
    ],
    type: "work",
  },
  {
    organisation: "JLS Trading Co.",
    duration: "Sep. 2021 - Dec. 2021",
    jobTitle: "Frontend Developer (Internship - Remote)",
    location: "Charlotte, North Carolina, USA",
    workDone: [
      "Communication and Collaboration: Engaged in regular communication with cross-functional teams, including developers, designers, and project managers, to ensure alignment on project goals.",
      "UI features implementation: Worked on implementing frontend features in the Feature Tracker application.",
    ],
    type: "work",
  },
  {
    organisation: "KNUST",
    duration: "Jan. 2021 - Sep. 2024",
    jobTitle: "Bachelor's Degree in Computer Engineering",
    location: "KNUST - Kumasi Campus",
    workDone: [
      "Pursued a degree in Computer Engineering, where I excelled and maintained a position on the Provost's Academic Excellence List each year.",
    ],
    type: "school",
  },
];

export default Experience;
