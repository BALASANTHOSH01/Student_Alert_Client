import React from 'react';

interface CommonFieldsProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };
}

const CommonFields: React.FC<CommonFieldsProps> = ({handleChange,formData}) => {

  return (
    <div>
        <div>
            <label htmlFor='name'>Name :</label>
            <input type='text' placeholder='Enter your name' className='' id='name' name='name' value={formData.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='email'>Email :</label>
            <input type='email' placeholder='Enter your email' className='' id='email' name='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='password'>Password :</label>
            <input type='password' placeholder='Enter your password' className='' id='password' name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='confirm-password'>Password :</label>
            <input type='text' placeholder='Confirm password' className='' id='confirm-password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/>
        </div>
    </div>
  )
}

export default CommonFields