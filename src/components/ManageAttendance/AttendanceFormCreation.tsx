import React, { useState } from "react";
import FormInput from "../ReusableComponents/FormInput";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";

interface AttendanceFormCreationProps {
  closeForm: () => void;
}

export interface Attendance {
  semester: string;
  rollno: string;
  student_id: string;
  staff_id: string;
  date: string;
  status: string;
  institute: string;
}

const AttendanceFormCreation: React.FC<AttendanceFormCreationProps> = ({ closeForm }) => {
  const [attendanceForm, setAttendanceForm] = useState<Attendance>({
    semester: "",
    rollno: "",
    student_id: "",
    staff_id: "",
    date: "",
    status: "",
    institute: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAttendanceForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Student data:", attendanceForm);
  };

  return (
    <div className="mt-[4%] bg-white mx-auto w-[500px] flex flex-col items-center justify-start py-[2%] relative text-center">
      <p>Attendance Record</p>
      <div
        className="absolute right-[1%] top-[1%] p-2 text-[22px] bg-red-500 text-white cursor-pointer"
        onClick={closeForm}
      >
        <CrossIcon />
      </div>
      <form onSubmit={handleSubmit} className="px-[1%] py-[1%] w-[350px] text-center">
        <FormInput
          type="text"
          placeholder="Student Rollno"
          name="rollno"
          value={attendanceForm.rollno}
          handleChange={handleChange}
        />
        <FormInput
          type="date"
          placeholder="Date"
          name="date"
          value={attendanceForm.date}
          handleChange={handleChange}
        />
        <div className="flex flex-col gap-1 items-start my-[2%]">
          <label htmlFor="status">Status :</label>
          <select
            name="status"
            id="status"
            value={attendanceForm.status}
            onChange={handleChange}
            className="border border-gray-400 px-[12px] py-[8px] w-[95%] outline-none"
          >
            <option value="">Select Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <div className="my-[6%]">
          <button
            type="submit"
            className="py-[10px] bg-blue-500 text-white px-4 flex items-center gap-2"
          >
            <AddIcon />
            Take Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceFormCreation;
