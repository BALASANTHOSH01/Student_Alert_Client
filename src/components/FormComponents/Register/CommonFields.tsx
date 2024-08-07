import React from 'react';

interface CommonFieldsProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    name: string;
    email: string;
    password: string;
  };
  handleForm: (form: string) => void;
  onHandleErrors: (error: { [key: string]: string }) => void;
}

const CommonFields: React.FC<CommonFieldsProps> = ({ handleChange, formData, handleForm, onHandleErrors }) => {
  const validateFields = () => {
    const validationErrors: { [key: string]: string } = {};
    if (!formData.name) validationErrors.name = "Name,";
    if (!formData.email) validationErrors.email = "Email,";
    if (!formData.password) validationErrors.password = "Password,";

    // Assign missing fields in the object and consider them as errors
    onHandleErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleMultipleForm = (next: string) => {
    if (validateFields()) {
      handleForm(next);
    }
  };

  return (
    <div className='w-[400px] mx-auto flex flex-col gap-2 text-[18px] mt-[3%] justify-center'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name'>Name :</label>
        <input type='text' placeholder='Enter your name' className='px-[17px] py-[10px] border w-[100%] outline-none' id='name' name='name' value={formData.name} onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email'>Email :</label>
        <input type='email' placeholder='Enter your email' className='px-[17px] py-[10px] border w-[100%] outline-none' id='email' name='email' value={formData.email} onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='password'>Password :</label>
        <input type='password' placeholder='Enter your password' className='px-[17px] py-[10px] border w-[100%] outline-none' id='password' name='password' value={formData.password} onChange={handleChange} />
      </div>

      <button className='px-[17px] py-[10px] bg-[--primary-purpel] text-white flex flex-row items-center gap-5 justify-center hover:shadow-lg my-[2%] w-[400px] mx-auto' onClick={() => handleMultipleForm("two")}>Next</button>
    </div>
  )
}

export default CommonFields;
