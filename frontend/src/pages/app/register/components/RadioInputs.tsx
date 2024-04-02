import { styled } from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import FormikControl from "../../../../components/formik/FormikControl";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const InnerContainer = styled.div`
  display: flex;

  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    display: none;
  }

  input[type="radio"]:checked + label {
    background-color: var(--magenta);
    color: var(--white);
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 10px 30px;

  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-size: var(--small-l);
  text-transform: capitalize;

  border-radius: 20px;
  outline: 1px solid var(--magenta);
  background-color: whitesmoke;
  transition: background 0.1s ease-in-out;

  &:last-of-type {
    margin-left: 1rem;
  }

  &:hover {
    color: var(--white);
    background: transparent;
  }

  ${respondTo.mobile`
    background-color:var(--whiteWithOpacity);

    &:hover {
      color: var(--black);
    }
  `}

  ${respondTo.smallTablet`
    background-color:var(--whiteWithOpacity);

    &:hover {
      color: var(--black);
    }
  `}
`;

// const ErrorContainer = styled.div``;

// const ErrorText = styled.p`
//   margin-left: 1rem;

//   color: var(--red);
//   font-size: var(--small-m);
//   text-transform: capitalize;
// `;

const Text = styled.p`
  text-align: center;
`;

// Export radio container
function RadioInputs() {
  const radioOptions = [
    {
      key: "True",
      value: "True",
      label: (
        <>
          <Label htmlFor="True">
            <Text>teacher</Text>
          </Label>
        </>
      ),
    },
    {
      key: "False",
      value: "False",
      label: (
        <>
          <Label htmlFor="False">
            <Text> student</Text>
          </Label>
        </>
      ),
    },
  ];
  return (
    <Container>
      <InnerContainer>
        <FormikControl
          control="radio"
          name="wants_delivery"
          options={radioOptions}
        />
      </InnerContainer>

      {/* <ErrorContainer>
        <ErrorText>{formik.errors["wants_delivery"]}</ErrorText>
      </ErrorContainer> */}
    </Container>
  );
}

export default RadioInputs;
