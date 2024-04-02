// Import styles
import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { NavigateFunction } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  cursor: pointer;
  min-width: 100%;
  padding: 10px 30px;
  margin-bottom: 10px;

  border: none;
  border-radius: 20px;
  background-color: var(--magenta);

  color: white;
  font-size: var(--small-l);
  transition: all 0.4s ease 0s;

  ${respondTo.desktop`
    &:hover{
      background-color: var(--magentaWithOpacity);
      color:var(--whiteWithOpacity);
    }
  `}

  ${respondTo.tv`
    &:hover{
      background-color: var(--magentaWithOpacity);

      color:var(--whiteWithOpacity);
    }
  `}
`;

const StyledText = styled.p`
  text-align: center;
  color: var(--whiteWithOpacity);

  ${respondTo.mobile`
    color: var(--magenta);
  `}

  ${respondTo.smallTablet`
    color: var(--magenta);
  `}
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: var(--whiteWithOpacity);
  text-transform: capitalize;
  transition: all 0.4s ease 0s;

  ${respondTo.mobile`
    color: var(--magentaWithOpacity);
  `}

  ${respondTo.smallTablet`
    color: var(--magentaWithOpacity);
  `}

  ${respondTo.desktop`
    &:hover{
      color: var(--white);
  }
`}

  ${respondTo.tv`
    &:hover{
      color:var(--white);
  }
`}
`;

interface ButtonsProps {
  navigate: NavigateFunction;
  isFirstPage: boolean;
  setIsFirstPage: () => void;
}

function Buttons({ navigate, isFirstPage, setIsFirstPage }: ButtonsProps) {
  return (
    <ButtonContainer>
      {isFirstPage ? (
        <StyledButton onClick={() => setIsFirstPage()}>next</StyledButton>
      ) : (
        <StyledButton type="submit">register</StyledButton>
      )}
      <StyledText>
        Already have an account?{" "}
        <StyledLink onClick={() => navigate("/login")}>log in</StyledLink>
      </StyledText>
    </ButtonContainer>
  );
}

export default Buttons;
