import React, { useState } from "react";
import { FormInput, Button } from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { Student } from "../../features/user/userType.ts";

interface CreationFormProps {
  closeForm: () => void;
}

const CreationForm: React.FC<CreationFormProps> = ({ closeForm }) => {
  // New student data handleing state
  const [newStudentData, setNewStudentData] = useState<Student>({
    id:"",
    name: "",
    rollno: "",
    email: "",
    department: "",
    year: 0,
    section: "",
    totalPresent: 0,
    totalAbsent: 0,
    phoneNumber: "",
    parentNumber: "",
    batch: "",
    institute: "",
  });

  
  // handle OnChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudentData((prev) => ({
      ...(prev as Student),
      [name]: value,
    }));
  };

  console.log("New Student data nme:" + newStudentData.name);

  return (
    <div className=" px-[2%] py-[2%] w-[600px] text-center fixed top-[20%] left-[40%] bg-white mx-auto z-50">
      <div
        className=" absolute right-[1%] top-[1%] p-2  text-[22px] bg-red-500 text-white cursor-pointer "
        onClick={closeForm}
      >
        <CrossIcon />
      </div>

      <p>Student Details</p>

      <FormInput
        type="text"
        placeholder="Student Name"
        name="name"
        handleChange={handleChange}
        value={newStudentData.name}
      />
      <FormInput
        type="email"
        placeholder="Student Email"
        name="email"
        handleChange={handleChange}
        value={newStudentData.email}
      />
      <FormInput
        type="text"
        placeholder="Student Department"
        name="department"
        handleChange={handleChange}
        value={newStudentData.department}
      />
      <FormInput
        type="text"
        placeholder="Student PhoneNumber"
        name="phoneNumber"
        handleChange={handleChange}
        value={newStudentData.phoneNumber}
      />
      <Button text="Create" icon={<AddIcon />} className="w-[95%]" />
    </div>
  );
};

export default CreationForm;
