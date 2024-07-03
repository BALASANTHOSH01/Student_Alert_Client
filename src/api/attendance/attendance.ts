import axios from "axios";
import { API_URL } from "../../utils/axiosInstance.ts";

// Attendance Types
import {
  TakingOneAttendance,
  TakingManyAttendance,
  UpdateOneAttendance,
  UpdateManyAttendance,
  GetAttendanceByDate,
  GetAttendanceByDeptandYear,
  GetAttendanceByDeptandYearandDate,
  GetAttendanceByRollno,
} from "./index.ts";

// Taking One Attendance
export const takingOneAttendance = async (data: TakingOneAttendance) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/attendance/takeone`,
      data
    );
    if (!response) {
      return "No response found";
    }
    return response.data;
  } catch (error) {
    console.log("Error taking attendance");
    throw new Error();
  }
};

// Taking Many Attendance
export const takingManyAttendance = async (data: TakingManyAttendance) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/attendance/takemany`,
      data
    );
    if (!response) {
      return "No response found";
    }
    return response.data;
  } catch (error) {
    console.log("Error taking attendance");
    throw new Error();
  }
};

// Update One attendance
export const updateOneAttendance = async (
  data: UpdateOneAttendance,
  rollno: string,
  date: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/attendance/${date}/${rollno}`,
      data
    );
    if (!response) {
      return "No response found";
    }
    return response.data;
  } catch (error) {
    console.log("Error updating attendance");
    throw new Error();
  }
};

// Update Many attendance
export const updateManyAttendance = async (
  data: UpdateManyAttendance
) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/attendance/update`,
      data
    );
    if (!response) {
      return "No response found";
    }
    return response.data;
  } catch (error) {
    console.log("Error updating attendance");
    throw new Error();
  }
};


// Get Attendance Rollno
export const getAttendanceByRollno = async (data:GetAttendanceByRollno,rollno:string) =>{
    try {
        const response = await axios.post(
          `${API_URL}/api/attendance/${rollno}`,
          data
        );
        if (!response) {
          return "No response found";
        }
        return response.data;
      } catch (error) {
        console.log("Error getting attendance");
        throw new Error();
      }
}

// Get Attendance Date
export const getAttendanceByDate = async (data:GetAttendanceByDate,date:string) =>{
    try {
        const response = await axios.post(
          `${API_URL}/api/attendance/date/${date}`,
          data
        );
        if (!response) {
          return "No response found";
        }
        return response.data;
      } catch (error) {
        console.log("Error updating attendance");
        throw new Error();
      }
}

// Get Attendance Dept & Year
export const getAttendanceByDeptandYear = async (data:GetAttendanceByDeptandYear,dept:string,year:string) =>{
    try {
        const response = await axios.post(
          `${API_URL}/api/attendance/${dept}/${year}`,
          data
        );
        if (!response) {
          return "No response found";
        }
        return response.data;
      } catch (error) {
        console.log("Error updating attendance");
        throw new Error();
      }
}

// Get Attendance Dept and Year and Date
export const getAttendanceByDeptandYearandDate = async (data:GetAttendanceByDeptandYearandDate,dept:string,year:string,date:string) =>{
    try {
        const response = await axios.post(
          `${API_URL}/api/attendance/${dept}/${year}/${date}`,
          data
        );
        if (!response) {
          return "No response found";
        }
        return response.data;
      } catch (error) {
        console.log("Error updating attendance");
        throw new Error();
      }
}