import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import formCreationReducer from "../features/formCreation/formCreation";

export const store = configureStore({
    reducer: {
        user: userReducer,
        formCreation:formCreationReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 