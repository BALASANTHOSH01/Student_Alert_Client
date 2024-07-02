import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType {
    formFor:string | null
}

const initialState:initialStateType = {
    formFor:"",
}

const formCreation = createSlice({
    name:"setFormFor",
    initialState,
    reducers:{
        setFormFor:(state,action)=>{
            state.formFor = action.payload;
        }
    }
});

export const {setFormFor}= formCreation.actions;
export default formCreation.reducer