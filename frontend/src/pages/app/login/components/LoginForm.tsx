import { Formik, Form } from "formik";
import ErrorSVG from "../../../../static/svg/ErrorSVG";
import { useEffect } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import {
  initialValues,
  validationSchema,
  onSubmit,
  FormValues,
} from "../values";
import { useNavigate } from "react-router-dom";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { ZodError } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../../../store/store";
import { reset } from "../../../../toolkit/auth/loginSlice";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px 50px;
  border-radius: 10%;
  border: 5px solid var(--primary);
  background-color: var(--primary);

  ${respondTo.mobile`
    border:none;
    background:transparent;
  `};

  ${respondTo.smallTablet`
    border:none;
    background:transparent;
  `};
`;

const HeaderText = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;

  color: var(--white);
  font-size: var(--medium-m);

  ${respondTo.mobile`
    color: var(--magenta);
  `}

  ${respondTo.smallTablet`
    color: var(--magenta);
  `}
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  color: var(--white);
  font-size: var(--small-l);

  ${respondTo.mobile`
    width:300px;
    color: var(--error);
    & svg{
      stroke: var(--error);
    }
  `};

  ${respondTo.smallTablet`
    width:300px;
    color: var(--error);
    & svg{
      stroke: var(--error);
    }
  `};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
`;

// Export login component
function LoginForm() {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();

  const { isLoading, error } = useSelector((state: StateType) => state.login);

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
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={(values) => onSubmit({ values, dispatch })}
      >
        {() => {
          return (
            <Form className="w3-animate-left">
              <HeaderText>capstone project</HeaderText>

              {/* Display login error */}
              {error && !isLoading && (
                <ErrorContainer>
                  <IconContainer>
                    <ErrorSVG />
                  </IconContainer>
                  {error}
                </ErrorContainer>
              )}
              <Inputs />
              <Buttons navigate={navigate} isLoading={isLoading} />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default LoginForm;
