import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";
import { useState } from "react";
import { AttachFileSVG } from "../../../../static/svg";
import FileInput from "./FileInput";

const Container = styled.div`
  width: 400px;

  & > div {
    margin: 20px 0;

    /* color for error message */
    & div {
      color: var(--white);

      ${respondTo.mobile`
        color: var(--error);
      `};

      ${respondTo.smallTablet`
        color: var(--error);
      `};
    }
  }

  input,
  textarea {
    width: 400px;
    padding: 10px 30px;

    font-size: var(--small-m);
    border-radius: 20px;
    outline: 1px solid var(--magenta);

    &[type="number"] {
      width: 90px;
      display: flex;
      text-align: center;
      padding: 5px 20px;
    }
  }

  ${respondTo.mobile`
    width: 350px;
    input,textarea {
      width: 350px;
      color: var(--magenta);
    }
  `};

  ${respondTo.smallTablet`
   width: 350px;
    input,textarea {
      width:350px;
      color: var(--magenta);
    }
  `};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FileButtonContainer = styled.div`
  display: flex;
`;

const FileButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 10px;

  color: var(--white);
  font-size: var(--small-m);
  text-transform: capitalize;

  border: none;
  border-radius: 99px;
  background-color: var(--secondary);
  transition: all 0.4s ease 0s;

  svg {
    transition: all 0.4s ease 0s;
    fill: var(--white);
  }

  ${respondTo.desktop`
    &:hover{
      background-color: var(--secondaryWithOpacity);
      svg {
        fill: var(--whiteWithOpacity);
      }
    }
  `}

  ${respondTo.tv`
    &:hover{
      background-color: var(--secondaryWithOpacity);
      svg {
        fill: var(--whiteWithOpacity);
      }
    }
  `}
`;

function Inputs({ formik }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <FormikControl
        control="input"
        type="string"
        label="title"
        name="title"
        placeholder={"title..."}
        required
      />

      <FormikControl
        control="textarea"
        type="string"
        label="instruction"
        name="instruction"
        rows="3"
        placeholder={"instruction..."}
        required
      />

      <InputContainer>
        <FormikControl
          control="input"
          type="number"
          label="totalGrade"
          name="totalGrade"
          placeholder={"points"}
          required
        />

        <FileButtonContainer onClick={() => setIsOpen(!isOpen)}>
          <FileButton type="button">
            <AttachFileSVG />
          </FileButton>
        </FileButtonContainer>
      </InputContainer>

      {isOpen && <FileInput formik={formik} />}
    </Container>
  );
}

export default Inputs;
