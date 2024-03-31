import styled from "styled-components";
import { useState } from "react";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { MenuSVG } from "../../static/svg/MenuSVG";

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: auto;
  svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  color: var(--white);
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;

  color: var(--white);
  padding: 0 5px 0 5px;
  transition: var(--trans, color 0.4s ease 0s);

  &:hover {
    color: var(--whiteWithOpacity);
  }
`;

// export menu
export const Menu = () => {
  // get window dimensions
  const { width } = useWindowDimensions();

  // hook for opening & closing sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      {/* If width is more than 800px show  */}
      {width > 800 ? (
        <InnerContainer>
          <Link href="/login">log in</Link>|
          <Link href="/register">register</Link>
        </InnerContainer>
      ) : (
        <>
          <MenuSVG toggle={toggle} />
          {isOpen && <p toggle={toggle}>sidebar</p>}
        </>
      )}
    </Container>
  );
};
