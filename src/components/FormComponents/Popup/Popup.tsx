import React from 'react';
import { RxCross2 as CrossIcon } from "react-icons/rx";

interface PopupProps {
    errors: { [key: string]: string };
    setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ errors, setPopup }) => {

    return (
        <div className='absolute top-[10%] left-[10%]'>
            <div className='flex flex-row items-center gap-2 text-white bg-red-500 px-[15px] py-[10px]'>
                <CrossIcon className='cursor-pointer p-1 text-[25px] hover:bg-white hover:text-red-500 rounded-[50%]' onClick={() => setPopup(false)} />
                <p>Missing fields:</p>
                <ul className=' flex flex-row items-center gap-2'>{
                    Object.keys(errors).map((key) => (
                        <p key={key}>{errors[key]}</p>

                    ))
                }</ul>
            </div>
        </div>
    );
};

export default Popup;
