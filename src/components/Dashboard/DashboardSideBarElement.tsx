import React from 'react'
import { Link, useLocation } from 'react-router-dom';

interface DashboardSideBarElementType {
    title:string;
    Icon:React.ReactNode;
    link:string;
}

const DashboardSideBarElement:React.FC<DashboardSideBarElementType> = ({title,Icon,link}) => {
  const location = useLocation();

  return (
    <Link to={link} className={` px-[17px] py-[20px] font-semibold text-[20px] hover:bg-gray-200 cursor-pointer flex flex-row items-center gap-2 ${location.pathname === link && `bg-gray-200`}`}>
        {Icon}
        <h1>{title}</h1>
    </Link>
  )
}

export default DashboardSideBarElement