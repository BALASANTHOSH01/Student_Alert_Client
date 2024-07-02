import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Student } from '../user/userType';

export interface StudentState {
    students: Student[];
}

const initialState:StudentState = {
    students:[]
}

const StudentState = createSlice({
    name:"student",
    initialState,
    reducers: {
        updateStudent(state, action: PayloadAction<Student>) {
            const index = state.students.findIndex(student => student.rollno === action.payload.rollno);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        setStudents(state, action: PayloadAction<Student[]>) {
            state.students = action.payload;
        },
    },
});

export const {updateStudent,setStudents}= StudentState.actions;
export default StudentState.reducer;