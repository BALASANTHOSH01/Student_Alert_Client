import React from 'react'

interface DynamicFieldsProps  {
    userType:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement >)=>void;
    formData:{
        rollno:string;
        phoneNumber:string;
        year:number;
        dept:string;
        college_code:string;
        institute:string;
    };
}

const DynamicFields:React.FC<DynamicFieldsProps> = ({userType,handleChange,formData}) => {
  return (
    <div>
        {
            // student rollno
            userType === "student" && (
                <div>
                    <label htmlFor='rollno'>Rollno :</label>
                    <input type='text' placeholder='Enter your rollno' id='rollno' name='rollno' className='' value={formData.rollno} onChange={handleChange}/>
                </div>
            ) 
        }
        {
            // student or staff phoneNumber
            (userType === "student" || userType === "staff") && (
                <div>
                    <label htmlFor='mobile'>Mobile :</label>
                    <input type='text' placeholder='Enter your mobile' id='mobile' name='phoneNumber' className='' value={formData.phoneNumber} onChange={handleChange}/>
                </div>
            ) 
        }
        {
            // student year
            userType === "student" && (
                <div>
                    <label htmlFor='year'>Year :</label>
                    <input type='text' placeholder='Enter your year' id='year' name='year' className='' value={formData.year} onChange={handleChange}/>
                </div>
            ) 
        }
        {
            // department
            userType === "student" && (
                <div>
                    <label htmlFor='department'>Department :</label>
                    {/* <select name='department' value={formData.dept} onChange={handleChange}>
                        <option value="" disabled>
                            Choose your department
                        </option>
                        <option value="mech">MECH</option>
                        <option value="eee">EEE</option>
                        <option value="it" >IT</option>
                        <option value="cse" >CSE</option>
                        <option value="ai&ds" >AI&DS</option>
                        <option value="ece" >ECE</option>
                    </select> */}
                    <input type='text' placeholder='Your department' id='department' name='department' className='' value={formData.dept} onChange={handleChange}/>
                </div>
            ) 
        }
        {
            // college code
            userType === "institute" && (
                <div>
                    <label htmlFor='college-code'>College_Code :</label>
                    <input type='text' placeholder='College code' id='college-code' name='college_code' className='' value={formData.college_code} onChange={handleChange}/>
                </div>
            ) 
        }
        {
            // institute
            (userType === "student" || userType === "staff") && (
                <div>
                    <label>Institute :</label>
                    <input type='text' placeholder='Institute name' id='rollno' name='institute' className='' value={formData.institute} onChange={handleChange}/>
                </div>
            ) 
        }
    </div>
  )
}

export default DynamicFields