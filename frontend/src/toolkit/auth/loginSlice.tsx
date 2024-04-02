import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "../../utils/hooks/useAxios";

// Interface for returned data
interface ActionProps {}

// Interface for login data
interface ValuesProps {
  email: string;
  password: string;
}

// Interface for Rejected State (optional, for more granular error handling)
interface RejectWithValueProps {
  error: string;
}

/* reducer */
export const login = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("auth/login", async (values, { rejectWithValue }) => {
  try {
    await useAxios.post(`http://localhost:8080/api/v1/auth/login`, values);
    // dispatch(getUser());
  } catch (err: any) {
    console.log(err.response);
    return rejectWithValue({ error: "st" });
  }
});

// Interface for state
interface StateProps {
  success: boolean;
  isLoading: boolean;
  error: any;
}

const initialState = {
  success: false,
  isLoading: false,
  error: null,
} satisfies StateProps as StateProps;

/* slice */
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error;
      }
    });
  },
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;
