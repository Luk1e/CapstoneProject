import createClassroomSlice from "./createSlice";
import enrollClassroomSlice from "./enrollSlice";
import getClassroomsSlice from "./getAllSlice";

export const classroomReducers = {
  createClassroom: createClassroomSlice,
  enrollClassroom: enrollClassroomSlice,
  getClassrooms: getClassroomsSlice,
};
