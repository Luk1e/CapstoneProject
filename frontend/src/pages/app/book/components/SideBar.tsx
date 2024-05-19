import { useState, useEffect } from "react";
import styled from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  margin: 10px;
  min-width: 20vw;
  min-height: 400px;

  ${respondTo.mobile`
    margin:0;
    min-width:0vw;
  `};

  ${respondTo.smallTablet`
    margin:0;
    min-width:0vw;
  `};

  ${respondTo.tablet`
    min-width:10vw;
  `};

  ${respondTo.laptop`
    min-width:10vw;
  `};
`;

const InnerContainer = styled.div`
  display: flex;
  position: fixed;
  margin-top: 20vh;
  height: max-content;

  padding: 10px 0px 10px 40px;
  background-color: var(--secondary);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrolled > viewportHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // empty dependency array to run only once

  return (
    <Container>
      {!empty && isVisible && (
        <InnerContainer>
          <List className="w3-animate-right">
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
        </InnerContainer>
      )}
    </Container>
  );
}

export default SideBar;
