import { Link } from "react-router-dom";
import StaffDetails from "./StaffDetails";

const StaffCard = () => {

    return (
        <div className=' grid grid-cols-3 gap-4'>
            {
                StaffDetails.map((staff)=>(
                    <Link to={`/dashboard/staff/${staff.dept}/${staff.name}`} key={staff.id} className='group bg-white cursor-pointer hover:bg-gray-100 flex flex-row relative'>

                            <div className=' px-[10px] py-[5px]'>
                                <div className=' flex flex-row items-center gap-2'>
                                    <p>Name :</p>
                                    <p>{staff.name}</p>
                                </div>

                                <div className=' flex flex-row items-center gap-2' >
                                    <p>Email :</p>
                                    <p>{staff.email}</p>
                                </div>

                                <div className=' flex flex-row items-center gap-2' >
                                    <p>Department :</p>
                                    <p>{staff.dept}</p>
                                </div>
                            </div>

                            <div className=' bg-white w-[60px] h-full group-hover:bg-[--primary-purpel] absolute right-0 duration-300'>

                            </div>
                        </Link>
                ))
            }
        </div>
    )
}

export default StaffCard;