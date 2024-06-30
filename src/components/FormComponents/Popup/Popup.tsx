import React from 'react';
import { RxCross2 as CrossIcon } from "react-icons/rx";

interface PopupProps {
    errors: { [key: string]: string };
    setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ errors, setPopup }) => {

    return (
        <div className='absolute top-[9%] left-[33%]'>
            <div className='flex flex-row items-center gap-2 text-white bg-red-500 px-[15px] py-[10px]'>
                <CrossIcon className='cursor-pointer' onClick={() => setPopup(false)} />
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
