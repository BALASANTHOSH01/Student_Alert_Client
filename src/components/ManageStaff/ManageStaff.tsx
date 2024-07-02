import { useEffect, useState } from "react";
import {StaffCreationForm} from "./index.ts";
import { RootState } from "../../app/store.ts";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../features/index.ts";
import { setFormFor } from "../../features/formCreation/formCreation.ts";

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
    <div>
      

      {
        showStaffForm &&
        <>
          <StaffCreationForm closeForm={closeForm} />
        </>
      }

    </div>
  )
}

export default ManageStaff