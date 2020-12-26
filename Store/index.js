import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {bitcoinReducer} from './Slice/BitcoinPrice';
import {historyReducer} from './Slice/History';


const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];


  export default configureStore({
    reducer: {
        price : bitcoinReducer,
        history : historyReducer,
    },
    middleware,
  });



