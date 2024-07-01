import { useState } from "react";
import { Button } from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import {CreationForm} from "./index.ts";

const ManageStudent = () => {
  const [createStudent,setCreateStudent]=useState<boolean>(false);

  return (
    <div className=""> 
      <div className="top-[5%] absolute right-[4%]" onClick={()=>setCreateStudent((prev)=>!prev)}>
        <Button text="Create" icon={<AddIcon/>} width="w-[150px]" /> 
      </div>

      {
        createStudent && <CreationForm/>
      }

    </div>
  )
}

export default ManageStudent