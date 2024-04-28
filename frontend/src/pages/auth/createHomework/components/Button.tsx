// Import styles
import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  cursor: pointer;
  min-width: 100%;
  margin-bottom: 10px;
  border: none;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: var(--magenta);

  color: white;
  font-size: var(--small-l);
  transition: all 0.4s ease 0s;

  ${respondTo.desktop`
    &:hover{
      color:var(--whiteWithOpacity);
      background-color: var(--magentaWithOpacity);
    }
  `}

  ${respondTo.tv`
    &:hover{
      color:var(--whiteWithOpacity);
      background-color: var(--magentaWithOpacity);
    }
  `}

  &:disabled {
    color: var(--whiteWithOpacity);
    background-color: var(--magentaWithOpacity);
  }
`;

interface ButtonsProps {
  isLoading: boolean;
}

function Button({ isLoading }: ButtonsProps) {
  return (
    <ButtonContainer>
      <StyledButton type="submit" disabled={isLoading}>
        submit
      </StyledButton>
    </ButtonContainer>
  );
}

export default Button;
