import styled from "styled-components";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { useState } from "react";
import { Formik, Form } from "formik";
import { ZodError } from "zod";
import { DispatchType, StateType } from "../../../../store/store";
import {
  initialValues,
  validationSchema,
  FormValues,
  onSubmit,
} from "../values";
import { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../../../toolkit/classroom/enrollSlice";
import { ErrorSVG } from "../../../../static/svg";

const Container = styled.div`
  width: 100%;
  display: flex;

  ${respondTo.mobile`
    flex-direction: column;
  `};

  ${respondTo.smallTablet`
    flex-direction: column;
  `};

  ${respondTo.tablet`
    flex-direction: column;
  `};
`;

const InnerContainer = styled.div`
  display: flex;
  width: max-content;
  max-width: 100%;
  padding: 10px 20px;

  border-radius: 99px;
  background-color: var(--primary);
  form {
    display: flex;
    gap: 20px;
  }

  ${respondTo.tablet`
    flex-direction: column;
    gap:20px;
  `}

  ${respondTo.smallTablet`
    flex-direction: column;
    gap:20px;
  `}

  ${respondTo.mobile`
    flex-direction: column;
    gap:20px;
  `}
`;

const HeaderText = styled.h3`
  cursor: pointer;
  width: fit-content;
  font-weight: normal;

  color: var(--white);
  padding: 10px 20px;
  text-transform: capitalize;

  border-radius: 20px;
  background-color: var(--primary);
  transition: color 0.4s ease 0s;
  font-size: var(--small-m);
  &:hover {
    color: var(--whiteWithOpacity);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;

  color: var(--error);
  font-size: var(--small-m);

  & svg {
    stroke: var(--error);
  }

  ${respondTo.mobile`
    margin: 20px 0;
    justify-content: start;
  `};

  ${respondTo.smallTablet`
    margin:20px 0;
    justify-content:start;
  `};

  ${respondTo.tablet`
    margin:20px 0;
    justify-content:start;

  `}
`;

const SuccessContainer = styled(ErrorContainer)`
  color: green;

  & svg {
    stroke: green;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
`;

function JoinClassroom() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch: DispatchType = useDispatch();

  const { isLoading, error, success } = useSelector(
    (state: StateType) => state.enrollClassroom
  );

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const validateForm = (values: FormValues) => {
    try {
      validationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  return (
    <Container className="w3-animate-left">
      {!isOpen ? (
        <HeaderText onClick={() => setIsOpen(!isOpen)}>
          join classroom
        </HeaderText>
      ) : (
        <InnerContainer>
          <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={(values) => onSubmit({ values, status: 1, dispatch })}
          >
            {() => {
              return (
                <Form className="w3-animate-left">
                  <Input />
                  <Button isLoading={isLoading} text={"join"} />
                </Form>
              );
            }}
          </Formik>
        </InnerContainer>
      )}
      {/* Display login error */}
      {error && !isLoading && (
        <ErrorContainer className="w3-animate-right">
          <IconContainer>
            <ErrorSVG />
          </IconContainer>
          {error}
        </ErrorContainer>
      )}

      {/* Display success error */}
      {success && !isLoading && (
        <SuccessContainer className="w3-animate-right">
          <IconContainer>
            <ErrorSVG />
          </IconContainer>
          Request Sent
        </SuccessContainer>
      )}
    </Container>
  );
}

export default JoinClassroom;
