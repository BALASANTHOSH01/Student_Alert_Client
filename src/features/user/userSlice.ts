import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../index.ts";

export interface UserState {
    currentUser: UserType | null,
    type:string
}

const initialState: UserState = {
    currentUser: null,
    type:"institute"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.currentUser = action.payload
        },
        updateUser: (state, action: PayloadAction<UserType>) => {
            if (state.currentUser) {
                state.currentUser = { ...state.currentUser, ...action.payload };
            }
        },
        clearUser: (state) => {
            state.currentUser = null;
        }
    }
});

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;