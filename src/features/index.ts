import userReducer from "./user/userSlice";
import { UserType } from "./user/userType";
import { useAppDispatch } from "./hook/useAppDispatch";

export type {UserType} // user type

export {userReducer,useAppDispatch} // component exporting