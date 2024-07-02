import { Outlet } from 'react-router-dom';
import { DashboardSideBar,DashboardNavBar } from '../components/Dashboard/index.ts';

const DashboardScreen = () => {
  return (
    <div>
      <div>
        <div className=" flex flex-row items-center">
            {/**Dashboard SideBar */}
            <DashboardSideBar/>
            <div className=' flex flex-col'>
              <DashboardNavBar/>
              <div className='w-[80%] absolute right-0 bg-gray-300 top-[10vh] h-screen'>
                <Outlet/>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DashboardScreen;