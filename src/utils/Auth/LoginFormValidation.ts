import React, { useState } from "react";

const LoginFormValidation = (initialState: any) => {

    const [loginData, setLoginData] = useState(initialState);
    const [errors, setErrors] = useState({});

    // handling login data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev: { [key: string]: string }) => ({
            ...prev,
            [name]: value
        }));
    };

    // type of user is login
    const [userType, setUserType] = useState<string>("");

    const OverAllLoginValidation = () => {
        const validationErrors: { [key: string]: string } = {};
        Object.keys(loginData).forEach((key) => {
            if (!loginData[key]) {
                validationErrors[key] = `${key}`; // set which is missing
            }
        });
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    }

    return {
        userType,
        setUserType,
        handleChange,
        setLoginData,
        loginData,
        OverAllLoginValidation,
        errors
    };
}

export default LoginFormValidation;