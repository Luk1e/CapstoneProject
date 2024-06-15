import { useState } from "react";
import styled from "styled-components";

const Container = styled.li`
  color: var(--whiteWithOpacity);
  & a {
    text-decoration: none;
  }
`;

const List = styled.ol`
  list-style: upper-roman;
`;

const ListElement = styled.li`
  cursor: pointer;
  font-size: var(--small-m);
  color: var(--whiteWithOpacity);
  transition: all 0.2s ease-in-out;
  max-width: 300px;
  &:hover {
    color: var(--white);
  }
`;

interface ListItem {
  title: string;
  path: string;
}

interface SideBarItemProps {
  id: string;
  header: string;
  ListItems: ListItem[];
}

function SideBarItem({ id, header, ListItems }: SideBarItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={`#${id}`}>{header}</a>
      <List className={`render ${isOpen ? "show" : undefined}`}>
        {ListItems.map((listItem) => (
          <ListElement key={listItem.title}>
            <a href={`#${listItem.path}`}> {listItem.title}</a>
          </ListElement>
        ))}
      </List>
    </Container>
  );
}

export default SideBarItem;
