import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Ensure correct path
import { setStudents, updateStudent } from '../../features/student/StudentSlice.ts';
import { Student } from '../../features/user/userType';
import {ProfileField} from '../ReusableComponents/index.ts';
import { FiEdit as EditIcon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../features/index.ts';
import StudentDetails from './StudentDetails.ts';

const StudentProfile: React.FC = () => {
  const { rollno } = useParams<{ rollno: string }>();
  const dispatch = useAppDispatch();
  const students = useSelector((state: RootState) => state.students.students);
  const [studentData, setStudentstudentData] = useState<Student | string>("");
  const [isEditStudent, setIsEditStudent] = useState<boolean>(false);
  const [formstudentData, setFormstudentData] = useState<Student>();

  //store the student details to the redux store
  useEffect(() => {
    dispatch(setStudents(StudentDetails));
  }, [dispatch]);

  // Find the student by using rollno
  useEffect(() => {
    const findStudent = students.find((student) => student.rollno === rollno);
    if (!findStudent) {
      setStudentstudentData("No studentData Match");
    } else {
      setStudentstudentData(findStudent);
      setFormstudentData(findStudent); // Initialize form studentData
    }
  }, [rollno, students]);

  // update the value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormstudentData((prevstudentData) => ({
      ...(prevstudentData as Student), // Ensure prevstudentData is of type Student
      [name]: value,
    }));
    console.log("Update student studentData :"+updateStudent);
  };

  const handleSave = () => {
    if (formstudentData) {
      dispatch(updateStudent(formstudentData));
      setIsEditStudent(false);
    }
  };

  return (
    <div>
      {typeof studentData === "string" ? (
        <div>{studentData}</div>
      ) : (
        <div className='w-[500px] text-[20px] flex flex-col items-center bg-white px-[2%] py-[2%] mx-auto my-[5%]'>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className='absolute right-[5%] top-[5%] flex flex-row gap-2 items-center px-[12px] py-[8px] bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200'
            onClick={() => setIsEditStudent(!isEditStudent)}
          >
            <p>{isEditStudent ? "Save Details" : "Edit Details"}</p>
            <EditIcon className='text-[--primary-purpel]' />
          </motion.div>

          <div className='p-2 bg-gray-200 rounded-[50%] text-center w-[50px] h-[50px] my-[4%]'>
            {studentData.name.charAt(0).toUpperCase()}
          </div>

          <div className={`${isEditStudent ? "flex flex-col gap-3" : ""}`}>
            <ProfileField label="Name" data={formstudentData?.name || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Email" data={formstudentData?.email || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Rollno" data={formstudentData?.rollno || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Department" data={formstudentData?.department || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Year" data={formstudentData?.year || 0} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Section" data={formstudentData?.section || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Batch" data={formstudentData?.batch || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="TotalPresent" data={formstudentData?.totalPresent || 0} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="TotalAbsent" data={formstudentData?.totalAbsent || 0} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="PhoneNumber" data={formstudentData?.phoneNumber || ""} isEdit={isEditStudent} handleChange={handleChange} />
            <ProfileField label="ParentNumber" data={formstudentData?.parentNumber || ""} isEdit={isEditStudent} handleChange={handleChange} />
          </div>

          {isEditStudent && (
            <button onClick={handleSave} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
              Save Changes
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
