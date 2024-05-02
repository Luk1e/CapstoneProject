import { Formik, Form } from "formik";
import ErrorSVG from "../../../../static/svg/ErrorSVG";
import { useEffect } from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import Button from "./Button";
import {
  initialValues,
  validationSchema,
  onSubmit,
  FormValues,
} from "../values";
import { useParams } from "react-router-dom";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { ZodError } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../../../store/store";
import {
  getHomework,
  reset,
} from "../../../../toolkit/homework/getHomeworkSlice";
import { Loader } from "../../../../components";

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

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  color: var(--white);
  font-size: var(--small-l);

  ${respondTo.mobile`
    width:350px;
    color: var(--error);

    & svg{
      stroke: var(--error);
    }
  `};

  ${respondTo.smallTablet`
    width:350px;
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

function UpdateForm() {
  const dispatch: DispatchType = useDispatch();
  const { id, homeworkId } = useParams();
  const { isLoading, homework,success, error } = useSelector(
    (state: StateType) => state.getHomework
  );

  useEffect(() => {
    dispatch(getHomework({ classroomId: id, homeworkId }));
    return () => {
      dispatch(reset());
    };
  }, [success]);

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
      {!isLoading && homework ? (
        <Formik
          initialValues={initialValues({ homework })}
          validate={validateForm}
          onSubmit={(values) =>
            onSubmit({ classroomId: id, ...values, homeworkId, dispatch })
          }
        >
          {(formik) => {
            return (
              <Form className="w3-animate-left">
                {/* Display error message */}
                {error && !isLoading && (
                  <ErrorContainer>
                    <IconContainer>
                      <ErrorSVG />
                    </IconContainer>
                    {error}
                  </ErrorContainer>
                )}
                <Inputs
                  formik={formik}
                  homework={homework}
                  idObject={{ classroomId: id, homeworkId }}
                />
                <Button isLoading={isLoading} />
              </Form>
            );
          }}
        </Formik>
      ) : (
        <Loader color="darkmagenta" />
      )}
    </Container>
  );
}

export default UpdateForm;
