import styled from "styled-components";
import { useState } from "react";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { MenuSVG } from "../../static/svg/MenuSVG";
import PanelSVG from "../../static/svg/PanelSVG";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "../../store/store";
import { SideBar } from "./SideBar";
import TopBar from "./TopBar";

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  color: var(--white);
`;

const UserTextContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease 0s;

  svg {
    transition: all 0.4s ease 0s;
    stroke: var(--white);
    margin-left: 10px;
  }

  &:hover {
    color: var(--whiteWithOpacity);
    svg {
      stroke: var(--whiteWithOpacity);
    }
  }
`;

const UserText = styled.h2`
  font-size: var(--small-l);
  font-weight: normal;
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
  const authSlice = useSelector((state: StateType) => state.authentication);
  const { user } = authSlice;

  // hook for opening & closing sidebar
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  // hook for opening & closing topbar
  const [isOpenTopBar, setIsOpenTopBar] = useState<boolean>(false);

  return (
    <Container>
      {/* If width is more than 800px show  */}
      {width > 800 ? (
        <InnerContainer>
          {user ? (
            <UserTextContainer onClick={() => setIsOpenTopBar(!isOpenTopBar)}>
              <UserText> {user.firstName + " " + user.lastName}</UserText>
              <PanelSVG />
              {isOpenTopBar && <TopBar />}
            </UserTextContainer>
          ) : (
            <>
              <Link onClick={() => navigate("/login")}>log in</Link>|
              <Link onClick={() => navigate("/register")}>register</Link>
            </>
          )}
        </InnerContainer>
      ) : (
        <>
          <MenuSVG toggle={() => setIsOpenSideBar(!isOpenSideBar)} />
          {isOpenSideBar && (
            <SideBar
              toggle={() => setIsOpenSideBar(!isOpenSideBar)}
              user={user}
            />
          )}
        </>
      )}
    </Container>
  );
};
