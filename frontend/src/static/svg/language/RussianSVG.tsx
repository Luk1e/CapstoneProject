// Import styled component
import styled from "styled-components";

// Styled svg
const SVG = styled.svg`
  height: 24px;
  width: 24px;
`;

// Export Russian svg
const RussianSVG = () => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-ru"
      viewBox="0 0 640 480"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#0039a6" d="M0 160h640v320H0z" />
        <path fill="#d52b1e" d="M0 320h640v160H0z" />
      </g>
    </SVG>
  );
};

export default RussianSVG;