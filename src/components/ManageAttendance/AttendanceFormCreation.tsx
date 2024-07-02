import React from "react";
import { Button, FormInput } from "../ReusableComponents";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";

interface AttendanceFormCreationProps {
    closeForm: () => void;
}

const AttendanceFormCreation: React.FC<AttendanceFormCreationProps> = ({ closeForm }) => {
    return (
        <div>
            <div className=" mt-[4%] bg-white mx-auto w-[500px] flex flex-col items-center justify-start py-[2%] relative text-center">

                <p>
                    Attendance Record
                </p>

                <div className=" absolute right-[3%] top-[5%] p-1 rounded-[50%] text-[22px] hover:bg-gray-200 hover:text-red-500 cursor-pointer " onClick={closeForm}>
                    <CrossIcon />
                </div>
                <div className=' px-[1%] py-[1%] w-[350px] text-center '>
                    <FormInput type="text" placeholder="Student Rollno" name="Rollno" />
                    <FormInput type="email" placeholder="Staff Name" name="Staff" />
                    <FormInput type="date" placeholder="Date" name="Date" />

                    <div className=' flex flex-col gap-1 items-start my-[2%] '>
                        <label htmlFor="status">Status :</label>
                        <select name="status" id="status" className="border border-gray-400 px-[12px] py-[8px] w-[95%] outline-none">
                            <option value="">Select Status</option>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </div>

                    <div className=" my-[6%]">
                    <Button text="Take Attendance" icon={<AddIcon/>} className="py-[10px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceFormCreation;