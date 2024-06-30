import React, { useMemo, useState } from 'react'
import SelectUser from '../SelectUser';
import { FaLongArrowAltRight as ArrowIcon } from "react-icons/fa";
import { LoginFormValidation } from '../../../utils/index.ts';
import Popup from '../Popup/Popup.tsx';

interface loginDataTypes {
    email: string;
    password: string;
}

const initialState:loginDataTypes={
    email: "",
    password: ""
}

const LoginForm: React.FC = () => {
    const [popup,setPopup]=useState<boolean>(false);

    const {
        setUserType,
        userType,
        loginData,
        handleChange,
        OverAllLoginValidation,
        errors
    } = LoginFormValidation(initialState);

    const handleUserType = (type: string) => { // handleUserType
        setUserType(type);
        console.log("user type :"+type);
    };

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (OverAllLoginValidation()) {
            console.log("login submit");
            // login API handling
        } else {
            setPopup(true);
            setTimeout(() => {
                setPopup(false);
            }, 2000);
        }
    };

    return (
        <div>
            {
                userType === "" ?
                    <SelectUser handleUserType={handleUserType} /> :
                    (
                        <div className=' font-nunito py-[5%]'>
                            <p className=' text-[35px] text-center font-bold'>Login to Your Account</p>
                            {
                                popup && <Popup errors={errors} setPopup={setPopup}/>
                            }
                            <form className=' w-[400px] mx-auto flex flex-col gap-2 text-[18px] my-[3%] justify-center' onSubmit={handleLoginSubmit}>

                                <div className=' flex flex-col gap-1'>
                                    <label htmlFor='email' >Email :</label>
                                    <input type='email' placeholder='Enter your email' id='email' name='email' value={loginData.email} onChange={handleChange} className='px-[17px] py-[10px] border w-[100%] outline-none' />
                                </div>
                                <div className=' flex flex-col gap-1'>
                                    <label htmlFor='password' >Password :</label>
                                    <input type='password' placeholder='Enter your password' id='password' name='password' value={loginData.password} onChange={handleChange} className='px-[17px] py-[10px] border w-[100%] outline-none' />
                                </div>
                                <button type='submit' className='px-[17px] py-[10px] w-[100%] bg-[--primary-purpel] text-white flex flex-row items-center gap-5 justify-center hover:shadow-lg my-[2%]' >Login to Your Account <ArrowIcon /></button>
                                <div className=' flex flex-row items-center justify-between '>
                                    <p className='text-[--primary-purpel] cursor-pointer'>Forgot Password ?</p>
                                    <p className=' text-[--primary-purpel] cursor-pointer underline'>Signup</p>
                                </div>

                            </form>

                        </div>
                    )
            }
        </div>
    )
}

export default LoginForm