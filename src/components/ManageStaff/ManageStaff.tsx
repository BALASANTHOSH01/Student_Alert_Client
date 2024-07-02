import { useEffect, useState } from "react";
import {StaffCreationForm} from "./index.ts";
import { RootState } from "../../app/store.ts";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../features/index.ts";
import { setFormFor } from "../../features/formCreation/formCreation.ts";
import StaffCard from "./StaffCard.tsx";

const ManageStaff = () => {
  const formFor = useSelector((state: RootState) => state.formCreation.formFor);
  const [showStaffForm, setShowStaffForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formFor === "staff") {
      setShowStaffForm(true);
    } else {
      setShowStaffForm(false);
    }
  }, [formFor]);

  const closeForm = () => {
    setShowStaffForm(false);
    dispatch(setFormFor(null)); // Reset formFor state in Redux
  };

  return (
    <div className="px-[2%] py-[2%] ">
      

      {
        showStaffForm &&
        <>
          <StaffCreationForm closeForm={closeForm} />
        </>
      }

     <div className=" mt-[5%]">
     <StaffCard/>
     </div>

    </div>
  )
}

export default ManageStaff