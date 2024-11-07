
// eslint-disable-next-line react/prop-types
const TitleBar = ({ title1,title2 }) => {
  return (
    <h2 className="text-3xl font-extrabold mb-6">
      {title1}{" "} <span className="text-primary">{title2 }</span>
    </h2>
  );
};

export default TitleBar;
