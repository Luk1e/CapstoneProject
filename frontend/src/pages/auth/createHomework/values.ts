import { z } from "zod";
import { DispatchType } from "../../../store/store";
import { createHomework } from "../../../toolkit/homework/createSlice";

export const initialValues = {
  title: "",
  instruction: "",
  totalGrade: 0,
  file: undefined,
};

const MAX_UPLOAD_SIZE = 1024 * 1024 * 100; // 100MB

export const validationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  instruction: z.string().min(1, "Instruction is required"),
  totalGrade: z.number().int("Points is required"),
  file: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB"),
});

export type FormValues = z.infer<typeof validationSchema>;

interface FormProps {
  classroomId: string | undefined;
  values: {
    title: string;
    instruction: string;
    totalGrade: number;
    file: File | undefined;
  };
  dispatch: DispatchType;
}

export const onSubmit = ({ classroomId, values, dispatch }: FormProps) => {
  dispatch(createHomework({ ...values, classroomId }));
};
