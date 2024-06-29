import React from 'react';

interface CommonFieldsProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
    handleForm:(form:string) =>void;
}

const CommonFields: React.FC<CommonFieldsProps> = ({handleChange,formData,handleForm}) => {

  return (
    <div className=' w-[400px] mx-auto flex flex-col gap-2 text-[18px] mt-[3%] justify-center'>
        <div className=' flex flex-col gap-1'>
            <label htmlFor='name'>Name :</label>
            <input type='text' placeholder='Enter your name' className='px-[17px] py-[10px] border w-[100%] outline-none' id='name' name='name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className=' flex flex-col gap-1'>
            <label htmlFor='email'>Email :</label>
            <input type='email' placeholder='Enter your email' className='px-[17px] py-[10px] border w-[100%] outline-none' id='email' name='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className=' flex flex-col gap-1'>
            <label htmlFor='password'>Password :</label>
            <input type='password' placeholder='Enter your password' className='px-[17px] py-[10px] border w-[100%] outline-none' id='password' name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div className=' flex flex-col gap-1'>
            <label htmlFor='confirm-password'>Confirm Password :</label>
            <input type='text' placeholder='Confirm password' className='px-[17px] py-[10px] border w-[100%] outline-none' id='confirm-password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>
        </div>
        
        <button  className='px-[17px] py-[10px] bg-[--primary-purpel] text-white flex flex-row items-center gap-5 justify-center hover:shadow-lg my-[2%] w-[400px] mx-auto' onClick={()=>handleForm("two")}>Next</button>
        
    </div>
  )
}

export default CommonFields