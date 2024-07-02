import {FormInput,Button} from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import { RxCross2 as CrossIcon } from "react-icons/rx";

interface StaffCreationFormProps{
  closeForm:()=>void;
}

const StaffCreationForm:React.Fc<StaffCreationFormProps> = ({closeForm}) => {
  return (
    <div className=" flex flex-row items-start justify-center mt-[4%] bg-white mx-auto w-[800px] py-[2%] relative">
        <div className=" absolute right-[3%] top-[5%] p-1 rounded-[50%] text-[22px] hover:bg-gray-200 hover:text-red-500 cursor-pointer " onClick={closeForm}>
            <CrossIcon/>
        </div>
        <div className=' px-[1%] py-[1%] w-[350px] text-center '>
            <FormInput type="text" placeholder="Enter Name" name="Name"/>
            <FormInput type="email" placeholder="Enter Email" name="Email"/>
            <FormInput type="text" placeholder="PhoneNumber" name="PhoneNumber"/>
            <FormInput type="text" placeholder="Department Name" name="Department"/>
            <FormInput type="text" placeholder="Institute Name" name="Institute"/>
        </div>
        <div className=' px-[1%] py-[1%] w-[350px] flex flex-col '>
            <FormInput type="text" placeholder="Enter Name" name="Name"/>
            <FormInput type="email" placeholder="Enter Email" name="Email"/>

            <div className=" mt-[5%]">
            <Button text="Create Staff" icon={<AddIcon/>} className="w-[95%]"/>
            </div>
        </div>
    </div>
  )
}

export default StaffCreationForm;