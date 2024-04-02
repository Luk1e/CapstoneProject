import { z } from "zod";
// import { UseDispatch } from "react-redux";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  status: false,
  password: "",
  confirmPassword: "",
};

export const validationSchema = z
  .object({
    firstName: z
      .string()
      .regex(
        new RegExp(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/),
        "First name must contain only letters and numbers"
      )
      .min(1, "First name is required."),
    lastName: z
      .string()
      .regex(
        new RegExp(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/),
        "Last name must contain only letters and numbers"
      )
      .min(1, "Last name is required."),
    email: z
      .string()
      .email("Invalid email format.")
      .min(1, "Email is required."),
    status: z.boolean(),
    password: z
      .string()
      .regex(
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        "Password must contain at least eight characters, at least one number and both lower and uppercase letters."
      )
      .min(8, "Password is required."),
    confirmPassword: z.string().min(1, "Confirm password is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type FormValues = z.infer<typeof validationSchema>;

interface FormProps {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
    password: string;
    confirmPassword: string;
  };
}

export const onSubmit = ({ values }: FormProps) => {
  console.log(values);
};
