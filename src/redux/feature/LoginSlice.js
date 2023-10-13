import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const signupUser = createAsyncThunk(
  'users/login',
  async (credentials, {rejectWithValue}) => {
    const {username, password} = credentials;

    try {
      const {data} = await axios.post(`https://dummyjson.com/auth/login`, {
        username,
        password,
      });
      return data;
    } catch (err) {
      rejectWithValue(err);
      console.log('error>>', err);
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    data: undefined,
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [signupUser.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [signupUser.rejected]: (state, {payload}) => {
      console.log('rejected', payload);
      state.message = payload;
      state.loading = false;
      state.isSuccess = true;
    },
  },
});
export default loginSlice;
