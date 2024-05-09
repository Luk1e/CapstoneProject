import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import BackgroundImagePath from "../../../static/images/book-background.jpg";
import { SideBar, Content } from "./components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  background-image: url(${BackgroundImagePath});
  background-repeat: repeat;
  background-size: 100%;
  ${respondTo.mobile`
    padding: 50px 0;
  `}

  ${respondTo.desktop`
  width: 100%;
  `}
`;

function BookPage() {
  return (
    <Container>
      <SideBar empty />
      <Content />
      <SideBar />
    </Container>
  );
}

export default BookPage;
