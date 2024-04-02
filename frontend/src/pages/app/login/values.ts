import { z } from "zod";
import { login } from "../../../toolkit/auth/loginSlice";
import { DispatchType } from "../../../store/store";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type FormValues = z.infer<typeof validationSchema>;

interface FormProps {
  values: { email: string; password: string };
  dispatch: DispatchType;
}

export const onSubmit = ({ values, dispatch }: FormProps) => {
  dispatch(login(values));
};
