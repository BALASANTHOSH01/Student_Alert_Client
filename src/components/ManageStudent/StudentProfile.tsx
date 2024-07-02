import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentDetails from './StudentDetails';  // Adjust path as needed
import { Student } from '../../features/user/userType'; // Ensure correct path
import ProfileField from './ProfileField';

import { FiEdit as EditIcon } from "react-icons/fi";
import {motion} from "framer-motion";

const StudentProfile: React.FC = () => {
  const { rollno } = useParams<{ rollno: string }>(); // Ensure correct typing for useParams
  const [data, setData] = useState<Student | string>(""); // Initialize with empty string for default

  useEffect(() => {
    // Find the student based on the rollno from URL params
    const findStudent = StudentDetails.find((student) => student.rollno === rollno);

    // Update the state with the found student or a message if not found
    if (!findStudent) {
      setData("No Data Match");
    } else {
      setData(findStudent);
    }
  }, [rollno]); // Re-run effect when rollno changes

  const firstLetter = (name: string) => {
    return name.charAt(0).toUpperCase();
  }

  return (
    <div>
      {
        typeof data === "string" ? (
          <div>{data}</div>
        ) : (
          <div className=' w-[500px] text-[20px] flex flex-col items-center bg-white px-[2%] py-[2%] mx-auto my-[5%]'>

            <motion.div whileTap={{scale:0.6}} className=' absolute right-[5%] top-[5%] flex flex-row gap-2 items-center px-[12px] py-[8px] bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200'>
              <p>Edit Details</p>
              <EditIcon className='text-[--primary-purpel]' />
            </motion.div>

            <div className=' p-2 bg-gray-200 rounded-[50%] text-center w-[50px] h-[50px] my-[2%]'>
              {firstLetter(data.name)}
            </div>

            <div>
              <ProfileField label="Name" data={data.name} />
              <ProfileField label="Email" data={data.email} />
              <ProfileField label="Rollno" data={data.rollno} />
              <ProfileField label="Department" data={data.department} />
              <ProfileField label="Year" data={data.year} />
              <ProfileField label="Section" data={data.section} />
              <ProfileField label="Batch" data={data.batch} />
              <ProfileField label="TotalPresent" data={data.totalPresent} />
              <ProfileField label="TotalAbsent" data={data.totalAbsent} />
              <ProfileField label="PhoneNumber" data={data.phoneNumber} />
              <ProfileField label="ParentNumber" data={data.parentNumber} />
            </div>

          </div>
        )
      }
    </div>
  );
}

export default StudentProfile;
