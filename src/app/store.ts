import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import formCreationReducer from "../features/formCreation/formCreation";
import StudentStateReducer from "../features/student/StudentSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        formCreation:formCreationReducer,
        students:StudentStateReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 