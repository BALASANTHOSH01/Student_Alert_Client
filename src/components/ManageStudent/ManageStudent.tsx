import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {CreationForm} from "./index.ts";
import { RootState } from "../../app/store.ts";
import { useAppDispatch } from "../../features/index.ts";
import { setFormFor } from "../../features/formCreation/formCreation.ts";
import StudentCard from "./StudentCard.tsx";
import {motion} from "framer-motion";

// Icons
import { CiFilter as FilterIcon } from "react-icons/ci";

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
    <div className="px-[2%] py-[2%] relative"> 

    {/** Filter Option */}
    <motion.div whileTap={{scale:0.7}} className=" flex flex-row items-center gap-1 rounded-[25px] w-[100px] px-[10px] py-[7px] absolute right-[5%] top-[5%] bg-white text-center justify-center cursor-pointer">
      <h1>filter</h1>
      <FilterIcon/>
    </motion.div>

      {
        showStudentForm && <CreationForm closeForm={closeForm} />
      }

      <div className=" mt-[6%]">
      <StudentCard/>
      </div>

    </div>
  )
}

export default ManageStudent