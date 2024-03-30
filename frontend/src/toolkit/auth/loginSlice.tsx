

// export const login = createAsyncThunk(
//     "user/login",
//     async (props, { dispatch, rejectWithValue }) => {
//       const { values, language } = props;
//       try {
//         await useAxios.post(
//           `/api/users/login/?language=${language.toUpperCase()}`,
//           values
//         );
//         dispatch(getUser());
//       } catch (err) {
//         return rejectWithValue(Object.values(err.response.data)[0]);
//       }
//     }
//   );