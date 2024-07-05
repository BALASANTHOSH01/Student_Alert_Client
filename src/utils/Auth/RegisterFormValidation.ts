import { useState } from "react";

const RegisterFormValidation = (initialState: any) => {
  // handle all user type form data
  const [formData, setFormData] = useState(initialState);
  // handle the errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // UserType
  const [UserType, setUserType] = useState<string>("");

  // check over all input fields are filled
  const overAllFormValidate = () => {
    const validationErrors: { [key: string]: string } = {};
    const requiredFields: string[] = [];

    if (UserType === "student") {
      requiredFields.push("name", "email", "password", "phoneNumber", "institute", "rollno", "department", "year");
    } else if (UserType === "staff") {
      requiredFields.push("name", "email", "password", "phoneNumber", "institute");
    } else if (UserType === "institute") {
      requiredFields.push("name", "email", "password", "college_code");
    }

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${field} field is required`;
      }
    });

    setErrors(validationErrors); // setting the error
    return Object.keys(validationErrors).length === 0;
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    UserType,
    setUserType,
    overAllFormValidate
  }
}

export default RegisterFormValidation;
