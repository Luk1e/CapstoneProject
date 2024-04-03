import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../store/store";
import { logout } from "../../toolkit/auth/authSlice";

const Container = styled.div`
  bottom: 0;
  width: 100%;
  position: absolute;
  transform: translateY(calc(100% + 35px));
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10%;
  flex-direction: column;
  background-color: var(--secondary);
`;

interface LinkProps {
  $logout?: boolean;
}

const Link = styled.a<LinkProps>`
  margin: 10px 0 10px 0;

  text-align: center;
  color: var(--white);
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.4s ease 0s;

  ${(props) => props.$logout && "border-top:1px solid white;padding-top:10px;"}

  &:hover {
    color: var(--whiteWithOpacity);
  }
`;

function TopBar() {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();

  return (
    <Container>
      <InnerContainer>
        <Link onClick={() => navigate("/book")}>book</Link>
        <Link onClick={() => navigate("/classroom")}>classroom</Link>
        <Link onClick={() => dispatch(logout())} $logout>
          log out
        </Link>
      </InnerContainer>
    </Container>
  );
}

export default TopBar;
