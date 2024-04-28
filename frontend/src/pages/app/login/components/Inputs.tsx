import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";

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

  input {
    width: 400px;
    padding: 10px 30px;

    font-size: var(--small-l);
    border-radius: 20px;
    outline: 1px solid var(--magenta);
  }

  ${respondTo.mobile`
    width: 350px;
    input {
      width: 350px;
      color: var(--magenta);
    }
  `};

  ${respondTo.smallTablet`
   width: 350px;
    input {
      width:350px;
      color: var(--magenta);
    }
  `};
`;

// Export login inputs
function Inputs() {
  return (
    <Container>
      <FormikControl
        control="input"
        type="email"
        label="email"
        name="email"
        placeholder={"email"}
        required
      />

      <FormikControl
        control="input"
        type="password"
        label="password"
        name="password"
        placeholder={"password"}
        required
      />
    </Container>
  );
}

export default Inputs;
