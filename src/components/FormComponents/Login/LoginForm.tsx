import React, { useState } from 'react'
import SelectUser from '../SelectUser';

interface loginDataTypes {
    email:string;
    password:string;
}

const LoginForm = () => {

    const [loginData,setLoginData]=useState<loginDataTypes>({
        email:"",
        password:""
    });

    // handling login data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
          ...prev,
          [name]: value
        }));
    };

    // type of user is login
    const [userType,setUserType]=useState<string>("");
    
    const handleUserType = (type:string) =>{ // handleUserType
        setUserType(type);
    };

  return (
    <div>
        {
            userType === "" ?
            <SelectUser handleUserType={handleUserType}/> :
            (
                <div>
                    <div>
                        <label htmlFor='email' >Email :</label>
                        <input type='email' placeholder='Enter your email' id='email' name='email' value={loginData.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password' >Password :</label>
                        <input type='password' placeholder='Enter your password' id='password' name='password' value={loginData.password} onChange={handleChange}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default LoginForm