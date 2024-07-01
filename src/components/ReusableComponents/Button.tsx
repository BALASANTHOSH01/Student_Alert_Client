import React from "react";
import {motion} from "framer-motion";

interface ButtonTypes{
    text:string;
    icon:React.ReactNode;
    width:string
}

const Button:React.FC<ButtonTypes> = ({text,icon,width}) => {
  return (
        <motion.div whileTap={{scale:0.8}} className={`${width} flex flex-row items-center justify-center gap-2 px-[12px] py-[9px] text-white bg-[--primary-purpel] font-semibold cursor-pointer`}>
            {icon}
            <p>{text}</p>
        </motion.div>
  )
}

export default Button