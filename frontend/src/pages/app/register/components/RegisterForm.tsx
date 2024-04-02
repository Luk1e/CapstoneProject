import { Formik, Form } from "formik";
import styled from "styled-components";
import InputsOne from "./InputsOne";
import InputsTwo from "./InputsTwo";
import Buttons from "./Buttons";
import {
  initialValues,
  validationSchema,
  FormValues,
  onSubmit,
} from "../values";
import { useNavigate } from "react-router-dom";
import { respondTo } from "../../../../utils/helpers/_respondTo";
import { useState } from "react";
import RightArrowSVG from "../../../../static/svg/RightArrowSVG";
import LeftArrowSVG from "../../../../static/svg/LeftArrowSVG";
import { ZodError } from "zod";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 30px 50px;
  border-radius: 10%;
  border: 5px solid var(--primary);
  background-color: var(--primary);

  ${respondTo.mobile`
    border:none;
    background:transparent;
  `}

  ${respondTo.smallTablet`
    border:none;
    background:transparent;
  `}
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

interface ArrowContainerType {
  $right: boolean;
}

const ArrowContainer = styled.div<ArrowContainerType>`
  cursor: pointer;
  --value: 50%;
  z-index: 1;

  right: 0;
  top: 50%;
  position: absolute;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;
  transform: translate(var(--value), -50%);
  background-color: var(--magenta);

  ${(props) =>
    props.$right &&
    "left:0;right:auto;  transform: translate(calc(var(--value) * -1),-50%);"}

  ${respondTo.mobile`
    --value:calc(100% - 40px);
    
    & svg{
      height:24px;
      width:24px;
    }
  `}

  ${respondTo.smallTablet`
    --value:calc(100% - 40px);

    & svg{
      height:24px;
      width:24px;
    }
  `}
`;

function RegisterForm() {
  const navigate = useNavigate();
  // Initialize hooks

  // Get user from user slice
  // const { isLoading, error } = useSelector((state) => state.user);

  // Initialize hooks

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, []);

  const [isFirstPage, setIsFirstPage] = useState(true);

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
        onSubmit={(values) => onSubmit({ values })}
      >
        {() => {
          return (
            <Form className="w3-animate-left">
              <ArrowContainer
                onClick={() => setIsFirstPage(!isFirstPage)}
                $right={!isFirstPage}
              >
                {isFirstPage ? <LeftArrowSVG /> : <RightArrowSVG />}
              </ArrowContainer>

              <HeaderText>register</HeaderText>
              {isFirstPage ? <InputsOne /> : <InputsTwo />}
              <Buttons
                navigate={navigate}
                isFirstPage={isFirstPage}
                setIsFirstPage={() => setIsFirstPage(!isFirstPage)}
              />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
export default RegisterForm;
