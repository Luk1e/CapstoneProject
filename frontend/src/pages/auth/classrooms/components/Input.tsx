import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";

const Container = styled.div`
  & > div:not(:first-child) {
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

  input {
    width: 300px;
    padding: 8px 20px;

    font-size: var(--small-m);
    border-radius: 20px;
    outline: 1px solid var(--magenta);
  }

  ${respondTo.mobile`
    input {
      width:100%;
      color: var(--magenta);
    }
  `}

  ${respondTo.smallTablet`
    input {
      width:200px;
      color: var(--magenta);
    }
  `}
`;

// Export classroom name input
function Input() {
  return (
    <Container>
      <FormikControl
        control="input"
        type="text"
        label="name"
        name="name"
        placeholder={"classroom name"}
        required
      />
    </Container>
  );
}

export default Input;
