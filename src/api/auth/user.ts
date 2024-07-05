// default Imports
import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance.ts";

// Types Imports
import {CreateStudentType,CreateInstituteType,CreateStaffType,LoginDataType} from "./index.ts";


// Register Methods
export const createInstitute = async (data:CreateInstituteType ) => {
    try {
       
        const response = await axiosInstance.post('/api/auth/institute/register',data);

        if (!response) {
            return "No response is found."
        }
        return await response;
    } catch (error) {
        console.error("Error creating institute", error.message);
        throw error;
    }
}

export const createStaff = async (data: CreateStaffType) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/staff/register`, data);
        if (!response) {
            return "No response is found."
        }
        return response.data;
    } catch (error) {
        console.error("Error staff creation", error);
        throw error;
    }
}

export const createStudent = async (data: CreateStudentType) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/student/register`, data);
        if (!response) {
            return "No response is found."
        }
        return response.data;
    } catch (error) {
        console.error("Error student creation", error);
        throw error;
    }
}

// Login Methods
export const loginInstitute = async (data:LoginDataType) => {

    try {
        const response = await axios.post(`${API_URL}/api/auth/institute/login`, data);
        if (!response) {
            return "No response is found."
        }
        return response.data;
    } catch (error) {
        console.error("Error login institute", error);
        throw error;
    }
}

export const loginStaff = async (data:LoginDataType) => {

    try {
        const response = await axios.post(`${API_URL}/api/auth/staff/login`, data);
        if (!response) {
            return "No response is found."
        }
        return response.data;
    } catch (error) {
        console.error("Error login institute", error);
        throw error;
    }
}

export const loginStudent = async (data:LoginDataType) => {

    try {
        const response = await axios.post(`${API_URL}/api/auth/student/login`, data);
        if (!response) {
            return "No response is found."
        }
        return response.data;
    } catch (error) {
        console.error("Error login institute", error);
        throw error;
    }
}
