import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllUsersbyId = createAsyncThunk(
  'users/getuserbyid',
  async (arg, {rejectWithValue}) => {
    const {id} = arg;
    console.log("juswhat",id)
   try {
      const {data} = await axios.get(`https://dummyjson.com/users/${id}`);
      console.log("ddddd",data)
    //   console.log("filterd_data", data)
      return data;
      
    } catch (err) {
      rejectWithValue(err);
      console.log('error get Products by id>>', err);
    }
  },
);

export const GetAllUserById = createSlice({
  name: 'getuserbyid',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllUsersbyId.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [getAllUsersbyId.fulfilled]: (state, {payload}) => {
       
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getAllUsersbyId.rejected]: (state, {payload}) => {
      console.log('rejected', payload);
      state.message = payload;
      state.loading = false;
      state.isSuccess = true;
    },
  },
});
export default GetAllUserById;
