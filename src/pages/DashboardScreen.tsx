import { Outlet } from 'react-router-dom';
import { DashboardSideBar } from '../components/Dashboard/index.ts';

const DashboardScreen = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-row items-center relative">
            {/**Dashboard SideBar */}
            <DashboardSideBar/>
            <div className=' w-[80%] absolute right-0 top-0'>
                <Outlet/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DashboardScreen;