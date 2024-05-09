import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  min-width: 400px;
  min-height: 400px;
  margin: 10px;
`;

const InnerContainer = styled.div`
  display: flex;
  position: fixed;
  margin-top: 20vh;
  height: max-content;

  padding: 10px 0px 10px 40px;
  background-color: var(--secondary);

  .render {
    visibility: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  .show {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
    margin: 5px 20px 5px 20px;
  }

  &:empty {
    display: none;
  }
`;

const List = styled.ul`
  list-style: upper-roman;
`;

const ListElement = styled.li`
  cursor: pointer;
  font-size: var(--small-m);
  color: var(--whiteWithOpacity);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--white);
  }
`;

interface SideBarProps {
  empty?: boolean;
}

function SideBar({ empty }: SideBarProps) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <Container>
      <InnerContainer>
        {!empty && (
          <List>
            <ListElement
              onMouseEnter={() => setIsopen(true)}
              onMouseLeave={() => setIsopen(false)}
            >
              თეორიული ნაწილი
              <List className={`render ${isOpen ? "show" : undefined}`}>
                <ListElement>ფიზიკა ბავშვებისთვის</ListElement>
                <ListElement>ფიზიკა ფიზიკოსებისთვის</ListElement>
                <ListElement>ფიზიკის ფიზიკა</ListElement>
                <ListElement>სასწაული ფიზიკა</ListElement>
              </List>
            </ListElement>
            <ListElement>თავსატეხი</ListElement>
            <ListElement>ტესტები</ListElement>
          </List>
        )}
      </InnerContainer>
    </Container>
  );
}

export default SideBar;
