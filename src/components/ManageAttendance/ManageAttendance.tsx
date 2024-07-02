import { useEffect, useState } from 'react';
import { RootState } from '../../app/store.ts';
import { useSelector } from 'react-redux'
import AttendanceFormCreation from './AttendanceFormCreation';
import { useAppDispatch } from '../../features/index.ts';
import { setFormFor } from '../../features/formCreation/formCreation.ts';

const ManageAttendance = () => {
  const formFor = useSelector((state: RootState) => state.formCreation.formFor);
  const [showAttendanceCreationForm, setshowAttendanceCreationForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formFor === "attendance") {
      setshowAttendanceCreationForm(true);
    } else {
      setshowAttendanceCreationForm(false);
    }
  }, [formFor]);

  const closeForm = () => {
    setshowAttendanceCreationForm(false);
    dispatch(setFormFor(null)); // Reset formFor state in Redux
  };

  return (
    <div>
      <div>
        {
          showAttendanceCreationForm && <AttendanceFormCreation closeForm={closeForm}/>
        }
      </div>
    </div>
  )
}

export default ManageAttendance