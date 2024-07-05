import React, { useState } from 'react';
import CommonFields from './CommonFields';
import DynamicFields from './DynamicFields';
import SelectUser from '../SelectUser';
import { RegisterFormValidation } from '../../../utils';
import filterFormData from '../../../utils/validation/filterFormData';
import { Popup } from '../index';

// Redux things
import { setUser } from '../../../features/user/userSlice';
import { useAppDispatch } from '../../../features/hook/useAppDispatch';

// API
import { createInstitute } from "../../../api/auth";

interface formDataType {
  name: string;
  email: string;
  password: string;
  college_code: string;
  phoneNumber: string;
  institute: string;
  rollno: string;
  department: string;
  year: number;
  pincode:string;
}

const RegisterForm: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const initialState: formDataType = {
    name: "",
    email: "",
    password: "",
    pincode:"",
    college_code: "",
    phoneNumber: "",
    institute: "",
    rollno: "",
    department: "",
    year: 0,
  };

  const { formData, setFormData, errors, setErrors, UserType, setUserType, overAllFormValidate } = RegisterFormValidation(initialState);

  // handle user's type (institute, staff, student)
  const handleUserType = (type: string) => {
    setUserType(type);
  };

  // handling all input fields value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: formDataType) => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) : value
    }));
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

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (overAllFormValidate()) {
      const filteredData = filterFormData(formData,UserType);
      console.log("submitted data :"+JSON.stringify(filteredData));
      // updating data to the store
      dispatch(setUser(filteredData));
      const data = await createInstitute(filteredData);
      console.log("Data :" + JSON.stringify(data));
    } else {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className='font-nunito'>
      {UserType === "" ? (
        <SelectUser handleUserType={handleUserType} />
      ) : (
        <div className='relative'>
          {popup === true && errors && <Popup errors={errors} setPopup={setPopup} />}
          <p className='text-[35px] text-center font-bold my-[2%]'>Register Your Account</p>
          {formNumber === "one" && <CommonFields handleChange={handleChange} formData={formData} handleForm={handleForm} onHandleErrors={onHandleErrors} />}
          {formNumber === "two" && <DynamicFields handleChange={handleChange} formData={formData} userType={UserType} handleForm={handleForm} />}
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
