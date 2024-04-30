import createHomeworkSlice from "./createSlice";
import getAllHomeworkSlice from "./getAllSlice";
import getStudentHomeworksSlice from "./getSlice";
import deleteHomeworkSlice from "./deleteSlice";
import homeworkSlice from "./homeworkSlice";

export const homeworkReducers = {
  createHomework: createHomeworkSlice,
  getHomeworks: getAllHomeworkSlice,
  getStudentHomeworks: getStudentHomeworksSlice,
  deleteHomework: deleteHomeworkSlice,
  homework: homeworkSlice,
};
