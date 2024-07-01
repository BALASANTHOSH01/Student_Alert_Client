import React from 'react'
import {FormInput,Button} from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";

const CreationForm = () => {
  return (
    <div className=' px-[2%] py-[2%] w-[600px] text-center fixed top-[20%] left-[40%] bg-white mx-auto'>
        <p>Student Details</p>
        <FormInput type='text' placeholder='Student Name' name='Name'/>
        <FormInput type='email' placeholder='Student Email' name='Email'/>
        <FormInput type='text' placeholder='Student Department' name='Department'/>
        <FormInput type='text' placeholder='Student PhoneNumber' name='PhoneNumber'/>
        <Button text='Create' icon={<AddIcon/>} width="w-[95%]" />
    </div>
  )
}

export default CreationForm; 