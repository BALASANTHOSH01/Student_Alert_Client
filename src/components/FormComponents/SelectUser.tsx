import React from 'react';
import { FaBuilding as InstituteIcon } from "react-icons/fa";
import { MdPerson3 as StaffIcon } from "react-icons/md";
import { PiStudentFill as StudentIcon } from "react-icons/pi";

interface SelectUserProps {
  handleUserType: (type: string) => void;
}

const SelectUser: React.FC<SelectUserProps> = ({ handleUserType }) => {
  return (

    <div className='py-[4%]'>
      <p className=' text-center font-semibold text-[30px] my-[4%]'>Type of user your</p>
      <div className=' flex flex-row items-center justify-center gap-20'>
        <div onClick={() => {
          handleUserType("institute");
          console.log("institute is clicked.")
        }} className=' cursor-pointer w-[200px] h-[200px] border border-gray-400 rounded-[10px] text-center text-[20px] flex flex-col gap-3 justify-center hover:bg-[--primary-purpel] hover:text-white hover:duration-300 hover:shadow-lg '>
          <InstituteIcon className=' text-[50px] mx-auto' />
          <p>Insitution / Admin</p>
        </div>
        <div onClick={() => {
          handleUserType("staff")
          console.log("staff is clicked.")
          }} className=' cursor-pointer w-[200px] h-[200px] border border-gray-400 rounded-[10px] text-center text-[20px] flex flex-col gap-3 justify-center hover:bg-[--primary-purpel] hover:text-white hover:duration-300 hover:shadow-lg '>
          <StaffIcon className=' text-[50px] mx-auto' />
          <p>Staff</p>
        </div>
        <div onClick={() => {
          handleUserType("student")
          console.log("student is clicked.")
          }} className=' cursor-pointer w-[200px] h-[200px] border border-gray-400 rounded-[10px] text-center text-[20px] flex flex-col gap-3 justify-center hover:bg-[--primary-purpel] hover:text-white hover:duration-300 hover:shadow-lg '>
          <StudentIcon className=' text-[50px] mx-auto' />
          <p>Student</p>
        </div>
      </div>
    </div>
  )
}

export default SelectUser