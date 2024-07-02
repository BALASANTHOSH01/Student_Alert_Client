import React, { useEffect, useState } from 'react';
import { ProfileField } from '../ReusableComponents/index.ts';
import { Staff } from '../../features/user/userType.ts';
import { useParams } from 'react-router-dom';
import StaffDetails from './StaffDetails.ts';
import { motion } from "framer-motion";
import { FiEdit as EditIcon } from 'react-icons/fi';

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

            <motion.div
              whileTap={{ scale: 0.6 }}
              className='absolute right-[5%] top-[5%] flex flex-row gap-2 items-center px-[12px] py-[8px] bg-gray-100 cursor-pointer hover:bg-gray-200 duration-200'
              onClick={() => setIsEditStaff(!isEditStaff)}
            >
              <p>{isEditStaff ? "Save Details" : "Edit Details"}</p>
            <EditIcon className='text-[--primary-purpel]' />
          </motion.div>

          <div className=' w-[500px] bg-white mx-auto my-[5%]  py-[3%] text-[20px] px-[1%] flex flex-col justify-center items-center gap-5'>
          <ProfileField label="Name" data={(staffData as Staff)?.name || ""} isEdit={isEditStaff} handleChange={handleChange} />
              <ProfileField label="Email" data={(staffData as Staff)?.email || ""} isEdit={isEditStaff} handleChange={handleChange} />
              <ProfileField label="Department" data={(staffData as Staff)?.dept || ""} isEdit={isEditStaff} handleChange={handleChange} />
              <ProfileField label="Year" data={(staffData as Staff)?.year || 0} isEdit={isEditStaff} handleChange={handleChange} /> 
          </div>

          </div>
        )
      }
    </div>
  );
}

export default StaffProfile;
