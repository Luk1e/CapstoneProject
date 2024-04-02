import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";

const Container = styled.div`
  width: 400px;

  ${respondTo.mobile`
    width:300px;
  `};

  ${respondTo.smallTablet`
    width:300px;
  `};

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
function InputsOne() {
  return (
    <Container>
      <FormikControl
        control="input"
        type="text"
        label="First Name"
        name="firstName"
        placeholder={"First Name"}
        required
      />

      <FormikControl
        control="input"
        type="text"
        label="Last Name"
        name="lastName"
        placeholder={"Last Name"}
        required
      />

      <FormikControl
        control="input"
        type="email"
        label="Email"
        name="email"
        placeholder={"email"}
        required
      />
    </Container>
  );
}

export default InputsOne;
