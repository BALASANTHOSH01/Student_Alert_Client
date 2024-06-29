import React from 'react';

interface SelectUserProps{
    handleUserType:(type:string) => void;
}

const SelectUser:React.FC<SelectUserProps> = ({handleUserType}) => {
  return (
    <div>
        <button type="button" onClick={()=>handleUserType("institute")}>Insitution</button>
        <button type="button" onClick={()=>handleUserType("staff")}>Staff</button>
        <button type="button" onClick={()=>handleUserType("student")}>Student</button>
    </div>
  )
}

export default SelectUser