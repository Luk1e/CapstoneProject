import { z } from "zod";
import { login } from "../../../toolkit/auth/loginSlice";
import { DispatchType } from "../../../store/store";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = (t: any) =>
  z.object({
    email: z
      .string()
      .email(t("validation.Invalid email format"))
      .min(1, t("validation.Email is required")),
    password: z.string().min(1, t("validation.Password is required")),
  });

export type FormValues = z.infer<ReturnType<typeof validationSchema>>;

interface FormProps {
  values: { email: string; password: string };
  dispatch: DispatchType;
}

export const onSubmit = ({ values, dispatch }: FormProps) => {
  dispatch(login(values));
};
