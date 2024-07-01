import { useSelector } from "react-redux";
import { DashboardSideBarElement } from "./index.ts";
import { PiStudentFill as StudentIcon } from "react-icons/pi";
import { RootState } from "../../app/store.ts";

const DashboardSideBar = () => {

    const user = useSelector((state: RootState) => state.user);

    return (
        <div>
            <div className=' fixed top-0 left-0 h-full w-[20%] border border-gray-400 text-center'>

                {/**Logo */}
                <p className=" text-[30px] py-[17px]">CM</p>

                <div className=" my-[5%]">

                    {
                        user.type === "institute" && (
                            <>

                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage student" link={"manage-student"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage staff" link={"manage-staff"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage attendance" link={"manage-attendance"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Notification" link={"notifications"} />
                            </>
                        )
                    }

                    {
                        user.type === "staff" && (
                            <>
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage student" link={"manage-student"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage attendance" link={"manage-attendance"} />
                            </>
                        )
                    }

                    {
                        user.type === "student" && (
                            <>

                                <DashboardSideBarElement Icon={<StudentIcon />} title="My Details" link={"my-details"} />
                            </>
                        )
                    }

                    <DashboardSideBarElement Icon={<StudentIcon />} title="Account" link={"account"} />
                    <DashboardSideBarElement Icon={<StudentIcon />} title="Setting" link={"setting"} />
                </div>

            </div>
        </div>
    )
}

export default DashboardSideBar;