import { IoSearchCircleSharp as SearchIcon } from "react-icons/io5";
import { IoNotificationsCircleSharp as NotificationIcon } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "../ReusableComponents/index.ts";
import { RiAddLargeLine as AddIcon } from "react-icons/ri";
import { useLocation } from "react-router-dom";

//redux configuration
import { useAppDispatch } from "../../features/index.ts";
import { setFormFor } from "../../features/formCreation/formCreation.ts";


const DashboardNavBar = () => {

  const location = useLocation();
  const dispatch = useAppDispatch();

  const showCreationForm = () => {
    if (location.pathname === "/dashboard/manage-student") {
      dispatch(setFormFor("student"));
    } else if (location.pathname === "/dashboard/manage-staff") {
      dispatch(setFormFor("staff"));
    } else if (location.pathname === "/dashboard/manage-attendance") {
      dispatch(setFormFor("attendance"));
    }  else {
      dispatch(setFormFor(null)); // Reset formFor state
    }
  };

  

  return (
    <div>
      <div className='w-screen overflow-hidden fixed top-0 left-0 flex flex-row items-center justify-end gap-10 px-[5%] py-[1%] z-30 h-[10vh] backdrop-blur-lg bg-gray-300/5'>

        {/** Search bar */}
        <div className=" w-[300px] rounded-[25px] bg-white border px-[15px] py-[5px] flex flex-row items-center ">
          <input type='text' className='w-[95%] bg-white outline-none border-none' placeholder='search here' />
          <motion.div whileTap={{ scale: 0.7 }}>
            <SearchIcon className=" text-[30px] cursor-pointer text-[--primary-purpel]" />
          </motion.div>
        </div>

        {/** Notification */}
        <motion.div whileTap={{ scale: 0.7 }} className=" text-[30px] cursor-pointer text-[--primary-purpel] ">
          <NotificationIcon />
        </motion.div>

        <div onClick={showCreationForm}>
          <Button text="Create" icon={<AddIcon />} className={`w-[140px] rounded-[25px] py-[5px] px-[10px]`}/>
        </div>

      </div>
    </div>
  )
}

export default DashboardNavBar;