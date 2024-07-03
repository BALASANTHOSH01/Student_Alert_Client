export interface TakingOneAttendance {
  semester: string;
  rollno: string;
  student_id: string;
  staff_id: string;
  date: string;
  status: string;
  institute: string;
}

export type TakingManyAttendance = TakingOneAttendance[];

export interface GetAttendanceByDeptandYear {
  semester: string;
  institute: string;
}

export interface GetAttendanceByDeptandYearandDate {
  institute: string;
}

export interface UpdateOneAttendance {
  status: string;
  staff: string;
  institute: string;
}

export interface updatemanyattendance {
  rollno: string;
  status: string;
  staff: string;
  institute: string;
}

export type UpdateManyAttendance = updatemanyattendance[];

export interface GetAttendanceByRollno {
    institute: string;
}

export interface GetAttendanceByDate {
    institute: string;
}
