import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { useParams } from "react-router-dom";
import { NavBar } from "./components";
import { useSelector } from "react-redux";
import { StateType } from "../../../store/store";
const Container = styled.div`
  width: 80%;
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
const NavContainer = styled.div``;
function ClassroomPage() {
  const { id } = useParams();
  const { user } = useSelector((state: StateType) => state.authentication);

  return (
    <Container>
      {user && user.status === "TEACHER" && (
        <NavContainer className="w3-animate-left">
          <NavBar id={id} />
        </NavContainer>
      )}
      ClassroomPage
    </Container>
  );
}

export default ClassroomPage;
