import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";
import RadioInputs from "./RadioInputs";

const Container = styled.div`
  width: 400px;

  ${respondTo.mobile`
      width:300px;
  `};

  ${respondTo.smallTablet`
      width:300px;
  `};

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
    width: 400px;
    padding: 10px 30px;

    font-size: var(--small-l);
    border-radius: 20px;
    outline: 1px solid var(--magenta);
  }

  ${respondTo.mobile`
    input {
      width:300px;
      color: var(--magenta);
    }
  `}

  ${respondTo.smallTablet`
    input {
      width:300px;
      color: var(--magenta);
    }
  `}
`;

// Export login inputs
function InputsTwo({ formik}:any) {
  return (
    <Container>
      <RadioInputs formik={formik} />
      <FormikControl
        control="input"
        type="password"
        label="password"
        name="password"
        placeholder={"password"}
        required
      />

      <FormikControl
        control="input"
        type="password"
        label="confirmPassword"
        name="confirmPassword"
        placeholder={"Confirm Password"}
        required
      />
    </Container>
  );
}

export default InputsTwo;