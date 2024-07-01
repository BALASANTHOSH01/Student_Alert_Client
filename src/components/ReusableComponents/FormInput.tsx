import React from 'react'

interface FormInputProps {
    type:string;
    placeholder:string;
    name:string
}

const FormInput:React.FC<FormInputProps> = ({type,placeholder,name}) => {
  return (
    <div>
        <div  className=' flex flex-col gap-1 items-start my-[2%] '>
            <label htmlFor={name}>{name} :</label>
            <input type={type} placeholder={placeholder} id={name} name={name} className=' w-[95%] outline-none border border-gray-400 px-[12px] py-[8px]'/>
        </div>
    </div>
  )
}

export default FormInput