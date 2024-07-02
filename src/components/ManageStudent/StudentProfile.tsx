import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Ensure correct path
import { setStudents, updateStudent } from '../../features/student/StudentSlice.ts';
import { Student } from '../../features/user/userType';
import ProfileField from './ProfileField';
import { FiEdit as EditIcon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../features/index.ts';
import StudentDetails from './StudentDetails.ts';

const StudentProfile: React.FC = () => {
  const { rollno } = useParams<{ rollno: string }>();
  const dispatch = useAppDispatch();
  const students = useSelector((state: RootState) => state.students.students);
  const [data, setData] = useState<Student | string>("");
  const [isEditStudent, setIsEditStudent] = useState<boolean>(false);
  const [formData, setFormData] = useState<Student>();

  //store the student details to the redux store
  useEffect(() => {
    dispatch(setStudents(StudentDetails));
  }, [dispatch]);

  // Find the student by using rollno
  useEffect(() => {
    const findStudent = students.find((student) => student.rollno === rollno);
    if (!findStudent) {
      setData("No Data Match");
    } else {
      setData(findStudent);
      setFormData(findStudent); // Initialize form data
    }
  }, [rollno, students]);

  // update the value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...(prevData as Student), // Ensure prevData is of type Student
      [name]: value,
    }));
    console.log("Update student Data :"+updateStudent);
  };

  const handleSave = () => {
    if (formData) {
      dispatch(updateStudent(formData));
      setIsEditStudent(false);
    }
  };

  return (
    <div>
      {typeof data === "string" ? (
        <div>{data}</div>
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
            {data.name.charAt(0).toUpperCase()}
          </div>

          <div className={`${isEditStudent ? "flex flex-col gap-3" : ""}`}>
            <ProfileField label="Name" data={formData?.name || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Email" data={formData?.email || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Rollno" data={formData?.rollno || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Department" data={formData?.department || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Year" data={formData?.year || 0} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Section" data={formData?.section || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="Batch" data={formData?.batch || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="TotalPresent" data={formData?.totalPresent || 0} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="TotalAbsent" data={formData?.totalAbsent || 0} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="PhoneNumber" data={formData?.phoneNumber || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
            <ProfileField label="ParentNumber" data={formData?.parentNumber || ""} isEditStudent={isEditStudent} handleChange={handleChange} />
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
