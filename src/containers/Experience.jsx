import { Parallax } from "react-scroll-parallax";


const Experience = () => {
  return (
    <Parallax speed={40}>
      <section className="px-8 md:px-24 lg:px-36 my-20" id="work">
        <p className="head-text">My Work Experience</p>
        <div className="work-content">
          <div className="">
            {experiences.map((item, index) => (
              <div
                key={index}
                // onClick={() => setAnimationName(item.animation.toLowerCase())}
                // onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                // onPointerOut={() => setAnimationName("idle")}
                className="work-content_container group"
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src={item.icon} alt="" />
                  </div>

                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{item.title}</p>
                  <p className="text-sm mb-5">
                    {item.pos} -- <span>{item.duration}</span>
                  </p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">
                    {item.workDone.join(`\n`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
}

export const experiences = [
  {
    title: "Sep. 2024 - Present",
    jobTitle: "(FullTime - Remote) Software Developer at SpringKnight Ltd.",
    location: "London, United Kingdom",
    workDone: ["Feature Implementation: Implemented a generic exam feature in both the mobile and web app of a school management system,SchoolDesk, allowing users to create, manage, and take exams efficiently. Developed and integrated a messaging system within the app to facilitate communication between users, enhancing the overall user experience.","Bug Fixes: Identified and resolved various bugs and issues in the mobile and web applications, contributing to the overall stability and performance of the systems. Collaborated with the development team to implement timely bug fixes, ensuring a smooth user experience for both platforms.","App Testing: Conducted thorough testing of both mobile and web applications to identify and report bugs and inconsistencies. Developed and executed test cases, ensuring the reliability and functionality of implemented features.","User Training: Conducted training sessions for schools on how to effectively use the mobile and web app systems.Provided detailed instructions and guidance to users, ensuring they were proficient in utilizing the features and functionalities of the applications.","Collaboration with Teams: Collaborated with cross-functional teams, including designers and other developers, to ensure a cohesive and integrated user experience across both platforms. Engaged in regular communication to address challenges, provide updates, and coordinate feature implementations and bug fixes."],
    content: <></>,
  },
  {
    title: "Sep. 2023 - Jan. 2024",
    jobTitle: "(Internship - Remote) Mobile Developer at Asqii LLC.",
    location: "London, United Kingdom",
    workDone: ["Feature Implementation: Implemented a generic exam feature in both the mobile and web app of a school management system,SchoolDesk, allowing users to create, manage, and take exams efficiently. Developed and integrated a messaging system within the app to facilitate communication between users, enhancing the overall user experience.","Bug Fixes: Identified and resolved various bugs and issues in the mobile and web applications, contributing to the overall stability and performance of the systems. Collaborated with the development team to implement timely bug fixes, ensuring a smooth user experience for both platforms.","App Testing: Conducted thorough testing of both mobile and web applications to identify and report bugs and inconsistencies. Developed and executed test cases, ensuring the reliability and functionality of implemented features.","User Training: Conducted training sessions for schools on how to effectively use the mobile and web app systems.Provided detailed instructions and guidance to users, ensuring they were proficient in utilizing the features and functionalities of the applications.","Collaboration with Teams: Collaborated with cross-functional teams, including designers and other developers, to ensure a cohesive and integrated user experience across both platforms. Engaged in regular communication to address challenges, provide updates, and coordinate feature implementations and bug fixes."],
    content: <></>,
  },
  {
    title: "Sep. 2022 - Dec. 2022",
    jobTitle: "(Internship - Remote) Frontend Developer at JLS Trading Co.",
    location: "Charlotte, North Carolina, USA",
    workDone: ["Quality Assurance (QA), Testing and Debugging: Conducted thorough testing of the inventory app built to identify and report and debug bugs. Collaborated with other developers to prioritise and address identified issues.","Backend integration: Worked on integrating backend data into the inventory web app, ensuring seamless communication between the frontend and backend components. Implemented data retrieval and display functionalities, transforming raw data into a user-friendly format for the inventory list.","Communication and Collaboration: Engaged in regular communication with cross-functional teams, including developers, designers, and project managers, to ensure alignment on project goals."],
    content: <></>,
  },
  {
    title: "Sep. 2021 - Dec. 2021",
    jobTitle: "(Internship - Remote) Frontend Developer at JLS Trading Co.",
    location: "Charlotte, North Carolina, USA",
    workDone: ["Communication and Collaboration: Engaged in regular communication with cross-functional teams, including developers, designers, and project managers, to ensure alignment on project goals.","UI features implementation: Worked on implementing frontend features in the Feature Tracker applicaiton"],
    content: <></>,
  },
  {
    title: "Jan. 2021 - Sep. 2024",
    jobTitle: "Bachelor's Degree in Computer Engineering, KNUST",
    location: "KNUST - Kumasi Campus",
    workDone: [""],
    content: <></>,
  },
];


export default Experience