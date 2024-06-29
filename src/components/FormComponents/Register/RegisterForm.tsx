import React, { useState } from 'react'
import CommonFields from './CommonFields';
import DynamicFields from './DynamicFields';
import SelectUser from '../SelectUser';


interface formDataType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  college_code: string;
  phoneNumber: string;
  institute: string;
  rollno: string;
  dept: string;
  year: number;
}

const RegisterForm:React.FC = () => {

  // handle all user type form data
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college_code: "",
    phoneNumber: "",
    institute: "",
    rollno: "",
    dept: "",
    year: 0
  });

  // Register user type
  const [userType, setUserType] = useState<string>("");
  const handleUserType = (type: string) => {
    setUserType(type);
  };

  const [formNumber,setFormNumber]=useState<string>("one");
  const handleForm = (form:string) =>{
    setFormNumber(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className=' font-nunito'>
      {
        userType === "" ? <SelectUser handleUserType={handleUserType} /> : <div>
          <p className=' text-[35px] text-center font-bold my-[2%]'>Register Your Account</p>
          {
            formNumber === "one" ?
            <CommonFields handleChange={handleChange} formData={formData} handleForm={handleForm}/> : 
          <DynamicFields handleChange={handleChange} formData={formData} userType={userType} />
          }
        </div>
      }
    </div>
  )
}

export default RegisterForm