import { useSelector } from "react-redux";
import { DashboardSideBarElement } from "./index.ts";
import { PiStudentFill as StudentIcon } from "react-icons/pi";
import { RootState } from "../../app/store.ts";

const DashboardSideBar = () => {

    const user = useSelector((state: RootState) => state.user);

    return (
        <div>
            <div className=' fixed top-0 left-0 h-full w-[20%] text-center z-50 bg-white'>

                {/**Logo */}
                <p className=" text-[30px] py-[17px]">CM</p>

                <div className=" my-[5%]">

                    {
                        user.type === "institute" && (
                            <>

                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage student" link={"/dashboard/manage-student"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage staff" link={"/dashboard/manage-staff"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage attendance" link={"/dashboard/manage-attendance"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Notification" link={"/dashboard/notifications"} />
                            </>
                        )
                    }

                    {
                        user.type === "staff" && (
                            <>
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage student" link={"/dashboard/manage-student"} />
                                <DashboardSideBarElement Icon={<StudentIcon />} title="Manage attendance" link={"/dashboard/manage-attendance"} />
                            </>
                        )
                    }

                    {
                        user.type === "student" && (
                            <>
                            </>
                        )
                    }

                    <DashboardSideBarElement Icon={<StudentIcon />} title="Account" link={"/dashboard/account"} />
                    {/* <DashboardSideBarElement Icon={<StudentIcon />} title="Setting" link={"/dashboard/setting"} /> */}
                </div>

            </div>
        </div>
    )
}

export default DashboardSideBar;