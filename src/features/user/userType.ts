export interface Student {
    id: string;
    name: string;
    rollno: string;
    email: string;
    department: string;
    year: number;
    section: string,
    phoneNumber: string;
    parentNumber:string;
    totalPresent:number;
    totalAbsent:number;
    institute: string;
    batch:string
}

export interface Staff {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    dept: string;
    institute: string;
    year: number;
    section: string;
}

export interface Institute {
    id: string;
    name: string;
    email: string;
    pincode: string,
    college_code: string;
}

export type UserType = Student | Staff | Institute;
