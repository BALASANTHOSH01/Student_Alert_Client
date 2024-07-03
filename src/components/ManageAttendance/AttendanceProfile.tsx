import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AttendanceDetails from './AttendanceDetails';
import { Attendance } from './AttendanceFormCreation';
import { motion } from "framer-motion";
import { FiEdit as EditIcon } from 'react-icons/fi';
import { ProfileField } from '../ReusableComponents';

const AttendanceProfile = () => {
    const { rollno } = useParams<{ rollno: string }>();
    const [attendanceData, setAttendanceData] = useState<Attendance | string>();
    const [isEditAttendance, setIsEditAttendance] = useState<boolean>(false);

    useEffect(() => {
        const findedStudent = AttendanceDetails.find((attendance) => attendance.rollno === rollno);
        if (!findedStudent) {
            setAttendanceData("No Data Found .");
        } else {
            setAttendanceData(findedStudent);
        }
    }, []);

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setAttendanceData((prev)=>({
            ...(prev as Attendance),
            [name]:value
        }))
    };

    return (
        <div>
            <div>
                {
                    typeof attendanceData === 'string' ? (
                        <div>
                            {attendanceData}
                        </div>
                    ) : (
                        <div className=' flex flex-col gap-2 items-center justify-center px-[1%] py-[2%] bg-white w-[600px] mx-auto my-[3%]'>

                            <motion.div
                                whileTap={{ scale: 0.6 }}
                                className='absolute right-[5%] top-[5%] flex flex-row gap-2 items-center px-[12px] py-[8px] bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200'
                                onClick={() => setIsEditAttendance(!isEditAttendance)}
                            >
                                <p>{isEditAttendance ? "Save Details" : "Edit Details"}</p>
                                <EditIcon className='text-[--primary-purpel]' />
                            </motion.div>

                            <div className=' w-[500px] bg-white mx-auto my-[5%]  py-[3%] text-[20px] px-[1%] flex flex-col justify-center items-center gap-5'>
                                <ProfileField label="Rollno" data={(attendanceData as Attendance)?.rollno || ""} isEdit={isEditAttendance} handleChange={handleChange} />
                                <ProfileField label="Date" data={(attendanceData as Attendance)?.date || ""} isEdit={isEditAttendance} handleChange={handleChange} />
                                <ProfileField label="Status" data={(attendanceData as Attendance)?.status || ""} isEdit={isEditAttendance} handleChange={handleChange} />
                                <ProfileField label="Staff_ID" data={(attendanceData as Attendance)?.staff_id || ""} isEdit={isEditAttendance} handleChange={handleChange} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default AttendanceProfile;