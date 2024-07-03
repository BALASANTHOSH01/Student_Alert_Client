import {
    TakingOneAttendance,
    TakingManyAttendance,
    GetAttendanceByDeptandYear,
    GetAttendanceByDeptandYearandDate,
    GetAttendanceByRollno,
    GetAttendanceByDate,
    UpdateOneAttendance,
    UpdateManyAttendance
} from "./types.ts";

import {
    takingOneAttendance,
    takingManyAttendance,
    updateOneAttendance,
    updateManyAttendance,
    getAttendanceByDate,
    getAttendanceByDeptandYear,
    getAttendanceByDeptandYearandDate,
    getAttendanceByRollno
} from "./attendance.ts";

export type {
    TakingOneAttendance,
    TakingManyAttendance,
    GetAttendanceByDeptandYear,
    GetAttendanceByDeptandYearandDate,
    GetAttendanceByRollno,
    GetAttendanceByDate,
    UpdateOneAttendance,
    UpdateManyAttendance
}

export {
    takingOneAttendance,
    takingManyAttendance,
    updateOneAttendance,
    updateManyAttendance,
    getAttendanceByDate,
    getAttendanceByDeptandYear,
    getAttendanceByDeptandYearandDate,
    getAttendanceByRollno
}