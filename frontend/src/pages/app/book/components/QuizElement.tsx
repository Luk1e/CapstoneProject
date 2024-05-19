import styled from "styled-components";
import { QuestionProps } from "../../../../static/data/QuizData";
import { useState } from "react";

const Container = styled.div`
  padding: 10px;
`;
const Header = styled.h3`
  font-size: var(--medium-s);
`;

type AnswerType = {
  $color: string;
};

const AnswerContainer = styled.div``;

const Answer = styled.p<AnswerType>`
  cursor: pointer;
  max-width: max-content;
  padding: 5px 5px 5px 20px;
  color: var(--white);
  font-size: var(--small-m);
  color: ${(props) => props.$color};
  transition: color 0.2s ease 0s;

  &:hover {
    color: ${(props) => props.$color || "var(--whiteWithOpacity)"};
  }
`;

interface QuizElementProps {
  element: QuestionProps;
}

function QuizElement({ element }: QuizElementProps) {
  const { question, answers, indexOfCorrectAnswer } = element;
  const [clicked, SetClicked] = useState(-1);

  return (
    <Container>
      <Header>{question}</Header>

      {answers.map((answer, index) => (
        <AnswerContainer>
          <Answer
            key={index}
            onClick={() => SetClicked(index)}
            $color={
              clicked == index
                ? indexOfCorrectAnswer == index
                  ? "#11be25"
                  : "#ec1515"
                : ""
            }
          >
            {answer}
          </Answer>
        </AnswerContainer>
      ))}
    </Container>
  );
}

export default QuizElement;
