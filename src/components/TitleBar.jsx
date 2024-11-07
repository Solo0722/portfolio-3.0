import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const TitleBar = ({ title }) => {
  return (
    <TitleWrapper title={title}>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  h2 {
    font-size: 1.4rem;
    margin: 1rem 0;
    position: relative;
    width: 100%;
    white-space: nowrap;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }
  h2::before {
    content: ${({title}) => title};
    position: absolute;
    top: 4px; /* Adjusts shadow position */
    left: 4px; /* Adjusts shadow position */
    color: rgba(0, 0, 0, 0.7); /* Darkened shadow color */
    z-index: -1; /* Places shadow behind the text */
  }
  // h2::after {
  //   content: "";
  //   display: block;
  //   position: relative;
  //   top: 0px;
  //   width: 300px;
  //   height: 1px;
  //   margin-left: 10px;
  //   background-color: rgba(230, 230, 255, 0.5);
  // }
`;

export default TitleBar;
