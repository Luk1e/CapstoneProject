import styled from "styled-components";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import { SideBar, Content } from "./components";
import BackgroundImage from "../../../static/images/cover-photo.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: var(--magenta);
  background-image: url(${BackgroundImage});
`;

function BookPage() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <SideBar empty />
      <Content />
      <SideBar empty={width > 1600 ? false : true} />
    </Container>
  );
}

export default BookPage;
