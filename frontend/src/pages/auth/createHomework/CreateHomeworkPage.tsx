import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { CreateForm } from "./components";

const Container = styled.div`
  display: flex;
  width: 90%;
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
    margin-top:10vh;
  `};
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function CreateHomeworkPage() {
  return (
    <Container>
      <InnerContainer>
        <CreateForm />
      </InnerContainer>
    </Container>
  );
}

export default CreateHomeworkPage;
