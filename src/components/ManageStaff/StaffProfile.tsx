import React, { useEffect, useState } from 'react';
import { ProfileField } from '../ReusableComponents/index.ts';
import { Staff } from '../../features/user/userType.ts';
import { useParams } from 'react-router-dom';
import StaffDetails from './StaffDetails.ts';

const StaffProfile: React.FC = () => {
  // get name & department from the parameter
  const { name, dept } = useParams<{ name: string, dept: string }>();
  const [staffData, setStaffData] = useState<Staff | string>(""); // Initialize with empty string or undefined
  const [isEditStaff, setIsEditStaff] = useState<boolean>(false);

  useEffect(() => {
    const staffExist = StaffDetails.find((staff) => staff.dept === dept && staff.name === name);
    if (!staffExist) {
      setStaffData("No Staff Found by this name and department");
    } else {
      setStaffData(staffExist);
    }
  }, [name, dept]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStaffData((prev) => ({
      ...(prev as Staff),
      [name]: value
    }));
  };

  return (
    <div>
      {
        typeof staffData === "string" ? (
          <div>{staffData}</div>
        ) : (
          <div>
            <ProfileField label="Name" data={(staffData as Staff)?.name || ""} isEdit={isEditStaff} handleChange={handleChange} />
            <ProfileField label="Email" data={(staffData as Staff)?.email || ""} isEdit={isEditStaff} handleChange={handleChange} />
            <ProfileField label="Department" data={(staffData as Staff)?.dept || ""} isEdit={isEditStaff} handleChange={handleChange} />
            <ProfileField label="Year" data={(staffData as Staff)?.year || ""} isEdit={isEditStaff} handleChange={handleChange} />

            {/* Add other ProfileField components as needed */}
            <button onClick={() => setIsEditStaff(!isEditStaff)} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
              {isEditStaff ? "Save Changes" : "Edit Details"}
            </button>
            
          </div>
        )
      }
    </div>
  );
}

export default StaffProfile;
