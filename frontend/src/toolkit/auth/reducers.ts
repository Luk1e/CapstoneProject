import registerSlice from "./registerSlice";
import loginSlice from "./loginSlice";

export const authReducers = {
  register: registerSlice,
  login: loginSlice,
};
