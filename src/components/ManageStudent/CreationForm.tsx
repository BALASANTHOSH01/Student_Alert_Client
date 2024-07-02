import React from 'react'
import { FormInput, Button } from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import { RxCross2 as CrossIcon } from "react-icons/rx";

interface CreationFormProps {
  closeForm: () => void;
}

const CreationForm: React.FC<CreationFormProps> = ({ closeForm }) => {
  return (
    <div className=' px-[2%] py-[2%] w-[600px] text-center fixed top-[20%] left-[40%] bg-white mx-auto'>

      <div className=" absolute right-[3%] top-[5%] p-1 rounded-[50%] text-[22px] hover:bg-gray-200 hover:text-red-500 cursor-pointer " onClick={closeForm}>
        <CrossIcon />
      </div>

      <p>Student Details</p>
      
      <FormInput type='text' placeholder='Student Name' name='Name' />
      <FormInput type='email' placeholder='Student Email' name='Email' />
      <FormInput type='text' placeholder='Student Department' name='Department' />
      <FormInput type='text' placeholder='Student PhoneNumber' name='PhoneNumber' />
      <Button text='Create' icon={<AddIcon />} className="w-[95%]" />
    </div>
  )
}

export default CreationForm; 