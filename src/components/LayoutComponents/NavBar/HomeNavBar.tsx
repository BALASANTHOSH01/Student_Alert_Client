import React from 'react'
import { FaArrowRightLong as RigthArrow } from "react-icons/fa6";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const HomeNavBar = () => {
    return (
        <div>
            <div className='text-xl flex items-center'>
                <div className=' flex flex-row items-center justify-start gap-1 flex-[1.5] ml-[5%]'>
                    <motion.p whileTap={{scale:0.6}} className=' py-[21px] px-[17px] w-[30%] text-center hover:bg-[--primary-purpel] hover:text-white cursor-pointer'>Products</motion.p>
                    <motion.p whileTap={{scale:0.6}} className=' py-[21px] px-[17px] w-[30%] text-center hover:bg-[--primary-purpel] hover:text-white cursor-pointer'>About</motion.p>
                    <motion.p whileTap={{scale:0.6}} className=' py-[21px] px-[17px] w-[30%] text-center hover:bg-[--primary-purpel] hover:text-white cursor-pointer'>Blog</motion.p>
                </div>
                <div className=' flex flex-row items-center flex-1 justify-end'>
                   
                    <Link to={"/auth/login"} className=' py-[21px] px-[17px]  text-center hover:bg-[--primary-purpel] hover:text-white w-[35%] cursor-pointer '>
                    <motion.p whileTap={{scale:0.6}} >
                    Login
                    </motion.p>
                    </Link>
                    
                    <Link to={"/auth/register"} className='py-[21px] px-[17px] w-[40%] text-[--third-color] bg-[--primary-purpel] hover:bg-transparent hover:text-[--primary-purpel] hover:border hover:border-[--primary-purpel] hover:py-[20px] hover:ease-out hover:duration-500 cursor-pointer '>
                    <motion.div whileTap={{scale:0.6}} className='flex flex-row items-center gap-3 text-center justify-center '>
                        <p>Get start</p>
                        <RigthArrow />
                    </motion.div>
                    </Link>
                </div>
            </div>
            <hr className=' h-[1px] bg-gray-200' />
        </div>
    )
}

export default HomeNavBar;