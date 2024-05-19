import styled from "styled-components";
import quizData from "../../../../static/data/QuizData";
import QuizElement from "./QuizElement";
const Container = styled.div``;
const QuizHeader = styled.h1`
  padding-top: 20px;
  text-align: center;
  font-size: var(--medium-l);
`;

const QuizSubHeader = styled.h2`
  text-align: center;
  font-size: var(--medium-m);
`;
const QuizContainer = styled.div``;
function Quiz() {
  return (
    <Container>
      <QuizHeader>ტესტები</QuizHeader>
      {quizData.map((element, quizIndex) => (
        <QuizContainer key={quizIndex}>
          <QuizSubHeader id={element.href}>{element.header}</QuizSubHeader>
          {element.questions.map((question, index) => (
            <QuizElement key={index} element={question} />
          ))}
        </QuizContainer>
      ))}
    </Container>
  );
}

export default Quiz;
