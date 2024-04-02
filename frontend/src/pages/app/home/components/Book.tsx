import { useState, useEffect } from "react";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import styled, { css, keyframes } from "styled-components";
import book from "../../../../static/images/book.png";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemInnerContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  border-radius: 10%;
  border: 5px solid var(--primary);
  background-color: var(--primary);

  transition: all 0.4s ease 0s;

  &:hover {
    background-color: var(--magenta);
    border-color: var(--magenta);
  }
`;

/* animations */
// Slide in animation changing opacity from 0 to 1
const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Slide out animation changing opacity from 1 to 0
const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
`;

/* props */
// Text properties for styled component:
// Boolean animate to run either slide in or slide out
// Boolean showAnimation to not run animation on initial render
interface TextProps {
  $animate: boolean;
  $showAnimation: boolean;
}

// Styled text, initially not visible (opacity is 0) for large devices
const Text = styled.h1<TextProps>`
  margin: 10px 0;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--primary);
  opacity: 0;

  ${respondTo.tablet`
      opacity: 1;
    `}

  ${respondTo.smallTablet`
      opacity: 1;
    `}
  
    ${respondTo.mobile`
      opacity: 1;
    `}
  
    ${(props) =>
    props.$showAnimation &&
    (props.$animate
      ? css`
          opacity: 0;
          animation: ${slideIn} 0.3s ease-in-out forwards;
        `
      : css`
          animation: ${slideOut} 0.3s ease-in-out forwards;
        `)}
`;

const Image = styled.img`
  height: 300px;

  ${respondTo.mobile`
      height:250px;
    `}
`;

interface BookProps {
  width: number;
  navigate: (url: string) => void;
}

function Book({ width, navigate }: BookProps) {
  // Initial animation and animation boolean for book component
  const [isHoveredBook, setIsHoveredBook] = useState(false);
  const [showAnimationBook, setShowAnimationBook] = useState(false);

  /* use Effects to control initial render animations */
  useEffect(() => {
    // Set showAnimationBook true only if it is not initial render
    if (isHoveredBook && !showAnimationBook) setShowAnimationBook(true);
  }, [isHoveredBook, showAnimationBook]);

  /* mouse hover event listener function */
  const handleMouseEnterOnBook = () => {
    setIsHoveredBook(true);
  };

  const handleMouseLeaveOnBook = () => {
    setIsHoveredBook(false);
  };

  return (
    <ItemContainer>
      <Text
        $animate={isHoveredBook}
        $showAnimation={width > 1024 && showAnimationBook}
      >
        book
      </Text>
      <ItemInnerContainer
        onClick={() => navigate("/book")}
        onMouseEnter={handleMouseEnterOnBook}
        onMouseLeave={handleMouseLeaveOnBook}
      >
        <Image src={book} />
      </ItemInnerContainer>
    </ItemContainer>
  );
}

export default Book;
