import { Link } from "react-router-dom";
import AttendanceDetails from "./AttendanceDetails";

const AttendanceCard = () => {
    return (
        <div>
            <div className=" grid grid-cols-3 gap-5 px-[2%] py-[2%]">
                {
                    AttendanceDetails.map((attendance) => (
                        <Link to={`/dashboard/attendance/${attendance.rollno}`} key={attendance.student_id} className=" bg-white px-[2%] py-[2%] cursor-pointer hover:bg-gray-200">

                            <div className=" flex flex-row items-center gap-2">
                                <p>Rollno :</p>
                                <h1>{attendance.rollno}</h1>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                <p>Staff_ID:</p>
                                <h1>{attendance.staff_id}</h1>
                            </div>

                            <div className=" flex flex-row items-center gap-2">
                                <p>date :</p>
                                <h1>{attendance.date}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AttendanceCard;