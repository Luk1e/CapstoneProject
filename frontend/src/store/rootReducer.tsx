import { combineReducers } from "redux";
import { authReducers } from "../toolkit/auth/reducers";
import { classroomReducers } from "../toolkit/classroom/reducers";

const rootReducer = combineReducers({
  ...authReducers,
  ...classroomReducers,
});

export default rootReducer;
