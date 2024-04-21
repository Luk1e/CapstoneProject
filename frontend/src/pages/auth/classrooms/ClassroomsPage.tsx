import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { CreateClassroom, JoinClassroom, Classroom } from "./components";
import { Loader } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../../store/store";
import { useEffect } from "react";
import { getClassrooms, reset } from "../../../toolkit/classroom/getAllSlice";
import { ErrorSVG } from "../../../static/svg";

const Container = styled.div`
  width: 80%;
  display: flex;
  padding: 100px 0;
  flex-direction: column;

  ${respondTo.mobile`
    padding: 50px 0;
  `}
  ${respondTo.desktop`
    width: 70%;
  `}

  ${respondTo.tv`
    width: 60%;
  `}
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  ${respondTo.tablet`
    flex-direction: column;
  `}

  ${respondTo.smallTablet`
    flex-direction: column;
  `}

  ${respondTo.mobile`
    flex-direction: column;
  `}
`;

const ClassroomContainer = styled.div`
  display: grid;
  margin: 40px 0;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  ${respondTo.desktop`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}

  ${respondTo.tv`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;

const ErrorContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: max-content;
  align-items: center;
  justify-content: center;
  padding: 10px 30px 10px 20px;

  text-align: center;
  color: var(--white);
  border-radius: 99px;
  font-size: var(--small-m);
  background-color: var(--red);

  & svg {
    stroke: var(--white);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
`;

function ClassroomsPage() {
  const dispatch: DispatchType = useDispatch();
  const authSlice = useSelector((state: StateType) => state.authentication);
  const { user } = authSlice;

  const classroomSlice = useSelector((state: StateType) => state.getClassrooms);
  const { classroomList, isLoading, error } = classroomSlice;

  useEffect(() => {
    dispatch(getClassrooms());
    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <Container>
      <HeaderContainer>
        {/* Join | Create classroom component */}
        {user && user.status === "TEACHER" ? (
          <CreateClassroom />
        ) : (
          <JoinClassroom />
        )}
      </HeaderContainer>

      <ClassroomContainer className="w3-animate-left">
        {/* Error component */}
        {error && !isLoading && (
          <ErrorContainer className="w3-animate-left">
            <IconContainer>
              <ErrorSVG />
            </IconContainer>
            {error}
          </ErrorContainer>
        )}

        {/* Loader | Classroom list component */}
        {isLoading ? (
          <Loader color={"darkmagenta"} />
        ) : classroomList ? (
          classroomList.map((classroom) => (
            <Classroom
              key={classroom.classroomId}
              id={classroom.classroomId}
              name={classroom.name}
            />
          ))
        ) : (
          <></>
        )}
      </ClassroomContainer>
    </Container>
  );
}

export default ClassroomsPage;
