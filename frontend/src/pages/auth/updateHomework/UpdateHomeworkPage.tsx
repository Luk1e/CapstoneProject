import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { UpdateForm } from "./components";

const Container = styled.div`
  display: flex;
  margin-top: 20vh;
  max-width: 1400px;
  flex-direction: column;

  ${respondTo.mobile`
    padding: 50px 0;
    margin-top:5vh;
  `}

  ${respondTo.tablet`
    width: 80%;
  `};

  ${respondTo.laptop`
    width: 80%;
  `};

  ${respondTo.desktop`
    width: 70%;
  `};

  ${respondTo.tv`
    width: 60%;
    margin-top: 10vh;
  `};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function UpdateHomeworkPage() {
  return (
    <Container>
      <InnerContainer>
        <UpdateForm />
      </InnerContainer>
    </Container>
  );
}

export default UpdateHomeworkPage;
