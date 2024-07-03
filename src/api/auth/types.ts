// Creation Types
export interface CreateStudentType {
  name: string;
  rollno: string;
  email: string;
  password: string;
  department: string;
  year: number;
  section: string;
  totalPresent: number;
  totalAbsent: number;
  phoneNumber: string;
  parentNumber: string;
  batch: string;
  institute: string;
}

export interface CreateInstituteType {
  name: string;
  email: string;
  password: string;
  pincode: string;
  college_code: string;
}

export interface CreateStaffType {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  depart: string;
  year: number;
  section: string;
  institute: string;
}

// Login Types
export interface LoginDataType {
  email: string;
  password: string;
}
