import { useNavigate } from "react-router-dom";
import { respondTo } from "../../../utils/helpers/_respondTo";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import styled from "styled-components";
import Book from "./components/Book";
import Classroom from "./components/Classroom";

const Container = styled.div`
  width: 80%;
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

function HomeScreen() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <InnerContainer>
        <Book width={width} navigate={navigate} />
        <Classroom width={width} navigate={navigate} />
      </InnerContainer>
    </Container>
  );
}

export default HomeScreen;
