import styled from "styled-components";
import {
  acceptStudent,
  rejectStudent,
  removeStudent,
  StudentProps,
} from "../../../../toolkit/classroom/studentSlice";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../../../store/store";
import { respondTo } from "../../../../utils/helpers/_respondTo";

const Container = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;

  ${respondTo.mobile`
    border-radius: 99px;
    flex-direction: column;
    justify-content: center;
    background-color: var(--primary);
  `}

  ${respondTo.smallTablet`
    border-radius: 99px;
    flex-direction: column;
    justify-content: center;
    background-color: var(--primary);
  `}
`;

const UserText = styled.div`
  padding: 8px 20px;

  color: var(--white);
  border-radius: 99px;
  text-transform: capitalize;
  background-color: var(--primary);

  ${respondTo.mobile`
    background:transparent;
  `}

  ${respondTo.smallTablet`
    background:transparent;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;

  padding: 8px 20px;
  border-radius: 99px;
  background-color: var(--primary);

  ${respondTo.mobile`
    margin-left: 0;
    background:transparent;
  `}

  ${respondTo.smallTablet`
    margin-left: 0;
    background:transparent;
  `}
`;
const Button = styled.button`
  cursor: pointer;
  margin: 0 10px;
  height: 100%;
  padding: 5px 20px;

  color: var(--white);

  border: none;
  border-radius: 99px;
  transition: all 0.4s ease 0s;

  &:first-of-type {
    background-color: green;
  }

  &:last-of-type {
    background: var(--red);
  }

  &:hover {
    opacity: 0.8;
    color: var(--whiteWithOpacity);
  }

  ${respondTo.mobile`
    background:transparent;
  `}

  ${respondTo.smallTablet`
    background:transparent;
  `}
`;

interface StudentContainerProps {
  student: StudentProps;
  classroomId: string | undefined;
  key: number;
}

function StudentContainer({ student, classroomId }: StudentContainerProps) {
  const dispatch: DispatchType = useDispatch();
  return (
    <Container>
      <UserText>{student.firstName + " " + student.lastName}</UserText>
      <ButtonContainer>
        {student.status == "PENDING" ? (
          <>
            <Button
              onClick={() =>
                dispatch(
                  acceptStudent({
                    studentId: student.userId.toString(),
                    classroomId: classroomId,
                  })
                )
              }
            >
              accept
            </Button>
            <Button
              onClick={() =>
                dispatch(
                  rejectStudent({
                    studentId: student.userId.toString(),
                    classroomId: classroomId,
                  })
                )
              }
            >
              reject
            </Button>
          </>
        ) : (
          <Button
            onClick={() =>
              dispatch(
                removeStudent({
                  studentId: student.userId.toString(),
                  classroomId: classroomId,
                })
              )
            }
          >
            {" "}
            remove
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default StudentContainer;
