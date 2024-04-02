import styled from "styled-components";
import { useState } from "react";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { MenuSVG } from "../../static/svg/MenuSVG";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;

  color: var(--white);
  padding: 0 5px 0 5px;
  transition: color 0.4s ease 0s;

  &:hover {
    color: var(--whiteWithOpacity);
  }
`;

// export menu
export const Menu = () => {
  // get window dimensions
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  // hook for opening & closing sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      {/* If width is more than 800px show  */}
      {width > 800 ? (
        <InnerContainer>
          <Link onClick={() => navigate("/login")}>log in</Link>|
          <Link onClick={() => navigate("/register")}>register</Link>
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
