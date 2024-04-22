import styled from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteClassroom } from "../../../../toolkit/classroom/deleteSlice";
import { DispatchType, StateType } from "../../../../store/store";
import { useEffect } from "react";
import { reset } from "../../../../toolkit/classroom/deleteSlice";

const Container = styled.div`
  display: flex;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;

  border: none;
  border-radius: 20px;
  background-color: var(--magenta);

  color: white;
  font-size: var(--small-m);
  transition: all 0.4s ease 0s;

  ${respondTo.desktop`
    &:hover{
      background-color: var(--magentaWithOpacity);
      color:var(--whiteWithOpacity);
    }
  `};

  ${respondTo.tv`
    &:hover{
      background-color: var(--magentaWithOpacity);

      color:var(--whiteWithOpacity);
    }
  `};
`;
const Text = styled.p`
  cursor: pointer;
  margin-left: auto;
  align-self: center;

  color: var(--red);
  font-size: var(--small-l);
  text-decoration: underline;
  text-transform: capitalize;
  transition: all 0.4s ease 0s;

  ${respondTo.desktop`
    &:hover{
      color:var(--redWithOpacity);
    }
  `};

  ${respondTo.tv`
    &:hover{
        color:var(--redWithOpacity);
    }
  `};
`;

interface NavBarProps {
  id: string | undefined;
}

function NavBar({ id }: NavBarProps) {
  const navigate = useNavigate();
  const { success } = useSelector((state: StateType) => state.deleteClassroom);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    if (success) {
      navigate("/classroom");
    }
    return () => {
      dispatch(reset());
    };
  }, [success]);

  return (
    <Container>
      <Button onClick={() => navigate(`/classroom/${id}/students`)}>
        students
      </Button>
      <Text onClick={() => dispatch(deleteClassroom({ id }))}>
        delete classroom
      </Text>
    </Container>
  );
}

export default NavBar;
