import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProductsbyId = createAsyncThunk(
  'getproduct/getprobyid',
  async (arg, {rejectWithValue}) => {
    const {id} = arg;
   try {
      const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    //   console.log("filterd_data", data)
      return data;
      
    } catch (err) {
      rejectWithValue(err);
      console.log('error get Products by id>>', err);
    }
  },
);

export const ProductByIdSlice = createSlice({
  name: 'getprobyid',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllProductsbyId.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [getAllProductsbyId.fulfilled]: (state, {payload}) => {
       
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getAllProductsbyId.rejected]: (state, {payload}) => {
      console.log('rejected', payload);
      state.message = payload;
      state.loading = false;
      state.isSuccess = true;
    },
  },
});
export default ProductByIdSlice;
