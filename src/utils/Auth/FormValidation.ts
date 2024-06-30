import { useState } from "react";

const FormValidation = (initialState:any) => {

  // handle all user type form data
  const [formData, setFormData] = useState(initialState);
  // handle the errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // UserType
  const [userType, setUserType] = useState<string>("");

  // handling all input fields value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: { [key: string]: string }) => ({
      ...prev,
      [name]: value
    }));
  };

  // check over all input fields are filled
  const overAllFormValidate = () => {
    const validationErrors: { [key: string]: string } = {};
    const requiredFields: string[] = []; 

    if (userType === "student") {
      requiredFields.push("name", "email", "password", "confirmPassword", "phoneNumber", "institute", "rollno", "department", "year");
    } else if (userType === "staff") {
      requiredFields.push("name", "email", "password", "confirmPassword", "phoneNumber", "institute");
    } else if (userType === "institute") {
      requiredFields.push("name", "email", "password", "confirmPassword", "college_code");
    }

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = 'This field is required';
      }
    });

    setErrors(validationErrors); // setting the error
    return Object.keys(validationErrors).length === 0;
  };


  return {
    handleChange,
    formData,
    setFormData,
    errors,
    setErrors,
    overAllFormValidate,
    userType,
    setUserType
  }

}

export default FormValidation;