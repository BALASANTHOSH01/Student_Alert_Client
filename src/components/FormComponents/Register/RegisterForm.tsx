import React, { useState } from 'react'
import CommonFields from './CommonFields';
import DynamicFields from './DynamicFields';
import SelectUser from '../SelectUser';
import { FormValidation } from '../../../utils/index.ts';
import Popup from '../Popup/Popup.tsx';

interface formDataType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  college_code: string;
  phoneNumber: string;
  institute: string;
  rollno: string;
  department: string;
  year: number;
}

const RegisterForm: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const initialState: formDataType = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    college_code: "",
    phoneNumber: "",
    institute: "",
    rollno: "",
    department: "",
    year: 0
  };

  const { handleChange, formData, errors, setErrors, overAllFormValidate, userType, setUserType } = FormValidation(initialState);


  const handleUserType = (type: string) => {
    setUserType(type);
  };

  const [formNumber, setFormNumber] = useState<string>("one");
  const handleForm = (form: string) => {
    setPopup(false);
    setFormNumber(form);
  };

  const onHandleErrors = (error: { [key: string]: string }) => {
    setErrors(error);
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  const handleOnSubmit = () => {

    if (overAllFormValidate()) {
      console.log("Form Submitted");
      // Add your form submission logic here (e.g., API call)
    } else {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  };

  return (
    <div className=' font-nunito'>
      {
        userType === "" ? <SelectUser handleUserType={handleUserType} /> : <div className=' relative'>

          {
            popup === true && errors && <Popup errors={errors} setPopup={setPopup} />
          }

          <p className=' text-[35px] text-center font-bold my-[2%]'>Register Your Account</p>

          {
            formNumber === "one" && <CommonFields handleChange={handleChange} formData={formData} handleForm={handleForm} onHandleErrors={onHandleErrors} />
          }
          {
            formNumber === "two" && <DynamicFields handleChange={handleChange} formData={formData} userType={userType} handleOnSubmit={handleOnSubmit} handleForm={handleForm} />
          }
        </div>
      }
    </div>
  )
}

export default RegisterForm