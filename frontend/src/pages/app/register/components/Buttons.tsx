// import styles
import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { NavigateFunction } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDivButton = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  text-align: center;
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
  `};

  ${respondTo.tv`
    &:hover{
      background-color: var(--magentaWithOpacity);

      color:var(--whiteWithOpacity);
    }
  `};

  &:disabled {
    color: var(--whiteWithOpacity);
    background-color: var(--magentaWithOpacity);
  }
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
  `};

  ${respondTo.tv`
    &:hover{
      background-color: var(--magentaWithOpacity);

      color:var(--whiteWithOpacity);
    }
  `};

  &:disabled {
    color: var(--whiteWithOpacity);
    background-color: var(--magentaWithOpacity);
  }
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
  isLoading: boolean;
}

function Buttons({
  navigate,
  isFirstPage,
  setIsFirstPage,
  isLoading,
}: ButtonsProps) {
  return (
    <ButtonContainer >
      {isFirstPage ? (
        <StyledDivButton onClick={() => setIsFirstPage()}>next</StyledDivButton>
      ) : (
        <StyledButton type="submit" disabled={isLoading}>
          register
        </StyledButton>
      )}
      <StyledText>
        Already have an account?{" "}
        <StyledLink onClick={() => navigate("/login")}>log in</StyledLink>
      </StyledText>
    </ButtonContainer>
  );
}

export default Buttons;
