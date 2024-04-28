import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { CreateForm } from "./components";

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
