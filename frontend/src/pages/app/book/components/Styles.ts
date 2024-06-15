import styled from "styled-components";

export const Header = styled.h2`
  margin-top: 50px;
  text-align: center;
`;
export const SubHeader = styled.h3`
  text-align: center;
  margin: 20px 0;
`;

export const Text = styled.p`
  text-align: justify;
  color: var(--whiteWithOpacity);
  &::first-letter {
    margin-left: 20px;
  }
`;

export const List = styled.ol`
  text-align: justify;
`;

export const ListHeader = styled.h4`
  color: var(--whiteWithOpacity);
`;

export const ListElement = styled.li`
  margin: 10px;
  color: var(--whiteWithOpacity);
`;

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
