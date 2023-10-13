import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProducts = createAsyncThunk(
  'getproduct/getpro',
  async (arg, {rejectWithValue}) => {
   try {
      const {data} = await axios.get(`https://dummyjson.com/products`);
    //   console.log("ProdcutsDataaa",data.products)
      return data.products;
    } catch (err) {
      rejectWithValue(err);
      console.log('error get Products>>', err);
    }
  },
);

export const productSlice = createSlice({
  name: 'getpro',
  initialState: {
    data: [],
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, {payload}) => {
        console.log("whatthehell",payload)
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getAllProducts.rejected]: (state, {payload}) => {
      console.log('rejected', payload);
      state.message = payload;
      state.loading = false;
      state.isSuccess = true;
    },
  },
});
export default productSlice;
