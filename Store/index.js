import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {bitcoinReducer} from './Slice/BitcoinPrice';

const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];


  export default configureStore({
    reducer: {
        price : bitcoinReducer,
    },
    middleware,
  });



