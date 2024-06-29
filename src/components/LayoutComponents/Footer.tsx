import React from 'react'
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaGooglePlay as GooglePlayIcon } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white border'>

            {/* <div className=' flex flex-col gap-1 w-[50%] mx-auto text-center'>
                <label htmlFor='email' className=' font-semibold my-[2%]'>Subscribe to Newsletter :</label>
                <div className=' flex flex-row items-center gap-1 justify-center'>
                    <input type='email' placeholder='Enter your email' id='email' name='email' className='border-[2px] outline-none w-[250px] px-[17px] py-[8px] rounded-[10px]' />
                    <button className=' px-[20px] py-[8px] rounded-[10px] bg-[--primary-purpel] text-white'>Subscribe</button>
                </div>
            </div> */}

            <div className=' flex flex-row items-center text-lg justify-around w-[50%] mx-auto mt-[3%]'>
                <p className=' cursor-pointer hover:text-[--primary-purpel]'>Products</p>
                <p className=' cursor-pointer hover:text-[--primary-purpel]'>About</p>
                <p className=' cursor-pointer hover:text-[--primary-purpel]'>Blog</p>
            </div>

            <div className='w-[50%] mx-auto text-center mt-[3%]'>
                <p className=' font-semibold text-lg'>Stay in touch</p>
                <div className=' flex flex-row items-start text-2xl gap-5 text-gray-400 justify-center mt-[3%]'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                </div>
            </div>

            <div className=' flex flex-row items-center gap-1 text-gray-400 text-center justify-center my-[2%]'>
                ©
                <p>All rights are reserved</p>
            </div>

        </div>
    )
}

export default Footer