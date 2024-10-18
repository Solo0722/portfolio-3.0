/* eslint-disable react/prop-types */
const ParallaxSection = ({
  children,
  index,
  currentSection,
  totalSections,
}) => {
  // Calculate transform for reveal effect
  const calculateTransform = () => {
    const translateY = (index - currentSection) * 100;

    // Adjust scale based on the distance from the current section
    const scale = Math.max(0.5, 1 - Math.abs(currentSection - index) * 0.2); // Scale down to 0.5

    const zIndex = index <= currentSection ? totalSections - index : 0;

    // Adjust opacity based on distance; fade out sections that are far away
    const opacity = Math.max(0, 1 - Math.abs(currentSection - index) * 0.5); // Fade out sections further than 1

    return {
      transform: `translateY(${translateY}%) scale(${scale})`, // Apply scale for reveal effect
      zIndex,
      opacity, // Set opacity based on distance
    };
  };


  return (
    <div
      className="absolute inset-0 w-full h-full origin-top"
      style={{
        ...calculateTransform(),
        transition: "all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection
