import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        reset:() => ({value:0})
    }
});

export const { increment, decrement, reset } = counterSlice.actions; //named export
export default counterSlice.reducer; //default export, we can import it with any name we want, but it is recommended to import it with the same name as the file name.