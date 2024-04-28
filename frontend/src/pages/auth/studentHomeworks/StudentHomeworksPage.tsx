import styled from "styled-components";
import { respondTo } from "../../../utils/helpers/_respondTo";
import { useParams } from "react-router-dom";
import { Homework, NavBar } from "./components";
import { useSelector } from "react-redux";
import { DispatchType, StateType } from "../../../store/store";
import { Loader } from "../../../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStudentHomeworks, reset } from "../../../toolkit/homework/getSlice";

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

const Label = styled.div`
  display: flex;
  margin: 40px 0 0 0;
`;

const NavContainer = styled.div``;

const Text = styled.p`
  color: var(--black);
  font-weight: 500;
  font-size: var(--small-l);
  text-transform: capitalize;

  &:not(:first-of-type) {
    margin-left: auto;
  }
`;

const ErrorText = styled.div`
  margin: 20px 10px;
  font-style: italic;
  color: var(--primary);
  font-size: var(--small-m);
`;

function StudentHomeworksPage() {
  const { id, homeworkId } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { isLoading, studentHomeworkList, error } = useSelector(
    (state: StateType) => state.getStudentHomeworks
  );

  useEffect(() => {
    dispatch(getStudentHomeworks({ classroomId: id, homeworkId: homeworkId }));

    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <Container>
      {isLoading && <Loader color="darkmagenta" />}

      <NavContainer className="w3-animate-left">
        <NavBar classroomId={id} homeworkId={homeworkId} />
      </NavContainer>

      {!isLoading && (
        <Label className="w3-animate-left">
          <Text>{studentHomeworkList?.title}</Text>
          <Text>Status</Text>
        </Label>
      )}

      {!isLoading &&
        (error ||
          (studentHomeworkList &&
            studentHomeworkList.studentHomeworkDTOS?.length == 0)) && (
          <ErrorText className="w3-animate-left">
            There are no homeworks
          </ErrorText>
        )}

      {!isLoading &&
        studentHomeworkList &&
        studentHomeworkList.studentHomeworkDTOS?.length > 0 &&
        studentHomeworkList.studentHomeworkDTOS?.map((homework, index) => (
          <Homework
            key={index}
            classroomId={id}
            homework={homework}
            homeworkId={homeworkId}
            totalGrade={studentHomeworkList.totalGrade}
          />
        ))}
    </Container>
  );
}
export default StudentHomeworksPage;
