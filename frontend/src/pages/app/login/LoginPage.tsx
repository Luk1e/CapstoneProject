import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import { StateType } from "../../../store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;

  ${respondTo.mobile`
    padding: 50px 0;
  `}
  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
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
  const navigate = useNavigate();
  const authSlice = useSelector((state: StateType) => state.authentication);
  const { user } = authSlice;

  // If user is already authenticated navigate to main page
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <Container>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </Container>
  );
}

export default LoginPage;
