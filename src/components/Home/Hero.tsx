import { HeroImage } from "../../assets/index.ts";
import { FaAsterisk as AsteriskIcon } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className=" flex flex-row items-center px-[5%] mx-auto">
        <div className=" text-lg flex-[1.5]">

          <div className=" text-[70px] flex flex-col gap-12 font-bold my-[4%]">
            <p >Get start with <br /></p>
            <p>
              <span className="text-[--primary-purpel]">Class Manger</span> today
            </p>
          </div>

          <p className=" my-[6%]">Stop using the boring paper & pen attendance records <br />and <span className="text-[--primary-purpel] font-medium">use our digital attendance manager</span></p>

          <div className=" px-[13px] py-[13px] text-white w-[150px] text-center bg-[--primary-purpel] font-semibold cursor-pointer hover:bg-transparent hover:text-[--primary-purpel] hover:border outline  hover:border-[--primary-purpel] hover:duration-300">
            Get Started
          </div>

        </div>

        <div className="flex-1">

          <img src={HeroImage} alt="hero" className=" w-[450px] h-[450px]" />

        </div>
      </div>
    </div>
  )
}

export default Hero