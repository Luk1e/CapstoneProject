import { combineReducers } from "redux";
import { authReducers } from "../toolkit/auth/reducers";
import { classroomReducers } from "../toolkit/classroom/reducers";
import { homeworkReducers } from "../toolkit/homework/reducers";

const rootReducer = combineReducers({
  ...authReducers,
  ...classroomReducers,
  ...homeworkReducers,
});

export default rootReducer;
