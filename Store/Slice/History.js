import endpoint from '../../endpoint/index';
import {
    createSlice,
  } from "@reduxjs/toolkit";
  
const initialState = []

const history = createSlice({
    name: "history",
    initialState,
    reducers: {
        setHistory : (state, {payload}) => {
            state.push(payload);
            console.log("new item in history");
           return state;
        },
       },
  });


  const {setHistory} = history.actions;
  const historyReducer = history.reducer;
      
  export {
   setHistory,
   historyReducer,
  }