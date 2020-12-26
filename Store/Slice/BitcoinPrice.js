import axios from 'axios';  
import endpoint from '../../endpoint/index';
import {
    createSlice,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import {toEuro} from '../../Components/helper/common';
  
  const initialState = {
    price : null,
    error : "",
}

const getPrice = createAsyncThunk(
    'price/fetch',
    async () => {
      const response = await axios.get(endpoint.crypto);
      return response.data;
    }
  );


  /*
    reducers: {
     success : (state, {payload}) => {
        console.log("success state is ",JSON.stringify(state, undefined, 2));
     },
     error : (state, {payload}) => {

     },
    },

    */

const bitcoinprice = createSlice({
    name: "price",
    initialState,
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [getPrice.fulfilled]: (state, {payload}) => {
          // Add user to the state array
          console.log("current price is ", toEuro(payload.EUR.last));
          state.price = toEuro(payload.EUR.last);
          return state;
        }
      }
  });


  const {success,error} = bitcoinprice.actions;
  const bitcoinReducer = bitcoinprice.reducer;


      
  export {
   success as priceSuccess,
   error as priceError,
   getPrice,
   bitcoinReducer,
  }