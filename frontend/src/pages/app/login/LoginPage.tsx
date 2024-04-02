import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import LoginForm from "./components/LoginForm";

const Container = styled.div`
  padding: 100px 0;

  ${respondTo.mobile`
    padding: 50px 0;
  `}
  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  ${respondTo.tablet`
    flex-direction: column;
    gap:20px;
  `}

  ${respondTo.smallTablet`
    flex-direction: column;
    gap:20px;
  `}

  ${respondTo.mobile`
    flex-direction: column;
    gap:20px;
  `}
`;

function LoginPage() {
  return (
    <Container>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </Container>
  );
}

export default LoginPage;
