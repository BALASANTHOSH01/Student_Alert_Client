import { useEffect, useState } from "react";
import { Button } from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import {CreationForm} from "./index.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import { useAppDispatch } from "../../features/index.ts";
import { setFormFor } from "../../features/formCreation/formCreation.ts";

const ManageStudent = () => {
 const formFor = useSelector((state:RootState)=>state.formCreation.formFor);
 const [showStudentForm,setShowStudentForm]=useState<boolean>(false);
const dispatch = useAppDispatch();

 useEffect(()=>{
  if(formFor === "student"){
    setShowStudentForm(true);
  } else {
    setShowStudentForm(false);
  }
 },[formFor]);

 const closeForm = () => {
  setShowStudentForm(false);
  dispatch(setFormFor(null)); // Reset formFor state in Redux
};

  return (
    <div className=""> 

      {
        showStudentForm && <CreationForm closeForm={closeForm} />
      }

    </div>
  )
}

export default ManageStudent