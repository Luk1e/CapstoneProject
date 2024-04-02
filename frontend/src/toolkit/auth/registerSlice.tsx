import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "../../utils/hooks/useAxios";

// Interface for User Registration Data
interface ValuesProps {
  username: string;
  email: string;
  password: string;
}

interface ActionProps {}

// Interface for Rejected State (optional, for more granular error handling)
interface RejectWithValueProps {
  error: string;
}

interface StateProps {
  success: boolean;
  isLoading: boolean;
  error: any;
}

// Initial state
const initialState = {
  success: false,
  isLoading: false,
  error: null,
} satisfies StateProps as StateProps;

// API request for register
export const register = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("auth/register", async (values, { rejectWithValue }) => {
  try {
    const { data } = await useAxios.post(`/api/users/register/`, values);
    return data;
  } catch (err: any) {
    return rejectWithValue({ error: "st" });
  }
});

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload.error;
      } else {
        state.error = action.error;
      }
    });
  },
});

export const { reset } = registerSlice.actions;
export default registerSlice.reducer;
