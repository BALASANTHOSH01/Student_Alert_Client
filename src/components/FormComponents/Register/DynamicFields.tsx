import React from 'react'
import { FaLongArrowAltRight as ArrowIcon } from "react-icons/fa";
import { IoCaretBack as BackIcon } from "react-icons/io5";

// props types
interface DynamicFieldsProps {
    userType: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        rollno: string;
        phoneNumber: string;
        year: number;
        department: string;
        pincode: string;
        college_code: string;
        institute: string;
    };
    handleForm: (form: string) => void;
}

// Functional component 
const DynamicFields: React.FC<DynamicFieldsProps> = ({ userType, handleChange, formData, handleForm }) => {

    return (
        <div className=' w-[400px] mx-auto flex flex-col gap-2 text-[18px] mt-[1%] justify-center'>

            {/**Back Button */}
            <div className=' flex flex-row items-center gap-2 absolute top-[5%] left-[10%] px-[17px] py-[10px] hover:bg-gray-200 cursor-pointer duration-300' onClick={() => handleForm("one")}>
                <BackIcon />
                Back
            </div>

            {
                // college code
                userType === "institute" && (
                    <>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='college-code'>College_Code :</label>
                            <input type='text' placeholder='College code' id='college-code' name='college_code' className='px-[17px] py-[10px] border w-[100%] outline-none' value={formData.college_code} onChange={handleChange} />
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='pincode'>Pincode :</label>
                            <input type='text' placeholder='pincode' id='pincode' name='pincode' className='px-[17px] py-[10px] border w-[100%] outline-none' value={formData.pincode} onChange={handleChange} />
                        </div>
                    </>
                )
            }

            {
                // student rollno
                userType === "student" && (
                    <>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='rollno'>Rollno :</label>
                            <input type='text' placeholder='Enter your rollno' id='rollno' name='rollno' className='px-[17px] py-[10px] border w-[100%] outline-none uppercase' value={formData.rollno} onChange={handleChange} />
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='year'>Year :</label>
                            <input type='text' placeholder='Enter your year ex:4' id='year' name='year' className='px-[17px] py-[10px] border w-[100%] outline-none' value={formData.year} onChange={handleChange} />
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='department'>Department :</label>
                            <input type='text' placeholder='Department' id='department' name='department' className='px-[17px] py-[10px] border w-[100%] outline-none uppercase' value={formData.department} onChange={handleChange} />
                        </div>
                    </>
                )
            }
            {
                // student or staff phoneNumber
                (userType === "student" || userType === "staff") && (
                    <>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor='mobile'>Mobile :</label>
                            <input type='text' placeholder='Enter your mobile' id='mobile' name='phoneNumber' className='px-[17px] py-[10px] border w-[100%] outline-none' value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <label>Institute :</label>
                            <input type='text' placeholder='Institute name' id='rollno' name='institute' className='px-[17px] py-[10px] border w-[100%] outline-none' value={formData.institute} onChange={handleChange} />
                        </div>
                    </>
                )
            }

            <button type="submit" className='px-[17px] py-[10px] bg-[--primary-purpel] text-white flex flex-row items-center gap-5 justify-center hover:shadow-lg my-[2%] w-[400px] mx-auto'>Register to Your Account <ArrowIcon /></button>

        </div>
    )
}

export default DynamicFields;