import styled from "styled-components";

const Container = styled.li`
  & > a {
    text-decoration: none;
    display: grid;
    grid-template-columns: auto max-content;
    align-items: end;
  }
`;

const InnerContainer = styled.a``;

const Title = styled.span`
  position: relative;
  overflow: hidden;
`;

const PageContainer = styled.span`
  min-width: 2ch;
  font-variant-numeric: tabular-nums;
  text-align: right;
`;

const PageDetails = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const Dots = styled.span`
  &::after {
    position: absolute;
    padding-inline-start: 0.25ch;
    content: " . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . . . . ";
    text-align: right;
  }
`;

interface ListElementProps {
  title: string;
  path: string;
  page: number;
}
function ListElement({ title, path, page }: ListElementProps) {
  return (
    <Container>
      <InnerContainer href={`#${path}`}>
        <Title>
          {title}
          <Dots aria-hidden="true"></Dots>
        </Title>{" "}
        <PageContainer data-href={`#${path}`}>
          <PageDetails>Page&nbsp;</PageDetails>
          {page}
        </PageContainer>
      </InnerContainer>
    </Container>
  );
}

export default ListElement;
