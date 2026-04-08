import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../Slice/counterSlice.js";

const store = configureStore({
    reducer:{
        //we can add multiple reducers here, but for now we will add only one reducer, which is the counter reducer.
        counter: counterReducer
    }
})

export default store; //default export, we can import it with any name we want, but it is recommended to import it with the same name as the file name.